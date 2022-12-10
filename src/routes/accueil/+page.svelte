<svelte:head>
	<title>Ma lib</title>
</svelte:head>

<script>
  import Card from "$lib/components/card.svelte";
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';

  let musiques = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('musique')
			.select('*')
	
    console.log(data)
    console.log(error)
		musiques = data
	})
  
</script>

<body>
  <div class="text-column">
    <h1 class="title">My Lib</h1>

    <p class="text">
      Bienvenue dans votre librairie de musiques personnelle !
      <br>
      Ici vous pouvez consulter les titres que vous avez ajouté à votre librairie.
    </p>


    <ul>
      {#each musiques as {id, titre, artiste,album, duree}, index (id)}
      <div class="float-container">
        <div class="float-top-child-left">
          <div class="float-child-left">
            <div class="album_picture">
              <br><img class="img_bg" src={album} width="150" height="150">
            </div>
          </div>

          <div class="float-child-right">
            <div><div class="titre_musique">{titre} </div>
              <div class="musique_infos">
                <br><div class="categories">Artiste:</div>{artiste}
                <br><div class="categories">Durée:</div> {duree}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/each}
    </ul>
  </div>
</body>


<style>
  .title{
    font-family: fantasy;
    color: #9D14F7;
    margin: 10px;
    margin-top: 0px;
  }

  .text-column{
    /* display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%; */
  }
  .text{
    color: black;
    text-align: center;
  }

  .float-container {
    width: 850px;
    padding: 0px;
    margin: 15px;
    margin-left: 0px;
    font-size: 15px;
    color: black;
  }

  .float-child-left {
      width: 45%;
      float: left;
      padding: 10px;
      background: #9D14F7;
  }

  .float-top-child-left {
      width: 45%;
      float: left;
      padding: 0px;
      margin: 20px;
      background: #FFB210;
  }

  .float-child-right {
      width: 30%;
      float: right;
      padding: 0px;
      padding-right: 50px;
      padding-top: 30px;
  }

   .float-top-child-right {
      width: 45%;
      float: right;
      padding: 0px;
      background: #FFB210;
  }

  .red{
    color: red;
  }
  .blue{
    color: blue;
  }

  .titre_musique{
    font-weight: 900;
    font-size: 25px;
    font-family: fantasy;
  }

  .musique_infos{
    padding-top: 0px;
    line-height: 1.8;
    /* background-color: yellow; */
  }

  .titre_plus_dinfos{
    font-weight: 900;
    font-size: 25px;
    font-family: fantasy;
    padding-top: 40px;
    /* background-color: pink; */
  }

  .categories{
    font-weight: 700;
    float: left;
    padding-right: 8px;
    color: black;

  }

  .album_picture{
    padding: 5px;
    margin: 5px;
  }



</style>
