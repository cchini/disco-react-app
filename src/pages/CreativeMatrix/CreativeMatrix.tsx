import React, { useState } from 'react';
import { Button, Input, Modal } from '@components/index';
import './creativeMatrix.scss';

const CreativeMatrix = () => {
  const [open, setOpen] = useState(false);
  const cardsTemplate = [
    {
      rrss: [
        {
          name: 'facebook',
          exists: true,
        },
        {
          name: 'instagram',
          exists: true,
        },
        {
          name: 'messenger',
          exists: true,
        },
        {
          name: 'tiktok',
          exists: true,
        },
        {
          name: 'sona',
          exists: true,
        },
      ],
      title: 'All channels (FB & IG, TikTok, SONA)',
    },
    {
      rrss: [
        {
          name: 'facebook',
          exists: true,
        },
        {
          name: 'instagram',
          exists: true,
        },
        {
          name: 'messenger',
          exists: true,
        },
        {
          name: 'tiktok',
          exists: true,
        },
        {
          name: 'sona',
          exists: true,
        },
      ],
      title: 'Facebook & Instagram',
    },
    {
      rrss: [
        {
          name: 'facebook',
          exists: true,
        },
        {
          name: 'instagram',
          exists: true,
        },
        {
          name: 'messenger',
          exists: true,
        },
        {
          name: 'tiktok',
          exists: true,
        },
        {
          name: 'sona',
          exists: true,
        },
      ],
      title: 'SONA',
    },
    {
      rrss: [
        {
          name: 'facebook',
          exists: true,
        },
        {
          name: 'instagram',
          exists: true,
        },
        {
          name: 'messenger',
          exists: true,
        },
        {
          name: 'tiktok',
          exists: true,
        },
        {
          name: 'sona',
          exists: true,
        },
      ],
      title: 'TikTok',
    },
    {
      rrss: [
        {
          name: 'facebook',
          exists: true,
        },
        {
          name: 'instagram',
          exists: true,
        },
        {
          name: 'messenger',
          exists: true,
        },
        {
          name: 'tiktok',
          exists: true,
        },
        {
          name: 'sona',
          exists: true,
        },
      ],
      title: 'Facebook, Instagram & SONA',
    },
  ];
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
      <h1>Creative Matrix</h1>

      {/* Sección de cards de redes sociales */}
      <section>
        <h2>Start with a Template</h2>
        <section className="cardsContent">
          {cardsTemplate.map(element => (
            <article className="cardRrss">
              <ul>
                {element.rrss.map(
                  rrssType => rrssType.exists ?? <li>{rrssType.name}</li>,
                )}
              </ul>
              <div>
                <Button>Select</Button>
                <Button onClick={() => setOpen(true)}>Details</Button>
              </div>
              <p>{element.title}</p>
            </article>
          ))}
        </section>
      </section>

      {/* Sección tabla */}
      <section>
        <div className="navTable">
          <div>
            <Input placeholder="Search" />
            <Button>Search</Button>
          </div>
          <Button>New</Button>
        </div>

        <section className="table">
          <ul className="headerTable">
            <li className="headerTable_item">ID</li>
            <li className="headerTable_item">Name</li>
            <li className="headerTable_item">Type</li>
            <li className="headerTable_item">Status</li>
            <li className="headerTable_item">Last update</li>
            <li className="headerTable_item">Actions</li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item">021</li>
            <li className="contentTable_item">2022 May Getir All Channels</li>
            <li className="contentTable_item">
              All channels (FB & IG, TikTok, SONA)
            </li>
            <li className="contentTable_item">Active</li>
            <li className="contentTable_item">Mar 29, 202211:20 AM</li>
            <li className="contentTable_item">
              <Button>Edit</Button>
              <Button>Refresh</Button>
            </li>
          </ul>
          <ul className="contentTable">
            <li className="contentTable_item">022</li>
            <li className="contentTable_item">2022 May Getir All Channels</li>
            <li className="contentTable_item">Facebook & Instagram</li>
            <li className="contentTable_item">Active</li>
            <li className="contentTable_item">Mar 29, 202211:20 AM</li>
            <li className="contentTable_item">
              <Button>Edit</Button>
              <Button>Refresh</Button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default CreativeMatrix;
