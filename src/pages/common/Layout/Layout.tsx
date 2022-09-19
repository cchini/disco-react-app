import React, { useState } from 'react';
import { Input, Button, Select } from '@components/index';
import cx from 'classnames';
import '../../../assets/icons/light.scss';
import './layout.scss';

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
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
            <span className="fal fa-search" />
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
                <span className="fal fa-question-circle" />
              </button>
              <button className="btnNavLayout">
                <span className="fal fa-bell" />
              </button>
              <button className="btnNavLayout">
                <span className="fal fa-user-circle" />
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
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Home</a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Account Set Up</a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Campaigns</a>
            </li>

            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Creatives</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Asset Library</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Creative Matrix</a>
            </li>
            <li className="optionList_item">
              <span className="iconMenu fal fa-home"></span>
              <a className="linkMenu">Reports</a>
            </li>
          </ul>
          {/* </div> */}
        </nav>
        <div className="contentPages">CHILDREN{children}</div>
      </div>
    </section>
  );
};

export default Layout;
