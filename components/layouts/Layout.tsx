import Head from 'next/head'

interface Props{
    children : React.ReactNode,
    title? : string
}

// Las dos formas funcionan
export const Layout = ({ children, title }: Props) => {
// export const Layout = ({ children, title }: {children:React.ReactNode, title?:string}) => {
  return (
    <>
        <Head>
            <title> { title || 'Pokemon App' } </title>
            <meta name='author' content='Jesus Suyon' />
            <meta name='desciption' content={`Informacion sobre el pokemon ${title}`} />
            <meta name='keywords' content={` ${title} ,  pokemon, pokedex` } />

        </Head>

        {/* Navbar */}

        <main>
            {children}
        </main>
    </>
  )
}
