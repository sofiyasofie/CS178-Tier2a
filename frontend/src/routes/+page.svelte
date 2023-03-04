<!-- Help from chatgpt for routing Svelte pages, getting data -->

<script>
  import { onMount } from 'svelte';
  import LoginPage from './login.svelte';
  import CalendarPage from './calendar.svelte';
  let currentPage = '';
  
  const navigateToPage = (/** @type {string} */ page) => {
    currentPage = page;
  };
  
  onMount(() => {
    currentPage = 'login';
  });

  // let currFirstname = ""
  // let currLastname = "" 
  let message = '';

  function handleLoginDetails(event){
    console.log(event.detail);
    message = event.detail;
    // currFirstname = event.detail.firstname;
    // currLastname = event.detail.lastname;
  }

</script>

{#if currentPage === 'login'}
  <LoginPage on:login={() => navigateToPage('calendar')} on:loginEvent={handleLoginDetails} />
{:else if currentPage === 'calendar'}
  <CalendarPage {message}/>
{/if}
