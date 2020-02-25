<template>
  <div class="about">
    <h1>This is an about page</h1>
    <svg-icon icon-class="icon-test"/>
    <ul>
      <li v-for="(item,idx) in gg" :key="idx">
        <p>{{item.title}}</p>
        <img :src="item.thumbnail_pic_s" alt />
        <p>{{item.author_name}}</p>
      </li>
    </ul>
    
    <!-- <ul v-for="(item,idx) in name" :key="idx">
      <li>{{item.name}}</li>
      <li>{{item.age}}</li>
      
    </ul>-->
  </div>
</template>
<script>
import { getGreetings, getdata , getdata2 } from "./api";
export default {
  data() {
    return {
      name: [],
      gg: []
    };
  },
  mounted() {
    this.getData3();
    this.getData2();
    this.getData()
  },
  methods: {
    async getData() {
      let res = await getGreetings();
      this.name = res;
      console.log(res);
    },

    async getData2() {
      let res = await getdata();
      this.gg = res;
      console.log(this.gg);
    },
     async getData3() {
      let res = await getdata2();
      console.log(res);
    },
  }
};
</script>
<style lang="scss">
.about{
  color:blue;
  font-size:18px;
}
</style>
