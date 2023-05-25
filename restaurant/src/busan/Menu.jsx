import React from "react";
import KoreanFood from "./KoreanFood";

function Menu(props){
    return(
        <div>
        <KoreanFood menu="두루치기" price={7000}/>
        <KoreanFood menu="밀면" price={7500}/>
        <KoreanFood menu="떡볶이" price={5000}/>
        </div>
    )
}

export default Menu