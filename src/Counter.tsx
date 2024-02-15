import {increment} from "./state/counter/counterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store.tsx";

export const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                Increment
                </button>
                <span>{counter}</span>
            </div>
        </div>
    );
}