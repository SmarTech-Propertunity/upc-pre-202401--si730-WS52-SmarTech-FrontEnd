<script>
import OptionBlock from "@/core/public/components/home/option-block.component.vue";

export default
{
  name: "the-options",
  components: {OptionBlock},
}
</script>

<template>
  <div class="more-options">
    <option-block
        :button-label="$t('blocksOptions[0].buttonLabel')"
        :image-alt="$t('blocksOptions[0].imageAlt')"
        image-path="src/assets/images/home-section/inmobiliaria-banner.png"
        :description="$t('blocksOptions[0].description')"
        image-width=115
        image-height=85
        mini-title="Buscar inmobiliaria"
    ></option-block>

    <option-block
        :button-label="$t('blocksOptions[1].buttonLabel')"
        :image-alt="$t('blocksOptions[1].imageAlt')"
        image-path="src/assets/images/home-section/evaluacion-crediticia-banner.png"
        :description="$t('blocksOptions[1].description')"
        image-width=105
        image-height=85
        mini-title="Evaluación crediticia"
    ></option-block>
  </div>
</template>

<style scoped>
  .more-options {
    background: #C9D1FF;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
</style>