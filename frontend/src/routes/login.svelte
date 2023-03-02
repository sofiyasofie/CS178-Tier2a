<!-- Help from asking chatgpt for aid in setting up a login page -->
<script>
  // import calendar from './calendar.svelte'
  // import { navigate } from 'svelte-routing';

  let email = '';
  let password = '';

  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  function handleLogin() {
    // Do your login logic here
    
    // Dispatch a custom event to notify the parent component that login was successful
    dispatch('login');
  }
  
  // function handleLogin() {
  //   // Login logic
  // }

  // function navigateToNewPage() {
  //   navigate('/new-page');
  // }
</script>

<form on:submit={handleLogin}>
  <label for="email">Email:</label>
  <input type="text" id="email" bind:value={email}>
  
  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password}>
  
  <!-- <button type="submit">Log In</button> -->
</form>

<button on:click={handleLogin}>Login</button>


