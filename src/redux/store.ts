import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from './states/account.state';
import { ReduxAccount } from '@models/account.model';
import { matrixSlice } from './states/creativeMatrix.state';
import { ReduxMatrix } from '@models/creativeMatrix.model';

export interface AppStore {
  account: ReduxAccount;
  matrix: ReduxMatrix;
}

export default configureStore<AppStore>({
  reducer: {
    account: accountsSlice.reducer,
    matrix: matrixSlice.reducer,
  },
});
