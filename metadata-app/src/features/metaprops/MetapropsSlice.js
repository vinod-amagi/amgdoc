import { createSlice } from '@reduxjs/toolkit';
import {MetaProps, Platforms} from './MetaProps'

export const metapropsSlice = createSlice({
  name: 'metaprops',
  initialState: {
    value: 0,
    metaProps: MetaProps(),
    platforms: Platforms(),
    selectedPlatforms : ["Samsung", "Roku"],
    hideEmptyProps: true,
  },
  reducers: {
    update: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    updatePlatforms: (state, action) => {
      state.selectedPlatforms = action.payload;
    },
    toggleHideEmptyProps: (state) => {
      state.hideEmptyProps = !state.hideEmptyProps
    }
  },
});

export const { update, updateByType, updatePlatforms, toggleHideEmptyProps } = metapropsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(updateByType(amount));
  }, 1000);
};

export const updatePlatformsAsync = platforms => dispatch => {
    dispatch(updatePlatforms(platforms));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.metaprops.value;
export const selectMetaProps = state => state.metaprops.metaProps;
export const selectPlatforms = state => state.metaprops.platforms;
export const selectSelectedPlatforms = state => state.metaprops.selectedPlatforms;
export const selectHideEmptyProps = state => state.metaprops.hideEmptyProps;

export default metapropsSlice.reducer;
