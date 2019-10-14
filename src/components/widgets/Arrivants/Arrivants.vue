<template>
  
</template>

<script>

const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.VUE_APP_AIRTABLE_TABLE);



export default {

    methods: {
    async getInfos() {
      const infosAirtable = await base("Coworkers")
        .select()
        .all();
      const infos = infosAirtable.map(image => {
        if (!image.fields.Information) {
          return false;
        }
        return {
          info: image.fields.Information,
          photo: image.fields.Photo[0].url,
          categorie: image.fields.Categorie
        };
      });
      return infos;
    }
  }

}
</script>

<style>

</style>