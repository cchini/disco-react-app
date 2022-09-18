import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@components/index';
import CampaignsTable from './components/CampaignsTable/CampaignsTable';
import TemplateCard from './components/TemplateCard/TemplateCard';
import { DiscoPaths } from '@routes/models/path.model';
import { data as dataTemplate } from '@mocks/templateCampaigns.mock';
import { Campaign } from '@models/campaigns.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { getAllCampaigns } from '@services/campaigns.service';
import { useAsync } from '@hooks/useAsyncAxios';
import { allCampaignsAdapter } from '@adapters/campaign.adapter';
import './campaigns.scss';

const Campaigns = () => {
  const navigate = useNavigate();
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getAllCampaigns());
  useAsync(
    getApiData,
    response => setCampaignList(allCampaignsAdapter(response)),
    () => {},
  );

  if (loading) return <div>Loading</div>;

  return (
    <>
      <section>
        <h1>Campaigns</h1>
        {/* Template section */}
        <section>
          <h2>Start with a Template</h2>
          <TemplateCard
            openModal={value => {
              // setOpen(true);
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
          <CampaignsTable data={campaignList} />
        </section>
      </section>
    </>
  );
};

export default Campaigns;
