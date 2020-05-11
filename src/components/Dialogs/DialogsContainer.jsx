import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};
let mapDispatchToProps = dispatch => {
	return {
		updateNewMessageBody: () => {
			dispatch(sendMessageCreator());
		},
		sendMessage: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
	}
};

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;
