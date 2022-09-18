import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Input, Modal, Switch, Checkbox } from '@components/index';
import './newCampaigns.scss';

const NewCampaignsStep1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Modal
        className="modalDetails"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModal">
            <div>
              <p>Template</p>
              <h3>All channels (FB & IG, TikTok, SONA)</h3>
            </div>
            <Button onClick={() => setOpen(false)}>X</Button>
          </header>
        }>
        <section className="modalContent">
          <section className="rrssItem">
            <h4>Facebook & Instagram</h4>
            <section className="content">
              <div className="formats">
                <p>Image</p>
                <p>Video</p>
                <p>Carousel</p>
              </div>
              <div className="placements">
                <ul className="placementsList">
                  {/* Sólo este tiene el ejemplo de tootltip */}
                  <li className="placementsList_item">
                    Facebook 1 con tooltip
                    <div className="placements_tooltip">
                      <figure className="imageTooltip">
                        <img />
                      </figure>
                      <div className="info">
                        <h5>About this placement</h5>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Impedit tempora expedita nobis sapiente...
                        </p>
                        <h5>Dynamic elements</h5>
                        <ol>
                          <li>Caption</li>
                          <li>Image / Video / Carousel</li>
                          <li>URL</li>
                          <li>Title</li>
                          <li>Description</li>
                          <li>CTA</li>
                        </ol>
                      </div>
                    </div>
                  </li>
                  <li className="placementsList_item">Facebook 2</li>
                  <li className="placementsList_item">Facebook 3</li>
                  <li className="placementsList_item">Facebook 4</li>
                  <li className="placementsList_item">Facebook 5</li>
                  <li className="placementsList_item">Facebook 6</li>
                  <li className="placementsList_item">Instagram 1</li>
                  <li className="placementsList_item">Instagram 2</li>
                  <li className="placementsList_item">Instagram 3</li>
                  <li className="placementsList_item">Instagram 4</li>
                  <li className="placementsList_item">Messenger 1</li>
                </ul>
              </div>
            </section>
          </section>
          <section className="rrssItem">
            <h4>SONA</h4>
            <section className="content">
              <div className="formats">
                <p>Image</p>
                <p>Video</p>
                <p>Carousel</p>
              </div>
              <div className="placements">
                <ul>
                  <li>SONA 1</li>
                  <li>SONA 2</li>
                  <li>SONA 3</li>
                  <li>SONA 4</li>
                </ul>
              </div>
            </section>
          </section>
          <section className="rrssItem">
            <h4>TikTok</h4>
            <section className="content">
              <div className="formats">
                <p>Image</p>
                <p>Video</p>
                <p>Carousel</p>
              </div>
              <div className="placements">
                <ul>
                  <li>TikTok 1</li>
                  <li>TikTok 2</li>
                  <li>TikTok 3</li>
                  <li>TikTok 4</li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <footer className="footerModal">
          <Button onClick={() => setOpen(false)}>Select</Button>
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
        <article className="cardRule">+ Add Rule</article>
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
          onClick={() =>
            navigate({ pathname: `/${DiscoPaths.NewCampaignsStep1}` })
          }>
          Next
        </Button>
      </footer>
    </section>
  );
};

export default NewCampaignsStep1;
