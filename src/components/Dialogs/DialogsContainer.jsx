import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
