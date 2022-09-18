import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/index';
import { TemplateCampaigns } from '@models/campaigns.model';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateCardProps {
  data: TemplateCampaigns[];
  openModal?: (value: TemplateCampaigns) => void;
}

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data, openModal } = props;
  const navigate = useNavigate();
  return (
    <section className="cardsContent">
      {data?.map(template => (
        <article className="cardRrss">
          <ul>
            {template.platforms.map(
              platform => platform.enabled ?? <li>{platform.name}</li>,
            )}
          </ul>
          <div>
            <Button onClick={() => navigate(`/${DiscoPaths.NewMatrixStep2}`)}>
              Select
            </Button>
            <Button onClick={() => openModal(template)}>Details</Button>
          </div>
          <p>{template.title}</p>
        </article>
      ))}
    </section>
  );
};

export default TemplateCard;
