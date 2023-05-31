<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      navbar: [
        {
          name: "HOME",
          path: "fa-solid fa-house-chimney",
        },
        {
          name: "LIFESTYLE",
          path: "fa-solid fa-suitcase",
          arrow: "fa-solid fa-chevron-down"
        },
        {
          name: "STORIES",
          path: "fa-solid fa-user-pen",
          arrow: "fa-solid fa-chevron-down"
        },
        {
          name: "PAGES",
          path: "fa-solid fa-book",
          arrow: "fa-solid fa-chevron-down"
        },
        {
          name: "ABOUT US",
          path: "fa-solid fa-user",
        },
      ]
    }
  }
}

</script>

<template>
  <PageHeader :navbar="navbar" />
  <!-- in questo componente andrò ad inserire la parte dell'header comresa con la navbar, genererò dinamicamente la navbar -->
  <PageMain />
  <!-- in questo componente andro a generare la parte che va dal primo slider all'ultima serie di card prima del footer -->
  <PageFooter />
  <!-- in questo componente andrò a generare il footer-->
</template>

<style scoped></style>
