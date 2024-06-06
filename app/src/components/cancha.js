export default {
    template: 
        `
            <main>
                <h1>Las mejores canchas de Lima ahora cerca de ti</h1>
                <div class="listCanchas">
                    <ul>
                        <li v-for="cancha in canchas" :key="cancha.id">
                            {{ cancha.nombre }}
                        </li>
                    </ul>
                </div>
            </main>
        `,
    props: {
        canchas: {
            type: Array,
            requerid: true
        }
    },
    name: 'Cancha',
}