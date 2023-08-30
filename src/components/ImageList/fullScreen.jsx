import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch} from "react-redux";
import { initFullScreen, closeFullScreen } from "../../actions/ImageList/fullScreenActions";
import "../../styles/imageList/modals.scss";

// fullscreen modal
function FullScreen() {
    const fullScreenState = useSelector((state) => state.fullScreenStateReducer);
    const dispatch = useDispatch();
    return (
        fullScreenState.fullScreen &&
        <div className="modal" onLoad={(e) => initFullScreen(e)}>
            <div className="modal__content">
                <span className="close" onClick={(e) => closeFullScreen(e, dispatch, fullScreenState)}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
                <img src={fullScreenState.image} alt="large car" />
            </div>
        </div>
    );
}

export default FullScreen;


