<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6-tablet is-6-desktop is-4-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control has-icons-left">
                <input id="email" type="email" placeholder="e.g. joe1@gmail.com" class="input" required v-model="email"/>
                <span class="icon is-small is-left"/>
                  <i class="fa fa-envelope"></i>
              </div>
            </div>
            <div class="field">
              <label for="password" class="label" type="password">Password</label>
              <div class="control has-icons-left">
                <input id="password" type="password" placeholder="*******" class="input" required v-model="password"/>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
    
    
    
    

    
    
    
    
    <script lang="ts">

    export default ({
      data() {
        return {
          email: '',
          password: ''
        }
      }
    });
    
    
    </script>
    
    
    <style scoped>
    form{
        border: 1px solid lightgreen
    }
    </style>
