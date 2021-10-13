import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/reduxComponents/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
