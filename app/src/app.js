import Header from '../src/components/header.js';
import Cancha from '../src/components/cancha.js';
var app = new Vue({
    el: '#app',
    data: {
        myNombre: 'Yudith',
        myApellido: 'Urbina',
        myCanchas: [
            {
                "id": "001",
                "nombre": "Matute"
            },
            {
                "id": "002",
                "nombre": "UCH Campeones"
            },
            {
                "id": "003",
                "nombre": "El Tigre"
            },
            {
                "id": "004",
                "nombre": "Stgo. Bernabeu"
            },
        ]
    },
    components: {
        Cancha,
        Header
    },
    methods: {
        initMenssage: function () {
            console.log("Bienvenidos a la clase 2 de Vue.js");
        }
    },
    mounted() {
        //todas las funciones que voy a inicializar
        this.initMenssage();
    },
    template: `
        <div>
            <Header :nombre="myNombre" :apellido="myApellido" />
            <Cancha :canchas="myCanchas" />
        </div>
    `
})