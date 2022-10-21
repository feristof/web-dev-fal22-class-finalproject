<template>
    <!-- <div> -->
        <!-- <router-link to="/login">Login</router-link> -->
        <!-- <router-link to="/profile">Profile</router-link> -->
    <!-- </div> -->

    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://i.pinimg.com/originals/2d/27/51/2d2751a9c62632ec5718c9544f0281e6.jpg">
        <img src="https://i.pinimg.com/originals/2d/27/51/2d2751a9c62632ec5718c9544f0281e6.jpg">
    
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Activites
      </a>
      <a class="navbar-item">
        Events
      </a>
      <a class="navbar-item">
        Statistics
      </a>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-success">
            <strong><router-link to="/login">Login</router-link></strong>
          </a>
          <a class="button is-green">
           <strong> <router-link to="/profile">Profile</router-link></strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>



















<script lang="ts">
export default {};
</script>


<style>
</style>