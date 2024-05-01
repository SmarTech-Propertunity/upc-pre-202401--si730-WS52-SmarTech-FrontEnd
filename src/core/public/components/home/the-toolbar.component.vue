<script>

</script>

<template>

  <!-- Toolbar -->
  <pv-toolbar class="p-toolbar">
    <template #start>
      <div class="p-toolbar-start">
        <p class="p-toolbar-start-title">Propertunity</p>
      </div>
    </template>

    <template #end>
      <div class="p-toolbar-end">
        <!-- Propertunity button -->
        <img src="../../../../assets/images/home-icon.png" height="50px" width="50px" alt="home icon">

        <!-- User (profile) button -->
        <img src="../../../../assets/images/user-icon.png" height="50px" width="50px" alt="Account Icon">
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
    background: hsl(252, 84%, 24%);
    width: 100%;
    padding: 1rem;
  }

  .p-toolbar-start {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
  }
  .p-toolbar-start-title {
    font-size: 2em;
    font-weight: bold;
    font-style: italic;
    font-family: Lato, sans-serif;
    color: #ffffff;
  }

  .p-toolbar-end {
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    gap: 2.0rem;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
