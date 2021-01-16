import React from "react";

class Layout extends  React.Component{
  state = {
    openSideDrawer: false,
    tab: 0,
  };
  
  handleDrawerOpen = () => {
    this.setState({openSideDrawer: !this.state.openSideDrawer});
  };


  render(){
    return <div style={{backgroundColor: "#fff"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{position: "relative", width: "100%"}}>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}
export default Layout;