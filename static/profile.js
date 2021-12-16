function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('#salary-field').value,
    education: document.querySelector('#education-field').value,
    state: document.querySelector('#state-field').value,
    city: document.querySelector('.city-field:checked').value,
    garden: document.querySelector('.garden-field:checked').value,
    tv: document.querySelector('#tv-field').value,
  };

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(response => {
    document.querySelector("#profiles").innerHTML = 
    `<p>
    name: ${response.name}<br>
    age: ${response.age}<br>
    occupation: ${response.occupation}<br>
    salary: ${response.salary}<br>
    education: ${response.education}<br>
    state: ${response.state}<br>
    city: ${response.city}<br>
    garden: ${response.garden}<br>
    tv: ${response.tv}<br>
    </p>`;
  }
  );
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
