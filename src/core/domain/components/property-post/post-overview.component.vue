<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { PropertyApiService } from "@/core/public/services/property-api.service.js";
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";
const props = defineProps(['id'])
const property = ref({});
const value = ref(null);

onMounted(async () => {
  const response = await PropertyApiService.getPropertyById(props.id);
  PhotoService.getImages().then((data) => (images.value = data));
  property.value = response.data;
  console.log(property.value);
})

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
</script>

<template>
  <RetraceToolbar/>


    <div class="card">
      <Galleria :value="property" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
        <template #item="slotProps">
          <img :src="property?.imagen" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="property?.imagen" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>


</template>

<style scoped>

</style>