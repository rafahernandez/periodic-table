<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
    </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
      </p>
  <div v-else>
    <div class="grid grid-cols-18 mx-16 mt-16">
      <Element v-for="element of posts.elements" :key="element.number" :element="element"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: []
  }),
 async fetch() {
      this.posts = await fetch(
        'https://run.mocky.io/v3/5b989362-1dac-416a-b2fa-e40155958025'
      ).then(res => res.json())
    }
}
</script>
