import React, { FC } from 'react';
import { PagePlatform, RRSS } from '@models/public.model';
import { facebook, instagram, tiktok, sona } from '@mocks/placements.mock';

interface TemplatePlatformProps {
  data?: PagePlatform[];
}

const TemplatePlatform: FC<TemplatePlatformProps> = props => {
  const { data } = props;

  const defineRRSS = (platform: string) => {
    switch (platform) {
      case RRSS.Facebook:
        return facebook;
      case RRSS.Instagram:
        return instagram;
      case RRSS.TikTok:
        return tiktok;
      case RRSS.Sona:
        return sona;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="rrssItem">
        <h4>Name</h4>
        <section className="content">
          <div className="formats">
            <p>Image</p>
            <p>Video</p>
            <p>Carousel</p>
          </div>
          <div className="placements">
            <ul className="placementsList">
              <li className="placementsList_item">
                Placement name
                <div className="placements_tooltip">
                  <figure className="imageTooltip">
                    <img />
                  </figure>
                  <div className="info">
                    <h5>About this placement</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit tempora expedita nobis sapiente...
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
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default TemplatePlatform;
