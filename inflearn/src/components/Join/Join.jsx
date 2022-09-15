import React from 'react';
import SignupMain from './SignupMain';
import SignupMessages from './SignupMessages';

function Join(props) {
    return (
        <main id='main'>
            <section className='signup_section'>
                <h2 className='signup__title'>회원가입</h2>
                <SignupMessages/>
                <SignupMain/>
            </section>
        </main>
    );
}

export default Join;