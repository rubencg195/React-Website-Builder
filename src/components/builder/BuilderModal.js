import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';
import Actions from '../../actions';
let { toggleModal }  =  Actions.modalActions.methods;
let { addSection }  =  Actions.structureActions.methods;


class BuilderModal extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.openModal = this.openModal.bind(this);
  }
  onSave(){
    this.props.onChangeSection({
      type: "structure:widgets:NAVBAR",
      widget: () => <h1 className="text-center">MI AMORCITO ES PAOLA</h1>
    });
    this.props.onToggleModal();
  }
  openModal() {
    let {changeContent, toggle} = this.props;
    // changeContent(content);
    // toggle();
    console.log('====================================');
    console.log("MODAL Props ", this.props);
    console.log('====================================');
    this.props.onToggleModal();
  }
  render() {
    let { title, description, Builder } = this.props.content ? this.props.content : {title: "Title", description : "Description" } ;
    return (
      <Modal
        isOpen={this.props.modal.openModal}
        toggle={this.openModal} 
        centered>
        <ModalHeader
          toggle={this.openModal}>
          Lets Build a
        </ModalHeader>
        <ModalBody>
          {(this.props.modal && this.props.modal.modalContent) ? this.props.modal.modalContent() : null}
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
   content : state.modalContent
});
const mapActionsToProps = {
  onToggleModal : toggleModal,
  onChangeSection : addSection,
};
export default connect(mapStateToProps, mapActionsToProps)(BuilderModal);
