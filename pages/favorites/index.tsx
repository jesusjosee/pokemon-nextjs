import { useEffect, useState } from 'react';

import { Layout } from '@/components/layouts'
import NoFavorites from '@/components/ui/NoFavorites'
import { localFavorites } from '@/utils';
import { FavoritesPokemons } from '@/components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons())
    
  }, [])
  

  return (
    <Layout title='Pokemons - favoritos'>
        
        {
          favoritePokemons.length === 0
            ? ( <NoFavorites/> )
            : ( <FavoritesPokemons favoritePokemons={favoritePokemons} /> )
        }
    </Layout>
  )
}

export default FavoritesPage