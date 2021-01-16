import { configureStore } from '@reduxjs/toolkit';
import metapropsReducer from '../features/metaprops/MetaPropsSlice';

export default configureStore({
  reducer: {
    metaprops: metapropsReducer,
  },
});
