const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
	messages: [
		{id: 1, message: "Hi"},
		{id: 2, message: "How is your it-camasutra?"},
		{id: 3, message: "Fine"},
		{id: 4, message: "Thanks"},
		{id: 5, message: "Yo"},
		{id: 6, message: "Yo"},
	],
	dialogs: [
		{name: "John", id: 1},
		{name: "Tom", id: 2},
		{name: "Bill", id: 3},
		{name: "Adam", id: 4},
		{name: "Steve", id: 5},
		{name: "Emily", id: 6},
	],
	newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 6, message: body}]
			};
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		default:
			return state;
	}
};

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE,
	};
};

export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body,
	};
};

export default dialogsReducer;
