import { useCallback, useState } from 'react'
import '../css/Dicinsert.css'
function DicInsert({ insertPoke, pokemons }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)
   const onSelectChange = (e) => setValue(e.target.value)
   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         if (!value.trim()) return // 공백값 입력시 리턴
         const isUnique = pokemons.some((pokemon) => pokemon.name === value) // true/false반환값으로 중복 등록 제어
         if (isUnique) {
            alert('이미 등록된 포켓몬입니다')
            return
         }
         insertPoke(value)
         setValue('')
      },
      [insertPoke, value]
   )
   const pokemonList = ['가디', '고라파덕', '기라티나', '꼬부기', '나옹', '뚜벅쵸', '메타몽', '모래두지', '미라이돈', '블래키', '식스테일', '야돈', '이상해씨', '포니타', '푸린', '피카츄']

   return (
      <div className="DicInsert">
         <form className="DicInsertForm" onSubmit={onSubmit}>
            <input placeholder="이름을 입력하세요 (중복 등록 불가)" onChange={onChange} value={value} />
            <button className="insertButton">+</button>
         </form>
         <div className="select">
            <select onChange={onSelectChange} value="">
               <option value="" disabled>
                  포켓몬 리스트 보기
               </option>
               {pokemonList.map((name, idx) => (
                  <option value={name} key={idx}>
                     {name}
                     {/* 어떤 포켓몬을 등록할 수 있는지 확인 가능하면 좋을 것 같아서 추가했습니다. */}
                  </option>
               ))}
            </select>
         </div>
      </div>
   )
}

export default DicInsert
