document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const daieventsListItem = createDaieventsListItem(event.target);
  const daieventsList = document.querySelector('#events-list');
  daieventsList.appendChild(daieventsListItem);

  event.target.reset();
};

const createDaieventsListItem = function (form) {
  const daieventsListItem = document.createElement('li');
  daieventsListItem.classList.add('events-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  daieventsListItem.appendChild(name);

  const organiser = document.createElement('h3');
  organiser.textContent = form.organiser.value;
  daieventsListItem.appendChild(organiser);

  const location = document.createElement('p');
  location.textContent = form.location.value;
  daieventsListItem.appendChild(location);

  const ticket = document.createElement('p');
  ticket.textContent = form.ticket.value;
  daieventsListItem.appendChild(ticket);
  return daieventsListItem;
};

const handleDeleteAllClick = function (event) {
  const daieventsList = document.querySelector('#events-list');
  daieventsList.innerHTML = '';
};

/* this was initial code  detupdocument.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
// })*/

// const form = document.querySelector('#new-item-form');
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const organiser = event.target.organiser.value;
//     const location = event.target.location.value;
//     const ticket = event.target.ticket.value;
//
//
//     const formResult = document.createElement('li');
//     formResult.textContent = `${name} ${organiser} ${location} ${ticket}`;
//     const list = document.querySelector('#events-list');
//     list.appendChild(formResult);
//
//     const form = document.querySelector('#new-item-form').reset();
//
//   });

// });
