import React from "react";
import Dog from "./Dog";

function Animal(props){
    return(
        <div>
            <Dog name="진돗개 잭슨" age={5}/>
            <Dog name="진돗개 클라라" age={3}/>
            <Dog name="진돗개 제우스" age={4}/>
        </div>
    )
}

export default Animal