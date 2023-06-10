import { rerenderEntireTree } from "../rerender"

let state = {
    dialogPage: {
        dialogData : [
            {id: 1, name: "Valeria", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRW3Zx0wevThx4eoKM6jov6v-YpNUj8ClbcA&usqp=CAU"},
            {id: 2, name: "Lidia", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutbLNp4R3IOGc1VeQSKFzUJO6D08VqwiHwg&usqp=CAU"},
            {id: 3, name: "Sergey", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p6AQAKeoe_G4fGB6gyI4RzcGhnPRhaw11g&usqp=CAU"},
            {id: 4, name: "Roman", ava: "https://img.freepik.com/premium-vector/it-specialist-at-desk-working-on-laptop-vector-illustration_107173-13303.jpg?w=2000"},
            {id: 5, name: "Valera", ava: "https://w7.pngwing.com/pngs/939/901/png-transparent-drawing-reggae-bob-marley-celebrities-computer-wallpaper-monochrome.png"},
        ],
        messageData : [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Good, thanks!"},
        ],
        newMessageText: "",
    },
    profilePage: {
        profileData : {id: 0, name: "Mak", ava: "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"},

        postData : [
            {id: 1, message: "It's my first post", likesCount: 20},
            {id: 2, message: "Hello, World!", likesCount: 15},
        ],
        newPostText: "",
    },
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export let addNewPost = () => {
    let newPost = {id: 3, message: state.profilePage.newPostText, likesCount: 100};
    state.profilePage.postData.push(newPost);
    updateNewPostText("");
    rerenderEntireTree(state);
};

export let updateNewMessageText = (currentText) => {
    state.dialogPage.newMessageText = currentText;
    rerenderEntireTree(state);
}
export let addNewMessage = () => {
    let newMessage = {id: 4, message: state.dialogPage.newMessageText};
    state.dialogPage.messageData.push(newMessage);
    updateNewMessageText("")
    rerenderEntireTree(state);
};

export default state;