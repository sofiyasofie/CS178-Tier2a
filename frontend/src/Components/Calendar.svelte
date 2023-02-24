<script>
  let rows = 96;
  let columns = 7;
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
  }

  .grid div {
    height: 20px;
    background-color: white;
  }
</style>

<div class="grid">
  {#each Array(rows) as _, rowIndex}
    {#each Array(columns) as _, columnIndex}
      <div style="background-color: {getRandomColor()}"></div>
    {/each}
  {/each}
</div>
