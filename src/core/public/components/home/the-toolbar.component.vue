<script>
  export default
  {
    name: "the-toolbar",
  }
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
        <img src="../../../../assets/images/propertunity-logo.png" height="50px" width="50px" alt="propertunity">

        <!-- User (profile) button -->
        <img src="../../../../assets/images/user-icon.png" height="50px" width="50px" alt="propertunity">
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

    background: #0000cd;
    height: 4.0rem;
  }

  .p-toolbar-start {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
  }
  .p-toolbar-start-title {
    font-weight: normal;
    font-size: 1.5rem;
    color: #ffffff;
  }

  .p-toolbar-end {
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    gap: 2.0rem;
  }
</style>
