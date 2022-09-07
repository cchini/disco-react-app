import React from "react";

export enum DiscoPaths {
  Home = "home",
  AccountSetup = "account-setup",
  CreativeMatrix = "creative-matrix",
  Campaigns = "campaigns",
}

export interface DiscoPages {
  component: React.ComponentType;
  path: string;
}
