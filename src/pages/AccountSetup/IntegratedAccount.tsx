import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import cx from 'classnames';
import { Select, Input, Button, Modal } from '@components/index';
import Layout from '../common/Layout/Layout';
import { iconByPlatform } from '@utilities/common.utility';
import './accountSetUp.scss';

const IntegratedAccount = () => {
  const [open, setOpen] = useState(false);
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
      <Modal
        className="modalAccounSetUp"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalAccounSetUp">
            <h2 className="headerModalAccounSetUp_title">Send Approval</h2>
            <Button
              onClick={() => setOpen(false)}
              className="headerModalAccounSetUp_btn"
              hierarchy="secondary">
              X
            </Button>
          </header>
        }>
        <section className="modalAccounSetUpContent">
          <Input placeholder="example@xaxis.com" label="Email" type="email" />
        </section>
        <footer className="footerModal">
          <Button onClick={() => setOpen(false)} hierarchy="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Send</Button>
        </footer>
      </Modal>
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

      <section className="cntCardsAvailablePlataform">
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
            <footer className="footerCardPlatform">
              <Button hierarchy="secondary">Edit</Button>
            </footer>
          </article>
        ))}
        {/* Tiktok */}
        <article className="cardAvailablePlataforms">
          <header className="headerCardPlatform">
            <span className="headerCardPlatform_icon iconXaxis iconXaxis-tiktok"></span>
            <p className="headerCardPlatform_status">
              <span className={cx('iconStatus', 'iconStatus__desactive')} />
              Pendend
            </p>
          </header>
          <section className="contentCardPlataform">
            <Input
              label={`Tiktok Business Account ID`}
              value={'Tiktok'}
              className="contentCardPlataform_input"
            />
            <Input
              label={`Tiktok Business Account Name`}
              value={'Tiktok'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'Tiktok Page ID'}
              value={'Tiktok ID'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'Tiktok Page Name'}
              value={'Tiktok Name'}
              className="contentCardPlataform_input"
            />
            <Button
              className="contentCardPlataform_btn"
              onClick={() => setOpen(true)}>
              <span className="iconXaxis iconXaxis-paper-plane"></span>
              Send approval
            </Button>
          </section>

          <footer className="footerCardPlatform">
            <Button hierarchy="secondary">Edit</Button>
          </footer>
        </article>

        {/* SONA */}
        <article className="cardAvailablePlataforms">
          <header className="headerCardPlatform">
            <span className="headerCardPlatform_icon headerCardPlatform_icon__sona">
              S
            </span>
            <p className="headerCardPlatform_status">
              <span className={cx('iconStatus', 'iconStatus__active')} />
              Active
            </p>
          </header>
          <section className="contentCardPlataform">
            <Input
              label={`Campaign Manager Account ID`}
              value={'SONA ID'}
              className="contentCardPlataform_input"
            />
            <Input
              label={`Campaign Manager Account Name`}
              value={'SONA Name'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'DV360 Account ID'}
              value={'DV360 ID'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'DV360 Account Name'}
              value={'DV360 Name'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'Sizmek Account Name'}
              value={'Sizmek Name'}
              className="contentCardPlataform_input"
            />
            <Input
              label={'Sizmek Account ID'}
              value={'Sizmek ID'}
              className="contentCardPlataform_input"
            />
          </section>
          <footer className="footerCardPlatform">
            <Button hierarchy="secondary">Edit</Button>
          </footer>
        </article>
      </section>
    </Layout>
  );
};

export default IntegratedAccount;
