export interface Page {
  id: string;
  accountPlatformId: string;
  pageId: string;
  pageName: string;
  platform: {
    name: string;
    code: string;
    enabled: boolean;
  };
}

export interface Platform {
  id: string;
  accountId: string;
  businessManagerId: string;
  businessManagerName: string;
  statusId: string;
  platformOwnerId: string;
  status: {
    id: string;
    name: string;
    code: string;
  };
  platformOwner: {
    id: string;
    name: string;
    code: string;
  };
  pages: Page[];
}

export interface Account {
  id: string;
  clientId: string;
  name: string;
  deleted: boolean;
  countryName: string;
  platforms: Platform[];
}

export interface AccountOption {
  account: Account[];
  label: string;
  value: string;
}

export interface AccountSelected {
  account: Account;
  label: string;
  value: string;
}

export interface ReduxAccount {
  accounts: AccountOption[];
  account: AccountSelected;
}
