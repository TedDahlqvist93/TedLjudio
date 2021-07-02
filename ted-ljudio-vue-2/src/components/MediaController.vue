<template>
  <v-app>
    <v-app-bar app extended bottom color="green">
      <v-container>
        <v-row>
          <v-col align-self="center">
              <v-card color="green" flat>
            <v-slider color="black"></v-slider>
            </v-card>
          </v-col>
        </v-row>
        <v-row >
            <v-spacer></v-spacer>
            <v-btn rounded dark color="black"><v-icon>mdi-play</v-icon></v-btn>
            <v-btn rounded dark color="black"><v-icon>mdi-pause</v-icon></v-btn>
            <v-btn rounded dark color="black"><v-icon>mdi-stop</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded dark color="black"><v-icon>mdi-volume-high</v-icon></v-btn>
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