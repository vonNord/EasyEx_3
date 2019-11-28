# A slightly better but still very easy and simple example, now with a text input field!

This example is built on the example you can find in https://github.com/vonNord/EasyEx

This example is going to allow the user to insert a numeric value for how much it is raining in the LeftComp, and display it in the RightComp.  
![startup state](img/screenshot1.png)

And then, when you change the number to a positive number:

![Clicked state](img/screenshot2.png)
Here I'm only going to explain the differences:

1.  App and Root is not changed at all.
1.  Let's start with LeftComp:
    1.  The props is changed:
    ```typescript 
    interface IProps {
        onEnterRainAmount: typeof EnterRainAmount;
        howMuchIsItRaining: number;
    }
    ```
    LeftComp need a new function to change the numeric input value, and we need the current value to know what to show in the input.
    1.  We have a new function to handle the input.
        ```typescript 
        const handleRainAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("LeftComp:handleCheckboxClick", e.currentTarget.value );
            props.onEnterRainAmount( e.currentTarget.value );
        };
        ```
        Notice that we are now using e.currentTarget.value (previously we use e.currentTarget.checked).
    1.  The input declaration in the render function is changed to call the new function and use the new value:   ```<input type="number" onChange={handleRainAmountInput} value={ props.howMuchIsItRaining }/>```
    1.  Since we have a new function we must update mapDispatchToProps: ```onEnterRainAmount: ( val: number) => dispatch( EnterRainAmount( val ))```. EnterRainAmount is a action creator function you will find in RainingAction.ts We will look at it shortly.
    1.   Since we have a new value in the props, we must also take this value from the store and insert it into the props. We do this in mapStateToProps:  ```howMuchIsItRaining: store.rain.rainState```. (rainstate is now a number. You find it in RainingTypes.ts)
1.  Let us look at the RightComp next
    1.  The props have changed to accept a number instead of the Boolean:
    ```typescript 
    interface IProps {
	    howMuchRain: number;
    }
    ```
    1.  The render function is updated to show the number:
    ```tsx
    {props.howMuchRain > 0 
    ? `Its raining ${props.howMuchRain}. Better bring an umbrella, then.` 
    : "Its not raining!"}
    ```
    Notice how we use the props.howMuchRain twice in that line.
    1.  mapStateToProps is also updated to reflect the fact that we now have a number:  ```howMuchRain: store.rain.rainState```.
1.  The action creator file:
    ```typescript 
    export const EnterRainAmount: ActionCreator<IRainingEnterAmountAction> = (val: number) => {
        console.log("RainingActions:EnterRainAmount", val);
        return {
            type: RainingActionTypes.ENTERRAINAMOUNT
            , rainAmount: val
        };
    };
    ```
    This describes the function EnterRainAmount, which takes in a number and returns an action structure of the new type RainingActionTypes.ENTERRAINAMOUNT. It gets the rain value and puts it in the return structure.
1.  RainingTypes have changed some
    ```typescript 
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
    ```
    Basically just changed the Boolean value to a number. Renamed the type in the enum and the IRainingEnterAmountAction interface.
1.  Finally, the RainingReducer.
    1.  The initialRainingState is changed, and if we put in a number here, the input box in the LeftComp and the text RightComp will reflect that on startup.
    1.  In the reducer function we are going to return the state overwritten by the new changes, os that is what we do ( ```rainState: action.rainAmount```). We take the new state from the action, this was created for us in the EnterRainAmount function.

And that's all!
