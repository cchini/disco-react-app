import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@components/index';
import CampaignsTable from './components/CampaignsTable/CampaignsTable';
import TemplateCard from './components/TemplateCard/TemplateCard';
import { DiscoPaths } from '@routes/models/path.model';
import { data as dataTemplate } from '@mocks/templateCampaigns.mock';
import './campaigns.scss';

const Campaigns = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Modal detail: Template matrix selected */}
      <section>
        <h1>Campaigns</h1>
        {/* Template section */}
        <section>
          <h2>Start with a Template</h2>
          <TemplateCard
            openModal={value => {
              setOpen(true);
            }}
            data={dataTemplate}
          />
        </section>
        {/* Creative matrix section */}
        <section>
          <div className="navTable">
            <div>
              <Input placeholder="Search" />
              <Button>Search</Button>
            </div>
            <Button
              onClick={() => navigate(`/${DiscoPaths.NewCampaignsStep1}`)}>
              New
            </Button>
          </div>
          <CampaignsTable />
        </section>
      </section>
    </>
  );
};

export default Campaigns;
