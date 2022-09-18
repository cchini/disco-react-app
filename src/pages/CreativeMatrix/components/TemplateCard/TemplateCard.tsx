import React, { FC } from 'react';
import { Button } from '@components/index';
import { TemplateMatrix } from '@models/creativeMatrix.model';

interface TemplateCardProps {
  data: TemplateMatrix[];
  openModal: () => void;
}

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data, openModal } = props;
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
            <Button>Select</Button>
            <Button onClick={() => openModal()}>Details</Button>
          </div>
          <p>{template.title}</p>
        </article>
      ))}
    </section>
  );
};

export default TemplateCard;
