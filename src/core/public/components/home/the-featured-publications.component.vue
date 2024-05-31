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
    <div class="bar-section">
      <div class="featured-publications-option">
        <div class="label">
          {{$t('featuredPublications.featuredLabel')}}
        </div>
        <div class="slider">

        </div>
      </div>
    </div>

    <div class="cards">
      <publication-card
          location= "La Marina"
          price="69.00"
          card-size="400"
          publication-image-path="src/assets/images/home-section/publication-1.png"
          offered-by="Inmobilística"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="uwu"
          card-size="400"
          publication-image-path="src/assets/images/home-section/publication-2.png"
          offered-by="Inmobilística"
      ></publication-card>
      <publication-card
          location= "La Marina"
          price="lmao"
          card-size="400"
          publication-image-path="src/assets/images/home-section/publication-3.png"
          offered-by="Inmobilística"
      ></publication-card>
    </div>
  </div>

</template>

<style scoped>
.label{
  margin-left: 30px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;

  padding: 1.5rem;
}
.bar-section {
  display: flex;
  font-size: 1.75rem;
  padding-left: 1.0rem;

  background-color: #ffffff;
}
.featured-publications-option {
  display: flex;
  flex-direction: column;
}
.label {
  font-size: 1.5rem;
  padding: 0.4rem;
}
.slider {
  background-color: rgba(3, 20, 92, 1);
  padding: 0.15rem 0;
  border-radius: 1rem;
  margin-left: 4vh;
}
</style>