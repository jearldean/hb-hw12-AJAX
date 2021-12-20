function submitProfile(evt) {
  evt.preventDefault();

  // We're going to have to collect all the checkbox values in a list:
  const interestList = []
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var checkbox of checkboxes) {
      interestList.push(checkbox.value)
  }

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('#salary-field').value,
    education: document.querySelector('#education-field').value,
    state: document.querySelector('#state-field').value,
    interests: interestList,
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
    interests: ${response.interests}<br>
    garden: ${response.garden}<br>
    tv: ${response.tv}<br>
    </p>`;
  }
  );
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
