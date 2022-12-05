<script setup lang="ts">
     import { ref, reactive, computed } from 'vue';
     import session, { logout, login } from "../stores/session";
     import { RouterLink } from "vue-router";
     import { getWorkouts, type Workout, deleteWorkout, createWorkout } from "../stores/workouts";
     let ttl = '';let date = '';let Location = '';let Url = '';let Time = '';
    const workouts = reactive([] as Workout[]);
    getWorkouts().then( x=> workouts.push(...x));
    const isActive = ref(false);

    // const workout = reactive({ } as Workout);
    //add workout to the database
    // function add(){
    //     workout.workoutDate = date;
    //     workout.workoutLocation = Location;
    //     workout.workoutUrl = Url;
    //     workout.workoutTime = Time;
    //     createWorkout(workout);
    // }

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
        <div class="workoutAdd">
         <div class="button is-info is-fullwidth" @click="isActive=true">Add Workout</div>
         <div class="modal" :class="{ 'is-active': isActive }">
          <div class="column is-8-tablet is-8-desktop is-8-widescreen">
            <form class="box">
              <div class="field">
                <label class="label">Title</label>
                        
                <div class="control">
                  
                  <div class="control">
                             <input class="input is-primary" placeholder="Skydiving" type="text" v-model="ttl">
                         </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Date</label>
                        
                <div class="control">
                  
                  <div class="control">
                             <input class="input is-primary" placeholder="DD/MM/YYYY" type="text" v-model="date">
                         </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Duration</label>
                        
                <div class="control">
                  
                  <div class="control">
                             <input class="input is-primary" placeholder="180 Minutes" type="text" v-model="Time">
                         </div>
                </div>
              </div>
              
              
                <div class="field">
                    <label class="label">Location</label>
                            
                    <div class="control">
                    
                    <div class="control">
                                 <input class="input is-primary" placeholder="New Paltz, NY" type="text" v-model="Location">
                             </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Picture URL</label>
                            
                    <div class="control">
                    
                    <div class="control">
                                 <input class="input is-primary" placeholder="https://imagesUrl.png" type="text" v-model="Url">
                             </div>
                    </div>
                </div>
              <!-- line space -->
              <footer class="modal-card-foot">
                        <button class="button is-success" @click="isActive=false">Add Workout</button>
                        <button class="button" @click="isActive=false">Cancel</button>
                 </footer>
            </form>
          </div>
         </div>
        </div>
         <div v-for="workout in workouts">
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
                        <button class="button is-danger is-outlined" @click="deleteWorkout(workout.id)">Delete</button>&nbsp
                        <button class="button is-black is-outlined">Edit</button>

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
.title{
  font-weight: 600;
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


