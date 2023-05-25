import React from "react";
import Book from "./Book";


//함수형 컴포넌트 Library에 Book 컴포넌트 사용
function Library(props){
    return(
        <div>
            <Book name="홍길동1" numOfPage={100}/>
            <Book name="홍길동2" numOfPage={200}/>
            <Book name="홍길동3" numOfPage={300}/>
            <Book name="홍길동4" numOfPage={400}/>
        </div>
    );
}
export default Library;