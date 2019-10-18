<template>
  <div v-if="hasImages" class="widget-container shadow mb-2 bg-white rounded">
    <b-img reponsive :src="currentImage.photo"></b-img>
  </div>
</template>

<script>
// Authentication Airtable
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.VUE_APP_AIRTABLE_TABLE);

export default {
  name: "News",
  props: {
    delay: {
      type: Number,
      default: 10000
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
      const imagesAirtable = await base("Dashboard")
        .select()
        .all();
      const images = imagesAirtable.map(image => {
        if (!image.fields.Information || !image.fields.Photo || !image.fields.Photo[0] || !image.fields.Afficher ) {
          return false;
        }
        if (image.fields.Afficher == "NonActif") {
          return false;
        }
        return {
          info: image.fields.Information,
          photo: image.fields.Photo[0].url,
          categorie: image.fields.Categorie,
          timespan: image.fields.Afficher
        };
      }).filter(Boolean);
      return images;
      
    }
  }
};
</script>

<style scoped>
div.widget-container {
  overflow: hidden;
}

img {
  width: 100%;
  height: 56.25%;
}

.shadow{
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
}

</style>