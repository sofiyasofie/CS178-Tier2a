<!-- Help from asking chatgpt for aid in setting up a login page -->
<script>
  // import calendar from './calendar.svelte'
  // import { navigate } from 'svelte-routing';

  let firstname = '';
  let lastname = '';

  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  // Whatever the port for the server is, in our case 4200
  const baseURL = "http://localhost:4200"

  /**
   * @param {string} firstName
   * @param {string} lastName
   * Start time is added in database via a `Date()` init
   */
  async function addUserToDB(firstName, lastName) {
		try {
			const returnValue = await fetch(`${baseURL}/api/login`, 
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
  
  // Prevent spamming to DB with handle login clicks
  let click = false;

  async function handleLogin() {
    if (click) {
      return;
    }
    // Send to database and wait for response
    const res = await addUserToDB(firstname, lastname)
    console.log("res, done");

    // Dispatch a custom event to notify the parent component that login was successful
    dispatch('login');

    click = true;
  }
  
  // function handleLogin() {
  //   // Login logic
  // }

  // function navigateToNewPage() {
  //   navigate('/new-page');
  // }
</script>

<style>
  button {
    background-color: rgb(153, 153, 255);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 100px;
    margin-top: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(102, 102, 255);
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  input {
    border-radius: 5px;
    border: 1px solid gray;
    height: 20px;
    margin-top: 4px;
  }
</style>

<div class="center">
  <h2>CS178-Cal</h2>
  <form class="form" on:submit={handleLogin}>
    <label for="firstname">First name:</label>
    <input type="text" id="firstname" bind:value={firstname}>
      
    <label for="lastname">Last name: </label>
    <input type="lastname" id="lastname" bind:value={lastname}>
    
    <!-- <button type="submit">Log In</button> -->
  </form>
  <button on:click={handleLogin}>Login</button>
</div>


