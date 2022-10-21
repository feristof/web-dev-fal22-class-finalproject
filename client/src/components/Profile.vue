<template>
    <div class="profileDiv">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://imageio.forbes.com/specials-images/imageserve/5f1b45eac1b052b749af079c/0x0.jpg?format=jpg&width=1200" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Megan Smith</p>
        <p class="subtitle is-6"><ul>@megansmith</ul></p>
        <p> <strong><u>Wishlist</u></strong> </p>
        <br>
        <ol>
            <li><font-awesome-icon icon="fa-solid fa-bicycle" />Cycling <label class="checkbox"><input type="checkbox"> <b>Done?</b></label></li>
            <li><font-awesome-icon icon="fa-solid fa-bicycle" />Kayaking <label class="checkbox"><input type="checkbox"> <b>Done?</b></label></li>
            <li><font-awesome-icon icon="fa-solid fa-bicycle" />Snorkling <label class="checkbox"><input type="checkbox"> <b>Done?</b></label></li>
            <li><font-awesome-icon icon="fa-solid fa-bicycle" />Rock Climbing <label class="checkbox"><input type="checkbox"> <b>Done?</b></label></li>



            
        </ol>
      </div>
    </div>

    
  </div>
</div>
</div>
</template>















<script lang="ts">
export default {};
</script>


<style>
.card{
    height: 80px;
    width: 40%;
    border: 2px solid black;
}
.card-content{
    border: 2px solid lightgreen
}
.profileDiv{
    padding-top: 62px;
    padding-left: 34%;
}

</style>