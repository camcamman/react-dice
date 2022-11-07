import React from "react";
import DiceBox from "./dice-box"

export default function Main () {
    // function FunDieNum () {
    //     let [dieNum, setDieNum] = React.useState(DiceBox)
    //     return dieNum
    // }

    let [dieNum, setDieNum] = React.useState(DiceBox)

    function repeat () {
        <DiceBox />
        setDieNum(DiceBox)
    }

    function numClick (index) {
        
    }

    return<>
        <div>{dieNum[0]}</div>
        <div>{dieNum[1]}</div>
        <div>{dieNum[2]}</div>
        <div>{dieNum[3]}</div>
        <div>{dieNum[4]}</div>
        <button onClick={repeat}>new num</button>
    </> 
}

//<DiceBox /> 