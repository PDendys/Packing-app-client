<template>
  <li class="item--block">
    <span
      class="checkbox -positive"
      v-bind:class="{ '-checked': isNeeded }"
      @click="handleNeededClick()"
    />
    <span
      class="checkbox -negative"
      v-bind:class="{ '-checked': isUnneeded }"
      @click="handleUnneededClick()"
    />
    {{ name }}
  </li>
</template>

<script src="./PackingItem.ts" lang="ts"></script>
<style src="./packing-item.scss" lang="scss" scoped></style>
