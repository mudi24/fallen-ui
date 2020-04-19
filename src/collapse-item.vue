<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
      <f-icon :class="{open}" class="fallen-icon" name="right"></f-icon>
    </div>
    <transition name="slide">
      <div class="content" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import FIcon from "./icon.vue";

export default {
  name: "FallenCollapseItem",
  components: {
    "f-icon": FIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", names => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
*, *::before, *::after { box-sizing: border-box; }
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin: -1px -1px 0px -1px;
    // min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    position: relative;
    > .fallen-icon {
      &.open {
        transform: rotate(90deg);
      }
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    overflow: hidden;
    box-sizing: border-box;
    padding: 16px;
  }
}
.slide-enter-active {
  animation: my-in 0.3s ease-in-out;
}
.slide-leave-active {
  animation: my-out 0.3s ease-in-out;
}

@keyframes my-in {
  0% {
    height: 0;
    padding: 0;
  }
  100% {
    height: auto;
    padding: 16px;
  }
}
@keyframes my-out {
  0% {
    height: auto;
    padding: 16px;
  }
  100% {
    height: 0;
    padding: 0;
  }
}
</style>
