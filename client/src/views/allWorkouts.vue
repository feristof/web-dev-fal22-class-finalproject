<script setup lang="ts">
     import { ref, reactive } from 'vue';
     import session from "../stores/session";
     import { RouterLink } from "vue-router";
     import { getWorkouts, type Workout, deleteWorkout, createWorkout, searchWorkout } from "../stores/workouts";

    //  importing vue select
    // import vSelect from "vue-select";

     let ttl = '';let date = '';let Location = '';let Url = '';let Time = '';
    const workouts = reactive([] as Workout[]);
    getWorkouts().then( x=> workouts.push(...x));
    let isActive = ref(false);

    const workout = reactive({ } as Workout);
    // add workout to the database
    async function add(){
        await getWorkouts().then( x=> workout.id = x[x.length - 1].id + 1);
        workout.firstName = session.user?.firstName as string;
        workout.lastName = session.user?.lastName as string;
        workout.title = ttl;
        workout.workoutDate = date;
        workout.workoutLocation = Location;
        workout.pictureUrl= Url;
        workout.workoutTime = Time;
        workout.handle = session.user?.handle as string;
        createWorkout(workout);
    }
    


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
                <div class="close-workout">
                    <a class="button is-primary" @click="add();isActive=false">Add Workout</a>
                    <a @click="isActive=false"> Cancel </a>
                </div>
                 
            </form>
          </div>
         </div>
        </div>
        <br>
        <!-- <div class="search">
            <input type="text" placeholder=" Search for title ">
        </div> -->
<!-- making a v-select component to search for workouts from title -->
        <!-- <div class="search">
            <v-select
            :options="workouts"
            label="title"
            v-model="search"
            @input="searchWorkout(search)"
            >
            </v-select>
        </div> -->
        <br>
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

@media screen and (max-width: 768px){
    .workout-image img{
        width: 48em;
        height: 48%;
        box-shadow: 0 0 24px black;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (max-width: 768px){
    .workoutAdd{
        margin-left: 0;
        margin-right: 0;
    }
}

.media{
    margin-left: 4rem;
    margin-right: 4rem;
    background-color: lightgoldenrodyellow;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    box-shadow: 0 0 24px black;
    background-color: rgba(255, 255, 255, 0.6);
}

/* making it responsive */
@media screen and (max-width: 768px){
    .media{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .search{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .button{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .close-workout{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .field{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .control{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .label{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .input{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-background{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-content{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-head{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-body{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-foot{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-close{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-title{
        margin-left: 0;
        margin-right: 0;
    }
}


</style>


