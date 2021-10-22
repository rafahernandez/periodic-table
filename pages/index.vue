<template>
<div>
  <Modal v-if="showModal" @close="showModal = false" :element="modalValue"/>
  <p v-if="$fetchState.pending">
    Fetching Elements...
    </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
      </p>
  <div v-else>
    <div class="grid grid-cols-18 mx-16 mt-16">
      <Element v-for="element of posts.elements" :key="element.number" :element="element" @show-element="showElement"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    posts: [],
    showModal: false,
    modalValue: null
  }),
 async fetch() {
      this.posts = await fetch(
        'https://run.mocky.io/v3/5b989362-1dac-416a-b2fa-e40155958025'
      ).then(res => res.json())
    },
    methods: {
      showElement: function (element){
        this.modalValue = element;
        this.showModal = true;
      }
    }
}
</script>
