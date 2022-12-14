import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faComment, faLightbulb, faBullhorn, faFeatherPointed, faLeaf} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';

function ListEl(props) {
    return (
        <div className='el_list' style={{bottom:'0px'}}>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-star' icon={faStar} />;
                    </span>
                </span>
                <div className='text is-3'>수강평</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-comment' icon={faComment} />;
                    </span>
                </span>
                <div className='text is-3'>질문 게시판</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <svg width='32' height='24' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                            <path fill='#212529' fillRule='evenodd' d='M0 2.5c0-.276.224-.5.5-.5h4.998c1.044 0 1.964.533 2.501 1.343C8.536 2.533 9.456 2 10.5 2h5c.276 0 .5.224.5.5v10.042c0 .133-.053.26-.148.354-.094.094-.222.147-.355.146l-5.122-.035c-.535-.004-1.049.207-1.427.586l-.594.594c-.196.195-.512.195-.708 0l-.6-.601C6.67 13.21 6.161 13 5.63 13H.5c-.276 0-.5-.224-.5-.5v-10zm7.498 2.498C7.497 3.894 6.602 3 5.498 3H1v9h4.631c.682 0 1.34.232 1.869.653l-.002-7.655zM8.5 12.655V5c0-1.105.895-2 2-2H15v9.038l-4.618-.03c-.686-.006-1.35.225-1.882.647z' clipRule='evenodd'></path>
                        </svg>
                    </span>
                </span>
                <div className='text is-3'>스터디</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-lightbulb' icon={faLightbulb} />;
                    </span>
                </span>
                <div className='text is-3'>멘토링</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-star' icon={faStar} />;
                    </span>
                </span>
                <div className='text is-3'>멘토링 후기</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-bullhorn' icon={faBullhorn} />
                    </span>
                </span>
                <div className='text is-3'>공지사항</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 20 20">
                            <path fillRule='evenodd' clipRule='evenodd' d='M10 16.2501C13.086 16.2501 15.0001 14.1542 15.0001 11.6667C15.0001 10.0503 14.4212 7.30689 13.3826 4.97474C12.8661 3.81512 12.27 2.83604 11.6404 2.16666C11.0063 1.49251 10.4556 1.25001 10 1.25001C9.54443 1.25001 8.99378 1.49251 8.35969 2.16666C7.73008 2.83604 7.13398 3.81512 6.61752 4.97474C5.57883 7.30689 5.00001 10.0503 5.00001 11.6667C5.00001 14.1542 6.91404 16.2501 10 16.2501ZM10 17.5001C13.7317 17.5001 16.2501 14.8884 16.2501 11.6667C16.2501 8.02088 13.7317 0 10 0C6.26836 0 3.75 8.02088 3.75 11.6667C3.75 14.8884 6.26836 17.5001 10 17.5001Z' fill='#1B1C1D'></path>
                            <path d='M14.8223 15.4824C15.3525 15.9619 16.0554 16.2501 16.8754 16.2501C18.7413 16.2501 20.0004 14.7577 20.0004 12.9168C20.0004 10.8334 18.7413 6.25006 16.8754 6.25006C16.3646 6.25006 15.8992 6.59366 15.4927 7.13548C15.6253 7.59249 15.7416 8.04691 15.8407 8.49022C16.0125 8.14297 16.1922 7.8528 16.3721 7.63424C16.6715 7.27044 16.845 7.25007 16.8754 7.25007C16.9058 7.25007 17.0793 7.27044 17.3787 7.63424C17.6653 7.98243 17.9514 8.51235 18.2059 9.16527C18.7166 10.4757 19.0004 12.019 19.0004 12.9168C19.0004 14.2979 18.1008 15.2501 16.8754 15.2501C16.2991 15.2501 15.7948 15.0395 15.4223 14.6726C15.2475 14.9596 15.0469 15.2304 14.8223 15.4824Z' fill='#1B1C1D'></path>
                            <path d='M4.5078 7.13548C4.10128 6.59366 3.63589 6.25006 3.12502 6.25006C1.25918 6.25006 0 10.8334 0 12.9168C0 14.7577 1.25918 16.2501 3.12502 16.2501C3.94506 16.2501 4.64791 15.9619 5.17818 15.4824C4.95359 15.2304 4.75297 14.9596 4.57816 14.6726C4.20566 15.0395 3.70138 15.2501 3.12502 15.2501C1.8996 15.2501 1.00001 14.2979 1.00001 12.9168C1.00001 12.019 1.28389 10.4757 1.79457 9.16527C2.04902 8.51235 2.33515 7.98243 2.62172 7.63424C2.92112 7.27044 3.09462 7.25007 3.12502 7.25007C3.15542 7.25007 3.32892 7.27044 3.62833 7.63424C3.80821 7.8528 3.98792 8.14297 4.15972 8.49022C4.25887 8.04691 4.37519 7.59249 4.5078 7.13548Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M0.625 19.3751C0.625 19.0299 0.904824 18.7501 1.25 18.7501H18.7501C19.0953 18.7501 19.3751 19.0299 19.3751 19.3751C19.3751 19.7203 19.0953 20.0001 18.7501 20.0001H1.25C0.904824 20.0001 0.625 19.7203 0.625 19.3751Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M10 7C10.2761 7 10.5 7.22386 10.5 7.5L10.5 18.7501C10.5 19.0262 10.2761 19.2501 10 19.2501C9.72386 19.2501 9.5 19.0262 9.5 18.7501L9.5 7.5C9.5 7.22386 9.72386 7 10 7Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M3.125 15.7501C3.40115 15.7501 3.62501 15.9739 3.62501 16.2501L3.62501 18.7501C3.62501 19.0262 3.40115 19.2501 3.125 19.2501C2.84886 19.2501 2.625 19.0262 2.625 18.7501L2.625 16.2501C2.625 15.9739 2.84886 15.7501 3.125 15.7501Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M16.875 15.7501C17.1511 15.7501 17.375 15.9739 17.375 16.2501L17.375 18.7501C17.375 19.0262 17.1511 19.2501 16.875 19.2501C16.5989 19.2501 16.375 19.0262 16.375 18.7501L16.375 16.2501C16.375 15.9739 16.5989 15.7501 16.875 15.7501Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M7.14645 11.5215C7.34171 11.3262 7.6583 11.3262 7.85356 11.5215L10 13.668L12.1465 11.5215C12.3417 11.3262 12.6583 11.3262 12.8536 11.5215C13.0489 11.7168 13.0489 12.0334 12.8536 12.2286L10 15.0822L7.14645 12.2286C6.95118 12.0334 6.95118 11.7168 7.14645 11.5215Z' fill='#1B1C1D'></path>
                            <path fillRule='evenodd' clipRule='evenodd' d='M7.14645 8.39645C7.34171 8.20118 7.6583 8.20118 7.85356 8.39645L10 10.5429L12.1465 8.39645C12.3417 8.20118 12.6583 8.20118 12.8536 8.39645C13.0489 8.59171 13.0489 8.9083 12.8536 9.10356L10 11.9571L7.14645 9.10356C6.95118 8.9083 6.95118 8.59171 7.14645 8.39645Z' fill='#1B1C1D'></path>
                        </svg>
                    </span>
                </span>
                <div className='text is-3'>인프랩 채용</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-paper-plane' icon={faPaperPlane} />
                    </span>
                </span>
                <div className='text is-3'>인프런 스토리</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-feather-pointed' icon={faFeatherPointed} />
                    </span>
                </span>
                <div className='text is-3'>블로그</div>
            </div>
            <div className='el'>
                <a href='/'> </a>
                <span className='icon_cover'>
                    <span className='icon circle'>
                        <FontAwesomeIcon className='icon-leaf' icon={faLeaf} />
                    </span>
                </span>
                <div className='text is-3'>인프런 소개</div>
            </div>
        </div>
    );
}

export default ListEl;