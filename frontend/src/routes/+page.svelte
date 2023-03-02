<!-- Help from chatgpt for routing Svelte pages -->

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
</script>

{#if currentPage === 'login'}
  <LoginPage on:login={() => navigateToPage('calendar')} />
{:else if currentPage === 'calendar'}
  <CalendarPage />
{/if}
