<template>
  <v-app>
    <v-app-bar color="green" app>
      <v-spacer></v-spacer>
      <v-responsive>
        <v-text-field
          background-color="white"
          flat
          hide-details
          rounded
          sol
        ></v-text-field>
      </v-responsive>
      <v-btn rounded 
      dark 
      color="black"
      @click="search(query)"
      
      >Search</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  }
</script>

<style>
</style>