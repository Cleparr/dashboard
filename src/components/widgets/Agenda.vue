<template>
<div rounded alt="Rounded image" class="widget-container shadow p-3 mb-2 bg-white rounded">
  <FullCalendar
    :plugins="calendarPlugins"
    :google-calendar-api-key="gcalApiKey"
    default-view="listWeek"
    :events="events"
    locale = frLocale
          
    />
</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import frLocale from '@fullcalendar/core/locales/fr';

import '@fullcalendar/core/main.css';
import '@fullcalendar/list/main.css';


export default {
  name: 'Agenda',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [ listPlugin, googleCalendarPlugin ],
      gcalApiKey: process.env.VUE_APP_GOOGLE_CALENDAR_API_KEY,
      locale: frLocale,
      events: {
        googleCalendarId: process.env.VUE_APP_GOOGLE_CALENDAR_ID
        
      }
    }
  }
    
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- deroger aux règles CSS générales -->
<style scoped> 
  .shadow{
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
  }

  div.widget-container {
        border-color:transparent;
        border-style:solid;
        background-color: white;
  }

  div.widget-container >>> .fc-today-button { display: none; }
  div.widget-container >>> .fc-prev-button { display: none;}
  div.widget-container >>> .fc-next-button { display: none;}
  div.widget-container >>> .fc-right { display: none;}
  div.widget-container >>> .fc-left {
    text-align: center;
    width: 100%;
    background-color: white;
  }
  div.widget-container >>> .fc-toolbar.fc-header-toolbar{ text-align: center}

</style>
