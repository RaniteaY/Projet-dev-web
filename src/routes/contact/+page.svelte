<svelte:head>
	<title>Contact</title>
</svelte:head>

<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
	let name = undefined;
  let titre = undefined;
  let artiste = undefined;
  let output = undefined;
  let firstname = undefined;
  let lastname = undefined;
  let email = undefined;
  let from = [];
  let motif = [];
  let message = undefined;
  let selected_from;
  let selected_motif;
  let status = 'Cliquez ici pour envoyer le formulaire';

  // Get data from DB
  let user = undefined
	onMount(async () => {
		const { data, error } = await supabase
			.from('known_from')
			.select('*')
	
    console.log(data)
    console.log(error)
		user = data
	})


  //Write data in DB  
  const handleSubmit = async () => {
    const { data, error } = await supabase
    .from('contact')
    .insert([
      {firstname: firstname, lastname: lastname, email: email, known_from: selected_from, motif: selected_motif, message: message}
    ])
    lastname = ''
    firstname = ''
    email = ''
    message = ''
    status = 'Message envoyé avec succès !'

    console.log(data)
    console.log(error)
		output = data
	}

    //Get Motif from DB
    onMount(async () => {
      const { data, error } = await supabase
        .from('motifs')
        .select('*')
    
      console.log(data)
      console.log(error)
      motif = data
    })

    //Get From from DB
    onMount(async () => {
      const { data, error } = await supabase
        .from('known_from')
        .select('*')
    
      console.log(data)
      console.log(error)
      from = data
    })

</script>


<body>
  <div class="text-column">
    <h1 class="title">Contact</h1>
  </div>

  <div class="text-column">

    <div class="text-title">Besoin d'un renseignement ?</div>
    <div class="text">Remplissez ce forulaire de contact et nous vous répondrons dans les plus brefs délais</div>

    <div class="label">Nom*</div>
    <input class="inputs" bind:value={lastname}>

    <div class="label">Prénom*</div>
    <input class="inputs" bind:value={firstname}>

    <div class="label">Email*</div>
    <input class="inputs" bind:value={email}>

    <div class="label">Où nous avez-vous connu ?</div>
    <div class="input_select">
      <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected_from}>
          {#each from as fr}
            <option value={fr.id}>
              {fr.site}
            </option>
          {/each}
        </select>
      </form>
    </div>

    <div class="label">Motif*</div>
    <div class="input_select">
      <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected_motif}>
          {#each motif as mot}
            <option value={mot.id}>
              {mot.motif}
            </option>
          {/each}
        </select>
      </form>
    </div>

    <div class="label">Message*</div>
    <input class="inputs-message" bind:value={message}>
    <br>

    <p class="info-text">{status}</p>

    <button class="button" on:click={handleSubmit}>Envoyer</button>

  </div>

</body>

<style>
  .title{
    font-family: fantasy;
    color: #9D14F7;
    margin: 30px;
    margin-top: 0px;
  }

  .text{
    color: black;
    margin: 5px;
    margin-bottom: 20px;
  }

  .text-title{
    color: black;
    margin: 5px;
    font-weight: 700;
  }

  .text-column{
    width: 470px;
  }

  .label{
    margin: 5px;
    color: black;
    font-weight: 700;
  }

  .inputs{
    margin: 5px;
    margin-bottom: 18px;
    margin-top: 2px;
    padding: 5px;
    height: 15px;
  }

  .inputs-message{
    margin: 5px;
    margin-bottom: 18px;
    margin-top: 2px;
    padding: 5px;
    height: 200px;
    vertical-align: top;
  }

  .input_select{
    margin: 5px;
    margin-bottom: 18px;
    margin-top: 2px;
    padding: 5px;
  }

  .button{
    width: 100px;
    display: block;
    margin : auto;
  }

  .info-text{
    text-align: center;
    color: black;
    margin-bottom: 10px;
  }
</style>
