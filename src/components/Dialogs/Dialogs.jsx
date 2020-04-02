import React, { Component } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogData = [
  { name: "John", id: 1 },
  { name: "Tom", id: 2 },
  { name: "Bill", id: 3 },
  { name: "Adam", id: 4 },
  { name: "Steve", id: 5 },
  { name: "Emily", id: 6 }
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your it-camasutra?" },
  { id: 3, message: "Fine" },
  { id: 4, message: "Thanks" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" }
];

let dialogsElements = dialogData.map(d => (
  <DialogItem name={d.name} id={d.id} />
));

let messagesElements = messagesData.map(m => <Message message={m.message} />);

export default class Dialogs extends Component {
  render() {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
    );
  }
}
