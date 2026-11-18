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