<template>
  <b-modal
    ref="modal"
    :id="modalId"
    title="Nowa kategoria"
    size="md"
    hide-footer
  >
    <form action="" @submit.prevent="handleFormSubmit">
      <div class="row">
        <div class="col-12">
          <div class="form-group text-left">
            <label for="name">Nazwa</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name=""
              placeholder="Nazwa"
              v-model="categoryName"
              id="name"
            />
          </div>
        </div>
        <div class="col-12 text-right">
          <button type="submit" class="btn btn-primary mb-2">
            Dodaj
          </button>
        </div>
      </div>
    </form>
  </b-modal>
</template>

<script src="./AddCategoryModal.ts" lang="ts"></script>
<style src="./add-category-modal.scss" lang="scss" scoped></style>
