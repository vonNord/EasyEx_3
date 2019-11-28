import * as React from "react";

import { connect } from "react-redux";
import { IApplicationState } from "../Store";

interface IProps {
	howMuchRain: number;
}

const RightComp: React.SFC<IProps> = (props: IProps) => {
	console.log("RightComp:rendering", props.howMuchRain );
	return (
		<div className="comp-container RightComp">
			RightComp
			<div className="comp-container-A">
				<div className="comp-container-B">
					<h1>
						{props.howMuchRain > 0 ? `Its raining ${props.howMuchRain}. Better bring an umbrella, then.` : "Its not raining!"}
					</h1>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (store: IApplicationState) => {
	console.log("RightComp:mapStateToProps", store.rain.rainState );
	return {
		howMuchRain: store.rain.rainState
	};
};

export default connect(mapStateToProps)(RightComp);
