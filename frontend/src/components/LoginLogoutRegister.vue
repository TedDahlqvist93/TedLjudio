<template>
  <div>
    <v-container v-if="user.loggedIn">
      <v-row>
        <v-col>
          <v-btn color="black" dark rounded @click="logOut">Logout</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-dialog v-model="loginDialog" max-width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="black" dark v-bind="attrs" v-on="on" rounded>
            Login
          </v-btn>
        </template>
        <v-card>
          <v-card-title> Login </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  required
                  label="E-mail"
                  v-model="loginForm.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="loginForm.password"
                  required
                ></v-text-field>
              </v-col>
            </v-row> </v-container
          ><v-card-actions>
            <v-spacer> </v-spacer>
            <v-btn color="black" dark rounded @click="submitLogin">
              Login
            </v-btn>
            <v-btn color="black" dark rounded @click="loginDialog = false">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="registerDialog" max-width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="black" rounded dark v-bind="attrs" v-on="on">
            Register
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5"> Register </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  required
                  label="first name"
                  v-model="registerForm.firstName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  required
                  label="last name"
                  v-model="registerForm.lastName"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  required
                  label="E-mail"
                  v-model="registerForm.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="registerForm.password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submitRegister" color="black" dark rounded>
              Register
            </v-btn>
            <v-btn color="black" dark rounded @click="registerDialog = false">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginLogoutRegister",
  components: {},
  data() {
    return {
      user: this.getUser(),
      registerDialog: false,
      loginDialog: false,
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  async mounted() {
    await this.getPlaylists(this.$store.state.user.id);
  },
  methods: {
    ...mapActions(["register"]),
    ...mapActions(["logout"]),
    ...mapActions(["login"]),
    ...mapActions(["getPlaylists"]),
    ...mapGetters(["getUser"]),

    async submitRegister() {
      await this.register(this.registerForm)
        .then(() => {
          this.user = this.getUser();
          if (this.user.loggedIn) {
            this.registerForm = {};
            this.registerDialog = false;
            this.loginDialog = false;
          }
        })

        .catch((error) => {
          console.log("err", error);
        });
    },
    async logOut() {
      await this.logout(this.user)
        .then(() => {
          this.registerDialog = false;
          this.loginDialog = false;
          this.user = this.getUser();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async submitLogin() {
      await this.login(this.loginForm)
        .then(() => {
          this.registerDialog = false;
          this.loginDialog = false;
          this.user = this.getUser();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
