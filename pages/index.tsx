import { Layout } from "../components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next"


const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokemons">
      <Button color='gradient'>hola mundo</Button>
    </Layout>
  )
}

export default HomePage;