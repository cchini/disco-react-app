import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import cx from 'classnames';
import { Select, Input } from '@components/index';
import Layout from '../common/Layout/Layout';
import { iconByPlatform } from '@utilities/common.utility';
import './accountSetup.scss';

const IntegratedAccount = () => {
  const store = useSelector((store: AppStore) => store.account);
  const account = store?.account?.account;

  const iconByPlatformOwner = platform => {
    const baseClass = 'headerCardPlatform_icon';
    switch (platform) {
      case 'META':
        const fb = `${baseClass} ${iconByPlatform('FACEBOOK')}`;
        const ig = `${baseClass} ${iconByPlatform('INSTAGRAM')}`;
        const msg = `${baseClass} ${iconByPlatform('MESSENGER')}`;
        return [
          <span key="fb" className={fb} />,
          <span key="ig" className={ig} />,
          <span key="msg" className={msg} />,
        ];
      case 'TIKTOK':
        const ttk = `${baseClass} ${iconByPlatform('TIKTOK')}`;
        return <span key="ttk" className={ttk} />;

      case 'SONA':
        const sona = `${baseClass} ${iconByPlatform('SONA')}`;
        return <span key="sn" className={sona} />;
    }
  };

  return (
    <Layout className="accountPage">
      <h1 className="accountPage_title">Account Set Up</h1>
      {account && (
        <header className="accountPage_header">
          <Select
            className="selectAccount"
            label="Account name"
            options={store?.accounts}
            value={store?.account}
            disabled={true}
            isClearable={false}
          />
          <div className="accountRrss">
            <label className="accountRrss_label">Country</label>
            <p className="accountRrss_country">{account?.countryName}</p>
          </div>
          <div className="accountRrss">
            <label className="accountRrss_label">Available plataforms</label>
            <ul className="listRrss">
              {account?.platforms?.map(plat =>
                plat?.pages?.map(available => (
                  <li
                    key={available?.platform?.code}
                    className={`listRrss_item ${iconByPlatform(
                      available?.platform?.code,
                    )}`}></li>
                )),
              )}
            </ul>
          </div>
        </header>
      )}

      {account?.platforms?.map(platform => (
        <article key={platform?.id} className="cardAvailablePlataforms">
          <header className="headerCardPlatform">
            {iconByPlatformOwner(platform?.platformOwner?.code)}
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
          <section className="contentCardPlataform">
            <Input
              label={`${platform?.platformOwner?.name} Business Manager ID`}
              value={platform?.businessManagerId}
              className="contentCardPlataform_input"
              disabled={true}
            />
            <Input
              label={`${platform?.platformOwner?.name} Business Manager Name`}
              value={platform?.businessManagerName}
              className="contentCardPlataform_input"
              disabled={true}
            />
            {platform?.pages?.map(page => (
              <Fragment key={`${page?.platform?.name}`}>
                <Input
                  label={`${page?.platform?.name} ID`}
                  value={page?.pageId}
                  className="contentCardPlataform_input"
                  disabled={true}
                />
                <Input
                  label={`${page?.platform?.name} Name`}
                  value={page?.pageName}
                  className="contentCardPlataform_input"
                  disabled={true}
                />
              </Fragment>
            ))}
          </section>
        </article>
      ))}
    </Layout>
  );
};

export default IntegratedAccount;
