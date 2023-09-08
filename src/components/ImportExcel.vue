<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <div v-for="(sheetData, sheetName) in excelData" :key="sheetName">
      <h2>{{ sheetName }}</h2>
      <table>
        <tr v-for="row in sheetData" :key="row">
          <td v-for="cell in row" :key="cell">{{ cell }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { read, utils } from 'xlsx';

export default {
  data() {
    return {
      excelData: {}
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });

        const sheetNames = workbook.SheetNames;
        const dataObj = {};

        sheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
          dataObj[sheetName] = jsonData;
        });

        this.excelData = dataObj;
      };

      reader.readAsArrayBuffer(file);
    }
  }
};
</script>