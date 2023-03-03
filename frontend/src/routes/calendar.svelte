<!-- Help from chatgpt for handling submit to go back to login -->

<script>
    import Calendar from '../Components/Calendar.svelte';;

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

  // Need to get name from little component
  // Change from test test to actual name
  let currFirstname = 'test';
  let currLastname = 'test';
  
  async function handleSubmit() {
    // Do any necessary logic here
    
    // Send name to DB, it filters for name and records end date
    const res = await submitAndRecordEndTimeInDB(currFirstname, currLastname);
  
    // Navigate back to the login page
    // window.location.href = '/';
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
    width: 600px;
  }
  :global(body) {
    font-family: 'Inter', sans-serif;
  }
</style>

<div>
  <h1>CS178-Cal</h1>
    <div class="CalendarContainer">
      <Calendar rows={96 / 1} columns={7} />
    </div>
</div>

<button class="PrimaryButton" on:click={handleSubmit}>Submit</button>

