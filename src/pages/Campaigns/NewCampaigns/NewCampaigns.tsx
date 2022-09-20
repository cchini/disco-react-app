import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Input, Modal, Switch, Select } from '@components/index';
import './newCampaigns.scss';

const NewCampaignsStep1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Modal
        className="modalCampaigns"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalCampaigns">
            <div>
              <p>Edit</p>
              <h3>Audience a Morning | Weedkays</h3>
            </div>
            <Button onClick={() => setOpen(false)}>X</Button>
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
            <Input label="Rule name:" />
            <Select
              label="Creative Matrix"
              options={[
                { label: 'option A', value: 'option A' },
                { label: 'option B', value: 'option B' },
                { label: 'option C', value: 'option C' },
              ]}
            />
          </nav>
          <section className="rulesSection">
            <details>
              <summary>Rules</summary>
              <article>
                <header>
                  <ul>
                    <li>Tigger Type</li>
                    <li>Condition</li>
                    <li>Value</li>
                  </ul>
                </header>
                <section className="listCreateRule">
                  <ul className="listSelect">
                    <li>
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Button>Remove</Button>
                    </li>
                  </ul>
                  <div>
                    <Button>Or+ </Button>
                  </div>
                </section>
                <div>And</div>
                <section className="listCreateRule">
                  <ul className="listSelect">
                    <li>
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Button>Remove</Button>
                    </li>
                  </ul>
                  <ul className="listSelect">
                    <li>
                      <Select
                        value="KPI"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Equal to ( ===)"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Select
                        value="Awarees"
                        options={[
                          { label: 'option A', value: 'option A' },
                          { label: 'option B', value: 'option B' },
                          { label: 'option C', value: 'option C' },
                        ]}
                      />
                    </li>
                    <li>
                      <Button>Remove</Button>
                    </li>
                  </ul>
                  <div>
                    <Button>Or+ </Button>
                  </div>
                </section>
                <Button>And</Button>
              </article>
            </details>
            <details>
              <summary>Assign creatives</summary>
              <article>
                <section className="table">
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
                    <li className="contentTable_item">
                      <Button>remove</Button>
                    </li>
                  </ul>
                  <ul className="contentTable">
                    <li className="contentTable_item">02</li>
                    <li className="contentTable_item">Audience | Weekday...</li>
                    <li className="contentTable_item">1290877748484849</li>
                    <li className="contentTable_item">
                      <figure>IMG</figure>
                    </li>
                    <li className="contentTable_item">
                      <Button>remove</Button>
                    </li>
                  </ul>
                </section>
                <Button>+</Button>
              </article>
            </details>
            <details>
              <summary>Select the channels wherethe this rule apply</summary>
              <article>
                <ul>
                  <Switch label="Facebook - Instagram - Messenger" name="FIM" />
                  <Switch label="TikTok" name="TikTok" />
                  <Switch label="SONA" name="SONA" />
                </ul>
              </article>
            </details>
          </section>
        </section>
        <footer className="footerModal">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </footer>
      </Modal>

      <h1>Create a new Campaign</h1>

      {/* Sección de cards de inputs */}
      <nav className="navMatrix">
        <Input value="input" placeholder="Name:" label="Name" />
        <Input
          value="input"
          placeholder="dd/mm/AAAA"
          label="Date start:"
          type="date"
        />
        <Input
          value="input"
          placeholder="dd/mm/AAAA"
          label="Date end:"
          type="date"
        />
        <Input value="input" placeholder="Name" label="Budget($USD):" />

        <Input value="input" placeholder="Name" label="KPI;" />

        <Input value="input" placeholder="Name" label="Goal:" />
      </nav>
      <section className="rulesConfig">
        <h2>priority group 1</h2>
        <article className="cardRule">
          <h3>Audience a morning | Weekdays</h3>
          <span>Creative:10</span>
          <ul>
            <li>
              <Switch
                label="Facebook Instagram Messenger"
                name="Facebook Instagram Messenger"
              />
            </li>
            <li>
              <Switch label="tiktok" name="tiktok" />
            </li>
            <li>
              <Switch label="SONA" name="SONA" />
            </li>
          </ul>
        </article>
        <article className="cardRule" onClick={() => setOpen(true)}>
          + Add Rule
        </article>
      </section>
      <section className="rulesConfig">
        <h2>Default</h2>
        <article className="cardRule">
          <h3>Default rule</h3>
          <span>Creative:10</span>
          <ul>
            <li>
              <Switch
                label="Facebook Instagram Messenger"
                name="Facebook Instagram Messenger"
              />
            </li>
            <li>
              <Switch label="tiktok" name="tiktok" />
            </li>
            <li>
              <Switch label="SONA" name="SONA" />
            </li>
          </ul>
        </article>
        <article className="cardRule">+ Add Rule</article>
      </section>
      <footer className="footerNewCampaign">
        <Button>Cancel</Button>
        <Button>Save</Button>
        <Button
          onClick={() => navigate({ pathname: `/${DiscoPaths.NewCampaigns}` })}>
          Next
        </Button>
      </footer>
    </section>
  );
};

export default NewCampaignsStep1;