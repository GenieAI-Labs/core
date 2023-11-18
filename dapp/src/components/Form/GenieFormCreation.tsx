import { useWeb3Modal } from '@web3modal/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { usePublicClient, useWalletClient } from 'wagmi';
import * as Yup from 'yup';
import TalentLayerContext from '../../context/talentLayer';
import { showErrorTransactionToast } from '../../utils/toast';
import SubmitButton from './SubmitButton';
import { useChainId } from '../../hooks/useChainId';

interface IFormValues {
  GenieName: string;
}

const validationSchema = Yup.object({
  GenieName: Yup.string().required('Please provide a Genie Name'),
  rating: Yup.string().required('rating is required'),
});

const initialValues: IFormValues = {
  GenieName: '',
};

function GenieFormCreation() {
  const chainId = useChainId();
  const { open: openConnectModal } = useWeb3Modal();
  const { user } = useContext(TalentLayerContext);
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && publicClient && walletClient) {
      try {
        setSubmitting(false);
        resetForm();
      } catch (error) {
        showErrorTransactionToast(error);
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
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-white'>
            <label className='block'>
              <span className='text-black'>Genie Name</span>
              <Field
                as='textarea'
                id='GenieName'
                name='GenieName'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
                rows={1}
              />
              <span className='text-red-500'>
                <ErrorMessage name='GenieName' />
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
