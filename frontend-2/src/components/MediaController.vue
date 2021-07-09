<template>
  <v-app>
    <v-app-bar extended app bottom color="green">
      <v-container>
      <v-row color="green">
        <v-col>
        <v-card flat color="green"><v-slider color="black" height="20px"></v-slider></v-card><v-spacer></v-spacer> </v-col>
        </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn rounded dark color="black"><v-icon>mdi-pause</v-icon></v-btn>
        <v-btn rounded dark color="black"><v-icon>mdi-play</v-icon></v-btn>
        <v-btn rounded dark color="black"><v-icon>mdi-stop</v-icon></v-btn>
        <v-spacer></v-spacer>
        <div>
       <v-icon large>mdi-volume-high</v-icon> </div>
        <v-slider color="black"></v-slider>
        <v-spacer></v-spacer>
        
      </v-row>
      </v-container>
    </v-app-bar>

  </v-app>
</template>

<script>
export default {
  name: "MediaController",
};
</script>

<style>
</style>