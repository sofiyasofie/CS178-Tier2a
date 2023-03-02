<!-- Help from chatgpt for handling submit to go back to login -->

<script>
    import Calendar from '../Components/Calendar.svelte';;
    function handleSubmit() {
    // Do any necessary logic here
    
    // Navigate back to the login page
    window.location.href = '/';
  }
  </script>
  
  <style lang="scss">
    .CalendarContainer {
      width: 600px;
    }
    :global(body) {
      font-family: 'Inter', sans-serif;
    }
  </style>

<div>
  <h1>CalendMe</h1>
    <div class="CalendarContainer">
      <Calendar rows={96 / 1} columns={7} />
    </div>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<button on:click={handleSubmit}>Submit</button>

