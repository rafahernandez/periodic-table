<template>
  <div class="flex flex-col text-center">
    <div class="text-xs font-medium text-gray-500">{{ title}}</div>
    <div class="text-sm">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    description: "",
  },
};
</script>