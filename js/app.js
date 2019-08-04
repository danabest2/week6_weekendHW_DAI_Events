document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
// })

const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const organiser = event.target.organiser.value;
    const location = event.target.location.value;
    const ticket = event.target.ticket.value;


    const formResult = document.createElement('li');
    formResult.textContent = `${name} ${organiser} ${location} ${ticket}`;
    const list = document.querySelector('#events-list');
    list.appendChild(formResult);

    const form = document.querySelector('#new-item-form').reset();

  });

});
