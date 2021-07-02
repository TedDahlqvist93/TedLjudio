<template>
  <v-app>
    <v-app-bar color="green" app flat>
      <v-spacer></v-spacer>
      <v-text-field
        background-color="grey lighten-1"
        
        flat
        hide-details
        rounded
        sol
      ></v-text-field>
      <v-btn rounded dark  color="black">Search</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>