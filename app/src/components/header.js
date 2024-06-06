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
    },
    name: 'Header',
}