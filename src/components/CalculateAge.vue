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

    <v-row v-if="date1">
      <v-col cols="12" md="6">
        عمرك بالميلادي :
        {{ date1 }}
      </v-col>
      <v-col cols="12" md="6">
        عمرك بالهجري :
        {{ date2 }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        عمرك بالشهور : {{ Math.floor(timeDiff / 1000 / 3600 / 24  / 30) }}
      </v-col>
      <v-col cols="12">
        عمرك بالآسابيع : {{ Math.floor(timeDiff / 1000 / 3600 / 24 / 7) }}
      </v-col>
      <v-col cols="12">
        عمرك بالأيام : {{ Math.floor(timeDiff / 1000 / 3600 / 24) }}
      </v-col>
      <v-col cols="12">
        عمرك بالساعات : {{ Math.floor(timeDiff / 1000 / 60 / 60) }}
      </v-col>
      <v-col cols="12">
        عمرك بالدقائق : {{ Math.floor(timeDiff / 1000 / 60) }}
      </v-col>
      <v-col cols="12">
        عمرك الثواني : {{ Math.floor(timeDiff / 1000) }}
      </v-col>
    </v-row>

    <!-- <v-row justify="center">
      <v-col cols="12" md="6">
        <v-data-table
          :headers="headers"
          :items="TableData1"
          hide-default-footer
          hide-default-header
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-col cols="12" md="6">
        <v-data-table
          :headers="headers"
          :items="TableData2"
          hide-default-footer
          hide-default-header
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
import { main, ConvertAgeDiffToString } from "./script";

export default {
  //   mounted() {
  //     main("2021-04-18");
  //   },
  methods: {
    calcAge() {
      this.TableData1 = [];
      this.TableData2 = [];
      let { gregAge, higiriAge, timeDiff } = main(this.date, this.dateType);
      this.date1 = ConvertAgeDiffToString(gregAge._data);
      this.date2 = ConvertAgeDiffToString(higiriAge._data);
      this.timeDiff = timeDiff;
      for (let i in gregAge._data) {
        this.TableData1.push({ text: i, value: gregAge._data[i] });
      }
      if (this.update === 0) {
        this.update++;
        setInterval(() => {
          this.calcAge();
        }, 1000);
      }
    },
  },
  // computed: {
  //   timeDiff() {
  //     if (this.date) {
  //       console.log(main(this.date, this.dateType));
  //       let { _data } = main(this.date, this.dateType);

  //       return _data;
  //     }
  //     return "";
  //   },
  // },
  data() {
    return {
      timeDiff: 0,
      update: 0,
      date1: null,
      date2: null,
      headers: [
        {
          value: "text",
        },
        {
          value: "value",
        },
      ],
      TableData1: [],
      TableData2: [],
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
