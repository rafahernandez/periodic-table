<template>
  <button class="relative shadow grid-rows-6 px-2" :style="style" :class="classNames" @click="$emit('show-element', element)">
     <div class="flex justify-end ">
       <!-- <span class="text-xs">{{ element.atomic_mass }}</span> -->
        <span class="text-xl">{{ element.number}}</span>
      </div>
       <div class="text-3xl -mt-3">{{ element.symbol}}</div>
       <div class="text-sm">{{ element.name }}</div>
       <!-- <div>{{ element.electron_configuration_semantic}}</div> -->
  </button>
</template>

<script>
export default {
  props: {
    element: {},
  },
  computed: {
    style() {
      return {
        'grid-column': this.element.xpos,
        'grid-row': this.element.ypos,
      };
    },
    classNames() {
        if(this.element.category.includes('unknown')){
            return 'bg-unknown';
        }
        return 'bg-'+this.element.category.replace(/\s+/g, '-');
    }
  },
};
</script>