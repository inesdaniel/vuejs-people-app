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
      newPerson: {name: "", bio: "", bioVisible: true},
      counter: 0
    };
  },
  created: function() {},
  methods: {
    removePerson: function(inputPerson) {
      // find the index of inputPerson
      var index = this.people.indexOf(inputPerson);
      // spice to delete, index is var above, 1 is how many you want to delete
      this.people.splice(index, 1);
    },
    addPerson: function() {
      console.log('adding a person');
  

      this.people.push(this.newPerson);
      // var newPersonInfo = {
      //   name: this.newPerson.name,
      //   bio: this.newPerson.bio 
      // };
      // this.people.push(newPersonInfo);
      
      this.newPerson = {text: "", bio: ""};
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



// When a name is clicked, that should toggle
// the showing/hiding of the bio.













