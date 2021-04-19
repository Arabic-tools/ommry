<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center">
        <p style="font-size: 2.8rem">
          حساب العمر - احسب عمرك
        </p>
        لحساب عمرك: قم باختيار تاريخ ميلادك بالهجري أو الميلادي ثم اضغط على
        "احسب العمر"
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-select
          v-model="dateType"
          :items="dateTypeMenu"
          label="إختر التقويم"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="date" type="date"></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="calcAge">إحسب عمرك</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>{{ timeDiff }} </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { main } from "./script";

export default {
  //   mounted() {
  //     main("2021-04-18");
  //   },
  methods: {
    calcAge() {
      main(this.date, this.dateType);
    },
  },
  computed: {
    timeDiff() {
      if (this.date) {
        let { _data } = main(this.date, this.dateType);

        return _data;
      }
      return "";
    },
  },
  data() {
    return {
      dateType: "hijri",
      date: "1441-09-06",
      dateTypeMenu: [
        {
          value: "hijri",
          text: "الهجري",
        },
        {
          value: "gregorian",
          text: "الميلادي",
        },
      ],
    };
  },
};
</script>
