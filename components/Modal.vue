<template>
  <transition name="modal">
    <div
      class="
        fixed
        z-50
        top-0
        left-0
        w-full
        h-full
        bg-black
        table
        transition-opacity
        bg-opacity-70
      "
    >
      <div class="table-cell align-middle" @click="$emit('close')">
        <div
          class="
            w-10/12
            mx-auto
            my-0
            px-12
            py-8
            bg-gray-200
            rounded
            shadow
            transition-all
            border-2
            text-center
          "
          @click.stop
        >
          <div class="mt-0 mx-auto text-4xl">
            {{ element.name }}
          </div>

          <div class="my-8 flex flex-row gap-4">
            <div class="w-1/3 bg-gray-300 py-4  rounded-lg">
              <div>Atomo</div>
              <div>[[IMAGE]]</div>
              <div class="flex flex-row">
                <PartialsDefinition title="Número" :description="element.number"/>
                <PartialsDefinition title="Masa" :description="element.atomic_mass"/>
              </div>
              <div class="flex flex-row">
                <PartialsDefinition title="Configuración" :description="element.electron_configuration_semantic"/>
                <PartialsDefinition title="Densidad" :description="element.density"/>
              </div>
            </div>
            <div class="w-2/3 bg-gray-300 py-4 rounded-lg">
              <div class="mb-4">Propiedades</div>
              <div class="grid grid-cols-3 gap-y-4 px-8 justify-items-center">
                  <PartialsDefinition title="Apariencia" :description="element.appearance"/>
                  <PartialsDefinition title="Categoría" :description="element.category"/>
                  <PartialsDefinition title="Descubierto por" :description="element.discovered_by"/>
                  <PartialsDefinition title="Fase" :description="element.phase"/>
                  <PartialsDefinition title="CPK" :description="element['cpk-hex']"/>
              </div>
              <div></div>
            </div>
          </div>

          <div class="my-8 bg-gray-300 rounded-lg">
            <div class="py-4 px-8">{{ element.summary }}</div>
          </div>

          <div class="modal-footer">
            <button class="" @click="$emit('close')">CERRAR</button>
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