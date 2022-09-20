import React, { useState } from 'react';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { AccountOption } from '@models/account.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { getAccounts } from '@services/accountSetup.service';
import { accountOptionAdapter } from '@adapters/account.adapter';
import { useAsync } from '@hooks/useAsyncAxios';
import { modifyListAccounts, modifyAccount } from '@redux/states/account.state';
import { getAccountStorage } from '@utilities/localstorage.utility';
import './index.scss';

const App = () => {
  const storageAccount = getAccountStorage();
  const [accounts, setAccounts] = useState<AccountOption[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getAccounts());
  useAsync(
    getApiData,
    response => setAccounts(accountOptionAdapter(response)),
    () => {},
  );

  /* if (loading) return <div>Loading</div>; */

  store.dispatch(modifyListAccounts(accounts));
  if (storageAccount && accounts?.length > 0) {
    const findAccount = accounts?.find(
      value => value?.account?.id?.toString() === storageAccount,
    );
    if (findAccount) store.dispatch(modifyAccount(findAccount));
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
