import Head from 'next/head'
import { Navbar } from '../ui'

interface Props{
    children : React.ReactNode,
    title? : string
}


export const Layout = ({ children, title }: Props) => {

  return (
    <>
        <Head>
            <title> { title || 'Pokemon App' } </title>
            <meta name='author' content='Jesus Suyon' />
            <meta name='desciption' content={`Informacion sobre el pokemon ${title}`} />
            <meta name='keywords' content={` ${title} ,  pokemon, pokedex` } />

        </Head>

        <Navbar/>

        <main style={{padding: '0px 20px'}}>
            {children}
        </main>
    </>
  )
}
