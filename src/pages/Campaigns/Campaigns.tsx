import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@components/index';
import CampaignsTable from './components/CampaignsTable/CampaignsTable';
import TemplateCard from './components/TemplateCard/TemplateCard';
import { DiscoPaths } from '@routes/models/path.model';
import { data as dataTemplate } from '@mocks/templateCampaigns.mock';
import useDataCampaigns from './hooks/useDataCampaigns';
import './campaigns.scss';

const Campaigns = () => {
  const navigate = useNavigate();
  const [campaignList, matrixList, loading] = useDataCampaigns();

  if (loading) return <div>Loading</div>;

  // options modal - creative matrix selector
  console.debug(matrixList);

  return (
    <section>
      <h1>Campaigns</h1>
      <section>
        <h2>Start with a Template</h2>
        <TemplateCard data={dataTemplate} />
      </section>
      <section>
        <div className="navTable">
          <div>
            <Input placeholder="Search" />
            <Button>Search</Button>
          </div>
          <Button onClick={() => navigate(`/${DiscoPaths.NewCampaignsStep1}`)}>
            New
          </Button>
        </div>
        <CampaignsTable data={campaignList} />
      </section>
    </section>
  );
};

export default Campaigns;
