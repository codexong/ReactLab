import React from "react";

// 함수형 컴포넌트 2개 생성해서 jsx 문법으로 구현
function  Book(props){
    return(
        <div>
            <h1>{`책 이름 : ${props.name}입니다.`}</h1>
            <h2>{`홈 페이지 :${props.numOfPage} `}</h2>
        </div>
    );
}
export default Book;