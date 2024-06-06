export default {    
    template: 
        `
        <header>
            <div class="logo">LOGO</div>
            <div class="right">            
                <p>Hola {{ nombre }} {{ apellido }}</p>
                <div class="menu">
                    <i></i>
                </div>
            </div>
            <div v-if="isselecciona" class="modalSelecteds">
                <ul>
                    <li v-for="cancha in canchas" :key="cancha.id" >
                        <span>{{ cancha.nombre }}</span>
                        <i @click="clickHanderdl(cancha.id)"></i>
                    </li>
                </ul>
            </div>
        </header>
        `,
    props: {
        nombre: {
            type: String,
            requerid: true
        },
        apellido: {
            type: String,
            requerid: true
        },
        canchas: {
            type: Array,
            requerid: true
        },
        isselecciona: {
            type: Boolean,
            requerid: true
        }
    },
    methods: {
        clickHanderdl(id) {
            this.$emit("clickcancharemove", id);
        }
    },
    name: 'Header',
}