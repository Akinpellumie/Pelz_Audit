<template>
  <div class="history">
    <!-- <v-form>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="message" outlined clearable label="Audit Title" type="text"> 
            <template v-slot:append-outer> <v-menu style="top: -12px" offset-y>
                <template v-slot:activator="{ on }"> 
                  <v-btn v-on:click="audit" rounded color="white--text" class="mx-3 orange darken-4"><v-icon left>mdi-history</v-icon>GET HISTORY</v-btn>
                </template>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    </v-form> -->
    <div class="pb-10 pr-10 mr-10">
      <!-- <v-text-field label="Input Audit Title" rounded v-model="audit"></v-text-field> -->
    <v-btn text rounded color="White" class="orange darken-4 float-right" router-link to="/hello" dark large>
                <v-icon left>mdi-arrow-left-bold-circle-outline</v-icon>
                <span>BACK TO CALCULATOR</span>
            </v-btn>
    </div>
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
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data(){
    return {
      fights: [],
      // message:'',
      // audit:''
      // dailyCons: 0,
      // energyCPU: 0, 
      // dailyEC: 0,
      // id: 'fight'

    }
  },
  created() {
      db.collection('pelzEnergy/newID/newInput').orderBy("title", "desc").limit(3).onSnapshot(res => {
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