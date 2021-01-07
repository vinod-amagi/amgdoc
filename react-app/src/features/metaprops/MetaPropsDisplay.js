import { useSelector, useDispatch } from 'react-redux';
import MetaPropertiesTable from './MetaPropsTable'
import MultiSelectDialog from './MultiSelectDialog'

import {
  selectMetaProps,
  selectPlatforms,
  selectSelectedPlatforms,
  updatePlatforms,
} from './MetapropsSlice';

export function MetaPropsDisplay() {
  const metaProps = useSelector(selectMetaProps);
  const platforms = useSelector(selectPlatforms);
  const selectedPlatforms = useSelector(selectSelectedPlatforms);
  const dispatch = useDispatch();

  function selectionChanged (selected) {
    console.log("selectionChanged " + JSON.stringify(selected))
    dispatch(updatePlatforms(selected))
  }
  console.log("selectedPlatforms " + JSON.stringify(selectedPlatforms))

  return (
    <div>
      <MultiSelectDialog
      names={platforms}
      selectedNames={selectedPlatforms}
      selectionChanged={selectionChanged}/>

      <MetaPropertiesTable
      data={{metaProps, names: selectedPlatforms}}
      />
    </div>
  );
}
