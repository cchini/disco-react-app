import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Input, Switch } from '@components/index';
import Layout from '../../common/Layout/Layout';
import RuleModal from '../components/RuleModal/RuleModal';
import { resetCampaigns } from '@redux/states/campaigns.state';
import './newCampaigns.scss';

const NewCampaignsStep1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store: AppStore) => store.matrix);
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout className="campaignsNewPage">
      <RuleModal
        openModal={setOpen}
        activeModal={open}
        matrixList={store?.matrixList}
      />

      <h1 className="campaignsNewPage_title">Create a new Campaign</h1>

      {/* Sección de cards de inputs */}
      <nav className="filtersNewCampaigns">
        <Input placeholder="Name" label="Name" />
        <div className="filtersNewCampaigns_field">
          <label className="labelDatePicker">Date start</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholder="dd/mm/AAAA"
          />
        </div>
        <div className="filtersNewCampaigns_field">
          <label className="labelDatePicker">Date end</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholder="dd/mm/AAAA"
          />
        </div>
        <Input
          placeholder="$50.000"
          label="Budget($USD)"
          className="filtersNewCampaigns_field"
        />

        <Input
          placeholder="KPI"
          label="KPI"
          className="filtersNewCampaigns_field"
        />

        <Input
          placeholder="Goal"
          label="Goal"
          className="filtersNewCampaigns_field"
        />
      </nav>
      <section className="rulesConfig">
        <h2 className="rulesConfig_title">priority group</h2>
        <section className="cntCardsRules">
          <article className="cardRule">
            <h3 className="cardRule_title">Audience a morning | Weekdays</h3>
            <span className="cardRule_detail">Creative: 10</span>
            <ul className="listSwitchRules">
              <li className="listSwitchRules_item">
                <Switch
                  className="swicthRule"
                  name="META-Audience"
                  label={
                    <div className="labelsIcons">
                      <span className="iconXaxis  iconXaxis-facebook-f"></span>
                      <span className="iconXaxis  iconXaxis-instagram"></span>
                      <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
                    </div>
                  }
                />
              </li>
              <li className="listSwitchRules_item">
                <Switch
                  label={
                    <div className="labelsIcons">
                      <span className="iconXaxis  iconXaxis-tiktok"></span>
                    </div>
                  }
                  name="tiktok-Audience"
                  className="swicthRule"
                />
              </li>
              <li className="listSwitchRules_item">
                <Switch
                  label="S"
                  name="SONA-Audience"
                  className="swicthRule swicthRule__sona"
                />
              </li>
            </ul>
          </article>
          <article
            className="cardRule cardRule__center"
            onClick={() => {
              dispatch(resetCampaigns());
              setOpen(true);
            }}>
            <span className="cardRule_icon iconXaxis iconXaxis-plus"></span>
            <p className="cardRule_text"> Add Rule</p>
          </article>
        </section>
      </section>
      <footer className="footerNewCampaign">
        <Button
          hierarchy="secondary"
          className="footerNewCampaign_btn"
          onClick={() => navigate(`/${DiscoPaths.Campaigns}`)}>
          Cancel
        </Button>
        <Button
          className="footerNewCampaign_btn"
          onClick={() => navigate(`/${DiscoPaths.Campaigns}`)}>
          Save
        </Button>
      </footer>
    </Layout>
  );
};

export default NewCampaignsStep1;
