document.getElementById('register-btn').addEventListener('click', function () {
  document.getElementById('register-form').style.display = 'flex';
});

document.getElementById('submit-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!email || !password || !confirmPassword) {
    alert('Please fill in all required fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  document.querySelector('.success-message').innerText = 'Registration successful!';
  setTimeout(function () {
    window.location.href = 'user-profile.html';
  }, 1000);
});

// Add the event listener for the closing button
document.getElementById('close-form-btn').addEventListener('click', function () {
  document.getElementById('register-form').style.display = 'none';
});
