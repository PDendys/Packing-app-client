<template>
  <b-modal
    id="add-modal"
    title="Nowy element"
    size="md"
    hide-footer
    no-stacking
  >
    <div class="row pt-1 pb-3">
      <div class="col-12">
        <p>Wybierz element, który chesz dodać</p>
      </div>
      <div class="col-md-6 text-center">
        <b-button block variant="primary" v-b-modal.add-category-modal
          >Dodaj kategorie</b-button
        >
      </div>
      <div class="col-md-6 text-center">
        <b-button block variant="outline-primary" v-b-modal.add-item-modal
          >Dodaj Element</b-button
        >
      </div>
    </div>
  </b-modal>
</template>

<script src="./AddModal.ts" lang="ts"></script>
<style src="./add-modal.scss" lang="scss" scoped></style>
