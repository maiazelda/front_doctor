<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <v-card-title>Créer Pillulier</v-card-title>
                <v-card-text>
                    <v-form ref="createDeviceForm">
                        <v-text-field label="name" v-model="formdata.name" :rules="rules"></v-text-field>
                        <v-select label="patients" :items="patients" v-model="formdata.patient" :rules="rules"></v-select>
                        <v-select label="type" :items="type" v-model="formdata.type" :rules="rules"></v-select>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="red" @click="onCancelClick">Annuler</v-btn>
                    <v-btn  color="primary" @click="onCreatClick">Créer</v-btn>
                </v-card-actions>
            </v-col>
            <v-col md="4"></v-col>
        </v-row>

    </v-container>
</template>


<script>

import Backend from '@/services/backend'

export default {
    name: 'TestForm',
    data: () => ({
        formdata: {
            name: null,
            patient: null,
            type: null
        },
        patients: ["maia","arthur","Juliette"],
        type: ["petit","moyen","grand"],
        rules:[value => !!value || "la valeur est requise"] //regle de validation fonction 


    }),
    methods: {
        onCreatClick() {
            console.log("je suis appelé onclick")
            if (this.$refs.createDeviceForm.validate()){ //si on clique sur oncreate, on demande au formulaire de s'auto valider
                console.log("je dois appeler l'api")
                Backend.createDevice({
                    user: this.formdata.patient,
                    device: this.formdata.name

                })
                .then(() => {
                    this.$router.push("/devices")
                })
                
            }  
            else {
                console.log("formulaire non validé")
            }

        },
        onCancelClick() {
            console.log("on cancel")
            this.$router.push("/devices")

        }
    }
}
</script>