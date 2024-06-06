export default {
    template: 
        `
            <main>
                <h1>Las mejores canchas de Lima ahora cerca de ti</h1>
                <div class="listCanchas">
                    <ul v-if="iscanchas">
                        <li v-for="cancha in canchas" :key="cancha.id" @click="clickHanderdl(cancha.id)">
                            <i></i>        
                            <span>{{ cancha.nombre }}</span>
                        </li>
                    </ul>
                    <p v-else="iscanchas" class="notCanchas">
                        No hay canchas
                    </p>
                </div>
            </main>
        `,
    props: {
        canchas: {
            type: Array,
            requerid: true
        },
        iscanchas: {
            type: Boolean,
            requerid: true
        }
    },
    methods: {
        clickHanderdl(id) {
            this.$emit("clickcancha", id);
        }
    },
    name: 'Cancha',
}