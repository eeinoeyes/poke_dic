import '../css/DicList.css'
import DicListItem from './DicListItem'
function DicList({ pokemons, onRemove, onChecked }) {
   return (
      <div className="DicList">
         {pokemons.map((pokemon) => {
            return <DicListItem pokemon={pokemon} key={pokemon.id} onRemove={onRemove} onChecked={onChecked} />
         })}
      </div>
   )
}

export default DicList
