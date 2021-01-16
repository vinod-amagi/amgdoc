import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CheckboxList from './CheckboxList'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { teal } from '@material-ui/core/colors';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        width: 500
    },
    dialog: {
        position: 'absolute',
        left: 10,
        top: 75
      }
});

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#FFFFFF',
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);

class MultiSelectDialog extends React.Component {

    state = { open: false }

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        const { classes, names, selectedNames, selectionChanged } = this.props;

        return (
            <div>
                <ColorButton onClick={this.handleClickOpen} variant="outlined" >
                    Select Platforms
                    <KeyboardArrowDown onClick={this.handleClickOpen} style={{cursor: "pointer"}}/>
                </ColorButton>

                <Dialog classes={{paper: classes.dialog}} 
                        disableEscapeKeyDown 
                        scroll='paper'
                        open={this.state.open} 
                        onClose={this.handleClose}>
                    <DialogTitle>Platforms</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <CheckboxList
                                names={names}
                                selectedNames={selectedNames}
                                selectionChanged={selectionChanged} />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}



MultiSelectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiSelectDialog);