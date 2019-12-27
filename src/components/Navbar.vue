<template>
   <nav>
       <v-snackbar v-model="snack" :timeout="3000" top color="amber darken-1">
           <span>WELCOME TO PELZ ENERGY COST CALCULATOR APP!!!</span>
           <!-- <v-btn text color="white">Close</v-btn> -->
       </v-snackbar>

       <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
           <span>Booom!!! Your device has been added</span>
           <v-btn text color="white" @click="snackbar = false">Close</v-btn>
       </v-snackbar>

       <v-app-bar clipped app class="orange darken-4">
         <div position: left>
        <v-img :src="require('../assets/logo.svg')" class="my-2" contain height="50"></v-img>
         </div>
         <v-toolbar-title class="text-uppercase white--text">
         <span>Energy Cost calculator</span>
         </v-toolbar-title>
         <v-spacer></v-spacer>

    <!-- navbar menu -->
            <v-btn text color="white" router-link to="/" dark large>
                <span>HOME</span>
                <v-icon right>mdi-home</v-icon>
            </v-btn>
            <v-btn text color="white" router-link to="/history" dark large>
                <span>HISTORY</span>
                <v-icon right>mdi-history</v-icon>
            </v-btn>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
            <v-btn text class="orange darken-4 white--text" v-on="on">PRINT<v-icon right>mdi-printer</v-icon></v-btn>
            </template>
            <v-card>
                <v-card-text class="black--text" justify="space-around">
                   <div class="center"> 
                       <v-icon x-large color="red" class="ma-4">mdi-printer-off</v-icon>
                    </div>
                <div class="font-weight-bold red--text text-uppercase">
                <h1 class="ma-2">Ooppss!!!</h1> 
                <h2>Dear Happy User, Our printer server is down at the moment. Therefore, We are closed for the day. However, you can either keep smiling at the screen or "Carry your Body" psssttt!!!</h2>
                </div>
                <div class="center">
                    <v-icon x-large color="red" class="ma-4">mdi-emoticon-happy-outline</v-icon>
                </div>
                </v-card-text>
            </v-card>
        </v-dialog>
            <!-- <v-btn text color="white">
                <span>PRINT</span>
                <v-icon right>mdi-printer</v-icon>
            </v-btn> -->
       </v-app-bar>


    </nav> 
</template>


<script>
export default {
   components: { },
  data() {
      return {
          snackbar: false,
          snack: true
      }
  }  
}
</script>