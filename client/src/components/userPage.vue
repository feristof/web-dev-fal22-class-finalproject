<script setup lang="ts">

import session, { logout, login } from "../stores/session";
import { RouterLink } from "vue-router";

</script>

<template>
<div class="card is-2-tablet is-4-desktop is-4-widescreen">
  <header class="card-header">
    <p class="card-header-title is-centered">
      My Profile
    </p>
  </header>
  <div class="card-content">
    <div class="content">

        <div class="field">
            <label class="label">First Name:            
               <!-- <div class="button is-success is-outlined"> <router-link to="/userPage">Welcome &nbsp<strong>{{ session.user.lastName }}, {{ session.user.firstName }} </strong></router-link></div> -->
</label>
            <div class="control">
              <div> {{ session.user?.firstName }} </div>

            </div>
        </div>
    
        <div class="field">
            <label class="label">Last Name: </label>
            <div class="control">
              <div class="control">
              <div> {{ session.user?.lastName }} </div>

            </div>
            </div>
        </div>
    
        <div class="field">
            <label class="label">Email: </label>
            <div class="control">
            <!-- <input class="input" type="text" placeholder="Email" v-model="session.user.email"> -->
            </div>
        </div>
    
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Eat</a>
    <a href="#" class="card-footer-item">Sleep</a>
    <a href="#" class="card-footer-item">Workout</a>
    <a href="#" class="card-footer-item">Repeat</a>
  </footer>
</div>
</template>


<style scoped>
.card{
    margin-top: 80px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>


