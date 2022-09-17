import { Account, ReduxAccount } from '@models/account.model';
import { createSlice } from '@reduxjs/toolkit';

export const AccountsEmptyState: ReduxAccount = {
  account: null,
  accounts: [],
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: AccountsEmptyState,
  reducers: {
    modifyAccounts: (state, action) => {
      const listAccounts = action.payload;
      const response = listAccounts?.map((acc: Account) => {
        return { account: acc, label: acc?.name, value: acc.id };
      });
      return { ...state, accounts: response };
    },
    resetAccounts: () => AccountsEmptyState,
    modifyAccount: (state, action) => ({ ...state, account: action.payload }),
  },
});

export const { modifyAccounts, resetAccounts, modifyAccount } =
  accountsSlice.actions;

export default accountsSlice.reducer;
