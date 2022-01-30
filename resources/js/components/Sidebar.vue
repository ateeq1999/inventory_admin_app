<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-card class="text-center ma-4" flat>
      <h2 class="white--primary">Admin Dashboard</h2>
    </v-card>
    <v-list>
      <v-list-item v-for="[icon, text, route_url] in links" :key="icon" link :to="route_url">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>{{ 'mdi-logout' }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ 'Logout' }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        ["fa-home", "Dashboard", "/"],
        ["mdi-account", "Managers", "/managers"],
        ["mdi-doctor", "Doctor", "/doctors"],
        ["mdi-group", "Staff", "/staff"],
        ["mdi-group", "Departments", "/departments"],
        ["mdi-group", "Units", "/units"],
        ["mdi-group", "Equipment", "/equipment"],
        ["mdi-group", "Orders", "/orders"],
      ],
    };
  },
  methods: {
    logout: function () {
      this.$store.dispatch('Auth/logout')
      .then(() => {
          this.loader = false
          this.$router.push('/')
      })
      .catch(err => console.log(err))
    }
  }
};
</script>

<style scoped></style>