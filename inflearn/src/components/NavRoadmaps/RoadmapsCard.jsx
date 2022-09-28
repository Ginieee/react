import React from 'react';

function RoadmapsCard({imgHref, src, contentHref, cardHref, levelText, tag1Href, tag2Href, title, author, countLectureMeta, countPeopleMeta}) {

    const level = () => {
        let class1 = "";
        let class2 = "";
        let class3 = "";

        if(levelText === '입문'){
            class1 = " level-icon__step--active";
        }
        else if (levelText === '초급'){
            class1 = " level-icon__step--active";
            class2 = " level-icon__step--active";
        }
        else if (levelText === '중급'){
            class1 = " level-icon__step--active";
            class2 = " level-icon__step--active";
            class3 = " level-icon__step--active";
        }

        return(
            <>
                <span className={'level-icon__step level-icon__step-1'+(class1)}></span>
                <span className={'level-icon__step level-icon__step-2'+(class2)}></span>
                <span className={'level-icon__step level-icon__step-3'+(class3)}></span>
            </>
        )
    }

    return (
        <div className='column is-4-desktop is-6-touch'>
            <section className='card image_card roadmap_card'>
                <a className='e_roadmap_card_click' href={imgHref}>
                    <div className='card-image'>
                        <figure className="image">
                            <img src={src} alt='로드맵 대표 이미지'/>
                        </figure>
                    </div>
                </a>
                <div className='card-content'>
                    <a className='e_roadmap_card_click' href={contentHref}> </a>
                    <div className='tags'>
                        <a className='e_roadmap_card_click' href={cardHref}> </a>
                        <a className='tag start-level' href='/'>
                            <div className='level-icon'>
                                {level()}
                            </div>
                            <p>{levelText}</p>
                        </a>
                        <a className='tag' href={tag1Href}>#C#</a>
                        <a className='tag' href={tag2Href}>#Unity</a>
                    </div>
                    <h2 className='title'>{title}</h2>
                    <div className='metas'>
                        <p className='author meta'>{author}</p>
                        <div className='gap'></div>
                        <p className='roadmap-count meta'>{countLectureMeta}</p>
                        <div className='gap mobile-line-breaker'></div>
                        <p className='enroll-count meta'>
                            <svg width='16' height='14' viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule='evenodd' clipRule='evenodd' d="M2.33341 4.33329C2.33341 2.30826 3.97501 0.666626 6.00003 0.666626C8.02505 0.666626 9.66665 2.30826 9.66665 4.33329C9.66665 5.59295 9.03145 6.70426 8.06389 7.36437C10.3069 8.18604 11.9226 10.3086 11.9973 12.8184C12.0055 13.0944 11.7884 13.3249 11.5124 13.3331C11.2363 13.3413 11.0059 13.1242 10.9977 12.8482C10.9176 10.1571 8.71062 7.99996 5.99997 7.99996C3.28932 7.99996 1.08232 10.1571 1.00222 12.8482C0.994009 13.1242 0.763591 13.3413 0.487571 13.3331C0.211551 13.3249 -0.00554796 13.0944 0.00266707 12.8184C0.0773658 10.3086 1.69309 8.18599 3.93612 7.36434C2.96859 6.70423 2.33341 5.59293 2.33341 4.33329ZM6.00003 1.66663C4.52731 1.66663 3.33341 2.86053 3.33341 4.33329C3.33341 5.80606 4.52731 6.99996 6.00003 6.99996C7.47275 6.99996 8.66665 5.80606 8.66665 4.33329C8.66665 2.86053 7.47275 1.66663 6.00003 1.66663Z" fill='#858A8D'></path>
                                <path d="M11.5267 4.33329C11.4282 4.33329 11.3317 4.3403 11.2375 4.35377C10.9642 4.39287 10.7109 4.20296 10.6718 3.9296C10.6327 3.65624 10.8226 3.40294 11.0959 3.36384C11.2369 3.34369 11.3807 3.33329 11.5267 3.33329C13.1946 3.33329 14.5466 4.6854 14.5466 6.35329C14.5466 7.33718 14.0761 8.21055 13.3491 8.76156C14.9034 9.4583 15.9866 11.0188 15.9866 12.8333C15.9866 13.1094 15.7628 13.3333 15.4866 13.3333C15.2105 13.3333 14.9866 13.1094 14.9866 12.8333C14.9866 11.2694 13.9487 9.94658 12.5229 9.51873L12.1666 9.41182V8.29452L12.4402 8.15555C13.0978 7.82138 13.5466 7.13932 13.5466 6.35329C13.5466 5.23767 12.6423 4.33329 11.5267 4.33329Z" fill='#858A8D'></path>
                            </svg>
                            {countPeopleMeta}
                        </p>
                    </div>
                    <div className='metas--mobile'>
                        <div>
                            <p className='author meta'>{author}</p>
                            <div className='gap'></div>
                            <p className='roadmap-count meta'>{countLectureMeta}</p>
                        </div>
                        <div>
                            <p className='enroll-count meta'>
                                <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule='evenodd' clipRule='evenodd' d='M2.33341 4.33329C2.33341 2.30826 3.97501 0.666626 6.00003 0.666626C8.02505 0.666626 9.66665 2.30826 9.66665 4.33329C9.66665 5.59295 9.03145 6.70426 8.06389 7.36437C10.3069 8.18604 11.9226 10.3086 11.9973 12.8184C12.0055 13.0944 11.7884 13.3249 11.5124 13.3331C11.2363 13.3413 11.0059 13.1242 10.9977 12.8482C10.9176 10.1571 8.71062 7.99996 5.99997 7.99996C3.28932 7.99996 1.08232 10.1571 1.00222 12.8482C0.994009 13.1242 0.763591 13.3413 0.487571 13.3331C0.211551 13.3249 -0.00554796 13.0944 0.00266707 12.8184C0.0773658 10.3086 1.69309 8.18599 3.93612 7.36434C2.96859 6.70423 2.33341 5.59293 2.33341 4.33329ZM6.00003 1.66663C4.52731 1.66663 3.33341 2.86053 3.33341 4.33329C3.33341 5.80606 4.52731 6.99996 6.00003 6.99996C7.47275 6.99996 8.66665 5.80606 8.66665 4.33329C8.66665 2.86053 7.47275 1.66663 6.00003 1.66663Z' fill='#858A8D'></path>
                                    <path d='M11.5267 4.33329C11.4282 4.33329 11.3317 4.3403 11.2375 4.35377C10.9642 4.39287 10.7109 4.20296 10.6718 3.9296C10.6327 3.65624 10.8226 3.40294 11.0959 3.36384C11.2369 3.34369 11.3807 3.33329 11.5267 3.33329C13.1946 3.33329 14.5466 4.6854 14.5466 6.35329C14.5466 7.33718 14.0761 8.21055 13.3491 8.76156C14.9034 9.4583 15.9866 11.0188 15.9866 12.8333C15.9866 13.1094 15.7628 13.3333 15.4866 13.3333C15.2105 13.3333 14.9866 13.1094 14.9866 12.8333C14.9866 11.2694 13.9487 9.94658 12.5229 9.51873L12.1666 9.41182V8.29452L12.4402 8.15555C13.0978 7.82138 13.5466 7.13932 13.5466 6.35329C13.5466 5.23767 12.6423 4.33329 11.5267 4.33329Z'></path>
                                </svg>
                                {countPeopleMeta}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RoadmapsCard;