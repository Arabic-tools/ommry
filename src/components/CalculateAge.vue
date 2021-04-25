<template>
  <v-container>
    <v-row>
      <v-col style="text-align:center;margin:20px">
        <p style="font-size: 2.8rem">
          حساب العمر - احسب عمرك
        </p>
        لحساب عمرك: قم باختيار تاريخ ميلادك بالهجري أو الميلادي ثم اضغط على
        "احسب العمر"
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class=" mb-2"
      align="center"
      style="margin-top:50px"
    >
      <v-col cols="12" md="2">
        <v-select
          v-model="dateType"
          :items="dateTypeMenu"
          label="إختر التقويم"
        ></v-select>
      </v-col>
      <v-col cols="4" md="2">
        <v-autocomplete
          v-model="selectedDay"
          :items="days"
          label="إختر اليوم"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4" md="2">
        <v-autocomplete
          v-model="selectedMonth"
          label="إختر الشهر"
          :item-text="(item) => item.value + ' - ' + item.text"
          :items="months"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4" md="2">
        <v-autocomplete
          v-model="selectedYear"
          label="إختر العام"
          :items="years"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4" md="2">
        <v-btn @click="calcAge">
          <h4>إحسب عمرك</h4>
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" v-if="date1">
      <v-col justify="center" cols="10" class="ageArea">
        <span> عمرك بالهجري : </span>

        {{ date2 }}
      </v-col>
      <v-col cols="10" class="ageArea">
        <span> عمرك بالميلادي :</span>

        {{ date1 }}
      </v-col>

      <v-col justify="center" cols="10" class="ageArea">
        <span> باقي علي عيد ميلادك :</span>

        {{ date3 }}
      </v-col>
    </v-row>
    <v-row justify="center" v-if="date1" class="text-center">
      <v-col cols="5" class="ageArea">
        <span>عمرك بالشهور : </span>
        {{ Math.floor(timeDiff / 1000 / 3600 / 24 / 30) }}
      </v-col>
      <v-col cols="5" class="ageArea">
        <span> عمرك بالآسابيع : </span>
        {{ Math.floor(timeDiff / 1000 / 3600 / 24 / 7) }}
      </v-col>
      <v-col cols="5" class="ageArea">
        <span> عمرك بالأيام :</span>
        {{ Math.floor(timeDiff / 1000 / 3600 / 24) }}
      </v-col>
      <v-col cols="5" class="ageArea">
        <span> عمرك بالساعات : </span>
        {{ Math.floor(timeDiff / 1000 / 60 / 60) }}
      </v-col>
      <v-col cols="5" class="ageArea">
        <span> عمرك بالدقائق : </span>
        {{ Math.floor(timeDiff / 1000 / 60) }}
      </v-col>
      <v-col cols="5" class="ageArea">
        <span> عمرك الثواني : </span>
        {{ Math.floor(timeDiff / 1000) }}
      </v-col>
    </v-row>
    <v-row>
      <v-col style="color:white" class="text-center">
        الكلمات المفتاحية لـ موقع عمري : حساب العمر | احسب عمرك | حساب العمر
        بالهجري | حساب العمر بالميلادي | حاسبة العمر؛
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
import {
  main,
  ConvertAgeDiffToString,
  ArabicMonths,
  ArabicGregMonths,
  BirthdayRemaining,
} from "./script";

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
      // for (let i in gregAge._data) {
      //   this.TableData1.push({ text: i, value: gregAge._data[i] });
      // }

      let { _data } = BirthdayRemaining(this.date, this.dateType);
      this.date3 = ConvertAgeDiffToString(_data);
      // console.log(_data)

      if (this.update === 0) {
        this.update++;
        setInterval(() => {
          this.calcAge();
        }, 1000);
      }
    },
  },
  computed: {
    date() {
      return (
        this.selectedYear + "-" + this.selectedMonth + "-" + this.selectedDay
      );
    },
    days() {
      let arr = [];
      if (this.dateType === "hijri") {
        for (let i = 1; i <= 30; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 1; i <= 31; i++) {
          arr.push(i);
        }
      }
      return arr;
    },
    months() {
      return this.dateType === "hijri" ? ArabicMonths() : ArabicGregMonths();
    },

    years() {
      let arr = [];
      if (this.dateType === "hijri") {
        for (let i = 1442; i >= 0; i--) {
          arr.push(i);
        }
      } else {
        for (let i = 2021; i >= 1500; i--) {
          arr.push(i);
        }
      }
      return arr;
    },
  },
  data() {
    return {
      date3: "",
      selectedDay: 1,
      selectedYear: 1440,
      selectedMonth: 1,

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

<style lang="scss">
.ageArea {
  span {
    font-weight: bold;
  
  }
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 0.5%;
  font-size: 0.9rem;
  // padding: -5px;
}
</style>
