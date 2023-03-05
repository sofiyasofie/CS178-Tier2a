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

  /**
   * @param {{ detail: string; }} event
   */
  function handleLoginDetails(event) {
    console.log(event.detail);
    message = event.detail;
  }

</script>

{#if currentPage === 'login'}
  <LoginPage on:login={() => navigateToPage('calendar')} on:loginEvent={handleLoginDetails} />
{:else if currentPage === 'calendar'}
  <CalendarPage {message}/>
{/if}
