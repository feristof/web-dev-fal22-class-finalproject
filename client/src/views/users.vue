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
.table{
    margin-top: 8rem;
    /* design */
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
}

/* responsive table */
@media screen and (max-width: 768px) {
    .table {
        display: block;
        position: relative;
    }
    .table > *, .table tr, .table td, .table th {
        display: block;
    }
    .table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .table tr {
        border: 1px solid #ccc;
    }
    .table td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }
    .table td:before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
    }
    .table td:nth-of-type(1):before { content: "ID"; }
    .table td:nth-of-type(2):before { content: "First Name"; }
    .table td:nth-of-type(3):before { content: "Last Name"; }
    .table td:nth-of-type(4):before { content: "Email"; }
    .table td:nth-of-type(5):before { content: "Handle"; }
    .table td:nth-of-type(6):before { content: "Admin"; }
    .table td:nth-of-type(7):before { content: "Delete"; }
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