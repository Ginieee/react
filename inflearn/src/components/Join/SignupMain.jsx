import React from 'react';
import FormInputBlocks from './FormInputBlocks';
import SignupSocial from './SignupSocial';

function SignupMain(props) {
    return (
        <div className='signup__main'>
            <FormInputBlocks/>
            <SignupSocial/>
        </div>
    );
}

export default SignupMain;