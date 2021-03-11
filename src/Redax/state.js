import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'dfgfsfd sdfsdf', likesCount: 26},
                {id: 2, message: 'sfad sdfsdf', likesCount: 74},
                {id: 3, message: 'Zalddupa sdfddsdf', likesCount: 7}

            ],
            newPostText: 'React-First-Post'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Grisha'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Lera'},
                {id: 5, name: 'Kolya'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'My'},
                {id: 3, message: 'Dear'},
                {id: 4, message: 'Friend'},
                {id: 5, message: 'Hello'},

            ],
            newMessageBody: "",
            compone: {
                name: 'Nick',
                age: 22
            }
        }
    },
    _callSubscriber() {
        console.log('Some changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;


// let idPost = 0;
// let createPostFunc = function (message, likesCount) {
//     return {
//         id: idPost++,
//         message: message,
//         likesCount: likesCount
//     }
// }
//
// let createMessageFunc = function (messages) {
//     return {
//         id: idPost++,
//         message: messages
//     }
// }


// addMessage() {
//     let newMessage = {
//         id: 6,
//         message: this._state.dialogsPage.newMessageText
//     };
//
//     // let newMessage = createMessageFunc(this._state.dialogsPage.newMessageText)
//
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessageText = '';
//     this._callSubscriber(this._state);
// },
// updateNewMessageText(newMessage) {
//     this._state.dialogsPage.newMessageText = newMessage;
//     this._callSubscriber(this._state);
// },





