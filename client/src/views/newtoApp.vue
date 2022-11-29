<script lang = "ts">

import { RouterLink } from "vue-router";
import session from "../stores/session";

export default {
  name: "newtoApp",
  components: {
    RouterLink,
  },
  setup() {
    return {
      session,
    };
  },
};
</script>

<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="../assets/logo.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <u>New to <strong>MY FITNESS APP ?</strong></u>  <small>&nbsp&nbsp&nbsp&nbspBlog updated on 26 Nov</small>
          <br><br>
          Hey everyone! Welcome to my fitness app. This is a place where you can share your workouts with your friends and family. You can also see what your friends are doing and get some ideas for your own workouts.
            <br><br>
            The main purpose of the blog is to guide you through the whole app step-by-step. I hope it will be helpful for you. If you have any questions, please feel free to contact me at patelr25@newpaltz.edu <b><i> or </i></b> click on >> <a href="mailto:patelr25@newpaltz.edu"> <b>Helpcenter</b></a>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <strong>Thank you for visiting MY FITNESS APP!</strong>
        </p>
      </div>
    </div>
    
  </article>
  <br>
  <div class="buttons">
  
  <button class="button is-primary is-fullwidth"><router-link to="/signUp"> Let's get Started!</router-link></button>
 
</div>
</div>

</template>

<style scoped>
.box {
  margin-top: 4rem;
}

.button{
    text-decoration: none;
}
</style>