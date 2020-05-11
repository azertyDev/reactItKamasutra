import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "How are you?", likesCount: 23},
				{id: 2, message: "My first post", likesCount: 12},
				{id: 3, message: "Hello world!!!", likesCount: 42},
			],
			newPostText: "it-kamasutra.com",
		},

		dialogsPage: {
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
		},
	},
	_callSubscriber() {
		console.log("State changed!");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		profileReducer(this._state.profilePage, action);
		dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	},
};

export default store;
