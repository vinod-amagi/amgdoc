import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import { connect } from "react-redux";
import amagiLogo from "../amagi.svg"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    releaseInfo: {
        display: "flex", flexDirection: "column", alignItems: "center", padding: 10
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    subscriptionMenu: {
        top: "-10px !important",
        left: "unset !important"
    },
    logoutMenu: {
        top: "-10px !important",
        right: "0px !important",
        left: "unset !important"
    },
    logout: {
        color: theme.palette.error.main
    },
    subscription: {
        color: theme.palette.primary.main
    }

});

class Header extends React.Component {
    state = {
        openUserMenu: false,
        openChannelMenu: false,
        anchorEl: null,
    };

    channelMenuSelected = (subscription) => {
        this.setState({ openChannelMenu: false });
    }

    handleMenu = () => {
        this.setState({ openUserMenu: true });
    };

    handleClose = () => {
        this.setState({ openUserMenu: false });
    };

    handleChannelMenu = (e) => {
        this.setState({ openChannelMenu: true });
        this.setState({ anchorEl: e.currentTarget });
    };

    handleChannelClose = () => {
        this.setState({ openChannelMenu: false });
    };

    render() {
        const { classes } = this.props;

        let { openSideDrawer } = this.state;

        return (
            <div className={classes.root}>
                <AppBar color={"secondary"} position={"relative"} className={classNames(classes.appBar, { [classes.appBarShift]: openSideDrawer })}>
                    <Toolbar style={{ minHeight: 40 }}>

                        <div style={{ alignItems: "center", display: "flex", flexGrow: 1 }}>
                            <img src={amagiLogo} style={{ marginBottom: "-4px", marginRight: "5px" }} alt={"Amagi logo"} />
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className={classes.releaseInfo}>
                                <Typography variant={"caption"}>ⒸAmagi Media Labs Pvt Ltd. 2020</Typography>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProp(state) {
    return {
    }
}

function mapDispatchToProp(dispatch) {
    return {
    }
}


export default withStyles(styles)(connect(mapStateToProp, mapDispatchToProp)(Header));
