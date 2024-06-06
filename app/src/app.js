import Header from '../src/components/header.js';
import Cancha from '../src/components/cancha.js';
import Servicios from './services/api.js';
var app = new Vue({
    el: '#app',
    data: {
        myNombre: 'Franccesco',
        myApellido: 'De La Rosa',
        isCanchas: true,
        myCanchas: [],
        myCanchasSeleccionadas: [],
        isSelecciona: false
    },
    components: {
        Cancha,
        Header
    },
    methods: {
        initMenssage: function () {
            console.log("Bienvenidos a la clase 2 de Vue.js");
        },
        async fetchData () {
            const apiurl = 'app/json/chanchas.json';  
            const servicio = new Servicios();            
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener canchas:', error);
                } else {
                    this.myCanchas = response;
                    this.isCanchas = (this.myCanchas.length > 0) ? true : false; 
                }
            });
            /*fetch(apiurl)
                .then(response => response.json())
                .then(data => {
                    this.myCanchas = data;
                    this.isCanchas = (this.myCanchas.length > 0) ? true : false; 
                })
                .catch(error => {
                    console.error('Error fetching filtered data:', error);
                }); */       
        },
        handerdlCancha: function(id) {            
            this.myCanchas.forEach(cancha => {
                if (cancha.id == id) {
                    let valida = true;
                    this.myCanchasSeleccionadas.forEach(cc => {
                        if (cc.id == id) {
                            valida = false;
                        }
                    });
                    if (valida) {
                        this.myCanchasSeleccionadas.push(cancha); 
                    }                   
                }
            });
            this.isSelecciona = true;
        },
        handerlRemoveCancha: function(id) {
            this.myCanchasSeleccionadas.forEach((item, index) => {
                if (item.id === id) {
                    this.myCanchasSeleccionadas.splice(index, 1);
                }
            });            
            if (this.myCanchasSeleccionadas.length == 0) {
                this.isSelecciona = false;  
            }            
        }
    },
    mounted() {
        /*if (this.myCanchas.length > 0) {
            this.isCanchas = true;
        } else {
            this.isCanchas = false;
        }*/
        this.fetchData();       
        //todas las funciones que voy a inicializar
        this.initMenssage();
    },
    template: `
        <div>
            <Header :nombre="myNombre" :apellido="myApellido" :isselecciona="isSelecciona" :canchas="myCanchasSeleccionadas" @clickcancharemove="handerlRemoveCancha"/>
            <Cancha :canchas="myCanchas" :iscanchas="isCanchas" @clickcancha="handerdlCancha" />
        </div>
    `
})