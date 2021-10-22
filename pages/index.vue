<template>
<div>
  <Modal v-if="showModal" @close="showModal = false" :element="modalValue"/>
    <div class="grid grid-cols-18 mx-16 mt-16">
      <Element v-for="element of data.elements" :key="element.number" :element="element" @show-element="showElement"/>
    </div>
</div>
</template>

<script>
import elements from '~/static/elements.json'

export default {
  data: () => ({
    data: elements,
    showModal: false,
    modalValue: null
  }),
    methods: {
      showElement: function (element){
        this.modalValue = element;
        this.showModal = true;
      }
    }
}
</script>
