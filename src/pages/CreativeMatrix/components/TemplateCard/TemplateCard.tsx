import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { Button } from '@components/index';
import { TemplateMatrix } from '@models/creativeMatrix.model';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateCardProps {
  data: TemplateMatrix[];
  openModal: (value: TemplateMatrix) => void;
}

const iconsPlataform = plataform => {
  const stringIcon = 'iconXaxis iconXaxis-';
  if (plataform === 'INSTAGRAM') {
    return `${stringIcon}instagram`;
  }
  if (plataform === 'FACEBOOK') {
    return `${stringIcon}facebook-f`;
  }
  if (plataform === 'MESSENGER') {
    return `${stringIcon}facebook-messenger`;
  }
  if (plataform === 'TIKTOK') {
    return `${stringIcon}tiktok`;
  }
  if (plataform === 'SONA') {
    return `${stringIcon}tiktok`;
  }
};

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data, openModal } = props;
  const navigate = useNavigate();
  return (
    <section className="cardsContent cardsTamplatesCreativeMatrix">
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
              onClick={() => navigate(`/${DiscoPaths.NewMatrixStep2}`)}
              className="optionsTemplate_btn">
              Select
            </Button>
            <Button
              onClick={() => openModal(template)}
              className="optionsTemplate_btn"
              hierarchy="secondary">
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
