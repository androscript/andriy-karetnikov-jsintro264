let footer = document.createElement('footer');
document.body.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p');
copyright.innerHTML = '&#169; Andriy Karetnikov ' + thisYear;
footer.appendChild(copyright);

let skills = ['HTML, CSS, JavaScript', 'Completed course: <a href="https://www.codecademy.com/profiles/Androscript" target="_blank">Codecademy: Learn HTML</a>', 'Completed course: <a href="https://www.codecademy.com/profiles/Androscript" target="_blank">Codecademy: Learn CSS</a>'];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
  let skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let usersName = e.target.usersName.value;
  let usersEmail = e.target.usersEmail.value;
  let usersMessage = e.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);
  let messageSection = document.getElementById('messages');
  let messageList = messageSection.querySelector('ul');
  let newMessage = document.createElement('li');
  newMessage.innerHTML = 
    `<a href='mailto:${usersEmail}'>${usersName}</a>
    <span>${usersMessage}</span>`;
  messageList.appendChild(newMessage);
  let removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', (e) => {
    let entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageForm.reset();
});