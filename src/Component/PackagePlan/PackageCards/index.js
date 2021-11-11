
import './index.css';

const PackageCards =(props)=>{
    return(
       <div className ="package-card">
           {props.children}
       </div>
    )
}
export default PackageCards;