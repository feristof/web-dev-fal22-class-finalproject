<script setup lang = "ts">
import { ref, reactive } from "vue";
import session from "../stores/session";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

function deleteUser(id: number) {
   session.users = session.users.filter( (user) => user.id !== id );
 }

</script>



<template>
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
    <div v-else class="user-table">
<table class="table is-striped">
                 <thead>
                     <tr>
                            <th>ID</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th>Handle</th>
                         <th> Admin </th>
                         <th>Delete</th>
                     </tr>
                     <br>
                 </thead>
                 <tbody>
                     <tr v-for="user in session.users">
                        <td> {{user.id}}</td>
                         <td>{{ user.firstName }}</td>
                         <td>{{ user.lastName }}</td>
                         <td>{{ user.email }}</td>
                         <td>{{ user.handle }}</td>
                         <td> {{ user.admin}}</td>
                         <td><button class="button is-danger is-outlined" @click="deleteUser(user.id as number)">X</button></td>
                     </tr>
                 </tbody>
             </table>
    </div>
</template>



<style scoped>
.user-table {
    margin: 0 auto;
    margin-top: 8em;
    width: 50%;
    padding: 20px;
    border: 2px solid orange;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    background: #fff;
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
</style>