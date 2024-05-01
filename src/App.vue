<script setup>


import TheToolbar from "@/core/public/components/home/the-toolbar.component.vue";
import TheOptions from "@/core/public/components/home/the-options.component.vue";
import Login from "@/core/domain/components/user-management/main-login.component.vue";
import RecoveryPassword from "@/core/domain/components/user-management/recovery-password.component.vue";
import Register from "@/core/domain/components/user-management/register-user.component.vue";
import TheFeaturedPublications from "@/core/public/components/home/the-featured-publications.component.vue";
import TheSearchAndFilter from "@/core/public/components/home/the-search.component.vue";
import TheFooter from "@/core/public/components/the-footer.component.vue";
</script>

<template>
  <router-view></router-view>
<TheFooter/>



</template>

<style scoped>

</style>
