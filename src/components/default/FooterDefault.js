import React, { Component } from 'react'
import Actions from '../../actions';
import { connect } from 'react-redux';
let { toggleModal } = Actions.modalActions.methods;

const content = {
	title: "Change Footer",
	description: "Select Your Preferred Footer"
};

class FooterDefault extends Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		this.props.onToggleModal();
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
};

export default connect(mapStateToProps, mapActionsToProps)(FooterDefault);

const styles = {
	main: {
		height: 100,
		backgroundColor: '#4285F0',
		position: "relative",
		marginTop: "2rem",
		marginBottom: "5px"
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