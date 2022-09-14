import LectureCard from 'components/Home/lectureList/LectureCard';
import React from 'react';
import {coursesLecture} from 'data/LectureCourses/coursesLecture'

function CoursesContainer({data}) {
    return (
        <div className='courses_container'>
            <div className='columns is-multiline is-mobile courses_card_list_body'>
            {
                coursesLecture.map((_,i) => {
                    return(
                        <LectureCard
                        href={coursesLecture[i].href}
                        img_src={coursesLecture[i].src}
                        title={coursesLecture[i].title}
                        instructor={coursesLecture[i].instructor}
                        isStar={coursesLecture[i].isStar}
                        rating={coursesLecture[i].rating}
                        review={coursesLecture[i].review}
                        isDel={coursesLecture[i].isDel}
                        del={coursesLecture[i].del}
                        price={coursesLecture[i].price}
                        tags={coursesLecture[i].tags}
                        isRibbon={coursesLecture[i].isRibbon}
                        ribbon={coursesLecture[i].ribbon}
                        small={coursesLecture[i].small}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default CoursesContainer;