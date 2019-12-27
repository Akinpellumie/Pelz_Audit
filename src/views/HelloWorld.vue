<template>
<div>
<v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
        <v-btn text class="orange darken-4 white--text" v-on="on"><v-icon left>mdi-plus</v-icon> Add Device</v-btn>
        </template>

    <v-card>
        <v-card-title class="orange darken-4 white--text" primary-title >
            <h4>Add new Device Type</h4>
        </v-card-title>

        <v-card-text> 
        <v-form class="px-3" ref="form">
            <!-- <h1 class="my-5 mb-5">Audit Title: {{ _device }}</h1>  -->
            <h1 class="my-3 mb-3">Audit Title: </h1>
            <v-text-field Label="Audit Title:" filled rounded dense v-model="_device"></v-text-field>
            <v-text-field label="Device Type (e.g laptop)" v-model="device" prepend-icon="mdi-devices" required></v-text-field>
            <v-text-field label="Ratings (W)" v-model="rating" prepend-icon="mdi-video-input-component" :rules="rules" required></v-text-field>
            <v-text-field label="Quantity (amount)" v-model="quantity" prepend-icon="mdi-counter" :rules="rules" required></v-text-field>
            <v-text-field label="Daily Operations (Hrs)" v-model="operation" prepend-icon="mdi-chart-timeline" :rules="rules" required></v-text-field>
    

     <v-spacer></v-spacer>

     <v-btn text v-on:click="submit" class="orange darken-4 white--text mx-0 mt-3">Add Device</v-btn>
     </v-form>
     </v-card-text>

     <v-divider></v-divider>

     <v-card-actions>
     <div class="flex-grow-1"></div>
     <v-btn color="primary" text >
     <v-icon>mdi-close</v-icon>
     <span>Close</span>
     </v-btn>
     </v-card-actions>
    </v-card>   
    </v-dialog>
    <v-container class="my-2">
   <v-layout row class="mb-3">
     
   </v-layout>   

<v-card text class="pa-3 " v-for="audit in audits" :key="audit.id"> 
  <v-layout row wrap :class="`pa-3 fight ${audit.status}`">
    <span>{{ audit.id }}</span>
     <v-flex xs6 sm3 md3>
       <div class="caption grey--text">Device Type</div>
       <div>{{ audit.devices[0].device }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Ratings (W)</div>
       <div>{{ audit.devices[0].rating }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Quantity</div>
       <div>{{ audit.devices[0].quantity }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Daily Operations (Hr)</div>
       <div>{{ audit.devices[0].operation }}</div>
     </v-flex>
     <v-flex xs6 sm4 md2>
       <div class="caption grey--text">Daily Consumption (W*Hr)</div>
      <div>{{ audit.devices[0].consumption }}</div>
     </v-flex>
    <v-btn color="orange darken-4" text v-on:click="delDevice(audit.id)">
     <v-icon>mdi-delete</v-icon>
     </v-btn>
  </v-layout>
</v-card>
<v-divider></v-divider>

  </v-container>
  <v-container>
  <div class="text-right">
<v-btn text class="orange darken-4 white--text mr-8" v-on:click="Calculate()">Calculate</v-btn> 
<v-btn text class="orange darken-4 white--text" @click="clear()">Clear</v-btn>
  </div>
  </v-container>
  <v-container>
    <v-row>
  <v-col cols="12" sm="6" md="3">
    <v-text-field color="purple darken-2" label="Total daily Energy Consumption(KW*Hr)" outlined v-model="dailyCons" disabled></v-text-field>
  </v-col>
  <v-col cols="12" sm="6" md="3">
    <v-text-field label="Energy cost per unit (#)" outlined v-model="energyCost" color="orange darken-4"></v-text-field>
  </v-col>
   <v-col cols="12" sm="6" md="3">
    <v-text-field color="purple darken-2 orange--text" label="Daily Energy Cost (KW*Hr/#)" outlined v-model="dailyEC" disabled></v-text-field>
  </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data: () => ({
    audits: [],
     rules: [
        value => !!value || 'Required.',
        value => {
          var pattern = /^-?[0-9]+(.[0-9]{1,7})?$/;
          return pattern.test(value) || 'Numbers Only...'
        },
      ],
    dialog:false,
    title:'',
    devices: [
      {
      device:'',
      rating:'',
      quantity:'',
      operation: '',
      }
    ],
    
    consumption: '',
    // loading: false,
    // dialog: false,
    dailyCons: 0,
    energyCost: 0, 
    dailyEC: 0,
    id: 'audit'
  }),
  computed:{
        _device(){

                return this.$store.state.device;
            
        }
    },
  methods: {
    submit(e){
    e.preventDefault();
    // this.loading = true;
    const newDevice = { 
        title: this._device,
        devices: [
          {
            device: this.device,
            rating: this.rating,
            quantity: this.quantity,
            operation: this.operation
          }
        ],
    consumption: this.consumption,
    id:this.audits.length + 1
    }
    this._device = "";
    this.device = "";
    this.rating = "";
    this.quantity = "";
    this.operation = "";

    axios.put('http://localhost:4545/audits', newDevice)
  
    this.audits.push(newDevice);
    
    for (let j=0; j<5000; j++){
        this.audits[j].devices[0].consumption = this.audits[j].devices[0].rating*this.audits[j].devices[0].quantity*this.audits[j].devices[0].operation;
    }
    this.device = "";
    this.rating = "";
    this.quantity = "";
    this.operation = "";
        
    },
    delDevice(id){
       this.audits=this.audits.filter(audit => audit.id !==id);
    },
    Calculate(){
       if (this.energyCost== "" || this.energyCost==0) { 
          this.energyCost=28;}
        else {
          this.energyCost=this.energyCost
        }
      for (let j=0; j<5000; j++){
        this.dailyCons += this.audits[j].devices[0].consumption / 1000;
        this.dailyEC = this.dailyCons*this.energyCost;
        }
    },
    clear(){
    window.location.reload()
    }
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
