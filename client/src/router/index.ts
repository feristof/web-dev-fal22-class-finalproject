import { createRouter, createWebHistory } from 'vue-router'
import Profile from "../components/Profile.vue"
import Login from "../components/Login.vue"
import Event from "../components/Event.vue"
import Home from "../components/Home.vue"
import ReportIssue from "../components/ReportIssue.vue"
import Stats from "../components/Stats.vue"
import Share from "../components/Share.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
      // component: () => import('../views/AboutView.vue')
    {
      name: "Profile",
      path: "/profile",
      component: Profile,
      meta:{
        CredentialCheck: false,
      }
    },
 {
    name: "Event",
    path: "/event",
    component: Event
  },

  {
    name: "ReportIssue",
    path: "/issue",
    component: ReportIssue
  },

{
  name: "Share",
  path: "/ishare",
  component: Share
},

  {
    name: "Stats",
    path: "/stats",
    component: Stats
  },

  {
    name: "Home",
    path: "/home",
    component: Home
  },

    {
      name: "Login",
      path: "/login",
      component: Login
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.CredentialCheck){
    next("/login");
  }
  else{
    next();
  }
  });

export default router;
