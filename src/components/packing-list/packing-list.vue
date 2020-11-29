<template>
  <div v-if="isPackingFinished !== null">
    <div class="packing--list--desk">
      <div class="packing--list--clips">
        <div class="metals-wrapper">
          <div class="metal"></div>
          <div class="metal"></div>
          <div class="metal"></div>
        </div>
      </div>
      <div class="packing--list">
        <div class="header-box">
          <h1 class="header">
            <span>The ultimate</span>
            Packing List
          </h1>
          <b-button class="btn--add" v-b-modal.add-modal>+</b-button>
          <div class="pb-2">
            <div class="row m-0">
              <div class="col-md-5 px-2">
                <div class="trip--details--box">
                  <div class="label-txt">Cel podróży:</div>
                  <div class="content-txt">{{ tripName }}</div>
                </div>
              </div>
              <div class="col-md-3 px-2">
                <div class="trip--details--box">
                  <div class="label-txt">Towarzysz podróży:</div>
                  <div class="content-txt">{{ fellowPassenger }}</div>
                </div>
              </div>
              <div class="col-md-2 px-2">
                <div class="trip--details--box">
                  <div class="label-txt">Data rozpoczęcia:</div>
                  <div class="content-txt"> {{ startDate.toLocaleDateString() }}</div>
                </div>
              </div>
              <div class="col-md-2 px-2">
                <div class="trip--details--box">
                  <div class="label-txt">Data zakończenia:</div>
                  <div class="content-txt">{{ endDate.toLocaleDateString() }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="isPackingFinished === false" class="content-box" >
          <packing-category
            v-for="(category, index) in categories"
            :key="category.id + index"
            :categoryName="category.categoryName"
            :items="category.items"
          ></packing-category>

          <div class="w-100 py-3 text-center" v-if="items.length === 0">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
        </div>

        <div v-else-if="isPackingFinished !== null" class="empty-box">
          Pakowanie na tę podróż zostało już zakończone.
        </div>

      </div>
    </div>
    <add-modal></add-modal>
    <add-item-modal @refetchList="getAllCategories"></add-item-modal>
    <add-category-modal @refetchList="getAllCategories"></add-category-modal>
  </div>
</template>

<script src="./PackingList.ts" lang="ts"></script>
<style src="./packing-list.scss" lang="scss" scoped></style>
