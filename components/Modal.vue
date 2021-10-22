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
            <div class="w-1/3 bg-gray-300 py-4 rounded-lg">
              <div>Atómo</div>
              <!-- <chemical-element-visualisation :symbol="element.symbol.toLowerCase()"></chemical-element-visualisation> -->
              <div id="bohr-model-container" class="w-64 h-64"></div>
              <div class="flex flex-row">
                <PartialsDefinition
                  title="Número"
                  :description="element.number"
                />
                <PartialsDefinition
                  title="Masa"
                  :description="element.atomic_mass"
                />
              </div>
              <div class="flex flex-row">
                <PartialsDefinition
                  title="Configuración"
                  :description="element.electron_configuration_semantic"
                />
                <PartialsDefinition
                  title="Densidad"
                  :description="element.density"
                />
              </div>
            </div>
            <div class="w-2/3 bg-gray-300 py-4 rounded-lg">
              <div class="mb-4">Propiedades</div>
              <div class="grid grid-cols-3 gap-y-4 px-8 justify-items-center">
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
              <div></div>
            </div>
          </div>

          <div class="my-8 bg-gray-300 rounded-lg">
            <div class="py-4 px-8">{{ element.summary }}</div>
          </div>

          <div class="modal-footer">
            <button
              class="border-2 border-gray-400 px-4 py-2"
              @click="$emit('close')"
            >
              CERRAR
            </button>
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
  mounted() {
    var atomicConfig = {
      containerId: "#bohr-model-container",
      numElectrons: this.element.number,
      idNumber: this.element.number,
      nucleusColor: "#1974C3",
      electronColor: "#" + this.element["cpk-hex"],
      animationTime: 1000,
      //rotateConfig: {speed: 50, clockwise: true},
      nucleusRadius: 45,
      symbolOffset: 15,
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