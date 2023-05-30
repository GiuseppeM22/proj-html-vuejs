<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  }

}

</script>

<template>
  <PageHeader />
  <!-- in questo componente andrò ad inserire la parte dell'header comresa con la navbar, genererò dinamicamente la navbar -->
  <PageMain />
  <!-- in questo componente andro a generare la parte che va dal primo slider all'ultima serie di card prima del footer -->
  <PageFooter />
  <!-- in questo componente andrò a generare il footer-->
</template>

<style scoped></style>
