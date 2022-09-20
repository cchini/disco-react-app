import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '@redux/store';
import { modifyAccount } from '@redux/states/account.state';
import { setAccountStorage } from '@utilities/localstorage.utility';
import { AccountOption } from '@models/account.model';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Select } from '@components/index';
import { DiscoPaths } from '@routes/models/path.model';
import cx from 'classnames';
import './layout.scss';

export interface ILayout {
  /** overwrite className */
  className?: string;
  children: React.ReactNode | string;
}

const Layout: FC<ILayout> = props => {
  const { className, children } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store: AppStore) => store.account);

  const handleSelectAccount = (value: AccountOption) => {
    setAccountStorage(value?.value);
    dispatch(modifyAccount(value));
  };
  return (
    <section
      className={cx('gralContent', openMenu ? 'gralContent__openNav' : '')}>
      <header className="headerLayout">
        <a
          href="#"
          className={cx(
            'headerLayout_action open-panel ',
            openMenu ? 'active' : '',
          )}
          onClick={() => setOpenMenu(!openMenu)}
        />
        <nav className="navHeader">
          <Input placeholder="Search" className="navHeader_input" />
          <Button className="navHeader_btn">
            <span className="iconXaxis iconXaxis-search" />
          </Button>
          <div className="context">
            <Select
              className="context_select"
              options={store?.accounts}
              onChange={handleSelectAccount}
              value={store?.account}
              isClearable={false}
            />

            <div className="context_options">
              <button className="btnNavLayout">
                <span className="iconXaxis iconXaxis-question-circle" />
              </button>
              <button className="btnNavLayout">
                <span className="iconXaxis iconXaxis-bell" />
              </button>
              <button className="btnNavLayout">
                <span className="iconXaxis iconXaxis-user-circle" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="wrapper">
        <nav role="navigation" className="menu">
          {/* <div className="overflow-container"> */}
          <ul className="optionList">
            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to={`/${DiscoPaths.Home}`}>
                Home
              </Link>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to={`/${DiscoPaths.AccountSetup}`}>
                Account Set Up
              </Link>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to={`/${DiscoPaths.Campaigns}`}>
                Campaigns
              </Link>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to="#">
                Creatives
              </Link>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to="#">
                Asset Library
              </Link>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to={`/${DiscoPaths.CreativeMatrix}`}>
                Creative Matrix
              </Link>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXaxis iconXaxis-home "></span>
              <Link className="linkMenu" to="#">
                Reports
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </nav>
        <div className={cx('contentPages', className && className)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
