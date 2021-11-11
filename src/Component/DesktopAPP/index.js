import DeskImage from './DeskImage';
import Desktop from './Desktop';
import './index.css';

const DesktopAPP =()=>{
    return(
        <div className ="desktop-app">
            <Desktop />
            <DeskImage />
        </div>
    )
}
export default DesktopAPP;