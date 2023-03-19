import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

// Create custom useSelector hook, which can help easier understand what fields can you access
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector