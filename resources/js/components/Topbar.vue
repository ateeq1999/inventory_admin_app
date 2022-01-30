<template>
  <v-app-bar app elevate-on-scroll elevation="3" dark>
    <v-app-bar-nav-icon @click="$emit('drawerEvent')" class="text--white"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Change Password", icon: "mdi-key" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],
    };
  },
};
</script>

<style scoped></style>