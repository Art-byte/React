import React from 'react'
import { connect } from 'react-redux'

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map( j=>( //Recorremos el arreglo
                    <article className="jugador" key={j.id}>
                        <img src= {j.foto} alt={j.nombre}/>
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button onClick={() => agregarSuplente(j)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

//Esta funcion es la encargada de llevar las acciones leidas por el redux para cambiar el estado
const mapDispatchProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type:"Agregar_Titular",
            jugador
        });

    },

    agregarSuplente(jugador){
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            jugador
        })
    }
});


//con esta linea conectamos con nuestro store
export default connect(mapStateToProps, mapDispatchProps)(Jugadores)