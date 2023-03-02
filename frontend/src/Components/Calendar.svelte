<script>
  // Default 15 minute time increments
  // Default if no values passed
  export let rows = 96 / 4;
  export let columns = 7;
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // TODO: (seanroades) - Dataset should be a dictionary with slots for each timeblock
  // Then can compare with ranked choice
  
  /**
   * @param {{ target: any; }} event
   */
  function handleClick(event) {
    const target = event.target;
    const rowIndex = parseInt(target.dataset.rowIndex);
    const columnIndex = parseInt(target.dataset.columnIndex);
    console.log(`Clicked row ${rowIndex}, column ${columnIndex}`);
    if (target.style.backgroundColor === 'green') {
      target.style.backgroundColor = 'white';
    } else {
      target.style.backgroundColor = 'green';
    }
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0px;
  }

  .grid button {
    /* Change to 8px if 15 min increments */
    height: 10px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }

  .grid button:hover {
    /* TODO: (seanroades) Change to darken instead of gray */
    filter: brightness(0.8); /* adjust the value to darken or lighten the element */
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .day {
    flex-basis: calc(100% / 7);
    text-align: center;
    font-weight: 400;
  }
</style>

<div class="">
  <div class="container">
    {#each ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as day}
      <div class="day">{day}</div>
    {/each}
  </div>
  <div class="grid">
    {#each Array(rows) as _, rowIndex}
      {#each Array(columns) as _, columnIndex}
        <button on:click={handleClick} data-row-index={rowIndex} data-column-index={columnIndex}></button>
      {/each}
    {/each}
  </div>
</div>