import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderChildren } from '../../utils';

class MainDefault extends Component {
  render() {
    return (
      <main className="container" style={{ marginTop: "1rem", marginBottom: "1rem", padding:"1rem"}} >
           {renderChildren(this.props.Children)}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  structure : state.structure
});

const mapActionsToProps = {
  
};
export default connect(mapStateToProps, mapActionsToProps)(MainDefault);

