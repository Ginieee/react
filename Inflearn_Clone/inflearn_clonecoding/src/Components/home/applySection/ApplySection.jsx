import { applyData } from 'Data/home/applyData';
import React from 'react';
import ApplyBox from './ApplyBox';

function ApplySection(props) {
    return (
        <section className='apply'>
            <div className='container'>
                <div className='header'>
                    <h1 className='title is-4'>다양한 서비스를 신청하세요.</h1>
                    <div className='subtext is-2'>
                        인프런의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.
                    </div>
                </div>
                <div className='content'>
                    <div className='apply_container'>
                        <div className='apply_wrapper'>
                            {
                                applyData.map((item,i)=>{
                                    return (
                                        <ApplyBox
                                        key={'applyBox' + i}
                                        title={item.title}
                                        text={item.text}
                                        linkSrc={item.linkSrc}
                                        buttonText={item.buttonText}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApplySection;