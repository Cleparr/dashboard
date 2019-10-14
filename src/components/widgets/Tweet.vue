<template>
  <Timeline id="cparraam" slug="b612-startup" sourceType="list" :options="{ tweetLimit: '3', chrome: 'noheader nofooter noborders' }" rounded class="widget-container shadow p-3 mb-2 bg-white rounded"/>
</template>

<script>

import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'Tweet',
  components: {
    Timeline
  }
}
 
</script>

<style scoped> 
  div.widget-container {
        border-style: solid;
        border-color: transparent;
  }

  .shadow{
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
  }
</style>