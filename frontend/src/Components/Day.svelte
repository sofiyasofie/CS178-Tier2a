<script>
  import TimeSlot from './TimeSlot.svelte';

  /**
   * @type {any}
   */
   export let date;
  /**
   * @type {any}
   */
   export let timeSlots;
  /**
   * @type {{ [x: string]: { [x: string]: any; }; }}
   */
   export let availability;
  
  /**
   * @param {{ detail: { start: any; end: any; available: any; }; }} event
   */
  function handleAvailabilityChange(event) {
    const { start, end, available } = event.detail;
    availability[start][end] = available;
  }
</script>

<div class="day">
  <h3>{date}</h3>
  {#each timeSlots as { start, end }}
    <TimeSlot
      start={start}
      end={end}
      available={availability[start][end]}
      on:availabilityChange={handleAvailabilityChange}
    />
  {/each}
</div>

<style>
  .day {
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 10px;
  }
</style>
