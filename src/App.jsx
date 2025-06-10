import { useCallback, useRef, useState } from 'react'
import DicTemplate from './components/DicTemplate'
import DicList from './components/DicList'
import DicListItem from './components/DicListItem'
import DicInsert from './components/DicInsert'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   const [pokemons, setPokemons] = useState([
      { id: 1, name: '이상해씨', img: '/img/이상해씨.png', checked: false },
      { id: 2, name: '미라이돈', img: '/img/미라이돈.png', checked: false },
   ])
   const nextId = useRef(3)

   const insertPoke = (name) => {
      const pokeInfo = {
         id: nextId.current,
         name,
         img: `/img/${name}.png`,
         checked: false,
      }
      setPokemons(pokemons.concat(pokeInfo))
      nextId.current += 1
   }

   const onRemove = useCallback(
      (id) => {
         const removedPoke = pokemons.filter((pokemon) => pokemon.id != id)
         setPokemons(removedPoke)
      },
      [pokemons]
   )
   const onChecked = useCallback(
      (id) => {
         setPokemons(pokemons.map((pokemon) => (pokemon.id === id ? { ...pokemon, checked: !pokemon.checked } : pokemon))) //삼항연산자 사용한 토글
      },
      [pokemons]
   )

   return (
      <DicTemplate>
         <DicInsert insertPoke={insertPoke} pokemons={pokemons}></DicInsert>
         <DicList pokemons={pokemons} onRemove={onRemove} onChecked={onChecked}></DicList>
      </DicTemplate>
   )
}

export default App
