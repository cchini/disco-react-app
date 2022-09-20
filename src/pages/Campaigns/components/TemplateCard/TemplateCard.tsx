import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { Button } from '@components/index';
import { TemplateCampaigns } from '@models/campaigns.model';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateCardProps {
  data: TemplateCampaigns[];
}

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data } = props;
  const navigate = useNavigate();

  const iconsPlataform = plataform => {
    console.log('platform: ', plataform);
    const stringIcon = 'iconXaxis iconXaxis-';
    if (plataform === 'KPI') {
      return `${stringIcon}filter`;
    }
    if (plataform === 'Audiences') {
      return `${stringIcon}users`;
    }
    if (plataform === 'Location') {
      return `${stringIcon}map-marked-alt`;
    }
    if (plataform === 'Week days') {
      return `${stringIcon}calendar`;
    }
    if (plataform === 'Days part') {
      return `${stringIcon}clock`;
    }
  };
  return (
    <section className="cardsContent cardsTamplatesCampaigns">
      {data?.map(template => (
        <article className="cardsTemplates">
          <ul className="listIconsTemplates">
            {template.platforms.map(
              platform =>
                platform.enabled ?? (
                  <li className="listIconsTemplates_item">
                    <span className={cx(iconsPlataform(platform?.code))}></span>
                  </li>
                ),
            )}
          </ul>
          <div className="optionsTemplate">
            <Button
              onClick={() => navigate(`/${DiscoPaths.NewCampaigns}`)}
              className="optionsTemplate_btn">
              Select
            </Button>
            <Button hierarchy="secondary" className="optionsTemplate_btn">
              Details
            </Button>
          </div>
          <h3 className="cardsTemplates_title">{template.title}</h3>
        </article>
      ))}
    </section>
  );
};

export default TemplateCard;
