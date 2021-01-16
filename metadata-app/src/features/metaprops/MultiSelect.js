import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
            width: 500,
        },
    },
};

class MultipleSelect extends React.Component {
    state = {
        selectedNames : this.props.selectedNames,
    }

    render() {
        const { classes, names, selectionChanged } = this.props;

        console.log("Names " + JSON.stringify(names))
        
        const handleChange = (event) => {
            const names = event.target.value
            const selectedNames = names.map((s) => {return s})
            this.setState({selectedNames})
            selectionChanged(names)
        };       

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Platforms</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={this.state.selectedNames}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.selectedNames.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }

}

MultipleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultipleSelect);