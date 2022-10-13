import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../constants';
import {setLoading} from './slice/manageSlice';
const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
  prepareHeaders: headers => {
    const Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmtheS5zZXZpbG1pc0BnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYnVya2F5c2V2aWxtaXMiLCJpYXQiOjE2NjUzMjc5MjgsImV4cCI6MTY2NTc1OTkyOH0.jfcITQNZRxcTM6LrhHw6CSjcUO3GVl-lvWbvnhnVpOk';
    headers.set('authorization', `Bearer ${Token}`);
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  api.dispatch(setLoading(true));
  let result = await baseQuery(args, api, extraOptions);
  api.dispatch(setLoading(false));
  if (result.error?.status === 'FETCH_ERROR') {
    console.log('NETWORK OR SERVER PROBLEM');
  }
  if (result.error?.status === 401) {
    console.log('TOKEN ERROR USER LOGOUT');
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
