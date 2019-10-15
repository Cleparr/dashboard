<template>
<div rounded alt="Rounded image" class="widget-container shadow p-3 mb-2 bg-white rounded" >
    <weather 
        v-bind:api-key= "meteoApiKey"
        title="Meteo Lyon"
        latitude="45.75"
        longitude="4.85"
        language="fr"
        bar-color = "#646EFF"
        units="si">
    </weather>
</div>
</template>

<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    name: 'Meteo',
    components: {
        'weather': VueWeatherWidget
    },
    data() {
    return {
      meteoApiKey: process.env.VUE_APP_DARK_SKY_API_SECRET_KEY,
    }
  }
}
</script> 

<style scoped>

div.widget-container {
    background-color: white;
    height: auto;
}

div.widget-container >>> .fe_alert {
    display: none !important;
}

div.widget-container >>> .fe_container{
    max-width: auto;
    min-width: auto;
    height: auto;
    background-color: white;
}

div.widget-container >>> .fe_title{
    background-color: white;
}

div.widget-container >>> .fe_forecast{
    background-color: white;
}

div.widget-container >>> .fe_daily{
    background-color: white;
}

div.widget-container >>> .fe_currently{
    background-color: white;
}

div.widget-container >>> .fe_summary{
    background-color: white;
}

div.widget-container >>> .fe_temp{
    background-color: white;
}

div.widget-container >>> .fe_day{
    background-color: white;
}

.shadow{
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
}

div.widget-container >>> .fe_wind { display: none; }

</style>
