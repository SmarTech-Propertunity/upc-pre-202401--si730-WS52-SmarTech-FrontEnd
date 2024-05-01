<script>
import {PropertyApiService} from "@/core/public/services/property-api.service.js";
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";

export default
{
  name: "post-overview",
  components: {
    RetraceToolbar
  },
  props: {
    id: {
      type: String
    }
  },

  data()
  {
    return {
      properties: [],
    }
  },
  beforeMount()
  {
    PropertyApiService.getAll().then((response) => {
      if (response.status === 200)
      {
        this.properties = response.data;
      }
      else
      {
        alert("There was a warning (or error) fetching data.");
      }
    }).catch((error) => {
      alert("An error has occurred. Full error info: " + error.message);
    })
  }
}
</script>

<template>
  <RetraceToolbar/>

  <div>{{this.properties[id].imagen}}</div>
  <img :src="this.properties[id].imagen">




</template>

<style scoped>

</style>