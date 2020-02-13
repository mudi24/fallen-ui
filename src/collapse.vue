<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import FIcon from "./icon.vue";
export default {
  name: "FallenCollapse",
  components: {
    "f-icon": FIcon
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("update:removeSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = this.selected.indexOf(name);
      selectedCopy.splice(index, 1);
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
