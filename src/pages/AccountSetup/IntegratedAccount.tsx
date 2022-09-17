import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@redux/store';
import { Select } from '@components/index';
import { modifyAccount } from '@redux/states/account.state';
import { setAccountStorage } from '@utilities/localstorage.utility';
import { AccountOption } from '@models/account.model';

const IntegratedAccount = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: AppStore) => store.account);
  const account = store?.account?.account;

  const handleSelectAccount = (value: AccountOption) => {
    setAccountStorage(value?.value);
    dispatch(modifyAccount(value));
  };

  return (
    <div>
      {/* select header layout */}
      <Select
        options={store?.accounts}
        onChange={handleSelectAccount}
        value={store?.account}
      />
      {/* account setup */}
      {account?.name}
      {account?.countryName}
      {account?.platforms?.map(platform => (
        <div key={platform?.id}>
          {/* business */}
          <div>{platform?.businessManagerId}</div>
          <div>{platform?.businessManagerName}</div>
          <div>{platform?.status?.name}</div>
          {/* pages */}
          {platform?.pages?.map(page => (
            <div key={page?.id}>
              <div>{page?.platform?.name}</div>
              <div>{page?.pageId}</div>
              <div>{page?.pageName}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IntegratedAccount;
