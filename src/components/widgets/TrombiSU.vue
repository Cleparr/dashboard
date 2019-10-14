<template>
  <b-container v-if="hasImages" rounded class="widget-container shadow mb-2 bg-white rounded">
    <b-row>
      <b-col>
        <h1 class="text-center" pa-0>{{currentImage.nom}}</h1>
      </b-col>
    </b-row>
    <b-row align-v="start" no-gutters p-3>
      <b-col cols="4">
        <b-img fluid-grow :src="currentImage.logo"></b-img>  
      </b-col>
      <b-col cols="8">
        <p>{{currentImage.description}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { clearInterval } from 'timers';
// Authentication Airtable
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.VUE_APP_AIRTABLE_TABLE);

export default {
  name: "TrombiSU",
  props: {
    delay: {
      type: Number,
      default: 30000
    }
  },
  data() {
    return {
      images: [],
      currentIndex: 0,
      timerId: 0
    };
  },
  computed: {
    hasImages() {
      return this.images.length > 0;
    },
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  async created() {
    this.images = await this.getImages();
  },
  mounted() {
    this.timerId = setInterval(() => {
      if (this.currentIndex == this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, this.delay);
  },
  beforeDestroy() {
    if (this.timerId != 0) {
      clearInterval(this.timerId);
    }
  },

  methods: {
    async getImages() {
      const imagesAirtable = await base("Entreprises")
        .select()
        .all();
      const images = imagesAirtable.map(image => {
        if (!image.fields.Nom || !image.fields.Logo || !image.fields.Logo[0] || !image.fields.Description ) {
          return false;
        }
        if (image.fields.IncubeAlumni == "Alumni" || image.fields.IncubeAlumni == "Autre" ) {
          return false;
        }
        return {
          nom: image.fields.Nom,
          logo: image.fields.Logo[0].url,
          description: image.fields.Description,
          statut: image.fields.IncubeAlumni
        };
      }).filter(Boolean);
      return images;
      
    }
  }
};
</script>

<style scoped>
div.widget-container {
  height: 200px;
  overflow: hidden;
}

div.widget-container >>> img {
  object-fit:contain;
  height: 100%;
  width: 50%;
}

h1{
  padding: 10px
}

p{
  font-size:70%;
  margin:10px
}

.shadow{
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
}
</style>