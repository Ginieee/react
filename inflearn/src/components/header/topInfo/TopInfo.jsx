import React from "react";
import TopInfoLeftUl from "./TopInfoLeftUl";
import TopInfoRightUl from "./TopInfoRightUl";

function TopInfo(){
    return(
        <section className="top-info-wrapper">
            <header className="max-width-container">
                <div className="top-info-container">
                    <TopInfoLeftUl/>
                    <TopInfoRightUl
                    text="지식공유 참여"
                    href="https://www.inflearn.com/open-knowledge"
                    />
                </div>
            </header>
        </section>
    )
}

export default TopInfo;