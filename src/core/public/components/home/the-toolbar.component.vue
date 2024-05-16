<script>

</script>

<template>

  <pv-toolbar class="p-toolbar">
    <template #start>
      <div class="p-toolbar-start">
        <p class="p-toolbar-start-title" aria-label="Propertunity">Propertunity</p>
      </div>
    </template>

    <template #end>
      <div class="p-toolbar-end">
        <img class="a" src="../../../../assets/images/material-icons/account-icon.png" height="65px" width="65px" alt="Account Icon" aria-label="account">
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
    background: #427bf5;
    width: 100%;
    padding: 0;
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


  .a {
    background-color: #80aaf5;
    border-radius: 99rem;
    padding: 0.5rem;
  }
</style>
