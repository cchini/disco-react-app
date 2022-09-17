import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from './states/account.state';
import { ReduxAccount } from '@models/account.model';

export interface AppStore {
  account: ReduxAccount;
}

export default configureStore<AppStore>({
  reducer: {
    account: accountsSlice.reducer,
  },
});
