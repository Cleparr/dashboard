<template>
  <div class="home mt-1">
      <b-container fluid>
      <b-row>
        <b-col>
          <News/>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="7" >
          <TrombiSU/>
          <Arrivants :number-of-profiles="3"/>
          <Meteo/>
          <Agenda />
          <Invitation />
          </b-col>
        <b-col cols="5">
          <Tweet />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Agenda from '@/components/widgets/Agenda.vue'
import Tweet from '@/components/widgets/Tweet.vue'
import News from '@/components/widgets/News.vue'
import Meteo from '@/components/widgets/Meteo.vue'
import Invitation from '@/components/widgets/Invitation.vue'
import Video from '@/components/widgets/Video.vue'
import TrombiSU from '@/components/widgets/TrombiSU.vue'
import Arrivants from '@/components/widgets/Arrivants/Arrivants.vue'

export default {
  components: {
    Agenda,
    Tweet,
    News,
    Meteo,
    Invitation,
    Video,
    TrombiSU,
    Arrivants
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    margin-bottom: 0;
    background-color: #F8F8F8;
    overflow: hidden;
  }

</style>
