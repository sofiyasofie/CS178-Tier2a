<script>
  /**
   * @type {any}
   */
   export let start;
  /**
   * @type {any}
   */
   export let end;
  /**
   * @type {boolean}
   */
   export let available;
  
  function toggleAvailability() {
    available = !available;
    const event = new CustomEvent('availabilityChange', {
      detail: {
        start,
        end,
        available
      }
    });
    dispatchEvent(event);
  }
</script>

<div class:available on:click={toggleAvailability}>
  {start} - {end}
  <input type="checkbox" checked={available} />
</div>

<style>
  .available {
    background-color: lightgreen;
  }
  .available input:checked {
    background-color: green;
  }
  .available input:focus {
    outline: none;
  }
</style>
