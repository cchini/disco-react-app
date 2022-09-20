import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
            <span className="iconXasis iconXasis-search" />
          </Button>
          <div className="context">
            <Select
              className="context_select"
              options={[
                { label: 'option A', value: 'option A' },
                { label: 'option B', value: 'option B' },
                { label: 'option C', value: 'option C' },
              ]}
            />
            <div className="context_options">
              <button className="btnNavLayout">
                <span className="iconXasis iconXasis-question-circle" />
              </button>
              <button className="btnNavLayout">
                <span className="iconXasis iconXasis-bell" />
              </button>
              <button className="btnNavLayout">
                <span className="iconXasis iconXasis-user-circle" />
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
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a
                className="linkMenu"
                onClick={() => navigate(DiscoPaths.AccountSetup)}>
                Home
              </a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Account Set Up</a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Campaigns</a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Creatives</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Asset Library</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Creative Matrix</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu iconXasis iconXasis-home "></span>
              <a className="linkMenu">Reports</a>
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
