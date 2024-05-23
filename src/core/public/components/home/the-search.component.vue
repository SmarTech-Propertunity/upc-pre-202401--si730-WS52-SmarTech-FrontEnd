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

    }

  }
</script>

<template>
  <div class="buildings-banner">


    <img src="../../../../assets/images/home-section/buildings-banner.png"
         alt="buildings banner"
         style="height: 200px; width: 100%; overflow: hidden; object-fit: cover;"/>

    <div class="input-text-section">
      <router-link to="/search">
        <div class="search-icon-wrapper">
          <img class="search-icon"
               src="../../../../assets/images/material-icons/search-black-icon.png"
               alt="buildings banner"
               height="50px" width="50px"
               aria-label="Search button"
          >
        </div>
      </router-link>
      <input class="input-text" v-model="inputSearchString" :placeholder="$t('searchInput.searchText')"/>
    </div>
    <div class="input-filters">
      <pv-dropdown class="dropdown-filter"
                   v-model="selectedFilter"
                   :options="filterOptions"
                   :placeholder="$t('searchType.notDefined')"
      ></pv-dropdown>

      <div class="price-filter">
        <img src="../../../../assets/images/material-icons/filter-icon.png"
             alt="Filter"
             height="40px" width="40px"
             aria-label="Filter"
             style="filter: brightness(0%)"
             onclick=""
        >
        <input class="input-price"
               v-model="inputPriceFrom"
               :placeholder="$t('inputPrice.from')"
               :aria-label="$t('inputPrice.from')"
        >
        <input class="input-price"
               v-model="inputPriceTo"
               :placeholder="$t('inputPrice.to')"
               :aria-label="$t('inputPrice.to')"
        >

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .buildings-banner {
    position: relative;
    display: flex;

  }

  .input-text-section {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 35%;
    left: 50%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 0.25rem 1.25rem;
    gap: 0.75rem;
    background-color: #ffffff;
    padding: 0.75rem 2.0rem;
    border-radius: 2.5rem;
  }
  .input-text {
    border: 0 solid #000000;
    padding: 0.5rem 0.75rem;
    width: 30rem;
    font-size: 1.2rem;

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
    gap: 1.5rem;

  }
  .dropdown-filter {
    display: flex;
    background-color: #ffffff;
    color: #000000;

    padding: 0.15rem 1rem;
    width: 14rem;
    gap: 1.5rem;
    border-radius: 99rem;
    font-size: 1rem;

  }

  .price-filter {
    display: flex;

    gap: 0.75rem;

    align-items: center;
  }
  .input-price {
    border: 0 solid #ffffff;
    padding: 0.75rem 0.75rem;
    width: 7rem;

    border-radius: 99rem;

    font-size: 1rem;
  }
  .input-price:focus {
    outline: 0;
  }
  .search-icon {
    filter: brightness(100%);
    transition: background-color 150ms ease-in-out;
    border-radius: 99rem;
    padding: 0.35rem;
  }
  .search-icon:hover {
    background-color: #cccccc;
  }
  .search-icon-wrapper {
    display: flex;

  }
</style>