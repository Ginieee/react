import React from 'react';

function AccordionContent({id, value, text}) {
    return (
        <div className='accordion-content'>
            <div className='atom_checkbox accordion_checkbox'>
                <input className='visually_hidden checkbox' type="checkbox" datatype='terms' id={id} value={value}></input>
                <label className='left' htmlFor={id}>
                    {text}
                </label> 
            </div>
        </div>
    );
}

export default AccordionContent;