<template>
  <div class="outer relative w-48 h-32 rounded-lg shadow" :style="style">
    <span
      class="w-full h-full flex justify-center items-center text-5xl font-black"
    >
      {{ element.symbol }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    element: {},
  },
  computed: {
    style() {
      return {
        "background-color": '#' + (this.element["cpk-hex"] ?? "dd77ff"),
      };
    },
  },
};
</script>