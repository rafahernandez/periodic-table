<template>
      <transition name="modal">
        <div class="fixed z-50 top-0 left-0 w-full h-full bg-black table transition-opacity bg-opacity-70">
          <div class="table-cell align-middle" @click="$emit('close')">
            <div class="w-10/12 mx-auto my-0 px-6 py-8 bg-white rounded shadow transition-all" @click.stop>

              <div class="mt-0">
                <slot name="header">
                 {{ element.name }}
                </slot>
              </div>

              <div class="my-8">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="float-right" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
  props: {
    element: {},
  },
  computed: {},
};
</script>

<style scoped>

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>