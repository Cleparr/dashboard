<template>
  <b-container>
    <b-row>
      <div class="picture-container" :style="{backgroundImage: `url('${photo}')`}">
        <div class="badge-overlay">
          <b-badge
            pill
            variant="light"
            :style="{backgroundColor: badgeColor}"
            class="text-black"
          >{{statut}}</b-badge>
        </div>
      </div>
    </b-row>
    <b-row>
      <b-col class="text-center">{{nom}}</b-col>
    </b-row>
    <b-row>
      <b-col class="text-black-50 font-weight-light text-center">{{entreprise}}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ArrivantProfile",
  props: {
    nom: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    statut: {
      type: String,
      required: true
    },
    entreprise: {
      type: String,
      required: true
    }
  },
  computed: {
    badgeColor() {
      switch (this.statut) {
        case "Incubé":
          return "#D1F7C4";
        case "Alumni":
          return "#FFEAB6";
        case "Autre":
          return "#FFDCE5";
        case "B612":
          return "#F82B60";
      }

      return "white";
    }
  }
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
}

span.text-center {
  color: white;
  background: green;
  border-radius: 1rem;
  height: 50px;
  width: 150px;
  position: absolute;
  top: 50px;
  left: 300px;
}

.picture-container {
  position: relative;
  width: 100%;
  padding-bottom:100%;
  background-size: cover;
  border-radius: 100%;
}

div.badge-overlay {
  position: absolute;
  top: 25px;
  right: 0px;
}

h2.text-center {
  text-align: center;
  font-size: 50px;
}
</style>