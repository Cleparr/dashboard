<template>
  <div class="widget-container shadow mb-2 p-1 bg-white rounded">
    <b-row>
      <b-col v-bind:key="(currentIndex+n)" v-for="n in numberOfProfiles" :cols="12/numberOfProfiles">
        <ArrivantProfile
          :nom="images[currentIndex+n].nom"
          :photo="images[currentIndex+n].photo"
          :entreprise="images[currentIndex+n].entreprise"
          :statut="images[currentIndex+n].statut"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ArrivantProfile from "./ArrivantProfile";
// Authentication Airtable
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.VUE_APP_AIRTABLE_TABLE);

export default {
  name: "Arrivant",
  components: {
    ArrivantProfile
  },
  props: {
    delay: {
      type: Number,
      default: 30000
    },
    numberOfProfiles: {
      type: Number,
      default: 3
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
      if (this.currentIndex == this.images.length - 1 - this.numberOfProfiles) {
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
      const imagesAirtable = await base("Coworkers")
        .select()
        .all();
      const images = imagesAirtable
        .map(image => {
          if (
            !image.fields.Nom ||
            !image.fields.Photo ||
            !image.fields.Photo[0] ||
            !image.fields.Incube_Alumni ||
            !image.fields.Entreprise_link
          ) {
            return false;
          }

          return {
            nom: image.fields.Nom,
            photo: image.fields.Photo[0].url,
            entreprise: image.fields.Entreprise[0],
            statut: image.fields.Incube_Alumni
          };
        })
        .filter(Boolean);

      return images;
    }
  }
};
</script>

<style>
</style>