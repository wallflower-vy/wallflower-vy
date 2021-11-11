import Card from './Card';
import './index.css';
import {featureFour, featureOne, featureThree, featureTwo} from "../../../lang/HomeLang"


const RightBanner=()=>{
    return(
        <div className ="right-banner-box">
            <Card margin={15} >
                <span className ="hand"><div className ="box">{featureOne.icon}</div></span>
                <h5>{featureOne.title}</h5>
                <p className ="text">{featureOne.text}</p>
            </Card>
            <Card margin={32}  >
                <span className ="hand"><div className ="green">{featureTwo.icon}</div></span>
                <h5>{featureTwo.title}</h5>
                <p className ="text">{ featureTwo.text}</p>
            
            </Card>
            <Card margin={15} >
                <span className ="hand"><div className ="blue">{featureThree.icon}</div></span>
                <h5>{featureThree.title}</h5>
                <p className ="text">{ featureThree.text}</p>
            </Card> 
            <Card margin={32} >
            <span className ="hand"><div className ="orange">{featureFour.icon}</div></span>
                <h5>{featureFour.title}</h5>
                <p className ="text">{ featureFour.text}</p>
            
            </Card>
        </div>
    )
}
export default RightBanner;