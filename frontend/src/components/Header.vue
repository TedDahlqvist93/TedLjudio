<template>
  <v-app>
    <v-app-bar color="green" app>
      <v-spacer></v-spacer>
      <v-responsive>
        <v-text-field
          v-model="query"
          background-color="white"
          flat
          hide-details
          rounded
          sol
        ></v-text-field>
      </v-responsive>
      <v-btn @click="search(query)" rounded dark color="black">Search</v-btn>

      <v-spacer></v-spacer>
      <LoginLogoutRegister />
    </v-app-bar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LoginLogoutRegister from "./LoginLogoutRegister.vue";
export default {
  name: "Header",
  components: {
    LoginLogoutRegister,
  },
  data() {
    return {
      query: "",
    };
  },

  methods: {
    ...mapActions(["searchSong"]),

    search(query) {
      this.searchSong(query);
    },
  },
  computed: {
    getSong() {
      return this.$store.state.currentSong.title;
    },

    ...mapGetters(["getSearchList"]),
  },
};
</script>

<style>
</style>