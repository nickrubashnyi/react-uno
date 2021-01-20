import createPostFunc from "./createPostFunc";
import createMessageFunc from "./createMessageFunc";
let store = {


    _state: {
        profilePage: {
            posts: [
                createPostFunc('Zalupa sdfsdf', 26),
                createPostFunc('Lolka', 55),
                createPostFunc('Komen', 66),
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
                createMessageFunc('Hello'),
                createMessageFunc('My'),
                createMessageFunc('Dear'),
                createMessageFunc('Friend'),
                createMessageFunc('Hello'),
            ],
            newMessageText: 'Write your think'
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Some changed');
    },
    addPost() {
        let newPost = createPostFunc(this._state.profilePage.newPostText, 5)

        this._state.profilePage.posts.push(newPost);
        this._state.updateNewPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = createMessageFunc(this._state.dialogsPage.newMessageText)

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


}

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

export default store;


