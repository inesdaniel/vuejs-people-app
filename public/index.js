/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      people: [
        {
          name: "mary",
          bio: "fewnaeoijva",
          bioVisible: true
        },
        {
          name: "joe",
          bio: "fewfnaer;oija",
          bioVisible: true
        },
        {
          name: "jane",
          bio: "fweivn;oaeirnv",
          bioVisible: true
        }
      ],
      newPerson: {name: "", bio: ""}
    };
  },
  created: function() {},
  methods: {
    addPerson: function() {
      console.log('adding a person');

      var newPersonInfo = {
        name: this.newPerson.name,
        bio: this.newPerson.bio 
      };
      this.people.push(newPersonInfo);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});