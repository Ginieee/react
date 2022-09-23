import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Home(props) {
    //Module, Hooks
    const navigate = useNavigate();

    //State
    const [keyword, setKeyword] = useState();
    const [courseTitle, setCourseTitle] = useState('리액트 강의');

    //useEffect
    // useEffect(()=>{
    //     console.log("컴포넌트가 생성됐을 때");

    //     return ()=>{ //컴포넌트가 사라지기 직전에 실행됨!
    //         console.log("컴포넌트가 사라집니다."); 
    //     }//보통 타이머 해제할 때 사용? 사실 자주 쓸 일은 없음! 그래도 컴포넌트의 생명주기(생성,변화,삭제) 패턴을 알아둬야 하니까~

    // },[]); //처음 생성됐을 때

    // useEffect(()=>{
    //     console.log("검색창 이용 중")
    // },[keyword]) // 디펜던시 어레이 안에 있는 값이 변화했을 때



    //function
    const onClickSearchBtn = () => {
        navigate("/courses", {
            state : keyword,
        }); //함수의 인자로 이동하려는 경로 작성
    }

    const onClickCourse = () => {
        navigate(`/courses/${courseTitle}`);
    }

    return (
        <div>
            <div>
                <input 
                type="text" 
                value={keyword} 
                onChange={(e)=>setKeyword(e.target.value)}/>
                <button onClick={onClickSearchBtn()}>검색</button>
            </div>
            <div style={{marginTop:'20px', border : "1px solid red"}}>
                <div onClick={onClickCourse()}>
                    <span>강의 제목 : </span>
                    <span>{courseTitle}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;