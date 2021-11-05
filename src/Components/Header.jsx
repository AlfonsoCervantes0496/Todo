//importacion de CSS
import '../stiles/Header.css'


const Header =({Dark, funcion, filtro})=>{
    //Statesconst{sfalse}=props
   


return(
<header className={Dark?"headerw":"headerB"}>
    <h1>To Do List </h1>
    <ul>
        <li>
            <button onClick={()=>filtro("incomplete")}>mostrar no completados</button>
        </li>
        <li>
            <button onClick={()=>filtro("complete")}>mostrar  completados</button>
        </li>
        <li>
            <button onClick={()=>filtro("all")}>mostrar Todos</button>
        </li>
    </ul>
    <button  onClick={()=>funcion()}>{Dark?"cambiar a modo claro":"cambiar modo uscuro"}</button>
</header>


)


}
export default Header