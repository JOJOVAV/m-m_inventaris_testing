<template>
    <div class="terugbrengen">
      <h1>Wat wil je {{ title }}</h1>
      <h2></h2>
      <importExcel></importExcel>
    </div>
  </template>

<script>
import importExcel from '@/components/ImportExcel.vue'

export default {
  name:'Terugbrengen',
  components: {
    importExcel
  },

  data() {
    return {
      title: document.title.toLocaleLowerCase()
    };

  }
}
</script>