import React from 'react';
import { Button, Input } from '@components/index';
import './creativeMatrix.scss';

const CreativeMatrix = () => {
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
                <Button>Details</Button>
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
