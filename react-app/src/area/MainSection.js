import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";

const styles = (theme) => ({
  root:{
  },
  paper:{
    minHeight: "100vh",
    width: "98%",
    backgroundColor: "#f0f0f0",
    padding: "15px 15px"
  }
})
class MainSection extends React.Component{
  render(){
    const {classes} = this.props;
    return (<Paper className={classes.paper}>
      {this.props.children}
    </Paper>)
  }
}
export default withStyles(styles)(MainSection)