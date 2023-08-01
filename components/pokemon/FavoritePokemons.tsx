import {FC} from 'react';
import { Card, Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from '.';

interface Props {
    favoritePokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({favoritePokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start' >
        {
            favoritePokemons.map( id => (
                <FavoriteCardPokemon key={id}  pokemonID={id} />
            ) )
            
        }
    </Grid.Container>
  )
}
