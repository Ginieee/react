import React from 'react';

function FormFooter(props) {
    return (
        <div className='form__footer'>
            <span className='footer__policy'>
                가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
                <a className='policy__link' href='https://www.inflearn.com/policy'>통합 계정 </a>
                및 서비스 이용약관 {'('} 
                <a className='policy__link' href='https://www.inflearn.com/policy/terms-of-service'>인프런</a>
                {'/'}
                <a className='policy__link' href='https://www.inflearn.com/policy/privacy'>개인정보취급방침</a>
                {')'}
                에 동의합니다.
            </span>
            <p className='footer__allow-marketing'>
                <label htmlFor='allow-marketing' className='allow-marketing__label'>통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요.</label>
                <input id='allow-marketing' type='checkbox'/>
            </p>
        </div>
    );
}

export default FormFooter;