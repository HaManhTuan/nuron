<template>
  <div :class="className">
    <label class="filter-leble">{{ label }}</label>
    <div
      :class="statusBest ? 'nice-select open' : 'nice-select'"
      tabindex="0"
      role="button"
      @click="chooseOptionSort"
    >
      <span v-if="dataChooseSortBest" class="current">{{
        dataChooseSortBest
      }}</span>
      <ul class="list" role="menubar">
        <li
          v-for="(option, index) in dataSort"
          :key="`sort-${index}`"
          class="option"
          :class="dataChooseSortBest === option.name ? 'selected focus' : ''"
          role="menuitem"
          @click="changeOptionSortBest(option.name)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOption",
  props: {
    className: {
      type: String,
      default: () => null,
    },
    dataSort: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      statusBest: false,
      dataChooseSortBest: this.dataSort[0].name || null,
    };
  },
  watch: {
    dataChooseSortBest() {
      this.statusBest = !this.statusBest;
    },
  },
  methods: {
    chooseOptionSort() {
      this.statusBest = !this.statusBest;
    },
    changeOptionSortBest(val) {
      this.dataChooseSortBest = val;
      this.statusBest = false;
      this.$emit("changeOptionSortBest", val);
    },
  },
};
</script>

<style scoped></style>
