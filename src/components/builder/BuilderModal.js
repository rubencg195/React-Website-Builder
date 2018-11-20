import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';
import Actions from '../../actions';
let { toggleModal }  =  Actions.modalActions.methods;


class BuilderModal extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  onSave(){

  }
  openModal() {
    let {changeContent, toggle} = this.props;
    // changeContent(content);
    // toggle();
    console.log('====================================');
    console.log("SectionDefault Props", this.props, "Section Modal", this.props.modal.openModal);
    console.log('====================================');
    this.props.onToggleModal();
  }
  render() {

    console.log('====================================');
    console.log("MODAL ", this.props.modal.openModal);
    console.log('====================================');

    let { title, description, Builder } = this.props.content ? this.props.content : {title: "Title", description : "Description" } ;
    return (
      <Modal
        isOpen={this.props.modal.openModal}
        toggle={this.openModal} 
        centered>
        <ModalHeader
          toggle={this.openModal}>
          {title}
        </ModalHeader>
        <ModalBody>
          {/* <Builder /> */}
        </ModalBody> 
        <ModalFooter>
          <Button
            color="secondary"
            onClick={this.openModal}>
            Close
          </Button>
          <Button
            color="primary" 
            onClick={() => this.onSave()}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
   modal: state.modal,
});
const mapActionsToProps = {
  onToggleModal : toggleModal,
};
export default connect(mapStateToProps, mapActionsToProps)(BuilderModal);
