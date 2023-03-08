<script>
  import Calendar from '../Components/Calendar.svelte';;
  export let message;

  const baseURL = "http://localhost:4200"

  /**
   * @param {any} firstName
   * @param {any} lastName
   */
  async function submitAndRecordEndTimeInDB(firstName, lastName) {
    try {
      const returnValue = await fetch(`${baseURL}/api/submit`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName
          })
        });
      const response = await returnValue.json();
      var data = response.data;
      console.log(data)
      console.log("Submitted successfully!")
    } catch (error) {
      console.log(error);
    }
	}

  let currFirstname = message.firstname;
  let currLastname = message.lastname;
  
  async function handleSubmit() {
    // Do any necessary logic here
    
    // Send name to DB, it filters for name and records end date
    const res = await submitAndRecordEndTimeInDB(currFirstname, currLastname);
  
    // Navigate back to the login page
    window.location.href = '/';
  }
</script>

<style lang="scss">
    .PrimaryButton {
    background-color: rgb(153, 153, 255);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 100px;
    margin-top: 10px;
    cursor: pointer;
  }
  .PrimaryButton:hover {
    background-color: rgb(102, 102, 255);

  }
  .CalendarContainer {
    margin: auto;
    width: 600px;
  }
  :global(body) {
    font-family: 'Inter', sans-serif;
  }
  .center {
    text-align: center !important;
  }
  .buttonContainer {
    text-align: center;
  }
</style>

<div class="">
  <h1 class="center">Welcome, {currFirstname} {currLastname}, to CS178-Cal </h1>
    <p class = "center"><b>Click</b> on a tile to select available times</p>
    <div class="CalendarContainer">
      <Calendar rows={96 / 2} columns={7} />
    </div>
</div>
<div class="buttonContainer">
  <button class="PrimaryButton center" on:click={handleSubmit}>Submit</button>
</div>  
