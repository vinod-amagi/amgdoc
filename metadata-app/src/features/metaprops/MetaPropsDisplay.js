import { useSelector, useDispatch } from 'react-redux';
import MetaPropertiesTable from './MetaPropsTable'
import MultiSelectDialog from './MultiSelectDialog'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from "@material-ui/core/Typography/Typography";

import {
  selectMetaProps,
  selectPlatforms,
  selectSelectedPlatforms,
  selectHideEmptyProps,
  updatePlatforms,
  toggleHideEmptyProps,
} from './MetapropsSlice';


export function MetaPropsDisplay() {
  const metaProps = useSelector(selectMetaProps);
  const platforms = useSelector(selectPlatforms);
  const selectedPlatforms = useSelector(selectSelectedPlatforms);
  const hideEmptyProps = useSelector(selectHideEmptyProps);
  const dispatch = useDispatch();

  function selectionChanged(selected) {
    dispatch(updatePlatforms(selected))
  }

  function handleToggleClick() {
    dispatch(toggleHideEmptyProps())
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MultiSelectDialog
            names={platforms}
            selectedNames={selectedPlatforms}
            selectionChanged={selectionChanged} />

          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1} style={{ marginLeft: 20 }}>
              <Grid item>Show All</Grid>
              <Grid item>
                <Switch checked={hideEmptyProps ? true : false} onChange={() => handleToggleClick()} name="popmechBlip" />
              </Grid>
              <Grid item>Hide Empty</Grid>
            </Grid>
          </Typography>

        </Toolbar>
      </AppBar>
      <MetaPropertiesTable
        data={{ metaProps, names: selectedPlatforms, hideEmptyProps }}
      />
    </div>
  );
}
