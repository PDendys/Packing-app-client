<template>
  <div>
    <b-modal
      ref="modal"
      id="add-item-modal"
      title="Nowy element"
      size="md"
      hide-footer
      no-stacking
    >
      <div class="add--item--modal">
        <div class="body">
          <form action="" @submit.prevent="addCategory()">
            <div class="row">
              <div class="col-12">
                <div class="form-group text-left">
                  <label for="category">Kategoria</label>
                  <select
                    class="form-control form-control-sm"
                    id="category"
                    v-model="categoryId"
                  >
                    <option
                      v-for="category in categories"
                      v-bind:key="category.id"
                      :value="category.id"
                      >{{ category.categoryName }}</option
                    >
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group text-left">
                  <label for="name">Nazwa</label>
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    name=""
                    placeholder="Nazwa"
                    v-model="itemName"
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
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script src="./AddItemModal.ts" lang="ts"></script>
<style src="./add-item-modal.scss" lang="scss" scoped></style>
