<script>
export default
{
  name: "publication-card",
  props: {
    publicationImagePath: {
      type: String,
      required: true
    },
    cardSize: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    offeredBy: {
      type: String,
      require: true
    }
  }
}
</script>

<template>
  <pv-card class="single-card">
    <!-- Publication's image -->
    <template #header>
      <div class="publication-image">
        <img alt="Imagen de referencia" :src="publicationImagePath" :width=cardSize :height=cardSize>
      </div>
    </template>

    <!-- Content -->
    <template #content>
      <div style="justify-content: center; display: flex;">
        <div>
          <p style="font-size: 1.25rem;">Ofrecido por <span style="font-weight: bold">{{offeredBy}}</span></p>

          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <img alt="Costo" src="../../../../assets/images/money-symbol.png" width="25px"/>
            <p class="card-description" style="font-size: 1.0rem;">Desde S/.{{price}}</p>
          </div>

          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <img alt="Ubicación" src="../../../../assets/images/map-symbol.png" width="22px"/>
            <p class="card-description" style="font-size: 1.0rem;">En {{location}}</p>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.single-card {
  background: #ccdddd;
  margin: 1.5rem;
  border: 1.0rem solid #ccdddd;
}
</style>