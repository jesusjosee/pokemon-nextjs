import { Layout } from "../components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next"
import {pokeApi} from '../api';
import { PokemonListResponse } from '../interfaces';


const HomePage: NextPage = (props) => {
  console.log({props})
  return (
    <Layout title={"Listado de Pokemons"}>
      <Button color='gradient'>hola mundo</Button>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  console.log(data)

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;