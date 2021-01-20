let idPost = 0;
let createMessageFunc = function (messages) {
    return {
        id: idPost++,
        message: messages
    }
}

export default createMessageFunc