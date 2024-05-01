<script>
import Toolbar from "@/core/public/components/home/the-toolbar.component.vue";
import TheSearchAndFilter from "@/core/public/components/home/the-search.component.vue";
import TheOptions from "@/core/public/components/home/the-options.component.vue";
import TheFeaturedPublications from "@/core/public/components/home/the-featured-publications.component.vue";




export default {
  name: "the-home-component",
  components: {Toolbar, TheSearchAndFilter, TheOptions, TheFeaturedPublications},
}
</script>
<template>

  <Toolbar></Toolbar>
  <TheSearchAndFilter></TheSearchAndFilter>
  <TheOptions></TheOptions>
  <TheFeaturedPublications></TheFeaturedPublications>=

</template>

<style scoped>
</style>
