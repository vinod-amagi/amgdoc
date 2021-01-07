import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout'
import MainSection from './MainSection'
import Header from './Header'
import { MetaPropsDisplay } from '../features/metaprops/MetaPropsDisplay'

class Area extends React.Component {

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <Layout>
            <Header/>
            <MainSection>
              <MetaPropsDisplay />
            </MainSection>
          </Layout>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

function mapStateToProp(state) {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Area);
