import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

    postPackages: function (context, values) {

      axios.post("http://localhost:8080/packages", {
        addressee: values.addressee,
        telephone: values.telephone,
        trackingNumber: values.trackingNumber,
        weight: values.weight,
        state: 1
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error.response);
        console.log(error);
      });
    },
    getPackage: function (context) {
      context.commit("changeLoading", true);
      axios.get("http://localhost:8080/packages")
        .then(function (response) {
          context.commit("changeLoading", false);
          context.commit("initPackagesList", response.data);
        }).catch(function (error) {
          context.commit("changeLoading", false);

          console.log(error);
        });
    }
  }
})