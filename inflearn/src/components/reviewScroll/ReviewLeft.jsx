import React from 'react';
import {reviewButtonData} from 'data/reviewSection/reviewButtonData'
import { reviewTitleCnt } from 'data/reviewSection/reviewTitleCnt';
import ReviewButton from './ReviewButton';

function ReviewLeft(props) {
    return (
        <div className='content_left'>
            <h1 className='title is-2'>
                <span id='count_user'>{reviewTitleCnt}</span>
                <span> 명이 </span><br/>인프런과 함께합니다.
            </h1>
            <div className='text is-1'>
            인프런은 강의의 수강생수, 평점을 투명하게 공개합니다.<br/>
            실제로 많은 온오프라인 학원들은 단기적 성과를 높이기 위해 잘나온 특정 후기만 노출 하거나, 아예 숨겨버리는 경우가 많습니다.<br/>
            반면 인프런은 강의에 대한 후기, 학생수 등 정보를 투명하게 공개합니다. 신뢰성을 바탕으로 학습자들이 더 좋은 컨텐츠를 선택하고 교육의 질을 높입니다.
            </div>
            <div className='buttons'>
                {
                    reviewButtonData.map((item) => {
                        return(
                            <ReviewButton
                            href={item.href}
                            text={item.text}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ReviewLeft;