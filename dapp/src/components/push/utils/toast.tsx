import { toast } from 'react-toastify';
import PushChannelSubscriptionToast from "../PushChannelSubscriptionToast";

export const createPushToast = async (): Promise<void> => {
  toast(<PushChannelSubscriptionToast />, { autoClose: false, closeOnClick: false });
  return;
};
