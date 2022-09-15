import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FormFooter from './FormFooter';

/* eslint-disable no-useless-escape */

function FormInputBlocks(props) {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwFocus, setPwFocus] = useState(false);

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)){
            setEmailValid(true);
            console.log("true");
        } else {
            setEmailValid(false);
            console.log("false");
        }
    }

    // const ErrorEmail = () => {
    //     if(!emailValid && email.length > 0){
    //         console.log("email valid");
    //         return "form__error form__error--email"
    //     }
    //     return "form__error form__error--email form__error--hide"
    // }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex = 
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)){
            setPwValid(true)
        } else {
            setPwValid(false)
        }
    }

    const onFocusPwInput = () => {
        setPwFocus(true);
    }

    const onBlurPwInput = () => {
        setPwFocus(false);
    }


    useEffect(()=>{
        if(emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid])

    const onClickConfirmButton = () => {
        if(!notAllow) {
            alert('회원가입에 성공했습니다.');
        } else {
            alert('회원가입에 실패했습니다.');
        }
    }

    return (
        <form className='signup__form'>
            <div className='form__input-block'>
                <label htmlFor='email' className='form__label'>이메일</label>
                <input 
                id='email' 
                type='email' 
                className='form__input--email ac-input--large form__input e-sign-up-input e-email' 
                placeholder='example@inflab.com'
                onChange={handleEmail}/>
                <span className={'form__error form__error--email' + (!(emailValid && email.length > 0) ? " form__error--hide" : "")}>이메일 형식이 올바르지 않습니다.</span>
            </div>
            <div className='form__input-block'>
                <label htmlFor='password' className='form__label'>비밀번호</label>
                <div className='ac-input-with-item--large password-input form__input--password form__input e-password'>
                    <input 
                    id='password' 
                    type='password' 
                    spellCheck='false' 
                    className='e-sign-up-input--password' 
                    placeholder='******'
                    onChange={handlePassword}
                    onFocus={onFocusPwInput}
                    onBlur={onBlurPwInput}/>
                    <span className='e-toggle-password form__toggle-password form__toggle-password--hidden'>
                        <svg width={16} height={16} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                            <path fill='#212529' d='M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z'></path>
                            <path fill='#212529' fillRule='evenodd' d='M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z' clipRule='evenodd'></path>
                        </svg>
                    </span>
                </div>
                <p className={'form__password-guide-area form__password-guide-area--default' + (pwFocus ? "" : " form__password-guide-area--hide")}>
                    <span className='form__password-guide-line form__password-guide-line--default'>영문/숫자/특수문자 2가지 이상 포함</span>
                    <span className='form__password-guide-line form__password-guide-line--default'>8자 이상 32자 이하 입력 {'('}공백 제외{')'}</span>
                    <span className='form__password-guide-line form__password-guide-line--default'>연속 3자 이상 동일한 문자/숫자 제외</span>
                    <span className='form__password-guide-line form__password-guide-line--un-acceptable'>비밀번호에 사용할 수 없는 문자가 포함되어 있습니다.</span>
                </p>
            </div>
            <div className='form__input-block'>
                <label htmlFor='passwordConfirm' className='form__label'>비밀번호 확인</label>
                <div className='ac-input-with-item--large password-input form__input--password form__input e-password-confirm'>
                    <input id='passwordConfirm' type='password' spellCheck='false' className='e-sign-up-input' placeholder='******'/>
                    <span className='e-toggle-password form__toggle-password form__toggle-password--hidden'>
                        <svg width={16} height={16} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                            <path fill='#212529' d='M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z'></path>
                            <path fill='#212529' fillRule='evenodd' d='M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z' clipRule='evenodd'></path>
                        </svg>
                    </span>
                </div>
                <span className='form__error form__error--passwordConfirm form__error--hide'>비밀번호가 일치하지 않습니다.</span>
            </div>
            <button className='ac-button is-lg is-solid is-primary e-sign-up-button form__button' onClick={onClickConfirmButton}>가입하기</button>
            <FormFooter/>
        </form>
    );
}

export default FormInputBlocks;