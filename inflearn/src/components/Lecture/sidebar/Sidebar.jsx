import React from 'react';
import Accordion from './Accordion';
import {sidebarMenu} from 'data/LectureCourses/sidebarMenu'

function Sidebar(props) {
    return (
        <aside className='column is-2 sidebar_left'>
            <nav className='accordions is-hidden-mobile'>
                <div className='accordion'>
                    <a className='e-change-qs accordion-header' href='/'>전체 강의</a>
                </div>
                {
                    sidebarMenu.map((item) => {
                        return(
                            <Accordion
                            id={item.id}
                            title={item.title}
                            toggle={item.toggle}
                            />
                        );
                    })
                }
            </nav>
        </aside>
    );
}

export default Sidebar;