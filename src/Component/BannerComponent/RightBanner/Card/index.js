import './index.css';


const Card =(props)=>{
    return (
        <div className ='card' style={{margin:props.margin}}>
            {props.children}
        </div>
    )
}
export default Card;