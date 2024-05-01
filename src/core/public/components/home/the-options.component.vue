<script>
import OptionBlock from "@/core/public/components/home/option-block.component.vue";

export default
{
  name: "the-options",
  components: {OptionBlock},
}
</script>

<template>
  <div class="search-agency">

    <option-block
        :button-label="$t('blocksOptions[0].buttonLabel')"
        :image-alt="$t('blocksOptions[0].imageAlt')"
        image-path="src/assets/images/saved-icon.png"
        :description="$t('blocksOptions[0].description')"
        image-width=75
        image-height=50
    ></option-block>

    <option-block
        :button-label="$t('blocksOptions[1].buttonLabel')"
        :image-alt="$t('blocksOptions[1].imageAlt')"
        image-path="src/assets/images/edit-icon.png"
        :description="$t('blocksOptions[1].description')"
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