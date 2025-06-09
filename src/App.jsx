import { use, useRef, useState } from 'react'
import DicTemplate from './components/DicTemplate'
import DicList from './components/DicList'
import DicListItem from './components/DicListItem'
import DicInsert from './components/DicInsert'

function App() {
   const [pokemons, setPokemons] = useState([
      { id: 1, name: '이상해씨', img: './img/이상해씨.png' },
      { id: 2, name: '미라이돈', img: './img/미라이돈.png' },
   ])
   const nextId = useRef(3)

   const insertPoke = (name) => {
      const pokeInfo = {
         id: nextId.current,
         name,
         img: `./img/${name}.png`,
      }
      setPokemons(pokemons.concat(insertPoke))
      nextId.current += 1
   }
   console.log(pokemons)

   return (
      <DicTemplate>
         <DicInsert insertPoke={insertPoke}></DicInsert>
         <DicList></DicList>
      </DicTemplate>
   )
}

export default App
