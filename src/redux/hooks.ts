import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import store from 'redux/store';

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
