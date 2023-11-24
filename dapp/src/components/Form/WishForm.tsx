import { AnyLink } from '@web3-storage/upload-client/dist/src/types';
import { useWeb3Modal } from '@web3modal/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import * as Yup from 'yup';
import { getConfig } from '../../config';
import TalentLayerContext from '../../context/talentLayer';
import MagicLamp from '../../contracts/ABI/MagicLamp.json';
import TalentLayerID from '../../contracts/ABI/TalentLayerID.json';
import { useChainId } from '../../hooks/useChainId';
import useFees from '../../hooks/useFees';
import useGenieById from '../../hooks/useGenieById';
import { calculateFees } from '../../utils/fees';
import { uploadFile } from '../../utils/fileCoin';
import { showErrorTransactionToast } from '../../utils/toast';
import FileDropper from '../FileDropper';
import { toast } from 'react-toastify';

interface IFormValues {
  country: string;
  file: File | null;
}

const validationSchema = Yup.object({
  country: Yup.string().required('Please provide a country'),
  file: Yup.mixed().required('Please provide a file'),
});

const initialValues: IFormValues = {
  country: '',
  file: null,
};

function WishForm({
  activeGenieId,
  closeModal,
}: {
  activeGenieId: string;
  closeModal: () => void;
}) {
  const MAGIC_LAMP_ADDRESS = '0x810cFb99716a29Ada26d02e7440D7952FB8f9835';
  const chainId = useChainId();
  const config = getConfig(chainId);
  const { user } = useContext(TalentLayerContext);
  const { data: walletClient } = useWalletClient({ chainId });
  const [fileSelected, setFileSelected] = useState<File>();
  const genie = useGenieById(activeGenieId);
  const { originValidatedProposalFeeRate, originServiceFeeRate, protocolEscrowFeeRate } = useFees(
    '1',
    '1',
  );

  console.log({ user, genie });

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    if (user && walletClient && user.address && genie) {
      try {
        console.log('submit');
        setSubmitting(true);
        const isDelegate = user.delegates?.includes(MAGIC_LAMP_ADDRESS.toLowerCase());
        console.log('isDelegate', isDelegate);

        //TODO: encrypt file before
        // const filecoinEmail = process.env.NEXT_PUBLIC_FILECOIN_EMAIL;
        // const filecoinSpaceKey = process.env.NEXT_PUBLIC_FILECOIN_SPACE_KEY;

        // console.log('before upload');
        // const fileHash: AnyLink = await uploadFile(
        //   filecoinEmail as `${string}@${string}`,
        //   filecoinSpaceKey as `did:${string}:${string}`,
        //   values.file as File,
        // );
        // // const fileHash = uploadDataFilecoin('erhbgearihaerf');
        // console.log('fileHash', fileHash.toString());

        //TODO: switch to bellecour
        // const provider = await account.connector?.getProvider();
        // const dataProtector = new IExecDataProtector(provider);
        // const protectedData = await dataProtector.protectData({
        //   data: {
        //     encryptionKey: '0xtoto',
        //     country: values.country,
        //     file: fileHash.toString(),
        //   },
        // });
        // const listGrantedAccess = await dataProtector.fetchGrantedAccess({
        //   protectedData: protectedData.address,
        //   authorizedApp: process.env.NEXT_PUBLIC_IEXEC_APP_ADDRESS as string,
        //   authorizedUser: process.env.NEXT_PUBLIC_IEXEC_APP_PLATFORM_PUBLIC_KEY as string,
        // });

        // if (listGrantedAccess.length == 0) {
        //   const grantedAccess = await dataProtector.grantAccess({
        //     protectedData: protectedData.address,
        //     authorizedApp: process.env.NEXT_PUBLIC_IEXEC_APP_ADDRESS as string,
        //     authorizedUser: process.env.NEXT_PUBLIC_IEXEC_APP_PLATFORM_PUBLIC_KEY as string,
        //     numberOfAccess: 99999999999,
        //   });
        //   console.log({ grantedAccess });
        // }

        // if (!isDelegate) {
        //   await walletClient.writeContract({
        //     address: config.contracts.talentLayerId,
        //     abi: TalentLayerID.abi,
        //     functionName: 'addDelegate',
        //     account: user.address as `0x${string}`,
        //     args: [user.id, MAGIC_LAMP_ADDRESS],
        //   });
        // }

        const price = calculateFees(
          BigInt(genie.price),
          originValidatedProposalFeeRate,
          originServiceFeeRate,
          protocolEscrowFeeRate,
        );

        // await walletClient.writeContract({
        //   address: MAGIC_LAMP_ADDRESS,
        //   abi: MagicLamp.abi,
        //   functionName: 'makeWish',
        //   account: user.address as `0x${string}`,
        //   args: [user.id, activeGenieId],
        //   value: price,
        // });
        resetForm();
        setFileSelected(undefined);
        closeModal();
        toast.success(
          `Your data has been protected, you can now ask your Genie to analyse your document.`,
          {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          },
        );
      } catch (error) {
        showErrorTransactionToast(error);
      } finally {
        setSubmitting(false);
      }
    } else {
      console.error('error missing user or walletClient');
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
          <div className='items-center border border-gray-200 rounded-xl p-6 bg-white'>
            <label className='block'>
              <span className='text-sm text-gray-500 font-bold text-center'>Country</span>
              <Field
                as='textarea'
                id='country'
                name='country'
                className='mt-1 mb-2 block w-full rounded-xl border border-gray-200 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
                rows={1}
              />
              <span className='text-red-500'>
                <ErrorMessage name='country' />
              </span>
            </label>
            <label className='items-center mt-2'>
              <FileDropper setFileSelected={setFileSelected} fileSelected={fileSelected} />
              <Field type='hidden' id='file' name='file' />
              <span className='text-red-500'>
                <ErrorMessage name='file' />
              </span>
            </label>

            <button
              type='submit'
              className='w-full mt-2 px-5 py-2 rounded-xl bg-redpraha text-black'>
              {isSubmitting ? 'Submitting...' : 'Encrypt and send'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default WishForm;
