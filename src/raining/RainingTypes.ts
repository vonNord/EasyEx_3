export enum RainingActionTypes {
    ENTERRAINAMOUNT = "RAIN/ENTERAMOUNT"
}

export interface IRainingState {
    readonly rainState: number;
}

export interface IRainingEnterAmountAction {
    type: RainingActionTypes.ENTERRAINAMOUNT;
    rainAmount: number;
}

export type RainingActions = IRainingEnterAmountAction;

