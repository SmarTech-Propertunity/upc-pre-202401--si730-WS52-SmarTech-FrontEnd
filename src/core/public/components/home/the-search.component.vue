<script>
  export default
  {
    name: "the-search-and-filter",

    data()
    {
      return {
        inputSearchString: "",
        inputPriceFrom: "",
        inputPriceTo: "",
        filterOptions: [this.$t('searchType.department'), this.$t('searchType.property'), this.$t('searchType.land')],
        selectedFilter: ""
      }
    },
  }
</script>

<template>
  <div class="buildings-banner">

    <!-- Map banner -->
    <img src="../../../../assets/images/buildings-banner.png" alt="buildings banner" style="height: 200px; width: 100%; overflow: hidden; object-fit: cover;">

    <!-- Search tools -->
    <div class="input-text-section">
      <!-- Search icon -->
     <router-link to="/search">
      <img src="../../../../assets/images/search-icon.png" alt="buildings banner" height="25px" width="25px">
     </router-link>
      <!-- Input text -->
      <pv-input-text class="input-text" v-model="inputSearchString" :placeholder="$t('searchInput.searchText')"/>
    </div>
    <div class="input-filters">
      <!-- Dropdown -->
      <pv-dropdown class="dropdown-filter" v-model="selectedFilter" :options="filterOptions" :placeholder="$t('searchType.notDefined')"></pv-dropdown>

      <!-- Price filter -->
      <div class="price-filter">
        <!-- Filter icon -->
        <img src="../../../../assets/images/filter-icon.png" alt="buildings banner" height="30px" width="30px">

        <!-- From -->
        <pv-Input-text class="input-price" v-model="inputPriceFrom" :placeholder="$t('inputPrice.from')" :aria-label="$t('inputPrice.from')"></pv-Input-text>

        <!-- To -->
        <pv-Input-text class="input-price" v-model="inputPriceTo" :placeholder="$t('inputPrice.to')" :aria-label="$t('inputPrice.to')"></pv-Input-text>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .buildings-banner {
    position: relative;
  }

  .input-text-section {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 35%;
    left: 50%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: #ffffff;
    padding: 0.75rem 2.0rem;
    border-radius: 2.5rem;
  }
  .input-text {
    border: 0 solid #ffffff;
    padding: 0.5rem 0.75rem;
    width: 22rem;
  }
  .input-text:focus {
    outline: 0;
  }

  .input-filters {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 65%;
    left: 50%;
    display: flex;
    align-items: center;
    gap: 2.0rem;
  }
  .dropdown-filter {
    display: flex;
    background-color: #ffffff;
    color: #000000;
    padding: 0.5rem 1.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    gap: 1.5rem;
    border-radius: 1.5rem;
  }

  .price-filter {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .input-price {
    border: 0 solid #ffffff;
    padding: 0.75rem 0.75rem;
    width: 7rem;
    border-radius: 1.5rem;
  }
</style>