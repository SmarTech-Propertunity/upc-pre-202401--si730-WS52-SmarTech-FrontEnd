<script>

</script>

<template>

  <pv-toolbar class="p-toolbar">
    <template #start>
      <div class="p-toolbar-start">

        <img class="pertuny-logo"
             src="../../../../assets/images/common/propertunity-logo.png"
             alt="Propertunity"
             width="50" height="50"
             aria-label="Propertunity logo"
        >
        <div class="p-toolbar-start-title" aria-label="Propertunity">Propertunity</div>
      </div>
    </template>

    <template #end>
      <div class="p-toolbar-end">

        <router-link to="/search">
          <div class="profile-shortcut-wrapper">
            <img class="account-shortcut"
                 src="../../../../assets/images/material-icons/account-icon.png"
                 height="60px" width="60px"
                 alt="Account Icon"
                 aria-label="account"
            >
          </div>
        </router-link>

      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>
  .p-toolbar {
    display: flex;
    align-items: center;
    background: #4478FF;
    padding: 0.25rem 0;

    border-width: 0;
    border-radius: 0;

  }
  .p-toolbar-start {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    gap: 1rem;
  }
  .p-toolbar-start-title {
    font-size: 1.75rem;

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

  .account-shortcut {
    border-radius: 99rem;
    padding: 0.15rem;
    transition: background-color 150ms ease-in-out;
  }
  .account-shortcut:hover {
    background-color: #80aaf5;
    cursor: pointer;
  }
  .pertuny-logo {
    border-radius: 99rem;
  }
  .profile-shortcut-wrapper {
    display: flex;

  }
</style>
