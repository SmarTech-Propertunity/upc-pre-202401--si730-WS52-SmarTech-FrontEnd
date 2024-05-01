<script>
import PublicationCard from "@/core/public/components/home/publication-card.component.vue";

export default
{
  name: "the-featured-publications",
  components: {PublicationCard},
}
</script>

<template>
  <div class="main-block">
    <p style="font-size: 1.75rem; padding-left: 1.0rem;">{{$t('featuredPublications.featuredLabel')}}</p>
    <div class="cards">

      <publication-card
          location= "La Marina"
          price="100.00"
          card-size=350
          publication-image-path="src/assets/images/user-icon.png"
          offered-by="Sedapal"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="100.00"
          card-size=350
          publication-image-path="src/assets/images/user-icon.png"
          offered-by="Sedapal"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="100.00"
          card-size=350
          publication-image-path="src/assets/images/user-icon.png"
          offered-by="Sedapal"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="100.00"
          card-size=350
          publication-image-path="src/assets/images/user-icon.png"
          offered-by="Sedapal"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="100.00"
          card-size=350
          publication-image-path="src/assets/images/user-icon.png"
          offered-by="Sedapal"
      ></publication-card>

    </div>
  </div>
</template>

<style scoped>
.main-block {
  background: #add8e6;
}
.single-card {
  background: #ccdddd;
  margin: 1.5rem;
  border: 1.0rem solid #ccdddd;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}
</style>