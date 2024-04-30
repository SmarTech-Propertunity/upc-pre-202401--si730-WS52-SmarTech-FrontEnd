<script>
export default
{
  name: "option-block",

  props: {
    imagePath: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
    },
    description: {
      type: String,
    },
    imageWidth: {
      type: Number
    },
    imageHeight: {
      type: Number
    }
  }
}
</script>

<template>
  <div class="block-object">
    <img :src="imagePath" :alt="imageAlt" :height=imageWidth :width=imageHeight>
    <div class="block-description">
      <p style="padding-bottom: 1rem;">{{description}}</p>
      <pv-button class="option-button" :label="buttonLabel"></pv-button>
    </div>
  </div>
</template>

<style scoped>
.block-object {
  align-items: center;
  display: flex;
  width: 26rem;
  height: 8rem;
  background: #ffa07a;
  padding: 1rem;
  border: 0.25rem solid #2c3e50;
  gap: 2.5rem;
  padding-left: 2.5rem;
}
.block-description {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.85rem;
  width: 14rem;
  line-height: 1.15rem;
}
.option-button {
  border: 0 solid #ffffff;
  font-size: 1.0rem;
  background-color: #ffcc00;
  border-radius: 1.0rem;
  padding: 0.5rem 2.8rem;
}
.option-button:hover {
  background-color: #ffffa0;
}
</style>