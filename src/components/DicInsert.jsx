import { useState } from 'react'
import '../css/Dicinsert.css'
function DicInsert({ insertPoke }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)
   const onSubmit = (e) => {
      insertPoke(value)
      setValue('')
   }
   console.log(pokemons)

   return (
      <form className="DicInsert" onSubmit={onSubmit}>
         <input placeholder="이름을 입력하세요" value={value} onChange={onChange} />
         <button>+</button>
      </form>
   )
}

export default DicInsert
