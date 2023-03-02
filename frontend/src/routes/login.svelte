<!-- Help from asking chatgpt for aid in setting up a login page and connecting to MongoDB to write data -->
<script>
  // import calendar from './calendar.svelte'
  // import { navigate } from 'svelte-routing';

  let firstname = '';
  let lastname = '';

  import { createEventDispatcher } from 'svelte';
  import { insertData } from '../../../backend/db.js'; // import the insertData function

  
  const dispatch = createEventDispatcher();
  
  function handleLogin() {
    
    // firstname = 
    // lastname = 

    insertData({ firstname, lastname })
    .then(() => {
      // Dispatch a custom event to notify the parent component that login was successful
      dispatch('login');
    })
    .catch(error => {
      console.error('Error saving data:', error);
      // Handle the error here
    });
    
    // Dispatch a custom event to notify the parent component that login was successful
    // dispatch('login');
  }
  
  // function handleLogin() {
  //   // Login logic
  // }

  // function navigateToNewPage() {
  //   navigate('/new-page');
  // }
</script>

<form on:submit={handleLogin}>
  <label for="firstname">First name:</label>
  <input type="text" id="firstname" bind:value={firstname}>
  
  <label for="lastname">Last name:</label>
  <input type="lastname" id="lastname" bind:value={lastname}>
  
  <!-- <button type="submit">Log In</button> -->
</form>

<button on:click={handleLogin}>Login</button>


