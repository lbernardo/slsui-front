<template>
  <div id="app">
    <Sidebar />
    <div class="page-container">
      <Header />
      <main class='main-content bgc-grey-100'>
        <div id='mainContent'>
          <div class="bd bgc-white">
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
export default {
  name: 'App',
  components: {
     Sidebar,
    Header,
  }
}
</script>
<style>
body {
  background: #f9fafb !important;
}
.bd.bgc-white {
  padding: 15px;
}
</style>