<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import session from "../stores/session";
import { login } from "../stores/session";

let userName = reactive({
  firstName: "",
  lastName: "",
  password: "",
});
</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <!-- container size for different devices -->
          <div class="column is-8-tablet is-8-desktop is-8-widescreen">
            <form class="box">
              <div class="field">
                <label for="" class="label"> First Name</label>
                <div class="control">
                  <input
                    type="text"
                    placeholder="eg. Argon"
                    class="input is-primary"
                    required
                    v-model="userName.firstName"
                  />
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Last Name</label>
                <div class="control">
                  <input
                    type="text"
                    placeholder="eg. Brisk"
                    class="input is-primary"
                    required
                    v-model="userName.lastName"
                  />
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control">
                  <input
                    class="input is-primary"
                    type="password"
                    required
                    v-model="userName.password"
                    placeholder="eg. ********"
                  />
                </div>
              </div>
              <!-- line space -->
              <br />
              <div class="field">
                <router-link
                  to="/"
                  class="button is-link"
                  @click="login(userName.firstName, userName.lastName, userName.password)"
                  >Log in</router-link
                >
              </div>
              <div class="has-text-centered">
                <p class="is-size-14">
                  Don't have an account?
                  <a href="./signUp" class="has-text-primary">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
