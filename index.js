function addingEventListener() {
  // Step 1: Grab the input element with the ID 'button'
  const input = document.getElementById('button');

  // Step 2: Define the callback function
  function clickAlert() {
      alert('I was clicked!');
  }

  // Step 3: Add the event listener to the input element
  input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();
