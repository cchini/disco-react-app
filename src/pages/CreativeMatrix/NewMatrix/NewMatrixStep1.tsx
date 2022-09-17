import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/Paths';
import { Button, Input, Modal, Switch, Checkbox } from '@components/index';
import './newMatrix.scss';

const NewMatrixStep2 = () => {
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
      <h1>Create a new Creative Matrix</h1>

      {/* Sección de cards de redes sociales */}
      <nav className="navMatrix">
        <Input value="input" placeholder="Name" label="Name" />
        <div className="contentEnabledDisabled">
          <p>Enable/Disabled plataforms:</p>
          <ul className="listOptions">
            <li>
              <Switch label="facebook" name="facebook" />
            </li>
            <li>
              <Switch label="Instragram" name="Instragram" />
            </li>
            <li>
              <Switch label="Messenger" name="Messenger" />
            </li>
            <li>
              <Switch label="Tiktok" name="Tiktok" />
            </li>
            <li>
              <Switch label="SONA" name="SONA" />
            </li>
          </ul>
        </div>
      </nav>
      <section className="plataformsConfig">
        <h2>Facebook, Instagram & Facebook Messenger</h2>
        <h3>Select Placement</h3>
        <ul>
          <li>Facebook</li>
          <li>
            <Checkbox labelRight="Facebook feed" />
          </li>
          <li>
            <Checkbox labelRight="Facebook instream video" />
          </li>
          <li>
            <Checkbox labelRight="Facebook marketplace" />
          </li>
          <li>
            <Checkbox labelRight="Facebook search" />
          </li>
          <li>
            <Checkbox labelRight="Facebook story" />
          </li>
          <li>
            <Checkbox labelRight="Facebook video feed" />
          </li>
        </ul>

        <ul>
          <li>Instragram</li>
          <li>
            <Checkbox labelRight="Instragram explore" />
          </li>
          <li>
            <Checkbox labelRight="Instragram IGTV" />
          </li>
          <li>
            <Checkbox labelRight="Instragram story" />
          </li>
          <li>
            <Checkbox labelRight="Instragram stream" />
          </li>
        </ul>

        <ul>
          <li>Messenger</li>
          <li>
            <Checkbox labelRight="Messenger story" />
          </li>
        </ul>

        <h3>Select formats</h3>
        <ul>
          <li>
            <Checkbox labelRight="Image or video" />
          </li>
          <li>
            <Checkbox labelRight="Carousel" />
          </li>
        </ul>
        <Input value={5} label="Number of carousel images" />
      </section>
      <section className="plataformsConfig">
        <h2>SONA</h2>
        <h3>Select Templates</h3>
        <ul>
          <li>Facebook</li>
          <li>
            <Checkbox labelRight="Facebook" />
          </li>
          <li>
            <Checkbox labelRight="Instragram" />
          </li>
          <li>
            <Checkbox labelRight="Story" />
          </li>
          <li>
            <Checkbox labelRight="TikTok" />
          </li>
        </ul>

        <h3>Select formats</h3>
        <ul>
          <li>
            <Checkbox labelRight="Image or video" />
          </li>
          <li>
            <Checkbox labelRight="Carousel" />
          </li>
        </ul>
        <Input value={5} label="Number of carousel images" />
      </section>
      <footer>
        <Button>Cancel</Button>
        <Button
          onClick={() =>
            navigate({ pathname: `/${DiscoPaths.NewMatrixStep2}` })
          }>
          Next
        </Button>
      </footer>
    </section>
  );
};

export default NewMatrixStep2;
