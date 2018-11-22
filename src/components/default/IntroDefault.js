import React, { Component } from 'react'
import Actions from '../../actions';
import { connect } from 'react-redux';
import {IntroBuilder} from '../builder';
let { changeModalContent }  =  Actions.modalActions.methods;
let { toggleModal } = Actions.modalActions.methods;
const content = {
  title: "Change Intro Section",
  description: "Select Your Preferred Intro Section"
};

class IntroDefault extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.props.onToggleModal();
    this.changeContent();
  }
  changeContent(){
    const contentModal = () => <IntroBuilder />;
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
const mapStateToProps = state => ({
  modal: state.modal
});

const mapActionsToProps = {
  onToggleModal: toggleModal,
  onChangeModalContent : changeModalContent,
};

export default connect(mapStateToProps, mapActionsToProps)(IntroDefault);

const styles = {
  main: {
    height: "40vh",
    backgroundColor: '#90caf9',
    position: "relative",
    top: 0,
    left: 0

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
  },
};