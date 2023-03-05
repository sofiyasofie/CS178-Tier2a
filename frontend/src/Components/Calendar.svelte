<script>
  // Default 15 minute time increments
  // Default if no values passed
  // This are external parameters and will only default to these values 
  // if none are supplied by the parent component
  export let rows = 96 / 1;
  export let columns = 7;

  export let timeRows = 96/1;
  export let timeCols = 1;

  let selectedRow = 0
  let selectedColumn = 0



  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
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

    selectedRow = target.dataset.rowIndex;
    selectedColumn = target.dataset.columnIndex;
  }
</script>

<style>
  .box {
    display: flex;
    border: 1px solid rgb(255, 255, 255);
    padding: 1px;
    height: 0px;
    width: 20 px;
    line-height: 1.56;
    margin-left: 3px;
    }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0px;
  }

  .grid button {
    /* Change to 8px if 15 min increments */
    height: 10px;
    border: none;
    border-right: 1px solid black;
    border-top: 1px solid black;
    background-color: white;
    cursor: pointer;
  }

  .grid button:hover {
    /* TODO: (seanroades) Change to darken instead of gray */
    filter: brightness(0.5); /* adjust the value to darken or lighten the element */
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .day {
    flex-basis: calc(100% / 7);
    text-align: center;
    font-weight: 400;
    color: white;
    margin-bottom: 5px;
  }

  .Spacer {
    height: 4px;
    width: 700%;
  }

  .GridContainer {
    background-color: rgb(153, 153, 255);
    width: 100%;
    padding-left: 55px;
    padding-right: 55px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 20px;
  }
  div {
    color: white;
    font-size: 14px;
  }
</style>

<div class="">
  <div class = "box">
    <br>
    <br>
    12 AM
    <br>
    <br>
    1 AM
    <br>
    <br>
    2 AM
    <br>
    <br>
    3 AM
    <br>
    <br>
    4 AM
    <br>
    <br>
    5 AM
    <br>
    <br>
    6 AM
    <br>
    <br>
    7 AM
    <br>
    <br>
    8 AM
    <br>
    <br>
    9 AM
    <br>
    <br>
    10 AM
    <br>
    <br>
    11 AM
    <br>
    <br>
    12 PM
    <br>
    <br>
    1 PM
    <br>
    <br>
    2 PM
    <br>
    <br>
    3 PM
    <br>
    <br>
    4 PM
    <br>
    <br>
    5 PM
    <br>
    <br>
    6 PM
    <br>
    <br>
    7 PM
    <br>
    <br>
    8 PM
    <br>
    <br>
    9 PM
    <br>
    <br>
    10 PM
    <br>
    <br>
    11 PM
  </div>
  <div class="GridContainer">
    <div class="container">
      {#each ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as day}
        <div class="day">{day}</div>
      {/each}
    </div>
    <!-- Idea: set up a grid on the left side that will show times (an array) -->

    <div class="grid">
      {#each Array(rows) as _, rowIndex}
        {#each Array(columns) as _, columnIndex}
          <button class:highlighted={(rowIndex % 4 === 0) || (rowIndex % 3 === 0) || (rowIndex % 2 === 0) || (rowIndex % 1 === 0)} on:click={handleClick} data-row-index={rowIndex} data-column-index={columnIndex}></button>
          {/each}

        {#if (rowIndex + 1) % 4 === 0 && rowIndex !== 0}
          <div class="Spacer"></div>
          <div class="Spacer"></div>
          <div class="Spacer"></div>
          <div class="Spacer"></div>
          <div class="Spacer"></div>
          <div class="Spacer"></div>
          <div class="Spacer"></div>
        {/if}
        <!-- {#if (rowIndex + 1) % 4 === 0 && rowIndex !== 0}
        <p></p>
        {/if} -->
      {/each}
    </div>
  </div>
</div>