import '../css/DicTemplate.css'
function DicTemplate({ children }) {
   return (
      <div className="DicTemplate">
         <div className="title">포켓몬 도감</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default DicTemplate
