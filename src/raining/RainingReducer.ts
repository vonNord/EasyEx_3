import { Reducer } from "redux";
import { RainingActions, RainingActionTypes, IRainingState } from "./RainingTypes";

const initialRainingState: IRainingState = {
	rainState: 0
};

export const rainingReducer: Reducer<IRainingState, RainingActions> = (state = initialRainingState, action) => {
    console.log("reducers called", action.type );
	switch (action.type) {
		case RainingActionTypes.ENTERRAINAMOUNT: {
			console.log("rainingReducer", action.rainAmount);
			return {
				...state,
				rainState: action.rainAmount
			};
		}
	}
	return state || initialRainingState;
};
