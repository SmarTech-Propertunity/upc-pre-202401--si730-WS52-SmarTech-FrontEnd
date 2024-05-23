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
    },
    miniTitle: {
      type: String

    }
  }
}
</script>

<template>
  <div class="block-object">


    <div class="block-image">
      <div class="image-section">
        <img style="border-radius: 1.5rem;"
             :src="imagePath"
             :alt="imageAlt"
             :height=imageHeight
             :width=imageWidth
             aria-checked="true"
             :aria-label="imageAlt"
        >
      </div>
    </div>

    <div class="block-descriptor-wrapper">
      <div class="block-description">
        <div class="descriptor">
          <div style="font-size: 0.65rem">{{miniTitle}}</div>
          <div style="font-size: 0.85rem; font-weight: bold;">{{description}}</div>
        </div>
        <pv-button class="option-button" :label="buttonLabel" :aria-label="buttonLabel"></pv-button>
      </div>
    </div>


  </div>
</template>

<style scoped>
.block-object {

  display: flex;

  background: white;
  border: 0.1rem solid #4E4E4E;
  border-radius: 2.5rem;
}

.block-image {
  display: flex;

  box-sizing: border-box;
  border-right-width: 0.1rem;
  border-right-color: #4E4E4E;
  border-right-style: solid;
}
.image-section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem 1.5rem;
}

.block-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 0.85rem;
  width: 16.25rem;
  line-height: 1.15rem;
}
.descriptor {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1rem;
  padding-bottom: 0.5rem;
}
.block-descriptor-wrapper {
  display: flex;
  padding: 0.8rem 2rem;
}
.option-button {
  border: 0 solid #ffffff;
  font-size: 1.0rem;
  background-color: #79ADFA;
  border-radius: 99rem;
  padding: 0.5rem 2.8rem;
}
.option-button:hover {
  background-color: #AFD0FFFF;

}
</style>