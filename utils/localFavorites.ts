
const toggleFavorite = (id: number) => {

    // obtener los favoritos del localstorage
    let favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]' );

    if ( favorites.includes(id) ){
        favorites = favorites.filter( pokeID => pokeID !== id );
    } else {
        favorites.push( id );
    }

    // Guardar los favoritos en el localstorage
    localStorage.setItem("favorites", JSON.stringify( favorites))
}

const existInFavorites = (id: number): boolean => {

    if ( typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');

    return favorites.includes(id)

}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite  :   toggleFavorite,
    existInFavorites:   existInFavorites,
    pokemons        :   pokemons,
}