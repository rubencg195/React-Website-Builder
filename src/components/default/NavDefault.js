import React, { Component } from 'react'
import Actions from '../../actions';
import { connect } from 'react-redux';
import {NavBuilder} from '../builder';
let { toggleModal }  =  Actions.modalActions.methods;
let { changeModalContent }  =  Actions.modalActions.methods;

class NavDefault extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.props.onToggleModal();
    this.changeContent();
  }
  changeContent(){
    const contentModal = () => <NavBuilder />;
    this.props.onChangeModalContent(contentModal);
  }
  render() {
    return (
      <div className="hoverable" style={styles.main} onClick={this.openModal}>
        <img className="mx-auto" src="https://www.materialui.co/materialIcons/content/add_circle_white_192x192.png" alt=""  style={styles.icon} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapActionsToProps = {
  onToggleModal        : toggleModal,
  onChangeModalContent : changeModalContent,
};

export default connect(mapStateToProps, mapActionsToProps)(NavDefault);

const styles = {
    main: {
        height: 60,
        backgroundColor: '#4285F4',
        position: "relative",
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