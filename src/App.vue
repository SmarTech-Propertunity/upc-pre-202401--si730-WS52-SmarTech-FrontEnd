<script setup>

import TheToolbar from "@/public/components/theToolbar.component.vue";
import TheOptions from "@/public/components/theOptions.component.vue";
import Login from "@/core/domain/components/user-management/main-login.component.vue";
import RecoveryPassword from "@/core/domain/components/user-management/recovery-password.component.vue";
import Register from "@/core/domain/components/user-management/register-user.component.vue";
import TheFeaturedPublications from "@/public/components/theFeaturedPublications.component.vue";
import TheSearchAndFilter from "@/public/components/theSearchAndFilters.component.vue";
</script>

<template>
  <the-toolbar></the-toolbar>
  <the-search-and-filter></the-search-and-filter>
  <the-options></the-options>
  <the-featured-publications></the-featured-publications>
  <Login/>
  <RecoveryPassword/>
  <Register/>

</template>

<style scoped>
</style>
