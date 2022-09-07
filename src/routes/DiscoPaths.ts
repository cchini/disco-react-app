import { DiscoPaths, DiscoPages } from "./models/Paths";
import Home from "../pages/Home/Home";
import AccountSetup from "../pages/AccountSetup/AccountSetup";
import Campaigns from "../pages/Campaigns/Campaigns";
import CreativeMatrix from "../pages/CreativeMatrix/CreativeMatrix";

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
    component: Campaigns,
    path: DiscoPaths.Campaigns,
  },
  {
    component: CreativeMatrix,
    path: DiscoPaths.CreativeMatrix,
  },
];
