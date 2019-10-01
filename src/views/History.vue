<template>
  <div class="history">
    <h1>Device history</h1>
    <v-card text class="pa-3 mt-4" v-for="fight in fights" :key="fight.device"> 
  <v-layout row wrap :class="`pa-3 fight ${fight.status}`">
     <v-flex xs6 sm3 md3>
       <div class="caption grey--text">Device Type</div>
       <div>{{fight.device}}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Ratings (W)</div>
       <div>{{ fight.rating }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Quantity</div>
       <div>{{ fight.quantity}}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Daily Operations (Hr)</div>
       <div>{{ fight.operation}}</div>
     </v-flex>
     <!-- <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Daily Consumption (W*Hr)</div>
      <div>{{ fight.consumption}}</div>
     </v-flex> -->
  </v-layout>
</v-card>
<v-spacer></v-spacer>
<v-spacer></v-spacer>
    <v-btn rounded class="orange darken-4 white--text mt-5" router-link to="/">
     <v-icon right>mdi-arrow-left-bold-box</v-icon>
      <span class="pl-4">BACK TO CALCULATOR</span>
    </v-btn>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data(){
    return {
      fights: [],
      // dailyCons: 0,
      // energyCPU: 0, 
      // dailyEC: 0,
      // id: 'fight'

    }
  },
  created() {
      db.collection('pelzEnergy').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === 'added'){
            this.fights.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
}
</script>