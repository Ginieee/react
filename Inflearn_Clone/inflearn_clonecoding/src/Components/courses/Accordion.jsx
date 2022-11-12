import React from 'react';

function Accordion({id, title, toggle}) {
    return (
        <div id={id} className="accordion ">
            <div className='accordion-header toggle'>
                {title}
            </div>
            <div className='accordion-body'>
                {
                    toggle.map((item)=>{
                        return(
                            <a className='e-change-qs accordion-content' href={item.href}>{item.text}</a>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Accordion;