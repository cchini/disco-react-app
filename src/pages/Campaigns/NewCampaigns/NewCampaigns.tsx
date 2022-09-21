import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Input, Modal, Switch, Select } from '@components/index';
import Layout from '../../common/Layout/Layout';
// import 'react-datepicker/dist/react-datepicker.css';
import './newCampaigns.scss';

const NewCampaignsStep1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout className="campaignsNewPage">
      <Modal
        className="modalCampaigns"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalCampaigns">
            <div className="headerModalCampaignsTitle">
              <p className="headerModalCampaignsTitle_detail">Edit</p>
              <h3 className="headerModalCampaignsTitle_context">
                Audience a Morning | Weedkays
              </h3>
            </div>
            <Button
              onClick={() => setOpen(false)}
              className="headerModalCampaigns_btn"
              hierarchy="secondary">
              X
            </Button>
          </header>
        }>
        <section className="modalCampaignsContent">
          <p className="modalCampaignsContent_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            temporibus culpa nisi dolorem, voluptas, iusto illum quas dicta ad
            similique repudiandae veritatis aperiam nobis tempora cum velit
            itaque beatae. Quia?
          </p>
          <nav className="searchOptions">
            <Input label="Rule name:" className="searchOptions_field" />
            <Select
              className="searchOptions_field"
              label="Creative Matrix"
              options={[
                { label: 'option A', value: 'option A' },
                { label: 'option B', value: 'option B' },
                { label: 'option C', value: 'option C' },
              ]}
            />
          </nav>
          <section className="rulesSection">
            <details className="accordion">
              <summary className="accordion_title">Rules</summary>
              <article className="cntItemAccordion cntItemAccordion_first">
                <header className="headerFieldsColumn">
                  <ul className="list">
                    <li className="list_item">Tigger Type</li>
                    <li className="list_item">Condition</li>
                    <li className="list_item">Value</li>
                  </ul>
                </header>
                <section className="listCreateRule">
                  <ul className="listSelect">
                    <li className="listSelect_item">
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item listSelect_item__btn">
                      <button className="btnRemoveRow">
                        <span className="iconXaxis iconXaxis-trash-alt"></span>
                      </button>
                    </li>
                  </ul>
                  <div className="addListSelect">
                    <Button hierarchy="secondary" className="addListSelect_btn">
                      Or <span className="iconXaxis iconXaxis-plus"></span>
                    </Button>
                  </div>
                </section>
                <div className="andSection">
                  <div className="andSection_line"></div>
                  <div className="andSection_text">
                    <p>And</p>
                  </div>
                </div>
                <section className="listCreateRule">
                  <ul className="listSelect">
                    <li className="listSelect_item">
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item listSelect_item__btn">
                      <button className="btnRemoveRow">
                        <span className="iconXaxis iconXaxis-trash-alt"></span>
                      </button>
                    </li>
                  </ul>
                  <ul className="listSelect">
                    <li className="listSelect_item">
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li className="listSelect_item">
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                        classNameSelect="selectRule"
                      />
                    </li>
                    <li>
                      <button className="btnRemoveRow">
                        <span className="iconXaxis iconXaxis-trash"></span>
                      </button>
                    </li>
                  </ul>
                  <div className="addListSelect">
                    <Button hierarchy="secondary" className="addListSelect_btn">
                      Or <span className="iconXaxis iconXaxis-plus"></span>
                    </Button>
                  </div>
                </section>
                <Button className="cntItemAccordion_btn">
                  And <span className="iconXaxis iconXaxis-plus"></span>
                </Button>
              </article>
            </details>
            <details className="accordion">
              <summary className="accordion_title">Assign creatives</summary>
              <article className="cntItemAccordion cntItemAccordion__table">
                <section className="table cntItemAccordion_table">
                  <ul className="headerTable">
                    <li className="headerTable_item">Disco ID</li>
                    <li className="headerTable_item">Ad name</li>
                    <li className="headerTable_item">Creative type</li>
                    <li className="headerTable_item">Preview</li>
                    <li className="headerTable_item headerTable_item__actions"></li>
                  </ul>

                  <ul className="contentTable">
                    <li className="contentTable_item">01</li>
                    <li className="contentTable_item">Audience | Weekday...</li>
                    <li className="contentTable_item">1290877748484849</li>
                    <li className="contentTable_item">
                      <figure>IMG</figure>
                    </li>
                    <li className="contentTable_item contentTable_item__actions">
                      <button className="btnRemoveRow">
                        <span className="iconXaxis iconXaxis-trash-alt"></span>
                      </button>
                    </li>
                  </ul>
                  <ul className="contentTable">
                    <li className="contentTable_item">02</li>
                    <li className="contentTable_item">Audience | Weekday...</li>
                    <li className="contentTable_item">1290877748484849</li>
                    <li className="contentTable_item">
                      <figure>
                        {/* Acá debe ir la imagén */}
                        IMG
                        <img />
                      </figure>
                    </li>
                    <li className="contentTable_item contentTable_item__actions">
                      <button className="btnRemoveRow">
                        <span className="iconXaxis iconXaxis-trash-alt"></span>
                      </button>
                    </li>
                  </ul>
                </section>
                <Button
                  hierarchy="secondary"
                  className="cntItemAccordion_btn cntItemAccordion_btn__plus">
                  <span className="iconXaxis iconXaxis-plus"></span>
                </Button>
              </article>
            </details>
            <details className="accordion">
              <summary className="accordion_title">
                Select the channels wherethe this rule apply
              </summary>
              <article className="cntItemAccordion">
                <ul className="cntItemAccordion_listOptions">
                  <Switch
                    label={
                      <div className="labelsIcons">
                        <span className="iconXaxis  iconXaxis-facebook-f"></span>
                        <span className="iconXaxis  iconXaxis-instagram"></span>
                        <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
                      </div>
                    }
                    name="FIM"
                    className="switchChannel"
                  />
                  <Switch
                    label={
                      <div className="labelsIcons">
                        <span className="iconXaxis  iconXaxis-tiktok"></span>
                      </div>
                    }
                    name="TikTok"
                    className="switchChannel"
                  />
                  <Switch
                    label="S"
                    name="SONA"
                    className="switchChannel switchChannel__sona"
                  />
                </ul>
              </article>
            </details>
          </section>
        </section>
        <footer className="footerModal">
          <Button onClick={() => setOpen(false)} hierarchy="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </footer>
      </Modal>

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
        <h2 className="rulesConfig_title">priority group 1</h2>
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
            onClick={() => setOpen(true)}>
            <span className="cardRule_icon iconXaxis iconXaxis-plus"></span>
            <p className="cardRule_text"> Add Rule</p>
          </article>
        </section>
      </section>
      <footer className="footerNewCampaign">
        <Button hierarchy="secondary" className="footerNewCampaign_btn">
          Cancel
        </Button>
        <Button className="footerNewCampaign_btn">Save</Button>
        <Button
          onClick={() => navigate({ pathname: `/${DiscoPaths.NewCampaigns}` })}
          className="footerNewCampaign_btn">
          Next
        </Button>
      </footer>
    </Layout>
  );
};

export default NewCampaignsStep1;
