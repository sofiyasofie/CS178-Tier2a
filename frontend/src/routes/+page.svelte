<script>
  import Calendar from '../Components/CalendarTest.svelte';
  
  const startDate = new Date('2023-12-23');
  const endDate = new Date('2023-12-30');
  const timeSlots = [
    { start: '08:00', end: '9:00' },
    { start: '09:00', end: '10:00' },
    { start: '10:00', end: '11:00' },
    { start: '11:00', end: '12:00' },
    { start: '13:00', end: '14:00' },
    { start: '14:00', end: '15:00' },
    { start: '15:00', end: '16:00' }
  ];
</script>

<div class="container">
  <Calendar
    startDate={startDate}
    endDate={endDate}
    timeSlots={timeSlots}
  />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
