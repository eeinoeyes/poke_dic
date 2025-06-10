// import { useState } from 'react'
import '../css/DicListItem.css'
function DicListItem({ pokemon, onRemove, onChecked }) {
   const { id, name, img, checked } = pokemon

   return (
      <div className="card">
         <img src={img} className={checked ? 'card-img-top checked' : 'card-img-top'} alt={name} onDoubleClick={() => onChecked(id)} />
         <div className="card-body">
            <div className={checked ? 'card-text checked' : 'card-text'}>
               <p>No.{id}</p>
               <p>{name}</p>
            </div>
            <button className="btn btn-danger" onClick={() => onRemove(id)} style={{ width: '5rem' }} disabled={checked ? true : false}>
               {/* 비활성화가 정확히 어떤 걸 의미하는 건지 잘 모르겠어서 일단 버튼도 disabled 적용해두었습니다 */}
               삭제
            </button>
         </div>
      </div>
   )
}

export default DicListItem
