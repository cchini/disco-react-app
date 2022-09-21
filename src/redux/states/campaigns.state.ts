import { createSlice } from '@reduxjs/toolkit';
import { ReduxCampaigns, Rule } from '@models/campaigns.model';
import { emptyRule } from '@mocks/rules.mock';

export const CampaignsEmptyState: ReduxCampaigns = {
  rules: [emptyRule],
};

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: CampaignsEmptyState,
  reducers: {
    modifyRules: (state, action) => ({
      ...state,
      rules: action.payload,
    }),
    resetCampaigns: () => CampaignsEmptyState,
  },
});

export const { modifyRules, resetCampaigns /* , addRule */ } =
  campaignsSlice.actions;

export default campaignsSlice.reducer;
