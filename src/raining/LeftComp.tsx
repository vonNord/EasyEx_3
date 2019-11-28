import * as React from "react";
import { EnterRainAmount } from "./RainingActions";
import { connect } from "react-redux";
import { IApplicationState } from "../Store";

interface IProps {
	onEnterRainAmount: typeof EnterRainAmount;
	howMuchIsItRaining: number;
}


const LeftComp: React.SFC<IProps> = (props: IProps) => {
	const handleRainAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("LeftComp:handleRainAmountInput", e.currentTarget.value );
		props.onEnterRainAmount( e.currentTarget.value );
	};

	console.log("LeftComp:rendering", props.howMuchIsItRaining );
	return (
		<div className="comp-container LeftComp">
			LeftComp
			<div className="comp-container-A">
				<div className="comp-container-B">
					How much is is raining?
					<input type="number" onChange={handleRainAmountInput} value={ props.howMuchIsItRaining }/>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => {
	console.log("LeftComp:mapDispatchToProps");
	return {
		onEnterRainAmount: ( val: number) => dispatch( EnterRainAmount( val ))
	};
};

const mapStateToProps = (store: IApplicationState) => {
	console.log("LeftComp:mapStateToProps", store.rain.rainState);
	return {
		howMuchIsItRaining: store.rain.rainState
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftComp);
