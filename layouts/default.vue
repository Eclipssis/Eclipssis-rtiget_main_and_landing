<template>
  <div>
    <SideMenu></SideMenu>
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from '@/components/Header.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  components: {
    SideMenu,
    Header,
    Footer
  }
}
</script>


