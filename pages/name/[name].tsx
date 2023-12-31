import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { Pokemon, PokemonListResponse, SmallPokemon } from '@/interfaces'
import { localFavorites } from '@/utils'
import { Grid, Card, Button, Container, Text, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { GetStaticPaths, GetStaticProps } from 'next'
import {FC, useEffect, useState} from 'react'

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: FC<Props> = ({pokemon}) => {

    const [isInFavorites, setisInFavorites] = useState(false)

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setisInFavorites(!isInFavorites)

        if (isInFavorites) return;

        confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
            x: 1,
            y: 0,
        }
        })

    }

    useEffect(() => {
        setisInFavorites(localFavorites.existInFavorites(pokemon.id))
    }, [pokemon.id])
  

  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2} >
          <Grid xs={12} sm={4} >
              <Card isPressable css={{ padding: '30px' }}>
                <Card.Body>
                  <Card.Image 
                    src={ pokemon.sprites.other?.dream_world.front_default || 'no-image.png' }
                    alt= { pokemon.name }
                    width = "100%"
                    height={200}
                  />
                </Card.Body>
              </Card>
          </Grid>

          <Grid xs={12} sm={8} >
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform='capitalize'> { pokemon.name } </Text>
                <Button 
                  color="gradient" 
                  ghost={!isInFavorites}
                  onPress = {onToggleFavorite}
                  >
                   { isInFavorites ? 'En Favoritos' : ' Guardar en Favoritos' }
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container display='flex' direction='row' gap={0} >
                  <Image 
                    src= {pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src= {pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src= {pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image 
                    src= {pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>

        </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
  // creando un array de 151 registros
  let {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  // llenando el array de 151 registros con el name en el paths
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

    return {
        // paths: [
           
        // ],
        paths: pokemonNames.map( name => ({
          params : {
            name: name
          }
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const name = ctx.params?.name

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

    const pokemon = {
        id      : data.id,
        name    : data.name,
        sprites : data.sprites
    }

    return {
        props: {
            pokemon : pokemon
        }
    }
}

export default PokemonByNamePage;