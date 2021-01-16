import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
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
  selectShowEPG,
  updatePlatforms,
  toggleShowEPG,
} from './MetaPropsSlice';

const GreenSwitch = withStyles({
  switchBase: {
    color: teal[300],
    '&$checked': {
      color: teal[500],
    },
    '&$checked + $track': {
      backgroundColor: teal[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export function MetaPropsDisplay() {
  const metaProps = useSelector(selectMetaProps);
  const platforms = useSelector(selectPlatforms);
  const selectedPlatforms = useSelector(selectSelectedPlatforms);
  const showEPG = useSelector(selectShowEPG);
  const dispatch = useDispatch();

  function selectionChanged(selected) {
    dispatch(updatePlatforms(selected))
  }

  function handleToggleClick() {
    dispatch(toggleShowEPG())
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <div style={{ alignItems: "center", display: "flex", flexGrow: 1 }}>
          <MultiSelectDialog
            names={platforms}
            selectedNames={selectedPlatforms}
            selectionChanged={selectionChanged} />

          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1} style={{ marginLeft: 20 }}>
              <Grid item>VOD</Grid>
              <Grid item>
                <GreenSwitch checked={showEPG ? true : false} onChange={() => handleToggleClick()} name="popmechBlip" />
              </Grid>
              <Grid item>EPG</Grid>
            </Grid>
          </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: 10}}>
                  <Typography  style={{fontSize: "1.0125rem", fontStyle: "italic", color: teal[500]}}>
                    Select metadata for EPG and VOD delivery to platforms
                  </Typography>
              </div>
          </div>
        </Toolbar>
      </AppBar>
      <MetaPropertiesTable
        data={{ metaProps, names: selectedPlatforms, hideEmptyProps : false }}
      />
    </div>
  );
}
