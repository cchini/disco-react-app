import React, { useState } from 'react';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { Account } from '@models/account.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { getAccounts } from '@services/accountSetup.service';
import { useAsync } from '@hooks/useAsyncAxios';
import { modifyAccounts, modifyAccount } from '@redux/states/account.state';
import { getAccountStorage } from '@utilities/localstorage.utility';
import './index.scss';

const App = () => {
  const storageAccount = getAccountStorage();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getAccounts());
  useAsync(
    getApiData,
    response => setAccounts(response?.accounts),
    () => {},
  );

  if (loading) return <div>Loading</div>;

  store.dispatch(modifyAccounts(accounts));
  if (storageAccount && accounts?.length > 0) {
    const findAccount = accounts?.find(
      value => value?.id?.toString() === storageAccount,
    );
    if (findAccount)
      store.dispatch(
        modifyAccount({
          account: findAccount,
          value: findAccount?.id,
          label: findAccount?.name,
        }),
      );
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
