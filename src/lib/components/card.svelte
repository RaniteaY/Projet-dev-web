<!-- <div class="musique">
  <h1 class="titre_musique">Titre musique 1</h1>
  <div class="float-container">
    <div class="album-left">Image album musique 1</div>
    <div class="float-child-left">Artiste: artiste 1</div>
    <div class="float-child-right">Date de sortie: date 1</div>
  </div>
  <slot></slot>
</div> -->

<!-- Essai 1: Float -->
<div class="float-container">

  <div class="float-child-left">
    <div class="album_picture">
      <br><img class="img_bg" src="https://m.media-amazon.com/images/I/811nOsWtUlL._SL1500_.jpg" width="350" height="350">
    </div>    
  </div>
  
  <div class="float-child-right">
    <div><div class="titre_musique">Titre musique </div>
    <div class="musique_infos">
      <br><div class="categories">Artiste:</div>artiste 1
      <br><div class="categories">Date de sortie:</div>date 1
      <br><div class="categories">Durée:</div>durée 1
      <br><div class="categories">Popularité:</div>xx%
      <br><div class="categories">Genre:</div>Pop
    </div>
      <br><div class="titre_plus_dinfos">Plus d'infos </div>
      <div class="musique_infos">
      <br><div class="categories">Tempo:</div>120 bpm
      <br><div class="categories">Dansabilité:</div>0,7
      <br><div class="categories">Energie:</div>0,7
      <br><div class="categories">Popularité:</div>xx%
    </div>
    </div>
  </div> 
</div>

<style>
/* Essai 1: Float */
  .float-container {
    width: 700px;
    border: 3px solid #fff;
    padding: 20px;
    margin: 20px;
    background: #FFB210;
    font-size: 15px;
    color: black;
  }

  .float-child-left {
      width: 45%;
      float: left;
      padding: 20px;
      /* border: 2px solid red; */
  }  
  .float-child-right {
      width: 30%;
      float: right;
      padding: 20px;
      
      /* background: red; */
      /* border: 2px solid red; */
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