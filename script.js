const socket = io('http://localhost:3000/');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name');
console.log(name)

socket.emit('new-user', name)