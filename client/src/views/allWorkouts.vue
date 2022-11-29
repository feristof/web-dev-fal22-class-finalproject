<script setup lang="ts">
     import { ref } from 'vue';
     import session, { logout, login } from "../stores/session";
     import { RouterLink } from "vue-router";
     import data, { deleteWorkout } from "../stores/workouts";
     let isActive = ref(false);
     let ttl = '';let date = '';let Location = '';let Url = '';let Time = '';let Type = '';
</script>


<template>
<!-- check if the user is logged in -->
<div v-if="session.user == null">
    <div class="card">
  <div class="card-content">
    <p class="subtitle">
      It Seems you are not loggen in, please log in to see your workouts
    </p>

    <p class="title">
     OR
    </p>

    <p class="subtitle">
      Please Join our community and share your workouts with others
    </p>
    <p class="subtitle">
      -My fitness app
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <RouterLink to="/signUp">Join Us</RouterLink>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        <RouterLink to="/logIn">Log in</RouterLink>
      </span>
    </p>
  </footer>
</div>
     </div>
     <div class="column" v-else>
         <div class="button is-info is-fullwidth" @click="isActive=true">Add Workout</div>
         <div class="modal" :class="{ 'is-active': isActive }">
             <div class="modal-background "></div>
             <div class="modal">
                 <header class="modal-card-head">
                     <p class="modal">Add Workout</p>
                     <button class="delete" aria-label="close" @click="isActive=false"></button>
                 </header>
                 <section class="modal-card-body">
                     <div class="field">
                         <label class="label">Title</label>
                         <div class="control">
                             <input class="input" type="text" v-model="ttl">
                         </div>
                     </div>
                     <div class="field">
                         <label class="label">Date (MM-DD-YYY)</label>
                         <div class="control">
                             <input class="input" type="text" v-model="date">
                         </div>
                     </div>
                     <div class="field">
                         <label class="label">Time Spent (Minutes)</label>
                         <div class="control">
                             <input class="input" type="text" v-model="Time">
                         </div>
                     </div>
                     <div class="field">
                         <label class="label">Location (Place,State)</label>
                         <div class="control">
                             <input class="input" type="text" v-model="Location">
                         </div>
                     </div>
                     <div class="field">
                         <label class="label">Upload Picture Address/Url</label>
                         <div class="control">
                             <input class="input" type="text" v-model="Url">
                         </div>
                     </div>
                     <div class="field">
                         <label class="label">Workout Type</label>
                         <div class="control">
                             <input class="input" type="text" v-model="Type">
                         </div>
                     </div>
                 </section>
                 <footer class="modal-card-foot">
                     <button class="button is-success" @click="data.workouts.push({firstName: session.user?.firstName, lastName: session.user?.lastName, handle: session.user?.handle, title: ttl as string, workoutDate: date as string, workoutTime: Time as string, workoutLocation: Location as string, pictureUrl: Url as string, workoutType: Type as string}); isActive=false; ttl = '';date = '';Location = '';Url = '';Time = '';Type = '';">Add Workout</button>
                     <button class="button" @click="isActive=false">Cancel</button>
                 </footer>
             </div>
         </div>
         <div v-for="workout in data.workouts">
                 <br><br>
                 <div class="media">
                     <div class="media-content">
                         <div class="content">
                             <p>
                                 <strong>Name: </strong>{{ workout.firstName }} {{ workout.lastName }} &nbsp&nbsp<strong>Handle:</strong> {{ workout.handle }} &nbsp&nbsp <strong>Date:</strong> {{ workout.workoutDate }}<br> <strong>Location: </strong>{{ workout.workoutLocation }}
                                 <br>
                                 <u><Strong>Title: </Strong>{{ workout.title }} </u>
                                 <br><br>
                                 <div class = "workout-image">
                                     <img :src="workout.pictureUrl">
                                 </div>
                             </p>
                         </div>
                     </div>
                     <div class="media-right">
                        <button class="button is-danger is-outlined" @click="deleteWorkout(workout)">Delete</button>&nbsp
                        <button class="button is-black is-outlined">Share</button>

                     </div>
                 </div>
                 <hr class="dotted">
         </div>
        
     </div>

</template>


<style scoped>
hr.dotted{
    border-top:1px dotted green;
}

img:hover{
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
}
.card{
    margin-top: 8rem;
}
.subtitle, .title{
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
}
.workout-image img{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 24px black;
    display: block;
    margin-left: 4rem;
    margin-right: auto;
}
</style>


