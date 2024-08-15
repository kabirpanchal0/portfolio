import React from 'react';
import css from './projectsContainer.module.scss'

export default function ProjectsContainer() {
    return (
        <section className={`container ${css.main}`}>
            <div className={css.heading_div}>
                <h1>projects</h1>
            </div>
            <div className={css.project_div}>
                <div className={css.project_cards}></div>
                <div className={css.project_cards}></div>
                <div className={css.project_cards}></div>
                <div className={css.project_cards}></div>
                <div className={css.project_cards}></div>
               
            </div>
        </section>
    )
}
