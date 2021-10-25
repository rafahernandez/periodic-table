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
            w-full
            h-full
            my-0
            px-2
            py-2
            bg-gray-200
            rounded
            shadow
            transition-all
            border-2
            text-center
            overflow-y-scroll
          "
          @click.stop
        >
          <div class="w-full align-middle text-left text-sm">
            <button class="text-left" @click="$emit('close')">
              &lt; Regresar
            </button>
          </div>
          <div class="mt-0 mx-auto text-4xl">
            {{ element.name }}
          </div>

          <div id="bohr-model-container" class="w-64 h-64 -mt-4 mx-auto"></div>

          <div class="my-8 flex flex-row gap-4">
            <div class="w-full bg-gray-300 py-4 rounded-lg">
              <div class="grid grid-cols-4 gap-y-2">
                <PartialsDefinition
                  title="Número"
                  :description="element.number"
                />
                <PartialsDefinition
                  title="Masa"
                  :description="element.atomic_mass"
                />
                <PartialsDefinition
                  title="Configuración"
                  :description="element.electron_configuration_semantic"
                />
                <PartialsDefinition
                  title="Densidad"
                  :description="element.density"
                />
                <PartialsDefinition
                  title="Apariencia"
                  :description="element.appearance"
                />
                <PartialsDefinition
                  title="Categoría"
                  :description="element.category"
                />
                <PartialsDefinition
                  title="Descubierto por"
                  :description="element.discovered_by"
                />
                <PartialsDefinition title="Fase" :description="element.phase" />
                <PartialsDefinition
                  title="CPK"
                  :description="element['cpk-hex']"
                />
              </div>
            </div>
          </div>

          <div class="my-8 bg-gray-300 rounded-lg">
            <div class="py-4 px-8">{{ element.summary }}</div>
          </div>

          <div class="modal-footer"></div>
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
  mounted() {
    var atomicConfig = {
      containerId: "#bohr-model-container",
      numElectrons: this.element.number,
      idNumber: this.element.number,
      nucleusColor: "#1974C3",
      electronColor: "#000",
      animationTime: 1000,
      //rotateConfig: {speed: 50, clockwise: true},
      nucleusRadius: 30,
      symbolOffset: 10,
      orbitalRotationConfig: {
        // Invokes orbital rotations at initialization
        pattern: {
          alternating: true, // Alternate orbital direction
          clockwise: true,
          preset: "random", // String to set pattern (see Features section)
        },
      },
    };

    var myAtom = new Atom(atomicConfig);
  },
};
</script>

<style scoped>
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