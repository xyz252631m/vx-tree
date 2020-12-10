<template>
  <ul>
    <li v-for="m in list" :key="m.id" @click="itemClick"></li>
  </ul>
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    itemClick() {},
  },
  components: {},
};
</script>

<style>
</style>
