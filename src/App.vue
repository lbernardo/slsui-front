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
    <button type="button" class="ui button primary" id="build"><i class="fas fa-cogs"></i> Build</button>
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
#mainContent  .row {
  margin-bottom: 10px;
}
#build {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 280px;
  z-index: 5000;
}
</style>