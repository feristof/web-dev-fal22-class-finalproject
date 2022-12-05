<script setup lang="ts">
import { RouterLink } from "vue-router";
import session from "../stores/session";

let fName = "";
let lName = "";
let username = "";
let userEmail = "";
let password = "";
let county= "";

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
                <label class="label"> First Name</label>
                <div class="control">
                  <input
                    type="text"
                    placeholder="eg. Brian"
                    class="input is-primary"
                    v-model="fName"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input
                    type="text"
                    placeholder="eg. Lara"
                    class="input is-primary"
                    required
                    v-model="lName"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Handle</label>
                <div class="control">
                  <input
                    class="input is-primary"
                    type="text"
                    required
                    v-model="username"
                    placeholder="eg. BrianL"
                  />
                </div>
              </div>
              <label class="label">Email</label>
              <div class="field has-addons">
                <br />
                <p>
                  <input
                    class="input is-primary"
                    required
                    v-model="userEmail"
                    type="text"
                    placeholder="eg. bl.paltz@gmail"
                  />
                </p>

                <p class="control">
                  <a class="button is-static"> .com </a>
                </p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    class="input is-primary"
                    type="password"
                    required
                    v-model="password"
                    placeholder="eg. 123456"
                  />
                </div>
              </div>

              <label class="label">County, NY</label>
              <div class="field has-addons">
                <div class="control is-expanded">
                  <div class="select is-fullwidth is-primary">
                    <select name="county">
                      <option value=""></option>
                      <option value="Orange">Orange</option>
                      <option value="Ulster">Ulster</option>
                      <option value="Rockland">Rockland</option>
                      <option value="Dutchess">Dutchess</option>
                      <option value="Westchester">Westchester</option>
                      <option value="Putnam">Putnam</option>
                      <option value="Sullivan">Sullivan</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">
                    County
                  </button>
                </div>
              </div>
              <!-- line space -->
              <br />
              <div class="field">
                <router-link
                  to="/logIn"
                  class="button is-link"
                  @click="
                    session.users.push({
                      firstName: fName,
                      lastName: lName,
                      handle: username,
                      email: userEmail,
                      password: password,
                    })
                  "
                  >Sign Up</router-link
                >
              </div>
              <div class="has-text-centered">
                <p class="is-size-14">
                  Already have an account?
                  <a href="./logIn" class="has-text-primary">Log In</a>
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
