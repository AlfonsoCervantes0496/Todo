
import logo from '../elements/logo.jpg'
import '../stiles/container.css'


const Container=(props)=>{
const{title}=props
const{status}=props
const{Dark}=props
const{BTN}=props
const{id}=props




    return(
        <div className={Dark?"DivB":"DivW"}>
<img src={logo} alt="" />
<h3>{title}</h3>
<button onClick={()=>BTN(id)}>{status?"Borrar":"completar"}</button>

        </div>


        
    )
}
export default Container