import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { openFullScreen } from "../../actions/ImageList/fullScreenActions";
import { useSelector, useDispatch} from "react-redux";

// card component - includes eventlisteners for full screen
export default function Card(props) {
    const dispatch = useDispatch();
    const fullScreenState = useSelector((state) => state.fullScreenStateReducer);

    const calculatePadding = (width, height) => {
        const result = (height / width) * 100;
        return result;
    }

    const fadeIn = (e) => {
        e.target.setAttribute("style", "opacity: 1;");
    }

    const padding = { "paddingTop": calculatePadding(props.dimensions.width, props.dimensions.height) + "%" };

    return (
        <div className={"card"} key={props.id} onClick={() => openFullScreen(props.img, dispatch, fullScreenState)} style={padding}>
            <div className="card__head">
                <div className="user__icon">
                <img src={ props.userImg } alt="{props.userName}"/>
                </div>
                <div className="user__name">
                    {props.userName}
                </div>
            </div>
            <div className="card__likes">
                <FontAwesomeIcon icon={faHeart} />{props.likes}
            </div>
            <div>
                <img loading="lazy" onLoad={(e) => fadeIn(e)} src={props.img} alt={props.alt} />
            </div>
        </div>
    );
}