import React, { useState } from 'react';
import { Button, Modal, Switch, DragDropFile } from '@components/index';
import Layout from '../../common/Layout/Layout';
import './newMatrix.scss';

const NewMatrixStep2 = () => {
  const [open, setOpen] = useState(false);

  const [newAssetsMatrix, setNewAssetsMatrix] = useState({
    assetsImages: [],
  });

  const updateUploadedFiles = files =>
    setNewAssetsMatrix({ ...newAssetsMatrix, assetsImages: files });

  return (
    <Layout className="newCreativeMatrixPage">
      <Modal
        className="modalCreativeMatrixAdd"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalCreativeMatrixAssets">
            <h3 className="headerModalCreativeMatrixAssets_title">
              Select your asset
            </h3>
          </header>
        }>
        <section className="modalAssetsContent">
          <div className="library">
            <h4 className="library_title">Asset Library</h4>
            <ul className="principalList">
              <li className="principalList_item principalList_item__title">
                2022 may getircampaign name
              </li>
              <ul title="Images" className="secondaryList">
                <li className="secondaryList_item secondaryList_item__title">
                  <span className="iconXaxis iconXaxis-folder"></span>
                  IMAGES
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 01
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 02
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 03
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 04
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 05
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 06
                </li>
              </ul>
              <ul title="Images" className="secondaryList">
                <li className="secondaryList_item secondaryList_item__title">
                  <span className="iconXaxis iconXaxis-folder"></span>
                  Videos
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 01
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 02
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 03
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 04
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 05
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 06
                </li>
              </ul>
            </ul>
          </div>
          <DragDropFile
            accept=".jpg,.png,.jpeg"
            label=""
            updateFilesCb={updateUploadedFiles}
          />
        </section>

        <footer className="footerModal">
          <Button onClick={() => setOpen(false)} hierarchy="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </footer>
      </Modal>
      <h1 className="newCreativeMatrixPage_title">Creative Matrix/New</h1>

      {/* Sección de cards de redes sociales */}
      <nav className="navMatrix navMatrix__step2">
        <div className="contentEnabledDisabled">
          <label className="contentEnabledDisabled_label">
            Enable/Disabled plataforms
          </label>
          <ul className="listOptions">
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-facebook-f"></span>
                  </div>
                }
                className="switchAvailable"
                name="facebook"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-instagram"></span>
                  </div>
                }
                name="Instragram"
                className="switchAvailable"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
                  </div>
                }
                className="switchAvailable"
                name="Messenger"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-tiktok"></span>
                  </div>
                }
                className="switchAvailable"
                name="Tiktok"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label="S"
                name="SONA"
                className="switchAvailable switchAvailable__sona"
              />
            </li>
          </ul>
        </div>
        <div className="contentActions">
          <Button className="contentActions_btn">
            <span className="iconXaxis iconXaxis-plus"></span>Add carousel card
          </Button>
          <Button className="contentActions_btn">
            <span className="iconXaxis iconXaxis-trash-alt"></span> Remove last
            carousel card
          </Button>
        </div>
      </nav>

      {/* Sección tabla */}
      <section className="contentTableNewMatrix">
        <section className="table">
          <ul className="headerTable">
            <li className="headerTable_item"></li>
            <li className="headerTable_item">Disco ID</li>
            <li className="headerTable_item">Reporting label</li>
            <li className="headerTable_item">Intagram Account ID</li>
            <li className="headerTable_item">Facebook Account ID</li>
            <li className="headerTable_item">Facebook Campaign ID</li>
            <li className="headerTable_item">Facebook Ad set ID</li>
            <li className="headerTable_item">TikTok Campaign ID</li>
            <li className="headerTable_item">TikTok Ad set ID</li>
            <li className="headerTable_item">Main image/video</li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item ">
              <button className="iconActionsNewMatrix2">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
                Remove
              </button>
            </li>
            <li className="contentTable_item">01</li>
            <li className="contentTable_item">Reporting label</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">9087774848444849</li>
            <li className="contentTable_item">8760873748484849</li>
            <li className="contentTable_item">608774845484849</li>
            <li className="contentTable_item">608774846084849</li>

            <li className="contentTable_item">765404846084849</li>
            <li className="contentTable_item">
              <button
                className="iconActionsNewMatrix2"
                onClick={() => setOpen(true)}>
                <span className="iconXaxis iconXaxis-plus"></span>
                Add asset
              </button>
            </li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item ">
              <button className="iconActionsNewMatrix2">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
                Remove
              </button>
            </li>
            <li className="contentTable_item">01</li>
            <li className="contentTable_item">Reporting label</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">9087774848444849</li>
            <li className="contentTable_item">8760873748484849</li>
            <li className="contentTable_item">608774845484849</li>
            <li className="contentTable_item">608774846084849</li>
            <li className="contentTable_item">765404846084849</li>
            <li className="contentTable_item">
              <button
                className="iconActionsNewMatrix2"
                onClick={() => setOpen(true)}>
                <span className="iconXaxis iconXaxis-plus"></span>
                Add asset
              </button>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  );
};

export default NewMatrixStep2;
