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
    const stringIcon = 'iconXasis iconXasis-';
    if (plataform === 'KPI') {
      return;
      `${stringIcon}filter`;
    }
    if (plataform === 'Audiences') {
      return `${stringIcon}users`;
    }
    if (plataform === 'Location') {
      return `${stringIcon}map-marked-alt`;
    }
    if (plataform === 'WeekDays') {
      return `${stringIcon}calendar`;
    }
    if (plataform === 'DayPart') {
      return `${stringIcon}clock`;
    }
  };
  return (
    <section className="cardsContent cardsTamplatesCampaigns">
      {data?.map(template => (
        <article className="cardRrss">
          <ul>
            {template.platforms.map(
              platform =>
                platform.enabled ?? (
                  <li>
                    <span className={cx(iconsPlataform(platform.name))} />
                  </li>
                ),
            )}
          </ul>
          <ul>
            {template.platforms.map(
              platform => platform.enabled ?? <li>{platform.name}</li>,
            )}
          </ul>
          <div>
            <Button onClick={() => navigate(`/${DiscoPaths.NewCampaigns}`)}>
              Select
            </Button>
            <Button>Details</Button>
          </div>
          <p>{template.title}</p>
        </article>
      ))}
    </section>
  );
};

export default TemplateCard;
