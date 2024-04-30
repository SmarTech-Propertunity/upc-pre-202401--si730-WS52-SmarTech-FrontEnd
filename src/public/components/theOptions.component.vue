<script>
import OptionBlock from "@/public/components/optionBlock.component.vue";

export default
{
  name: "the-options",
  components: {OptionBlock},
}
</script>

<template>
  <div class="search-agency">
    <option-block
        button-label="Buscar"
        image-alt="Evaluación crediticia"
        image-path="src/assets/images/saved-icon.png"
        description="Una evaluación crediticia le permitirá analizar el riesgo crediticio sobre la adquisición de un inmueble"
        image-width=75
        image-height=50
    ></option-block>

    <option-block
        button-label="Evalúe ahora"
        image-alt="Buscar inmobiliaria"
        image-path="src/assets/images/edit-icon.png"
        description="Una evaluación crediticia le permitirá analizar el riesgo crediticio sobre la adquisición de un inmueble"
        image-width=75
        image-height=75
    ></option-block>
  </div>
</template>

<style scoped>
  .search-agency {
    background: #f0f0f0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
</style>