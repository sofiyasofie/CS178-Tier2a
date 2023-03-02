<script>
    import Calendar from '../Components/Calendar.svelte';
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