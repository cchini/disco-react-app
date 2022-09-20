import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import { Select, Input } from '@components/index';
import Layout from '../common/Layout/Layout';
import cx from 'classnames';
import './accountSetup.scss';

const IntegratedAccount = () => {
  const store = useSelector((store: AppStore) => store.account);
  const account = store?.account?.account;

  const iconByPlatform = platform => {
    const baseIcon = 'iconXaxis iconXaxis-';
    switch (platform) {
      case 'FACEBOOK':
        return `${baseIcon}facebook-f`;
      case 'INSTAGRAM':
        return `${baseIcon}instagram`;
      case 'MESSENGER':
        return `${baseIcon}facebook-messenger`;
      case 'TIKTOK':
        return `${baseIcon}tiktok`;
      case 'SONA':
        return `${baseIcon}tiktok`;
    }
  };

  const iconByPlatformOwner = platform => {
    const baseClass = 'headerCardPlatform_icon';
    switch (platform) {
      case 'META':
        return [
          <span className={`${baseClass} ${iconByPlatform('FACEBOOK')}`} />,
          <span className={`${baseClass} ${iconByPlatform('INSTAGRAM')}`} />,
          <span className={`${baseClass} ${iconByPlatform('MESSENGER')}`} />,
        ];
      case 'TIKTOK':
        return <span className={`${baseClass} ${iconByPlatform('TIKTOK')}`} />;

      case 'SONA':
        return <span className={`${baseClass} ${iconByPlatform('SONA')}`} />;
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
              {account?.platforms?.map(plat => (
                <>
                  {plat?.pages?.map(available => (
                    <>
                      {available?.platform?.enabled && (
                        <li
                          className={`listRrss_item ${iconByPlatform(
                            available?.platform?.code,
                          )}`}></li>
                      )}
                    </>
                  ))}
                </>
              ))}
            </ul>
          </div>
        </header>
      )}

      {account?.platforms?.map((platform, index) => (
        <article
          key={`${platform?.businessManagerId}_${index}`}
          className="cardAvailablePlataforms">
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
              <>
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
              </>
            ))}
          </section>
        </article>
      ))}
    </Layout>
  );
};

export default IntegratedAccount;
