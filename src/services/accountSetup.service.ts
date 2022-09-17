import { loadAbort } from '@utilities/loadAbortAxios.utility';
import { Account } from '@models/account.model';
import axios from 'axios';

const DISCO_API = process.env.DISCO_API;

export const getAccounts = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Account>(
      `${DISCO_API}/account/?clientId=6d1ea72d-8173-4aa2-b0f4-7cd574c5d24c`,
      { signal: controller.signal },
    ),
    controller,
  };
};
