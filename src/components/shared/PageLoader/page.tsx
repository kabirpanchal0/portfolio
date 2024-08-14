import React from 'react';
import css from './pageloader.module.scss'

export default function PageLoader() {
    return (
        <>
            <div className={css.left_curtain_animation}></div>
            <div className={css.right_curtain_animation}></div>
        </>
    )
}
