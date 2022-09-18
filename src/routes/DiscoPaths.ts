import { DiscoPaths, DiscoPages } from './models/path.model';
import Home from '../pages/Home/Home';
import AccountSetup from '../pages/AccountSetup/IntegratedAccount';
import Campaigns from '../pages/Campaigns/Campaigns';
import NewCampaignsStep1 from '../pages/Campaigns/NewCampaigns/NewCampaignsStep1';
import NewCampaignsStep2 from '../pages/Campaigns/NewCampaigns/NewCampaignsStep2';
import CreativeMatrix from '../pages/CreativeMatrix/CreativeMatrix';
import NewMatrixStep1 from '../pages/CreativeMatrix/NewMatrix/NewMatrixStep1';
import NewMatrixStep2 from '../pages/CreativeMatrix/NewMatrix/NewMatrixStep2';

export const discoPaths: DiscoPages[] = [
  {
    component: Home,
    path: DiscoPaths.Home,
  },
  {
    component: AccountSetup,
    path: DiscoPaths.AccountSetup,
  },

  {
    component: CreativeMatrix,
    path: DiscoPaths.CreativeMatrix,
  },
  {
    component: NewMatrixStep1,
    path: DiscoPaths.NewMatrixStep1,
  },
  {
    component: NewMatrixStep2,
    path: DiscoPaths.NewMatrixStep2,
  },
  {
    component: Campaigns,
    path: DiscoPaths.Campaigns,
  },
  {
    component: NewCampaignsStep1,
    path: DiscoPaths.NewCampaignsStep1,
  },
  {
    component: NewCampaignsStep2,
    path: DiscoPaths.NewCampaignsStep2,
  },
];
