import React from "react";

function KoreanFood(props){
    return(
        <div>
            <h1>{`한국 음식 : ${props.menu}`}</h1>
            <h1>{`음식 가격 : ${props.price}`}</h1>
        </div>
    )
}
export default KoreanFood