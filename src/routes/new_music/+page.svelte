<svelte:head>
	<title>Ajouter une musique</title>
</svelte:head>

<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
	let album = undefined;
  let titre = undefined;
  let artiste = undefined;
  let duree = undefined;
  let output = undefined;
  let status = 'Cliquez ici pour enregistrer le titre';


  //Write data in DB  
  const handleSubmit = async () => {
    const { data, error } = await supabase
    .from('musique')
    .insert([
      {titre: titre, artiste: artiste, album: album, duree: duree}
    ])
    titre = ''
    artiste = ''
    album = ''
    duree = ''
    
    status = 'Titre enregistré avec succès !'

    console.log(data)
    console.log(error)
		output = data
	}

</script>


<body>
  <div class="text-column">
    <h1 class="title">Ajouter une musique</h1>
  </div>

  <div class="text-column">

    <div class="text-title">Besoin d'un renseignement ?</div>
    <div class="text">Remplissez ce forulaire de contact et nous vous répondrons dans les plus brefs délais</div>

    <div class="label">Titre*</div>
    <input class="inputs" bind:value={titre}>

    <div class="label">Artiste*</div>
    <input class="inputs" bind:value={artiste}>

    <div class="label">Album*</div><p class="more-info">Mettre le lien de l'image de l'album de la musique</p>
    <input class="inputs" bind:value={album}>

    <div class="label">Durée</div>
    <input class="inputs" bind:value={duree}>

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

  .more-info{
    margin: 0px;
    margin-left: 5px;
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
