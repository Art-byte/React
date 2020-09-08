import React from 'react'

import { connect } from 'react-redux';

const Suplentes = ({suplentes, quitarSuplentes}) =>(
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                suplentes.map(j=>(
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={()=> quitarSuplentes(j)}>X</button>
                        </div>
                <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchProps = dispatch =>({
    quitarSuplentes(jugador){
        dispatch({
            type: 'QUITAR_SUPLENTES',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchProps)(Suplentes)