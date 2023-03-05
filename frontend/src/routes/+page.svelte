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


  let message = '';

  // Help from chatgpt creating function to transfer data
  function handleLoginDetails(event){
    console.log(event.detail);
    message = event.detail;
  }

</script>

{#if currentPage === 'login'}
  <LoginPage on:login={() => navigateToPage('calendar')} on:loginEvent={handleLoginDetails} />
{:else if currentPage === 'calendar'}
    <!-- Help from chatgpt exporting message -->
  <CalendarPage {message}/>
{/if}
