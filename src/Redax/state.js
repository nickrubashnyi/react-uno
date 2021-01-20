let store = {
    idPost: 0,
    createPostFunc(message, likesCount) {
        return {
            id: this.idPost++,
            message: this.message,
            likesCount: this.likesCount
        }
    },
    createMessageFunc(messages) {
        return {
            id: this.idPost++,
            message: this.messages
        }
    },
    _state: {
        profilePage: {
            posts: [
                this.createPostFunc('Zalupa sdfsdf', 26),
                this.createPostFunc('Lolka', 55),
                this.createPostFunc('Komen', 66),
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
                this.createMessageFunc('Hello'),
                this.createMessageFunc('My'),
                this.createMessageFunc('Dear'),
                this.createMessageFunc('Friend'),
                this.createMessageFunc('Hello'),
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
        let newPost = this.createPostFunc(this._state.profilePage.newPostText, 5)

        this._state.profilePage.posts.push(newPost);
        this._state.updateNewPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = this.createMessageFunc(this._state.dialogsPage.newMessageText)

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


