import {renderEntireTree} from "../render";

let idPost = 0;
let createPostFunc = function (message, likesCount) {
    return {
        id: idPost++,
        message: message,
        likesCount: likesCount
    }
}

let createMessageFunc = function (messages) {
    return {
        id: idPost++,
        message: messages
    }
}

let state = {
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
}


export let addPost = () => {
    let newPost = createPostFunc(state.profilePage.newPostText, 5)

    state.profilePage.posts.push(newPost);
    state.updateNewPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = createMessageFunc(state.dialogsPage.newMessageText)

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    renderEntireTree(state);
}

export default state;


