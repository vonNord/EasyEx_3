import { RainingActionTypes, IRainingEnterAmountAction } from "./RainingTypes";
import { ActionCreator } from "redux";

export const EnterRainAmount: ActionCreator<IRainingEnterAmountAction> = (val: number) => {
	console.log("RainingActions:EnterRainAmount", val);
	return {
		type: RainingActionTypes.ENTERRAINAMOUNT
		, rainAmount: val
	};
};