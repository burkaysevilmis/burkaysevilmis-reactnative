import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IManageModel {
  snackBarText: string;
  loading: boolean;
}

const initialState: IManageModel = {
  snackBarText: '',
  loading: false,
};

export const manageSlice = createSlice({
  name: 'manage',
  initialState,
  reducers: {
    setSnackBarText: (state, action) => {
      state.snackBarText = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const {setSnackBarText, setLoading} = manageSlice.actions;
export default manageSlice.reducer;
