import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creator/index'

// Custom hook which can help us easier call action-creators.
// Because now action-creator will automatically thrown into dispatch
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}