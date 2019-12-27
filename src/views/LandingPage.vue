<template>
    <div>
        <v-card-text> 
        <v-form class="px-3 py-10" ref="form">
            <v-text-field label="Enter New Audit Title" v-model="device" prepend-icon="mdi-devices" required></v-text-field>
            
    

     <v-spacer></v-spacer>

     <v-btn text v-on:click="send" class="orange darken-4 white--text mx-0 mt-3" router-link to="/hello" :loading="loading" @click="dialog = false">Generate Audit</v-btn>
     </v-form>
     </v-card-text>
     <v-card-title>
         <h2>RECENTLY ADDED AUDITS</h2>
     </v-card-title>
        <!-- <v-flex v-for="title in titles" v-> -->
       <div ></div>
       <div  class="caption grey--text">Audit Title</div>
        <!-- </v-flex> -->
            
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LandingPage',
    data: () => ({
            title: [],
    }),  
    computed:{
        device:{
            get: function(){
                return this.$store.state.device;
            },
            set: function(newDevice){
                this.$store.dispatch('addDevice', newDevice);
            }
        }
    },
    mounted() {
        axios.get()
    }
}
</script>
