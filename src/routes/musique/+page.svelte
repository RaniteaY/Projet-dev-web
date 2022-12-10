<svelte:head>
	<title>Musique</title>
	<!-- <meta name="description" content="About this app" /> -->
</svelte:head>

<script>
  import Card from "$lib/components/card.svelte";
</script>



<div class="text-column">
	<h1 class="title">Musique</h1>
  
  <Card>
  </Card>


</div>


<style>
  .title{
    font-family: fantasy;
    color: #9D14F7;
    margin: 10px;
    margin-top: 0px;
  }

  .text{
    color: black;
  }

  .text-column{
    /* display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%; */
  }
</style>
