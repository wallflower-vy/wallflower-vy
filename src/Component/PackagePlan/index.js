
import './index.css';
import PackageCards from './PackageCards';
import { RiBarChartFill} from "react-icons/ri";

const PackagePlan =()=>{
    return(
        <div className="package-plan">
            <PackageCards >
                <span className ="hand"><div className ="boxy"><RiBarChartFill /></div></span>
                <h5 className="title">BEGINNER STAGE</h5>
                <p className ="text">You <span className="colored-text">ARE NOT REQUIRED </span> have any background knowledge related to the platform of your choice.</p>
                <p className="colored-head">PLATFORM</p>
                <div className ="platform">
                    <div className ="platform-cardone">WEB APPS</div>
                    <div className ="platform-cardone">MOBILE APPS</div>
                    <div className ="platform-cardone">DESKTOP APPS</div>
                </div> 
                <button className ="cardone-btn">Learn more</button>
                
                    
            </PackageCards>
            <PackageCards  >
                <span className ="hand"><div className ="boxy-green"><RiBarChartFill /></div></span>
                <h5 className="title colored-green">INTERMEDIATE STAGE</h5>
                <p className ="text">You <span className="colored-green">ARE REQUIRED</span> to have a good background of <span className ="colored-green"> HTML, CSS, JavaScript</span> </p>
                <p className="colored-headgreen ">PLATFORM</p>
                <div className ="platform">
                    <div className ="platform-cardtwo ">WEB APPS</div>
                    <div className ="platform-cardtwo">MOBILE APPS</div>
                    <div className ="platform-cardtwo">DESKTOP APPS</div>
                </div> 
                <button className ="cardtwo-btn">Learn more</button>
            </PackageCards>
            <PackageCards>
                <span className ="hand"><div className ="boxy-red"><RiBarChartFill /></div></span>
                <h5 className="title colored-red">FULL STACK</h5>
                <p className ="text">You <span className ="colored-red">ARE REQUIRED</span> to have basic understanding of OOP</p>
                <p className="colored-headred ">PLATFORM</p>
                <div className ="platform">
                    <div className ="platform-cardthree">WEB APPS</div>
                    <div className ="platform-cardthree">MOBILE APPS</div>
                    <div className ="platform-cardthree">DESKTOP APPS</div>
                </div> 
                <button className ="cardthree-btn">Learn more</button>
            </PackageCards>
            

        </div>
    )
}

export default PackagePlan;