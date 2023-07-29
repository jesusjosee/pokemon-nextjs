import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {

    const {theme} = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>
        
        <Link href="/" passHref>
          <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
            <Image 
              priority
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
              alt="Icono de la app"
              width={70}
              height={70}
            />
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>

          </div>
        </Link>

        <Spacer css={{flex: 1}} />
        
        <Link href="/favorites">
          <Text color="white" h3 css={{marginRight:'20px'}}>Favoritos</Text>
        </Link>
    </div>
  )
}
