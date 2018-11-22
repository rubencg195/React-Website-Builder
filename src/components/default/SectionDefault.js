import React, { Component } from 'react'
import { connect } from 'react-redux';
import Actions from '../../actions';
import {SectionBuilder} from '../builder';
let { toggleModal }  =  Actions.modalActions.methods;
let { changeModalContent }  =  Actions.modalActions.methods;


const content = {
  title: "Change Section",
  description: "Select Your Preferred Section",
  Builder: SectionBuilder
};

class SectionDefault extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.props.onToggleModal();
    this.changeContent();
  }
  changeContent(){
    const contentModal = () => <SectionBuilder />;
    this.props.onChangeModalContent(contentModal);
  }
  render() {
    return (
      <div className="hoverable" style={styles.main} onClick={this.openModal}>
        <img src="https://www.materialui.co/materialIcons/content/add_circle_white_192x192.png" alt="" style={styles.icon} />
      </div>
    )
  }
}

const styles = {
  main: {
    height: 200,
    backgroundColor: '#42a5f5',
    position: "relative",
    marginBottom: "1rem"
  },
  icon: {
    height: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",

    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};
const mapStateToProps = state => ({
  modal: state.modal
});

const mapActionsToProps = {
  onToggleModal : toggleModal,
  onChangeModalContent : changeModalContent,
};

export default connect(mapStateToProps, mapActionsToProps)(SectionDefault);