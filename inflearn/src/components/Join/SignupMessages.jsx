import React from 'react';

function SignupMessages(props) {
    return (
        <aside className='signup__messages'>
            <h3 className='visually-hidden'>화원가입 메세지</h3>
            <div className='signup__messages-slider'>
                <p className='signup__message'>인프런에서 다양한 성장의 기회를 얻으세요</p>
                <p className='signup__message'>나의 성장을 돕는 IT 실무 지식 플랫폼</p>
            </div>
        </aside>
    );
}

export default SignupMessages;