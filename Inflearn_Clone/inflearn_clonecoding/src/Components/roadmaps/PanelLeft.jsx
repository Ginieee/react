import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { panelLeftData } from 'Data/roadmaps/panelLeftData';
import React from 'react';
import { Link } from 'react-router-dom';

function PanelLeft(props) {
    return (
        <div className='panel_left'>
            <div className='sticky panel_left_sticky'>
                <div className='select sort_select'>
                    <select datatype='order'>
                        <option value='seq'>추천순</option>
                        <option value='enr'>학생수순</option>
                        <option value='share'>공유순</option>
                        <option value='id_desc'>최신순</option>
                        <option value='id_asc'>오래된순</option>
                    </select>
                </div>
                <nav className='accordions checkbox_accordions'>
                    <div className='accordion is-active first_accordion'>
                        <div className='accordion-header toggle'>
                            분야별
                        </div>
                        <div className='accordion-body level_accordion_body'>
                            {
                                panelLeftData.map((item,i)=>{
                                    return (
                                        <div
                                        key={'paneLeftData'+i} 
                                        className='accordion-content'>
                                            <div className='atom_checkbox accordion_checkbox'>
                                                <input className='visually_hidden checkbox' type='checkbox' id={`${item.id}`} value={`${item.id}`}/>
                                                <label htmlFor={item.id} className='left'>
                                                    {item.title}
                                                </label>
                                            </div>
                                        </div>
                                    );
                                        
                                })
                            }
                        </div>
                    </div>
                    <div className='accordion is-active second_accordion'>
                        <div className='accordion-header toggle'>
                            시작 레벨
                        </div>
                        <div className='accordion-body level_accordion_body'>
                            <div className='accordion-content'>
                                <div className='atom_checkbox accordion_checkbox'>
                                    <input className='visually_hidden checkbox' type='checkbox' id='1' value='1'/>
                                    <label for='1' className='left'>
                                        입문
                                    </label>
                                </div>
                            </div>
                            <div className='accordion-content'>
                                <div className='atom_checkbox accordion_checkbox'>
                                    <input className='visually_hidden checkbox' type='checkbox' id='2' value='3'/>
                                    <label for='2' className='left'>
                                        초급
                                    </label>
                                </div>
                            </div>
                            <div className='accordion-content'>
                                <div className='atom_checkbox accordion_checkbox'>
                                    <input className='visually_hidden checkbox' type='checkbox' id='3' value='3'/>
                                    <label for='3' className='left'>
                                        중급
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <Link to='/roadmaps' className='filter_reset'>
                    <i className='far fa-sync-alt'>
                        <FontAwesomeIcon icon={faRotate}/>
                    </i>
                    &nbsp;&nbsp; 필터초기화
                </Link>
            </div>
        </div>
    );
}

export default PanelLeft;