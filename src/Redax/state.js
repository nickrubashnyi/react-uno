import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, dude', likesCount: 20},
            {id: 2, message: 'It\'s my fist post', likesCount: 35}
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
            {id: 3, message: 'Friend'},
            {id: 4, message: 'Ya'},
            {id: 5, message: 'Yok'}
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.updateNewPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;


