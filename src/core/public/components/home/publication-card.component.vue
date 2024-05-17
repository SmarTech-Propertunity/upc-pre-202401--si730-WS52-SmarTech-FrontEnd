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
    <template #header>
      <img class="publication-image"
           alt="referenceImage"
           :src="publicationImagePath"
           :width=cardSize
           :height=cardSize
      >
    </template>

    <template #content>
      <div class="publication-details">
        <div style="font-size: 1.25rem; padding-bottom: 0.25rem;">{{$t('publicationCard.offeredBy')}} <span style="font-weight: bold">{{offeredBy}}</span></div>

        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <img class="icon"
               alt="Cost"
               src="../../../../assets/images/material-icons/money-icon.png"
               width="25px"/>
          <div class="card-description" style="font-size: 1.0rem;" :aria-label="$t('publicationCard.cost') + price">{{$t('publicationCard.cost')}}<span style="font-weight: bold">S/.{{price}}</span></div>
        </div>

        <div style="display: flex; gap: 0.9rem; align-items: center;">
          <img class="icon"
               alt="Location"
               src="../../../../assets/images/material-icons/location-icon.png"
               width="22px"/>
          <div class="card-description" style="font-size: 1.0rem;" :aria-label="$t('publicationCard.location') + location">{{$t('publicationCard.location')}} {{location}}</div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.single-card {
  border-radius: 1.5rem;
  background-color: #B6C2FF;
}
.publication-image {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  margin: 0.2rem;

  height: 200px;
  overflow: hidden;
  object-fit: cover;
}
.publication-details {
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  margin: -2.5rem 0;
}

.icon {
  filter: invert(1);
}
</style>