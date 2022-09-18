import React from 'react';

export enum DiscoPaths {
  Home = 'home',
  AccountSetup = 'account-setup',
  CreativeMatrix = 'creative-matrix',
  Campaigns = 'campaigns',
  NewMatrixStep1 = 'creative-matrix/new-1',
  NewMatrixStep2 = 'creative-matrix/new-2',
  NewCampaignsStep1 = 'campaigns/new-1',
  NewCampaignsStep2 = 'campaigns/new-2',
}

export interface DiscoPages {
  component: React.ComponentType;
  path: string;
}
