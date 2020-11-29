<template>
  <div class="category--block">
    <h2 class="header">{{ categoryName }}</h2>
    <div class="inner">
      <ul v-if="items.length" class="category--list">
        <packing-item
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :id="item.id"
        ></packing-item>
      </ul>
      <p class="text-left pl-1" v-else>
        <small>There is no items here!</small>
      </p>
    </div>
  </div>
</template>

<script src="./CategoryBlock.ts" lang="ts"></script>
<style src="./category-block.scss" lang="scss" scoped></style>
