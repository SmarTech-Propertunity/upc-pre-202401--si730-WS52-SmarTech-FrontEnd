<template>
  <h1 class="NotfoundTitle">{{ $t('NotFound') }}</h1>
  <div class="button">
    <RouterLink to="/home">
      <pv-button :label="$t('NotFoundButton')" severity="info" raised :aria-label="$t('NotFoundButton')"/>
    </RouterLink>
  </div>
</template>

<script setup>

</script>

<style scoped>
.NotfoundTitle
{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
