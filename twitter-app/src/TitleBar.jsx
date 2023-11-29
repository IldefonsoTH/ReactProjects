import "./titleBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
export function TitleBar(){
    return(
        <div className="tw-titlebar-container">
            <FontAwesomeIcon icon={faXTwitter} className="twitter-icon" />
            <h1 className="tw-titlebar-text">Twitter Follow Card</h1>
        </div>
    )
}