import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@redux/store';
import { Select, Input } from '@components/index';
import { modifyAccount } from '@redux/states/account.state';
import { setAccountStorage } from '@utilities/localstorage.utility';
import { AccountOption } from '@models/account.model';
import Layout from '../common/Layout/Layout';
import cx from 'classnames';

import './accountSetup.scss';

const IntegratedAccount = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: AppStore) => store.account);
  const account = store?.account?.account;

  const handleSelectAccount = (value: AccountOption) => {
    setAccountStorage(value?.value);
    dispatch(modifyAccount(value));
  };

  const selectIcon = plataform => {
    const stringIcon = 'iconXasis iconXasis-';
    if (plataform === 'META') {
      return [
        `${stringIcon}facebook-f`,
        `${stringIcon}facebook-messenger`,
        `${stringIcon}instagram`,
      ];
    }
    if (plataform === 'TIKTOK') {
      return `${stringIcon}tiktok`;
    }
    if (plataform === 'SONA') {
      return `${stringIcon}tiktok`;
    }
  };

  return (
    <Layout className="accountPage">
      {/* select header layout */}
      <h1 className="accountPage_title">Account Set Up</h1>
      <header className="accountPage_header">
        <Select
          className="selectAccount"
          label="Account name"
          options={store?.accounts}
          onChange={handleSelectAccount}
          value={store?.account}
        />
        <div className="accountRrss">
          <label className="accountRrss_label">Country</label>
          <p className="accountRrss_country">{account?.countryName}</p>
        </div>
        <div className="accountRrss">
          <label className="accountRrss_label">Available plataforms</label>
          <ul className="listRrss">
            <li className="listRrss_item iconXasis iconXasis-facebook-f"></li>
            <li className="listRrss_item iconXasis iconXasis-instagram"></li>
            <li className="listRrss_item iconXasis iconXasis-facebook-messenger"></li>
            <li className="listRrss_item iconXasis iconXasis-tiktok"></li>
            <li className="listRrss_item iconXasis iconXasis-tiktok"></li>
          </ul>
        </div>
      </header>

      {/* account setup */}
      {/* {account?.name}
      {account?.countryName} */}
      {account?.platforms?.map(platform => (
        <article key={platform?.id} className="cardAvailablePlataforms">
          <header className="headerCardPlatform">
            <span
              className={cx(
                'headerCardPlatform_icon',
                `iconXasis iconXasis-${selectIcon(platform?.platformOwner)}`,
              )}
            />
            <p className="headerCardPlatform_status">
              <span
                className={cx(
                  'iconStatus',
                  platform?.status
                    ? 'iconStatus__active'
                    : 'iconStatus__desactive',
                )}
              />
              {platform?.status ? 'Active' : 'Pendend'}
            </p>
          </header>
          {platform?.pages?.map(page => (
            <section className="contentCardPlataform" key={page?.id}>
              {/* <div>{page?.platform?.name}</div> */}
              <Input
                label="PlataformOwner ID"
                value={page?.pageId}
                className="contentCardPlataform_input"
              />
              <Input
                label="PlataformOwner Name"
                value={page?.pageName}
                className="contentCardPlataform_input"
              />
            </section>
          ))}
        </article>
        // <div key={platform?.id}>
        //   {/* business */}
        //   <div>{platform?.businessManagerId}</div>
        //   <div>{platform?.businessManagerName}</div>
        //   <div>{platform?.status?.name}</div>
        //   {/* pages */}
        //   {platform?.pages?.map(page => (
        //     <div key={page?.id}>
        //       <div>{page?.platform?.name}</div>
        //       <div>{page?.pageId}</div>
        //       <div>{page?.pageName}</div>
        //     </div>
        //   ))}
        // </div>
      ))}
    </Layout>
  );
};

export default IntegratedAccount;
