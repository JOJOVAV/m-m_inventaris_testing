<template>
    <div>
      <button @click="exportExcel">Export Materiaallijst</button>
    </div>
  </template>
  
  <script>
  import { utils, writeFile } from 'xlsx';
  
  export default {
    methods: {
      exportExcel() {
        const jsonData = [
          { Name: 'John', Age: 25 },
          { Name: 'Jane', Age: 30 },
          { Name: 'Bob', Age: 35 }
        ];
        
        const worksheet = utils.json_to_sheet(jsonData);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        writeFile(workbook, 'exported_sheet.xlsx');
      }
    }
  };
  </script>