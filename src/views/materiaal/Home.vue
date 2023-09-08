<template>
  <div>
    <h2>{{ title }}</h2>
    <nav>
    <router-link :to="{name: 'MateriaalHome'}">Home</router-link> |
    <router-link :to="{name: 'Ontlenen'}">Ontlenen</router-link> |
    <router-link :to="{name: 'Terugbrengen'}">Terug Brengen</router-link>
  </nav>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ut modi perferendis mollitia consequatur ipsa enim fugit alias non pariatur. Consectetur libero facilis laudantium id at quo ullam explicabo cupiditate!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ut modi perferendis mollitia consequatur ipsa enim fugit alias non pariatur. Consectetur libero facilis laudantium id at quo ullam explicabo cupiditate!</p>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// 
export default {
  data() {
    return {
      title: 'Materiaal'
    };

  }
}
</script>
