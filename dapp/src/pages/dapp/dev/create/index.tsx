import { useContext, useState } from 'react';
import WorldCoinButton from '../../../../components/worldcoin/WorldCoinButton';
import * as Yup from 'yup';
import { usePublicClient } from 'wagmi';
import TalentLayerContext from '../../../../context/talentLayer';
import { postToIPFS } from '../../../../utils/ipfs';
import { useChainId } from '../../../../hooks/useChainId';
import { useWalletClient } from 'wagmi';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import SubmitButton from '../../../../components/Form/SubmitButton';

interface IFormValues {
  content: string;
  rating: number;
}

const validationSchema = Yup.object({
  content: Yup.string().required('Please provide a content'),
  rating: Yup.string().required('rating is required'),
});

const initialValues: IFormValues = {
  content: '',
  rating: 10,
};

export default function Dev() {
  const chainId = useChainId();
  const { user } = useContext(TalentLayerContext);
  const publicClient = usePublicClient({ chainId });
  ``;
  const { data: walletClient } = useWalletClient({ chainId });
  const [isAuthenticated, setAuthenticated] = useState(false);

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && publicClient && walletClient) {
      const uri = await postToIPFS(
        JSON.stringify({
          content: values.content,
          rating: values.rating,
        }),
      );
    }
  };

  return (
    <>
      <div className='flex flex-col items-center '>
        <h1 className='font-semibold p-5 text-4xl'>Genie creation Form</h1>
        <div className='w-1/2 mx-auto'>
          {isAuthenticated ? (
            <Formik
              initialValues={initialValues}
              enableReinitialize={true}
              onSubmit={onSubmit}
              validationSchema={validationSchema}>
              {({ isSubmitting, errors }) => (
                <Form>
                  <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-white'>
                    <label className='block'>
                      <span className='text-black'>Genie Name</span>
                      <Field
                        as='textarea'
                        id='Genie Name'
                        name='Genie Name'
                        className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                        placeholder=''
                        rows={1}
                      />
                      <span className='text-red-500'>
                        <ErrorMessage name='Genie Name' />
                      </span>
                    </label>

                    <label className='block'>
                      <span className='text-black'>Price</span>
                      <Field
                        type='textarea'
                        id='Address'
                        name='rating'
                        min={0}
                        max={5}
                        className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                      />
                      <span className='text-red-500'>
                        <ErrorMessage name='Address' />
                      </span>
                    </label>
                    <label className='block'>
                      <span className='text-black'>Adress</span>
                      <Field
                        as='textarea'
                        id='Genie Name'
                        name='Genie Name'
                        className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                        placeholder=''
                        rows={1}
                      />
                      <span className='text-red-500'>
                        <ErrorMessage name='Genie Name' />
                      </span>
                    </label>
                    <label className='block'>
                      <span className='text-black'>Description</span>
                      <Field
                        as='textarea'
                        id='Genie Name'
                        name='Genie Name'
                        className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                        placeholder=''
                        rows={1}
                      />
                      <span className='text-red-500'>
                        <ErrorMessage name='Genie Name' />
                      </span>
                    </label>

                    <SubmitButton isSubmitting={isSubmitting} label='Create your genie' />
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <div className='flex flex-col items-center font-medium mt-20 p-10 bg-gray-400'>
              <h1 className='mb-10'>Please login with WorldCoin to submit a new Genie</h1>
              <WorldCoinButton onAuthenticated={setAuthenticated} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
