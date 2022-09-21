import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Campaign } from '@models/Campaigns.model';

interface CampaignsTableProps {
  data: Campaign[];
}

const CampaignsTable: FC<CampaignsTableProps> = props => {
  const { data } = props;
  return (
    <section className="table">
      <ul className="headerTable">
        <li className="headerTable_item headerTable_item__status">Status</li>
        <li className="headerTable_item headerTable_item__actions">Actions</li>
        <li className="headerTable_item">ID</li>
        <li className="headerTable_item">Name</li>
        <li className="headerTable_item">Type</li>
        <li className="headerTable_item">Budget(USD)</li>
        <li className="headerTable_item">Date Start - Date End</li>
        <li className="headerTable_item">Last update</li>
      </ul>
      {data?.map(campaign => (
        <ul key={campaign?.id} className="contentTable">
          <li className="contentTable_item contentTable_item__status">
            {campaign?.status?.name}
          </li>
          <li className="contentTable_item contentTable_item__actions">
            <button className="iconActionsCampaign">
              <span className="iconXaxis iconXaxis-edit"></span>
              Edit
            </button>
            <button className="iconActionsCampaign">
              <span className="iconXaxis iconXaxis-edit"></span>
              Refresh
            </button>
            <button className="iconActionsCampaign">
              <span className="iconXaxis iconXaxis-edit"></span>
              View
            </button>
            <button className="iconActionsCampaign">
              <span className="iconXaxis iconXaxis-edit"></span>
              Publish
            </button>
          </li>
          <li className="contentTable_item">{campaign?.id}</li>
          <li className="contentTable_item">{campaign?.name}</li>
          <li className="contentTable_item">{campaign?.typeDescription}</li>
          <li className="contentTable_item">{campaign?.budget}</li>
          <li className="contentTable_item">{`${dayjs(
            campaign?.startDate,
          ).format('DD/MM/YYYY')} - ${dayjs(campaign?.endDate).format(
            'DD/MM/YYYY',
          )}`}</li>
          <li className="contentTable_item">
            {dayjs(campaign?.modified).format('MMM DD, YYYY HH:mm A')}
          </li>
        </ul>
      ))}
    </section>
  );
};

export default CampaignsTable;
