<script setup>

</script>

<template>
<pv-toolbar class="p-toolbar">
    <template #start>
      <div class="p-toolbar-start">
        <router-link to="/home"><img src="../../../assets/images/retrace-icon.png" height="50px" width="50px" alt="back icon"></router-link>

      </div>
    </template>

    <template #end>
      <div class="p-toolbar-end">
        <router-link to="/home">
        <img src="../../../assets/images/home-icon.png" height="50px" width="50px" alt="home icon">
        </router-link>
        <img src="../../../assets/images/material-icons/account-icon.png" height="50px" width="50px" alt="Account Icon">
      </div>
    </template>
</pv-toolbar>
</template>

<style scoped>
.p-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: hsl(229, 94%, 19%);
  width: 100%;
  padding: 0.25rem 0;
  border-width: 0;
  border-radius: 0;
}

.p-toolbar-start {
  display: flex;
  align-items: center;
  padding-left: 1rem;
}

.p-toolbar-end {
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  gap: 2.0rem;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>