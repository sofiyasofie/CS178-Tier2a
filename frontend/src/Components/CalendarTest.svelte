<script>
  import Day from './Day.svelte';

  export let startDate;
  export let endDate;
  /**
   * @type {{ start: any; end: any; }[]}
   */
   export let timeSlots;
  
  const days = getDaysInRange(startDate, endDate);
  const availability = getInitialAvailability();
  
  /**
   * @param {string | number | Date} startDate
   * @param {number} endDate
   */
  function getDaysInRange(startDate, endDate) {
    const days = [];
    let currentDay = new Date(startDate);
    while (currentDay <= endDate) {
      days.push(currentDay.toDateString());
      currentDay.setDate(currentDay.getDate() + 1);
    }
    return days;
  }
  
  function getInitialAvailability() {
    const availability = {};
    timeSlots.forEach(({ start, end }) => {
      if (!availability[start]) {
        availability[start] = {};
      }
      availability[start][end] = false;
    });
    return availability;
  }
</script>

<div class="calendar">
  {#each days as day}
    <Day
      date={day}
      timeSlots={timeSlots}
      availability={availability}
    />
  {/each}
</div>

<style>
  .calendar {
    display: flex;
    flex-wrap: wrap;
  }
</style>
