import { useWeb3Modal } from '@web3modal/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {useContext, useState} from 'react';
import { usePublicClient, useWalletClient } from 'wagmi';
import * as Yup from 'yup';
import TalentLayerContext from '../../context/talentLayer';
import { showErrorTransactionToast } from '../../utils/toast';
import SubmitButton from './SubmitButton';
import { useChainId } from '../../hooks/useChainId';
import FileDropper from "../FileDropper";

interface IFormValues {
  genieName: string;
  file: File | null;
}

const validationSchema = Yup.object({
  genieName: Yup.string().required('Please provide a Genie Name'),
  file: Yup.mixed().required('Please provide a file'),
});

const initialValues: IFormValues = {
  genieName: '',
  file: null,
};

function GenieFormCreation() {
  const chainId = useChainId();
  const { open: openConnectModal } = useWeb3Modal();
  const { user } = useContext(TalentLayerContext);
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });
  const [fileSelected, setFileSelected] = useState<File>();

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && publicClient && walletClient) {
      try {
        setSubmitting(true);
        //TODO DataProtector here
        resetForm();
        setFileSelected(undefined);
      } catch (error) {
        showErrorTransactionToast(error);
      } finally {
        setSubmitting(false);
      }
    } else {
      openConnectModal();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isSubmitting, errors }) => (
        <Form>
          {/* {Object.keys(errors).map(errorKey => (
            <div key={errorKey}>{errors[errorKey]}</div>
          ))} */}
          <div className='flex flex-col justify-center items-center border border-gray-700 rounded-xl p-6 bg-white'>
            <label className='block'>
              <span className='text-black'>Genie Name</span>
              <Field
                  as='textarea'
                  id="genieName"
                  name='genieName'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                  rows={1}
              />
              <span className='text-red-500'>
                <ErrorMessage name='genieName' />
              </span>
            </label>
            <label className='flex flex-col justify-center items-center'>
              <FileDropper setFileSelected={setFileSelected} fileSelected={fileSelected} />
              <Field type='hidden' id='file' name='file' />
              <span className='text-red-500'>
                <ErrorMessage name='file' />
              </span>
            </label>

            <SubmitButton isSubmitting={isSubmitting} label='Create my genie' />
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default GenieFormCreation;
