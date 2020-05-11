const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
	posts: [
		{id: 1, message: "How are you?", likesCount: 23},
		{id: 2, message: "My first post", likesCount: 12},
		{id: 3, message: "Hello world!!!", likesCount: 42},
	],
	newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export default profileReducer;