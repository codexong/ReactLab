import React from "react";

function Dog(props){
    return (
        <div>
            <h1>{`강아지 이름 : ${props.name}`}</h1>
            <h1>{`강아지 나이 : ${props.age}`}</h1>
        </div>
    );
}

export default Dog