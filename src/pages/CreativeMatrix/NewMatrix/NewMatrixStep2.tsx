import React, { useState } from 'react';
import {
  Button,
  Modal,
  Switch,
  DragDropFile,
  PreviewUpload,
} from '@components/index';
import './newMatrix.scss';

const NewMatrixStep2 = () => {
  const [open, setOpen] = useState(false);

  const [newAssetsMatrix, setNewAssetsMatrix] = useState({
    assetsImages: [],
  });

  const updateUploadedFiles = files =>
    setNewAssetsMatrix({ ...newAssetsMatrix, assetsImages: files });

  return (
    <section>
      <Modal
        className="modalMatrix"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalMatrix">
            <h3>Select your asset</h3>
          </header>
        }>
        <section className="modalContent">
          <div className="library">
            <h4>Asset Library</h4>
            <ul title="2022 may getircampaign name">
              <ul title="Images">
                <li>
                  <b>IMAGES</b>
                </li>
                <li>image 01</li>
                <li>image 02</li>
                <li>image 03</li>
                <li>image 04</li>
                <li>image 05</li>
                <li>image 06</li>
              </ul>
              <ul title="Videos">
                <li>
                  <b>VIDEOS</b>
                </li>
                <li>video 01</li>
                <li>video 02</li>
                <li>video 03</li>
                <li>video 04</li>
                <li>video 05</li>
                <li>video 06</li>
              </ul>
            </ul>
          </div>
          <div className="upload">
            <h4>Upload</h4>
            <DragDropFile
              accept=".jpg,.png,.jpeg"
              label="Assets Image(s)"
              multiple
              updateFilesCb={updateUploadedFiles}
            />
          </div>
          <div className="preview">
            <h4>Preview</h4>
            {/* Acá debería ir el compoennte preview con la parte de previsualización de DragDropUpload */}
            {/* <PreviewUpload
              accept=".jpg,.png,.jpeg"
              label="Assets Image(s)"
              multiple
              updateFilesCb={updateUploadedFiles}
            /> */}
          </div>
        </section>

        <footer className="footerModal">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </footer>
      </Modal>
      <h1>Creative Matrix/New</h1>

      {/* Sección de cards de redes sociales */}
      <nav className="navMatrix">
        <h2>Enable/Disabled plataforms:</h2>
        <div className="contentEnabledDisabled">
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
          <Button className="contentEnabledDisabled_btn">
            + Add carousel card
          </Button>
          <Button className="contentEnabledDisabled_btn">
            - Remove last carousel card
          </Button>
        </div>
      </nav>

      {/* Sección tabla */}
      <section>
        <section className="table">
          <ul className="headerTable">
            <li className="headerTable_item">Disco ID</li>
            <li className="headerTable_item">Reporting label</li>
            <li className="headerTable_item">Intagram Account ID</li>
            <li className="headerTable_item">Facebook Account ID</li>
            <li className="headerTable_item">Facebook Campaign ID</li>
            <li className="headerTable_item">Facebook Ad set ID</li>
            <li className="headerTable_item">TikTok Campaign ID</li>
            <li className="headerTable_item">TikTok Ad set ID</li>
            <li className="headerTable_item">Main image/video</li>
            <li className="headerTable_item headerTable_item__actions"></li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item">01</li>
            <li className="contentTable_item">Reporting label</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">9087774848444849</li>
            <li className="contentTable_item">8760873748484849</li>
            <li className="contentTable_item">608774845484849</li>
            <li className="contentTable_item">608774846084849</li>

            <li className="contentTable_item">765404846084849</li>
            <li className="contentTable_item">
              <figure>IMG</figure>
            </li>
            <li className="contentTable_item">
              <Button>remove</Button>
            </li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item">01</li>
            <li className="contentTable_item">Reporting label</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">9087774848444849</li>
            <li className="contentTable_item">8760873748484849</li>
            <li className="contentTable_item">608774845484849</li>
            <li className="contentTable_item">608774846084849</li>
            <li className="contentTable_item">765404846084849</li>
            <li className="contentTable_item">
              <figure>IMG</figure>
            </li>
            <li className="contentTable_item">
              <Button>remove</Button>
            </li>
          </ul>
        </section>
      </section>
      <Button onClick={() => setOpen(true)}>+ Add asset</Button>
    </section>
  );
};

export default NewMatrixStep2;
