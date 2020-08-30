import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  const messagesElements = state.messages.map((m) => <Message message={m.message} />);

  const newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>

        <div>
          <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message" />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
