<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Age />
    </v-main>
  </v-app>
</template>

<script>
import Age from "./components/CalculateAge";

export default {
  mounted() {},
  name: "App",
  components: {
    Age,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
* {
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
}
</style>
