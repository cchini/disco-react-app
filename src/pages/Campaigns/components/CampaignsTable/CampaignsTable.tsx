import React, { FC } from 'react';
import { Button } from '@components/index';
import { Campaign } from '@models/Campaigns.model';

interface CampaignsTableProps {
  data: Campaign[];
}

const CampaignsTable: FC<CampaignsTableProps> = props => {
  const { data } = props;
  return (
    <section className="table">
      <ul className="headerTable">
        <li className="headerTable_item">Status</li>
        <li className="headerTable_item">Actions</li>
        <li className="headerTable_item">ID</li>
        <li className="headerTable_item">Name</li>
        <li className="headerTable_item">Type</li>
        <li className="headerTable_item">Budget(USD)</li>
        <li className="headerTable_item">Date Start - Date End</li>
        <li className="headerTable_item">Last update</li>
      </ul>
      {data?.map(campaign => (
        <ul key={campaign?.id} className="contentTable">
          <li className="contentTable_item">{campaign?.status?.name}</li>
          <li className="contentTable_item">
            <Button>Edit</Button>
            <Button>Refresh</Button>
            <Button>View</Button>
            <Button>Publish</Button>
          </li>
          <li className="contentTable_item">{campaign?.id}</li>
          <li className="contentTable_item">{campaign?.name}</li>
          <li className="contentTable_item">Type</li>
          <li className="contentTable_item">{campaign?.budget}</li>
          <li className="contentTable_item">01/01/2022 - 30/09/2022</li>
          <li className="contentTable_item">Last modified</li>
        </ul>
      ))}
    </section>
  );
};

export default CampaignsTable;
