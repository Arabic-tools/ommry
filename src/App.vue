<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>
        عمري .كوم
      </h1>

      <v-spacer></v-spacer>
      <h1>
        Ommry.com
      </h1>
    </v-app-bar>

    <v-main>
      <Age />
    </v-main>
    <v-footer>
      <v-row>
        <v-col style="text-align:center">
<span class="effra-font">برعاية لطيفة من الرائعين في: <a class="effra-font" href="https://wasetshera.com/?myad=53195" >وسيط شراء</a> و <a class="effra-font" href="https://knaree.com/" >كناري</a> و <a class="effra-font" href="https://rmmmz.com/" >رمز</a></span>	
		
          <br />
          للإتصال بنا:
          <a href="mailto:Ommry@inboxeen.com">Ommry@inboxeen.com</a>

          <br />
          جميع الحقوق محفوظة - موقع عمري 2022 ©
        </v-col>
      </v-row>
    </v-footer>
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
  // font-family:  "Graphik LCG Web", "Graphik Arabic Web Regular", -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;;
  font-family: "Tajawal", sans-serif;
  font-weight: 400;
}
</style>
