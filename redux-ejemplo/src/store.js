// Redux nos permite tener un store donde se almacenara la data de la aplicacion
import { createStore } from 'redux'

const initialState = {
    jugadores: [{
        id:123,
        nombre:'Rafa Marquez',
        foto: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthe18.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffeature_image_with_focal%2Fpublic%2Ffeature-images%2F20170127-the18-image-rafa-marquez.jpg%3Fitok%3DCvaWj9aa&f=1&nofb=1'
    },
    {
        id:234,
        nombre:'Quiquin fonceca',
        foto:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.foxsportsla.com%2Fsites%2Ffoxsports-la%2Ffiles%2Fimg%2Fnotes%2Fnews%2F620x465%2Fquiquin_030413.jpg&f=1&nofb=1'
    }],
    titulares: [],
    suplentes: []
}

//Esta funcion hace los cambios en la app con una funcion reductora
const reducerEntrenador = (state = initialState, action) =>{
    if(action.type === "Agregar_Titular"){
        return {
            ...state,
            titulares:state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === 'AGREGAR_SUPLENTE'){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === 'QUITAR_TITULAR'){
        return{
            ...state,
            titulares: state.titulares.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === 'QUITAR_SUPLENTES'){
        return{
            ...state,
            suplentes: state.suplentes.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    
    return state
} 


export default createStore(reducerEntrenador)