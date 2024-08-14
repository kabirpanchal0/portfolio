import React from 'react'
import css from './heroSection.module.scss'
import Link from 'next/link'
export default function HeroSection() {
    return (
        <section className='container'>
            <div className={css.herodiv}>
                {/* <video src="/car.mp4" autoPlay className={css.bgVideo}></video> */}
                <video autoPlay muted loop className={css.bgVideo} >
                    <source src="/human.mp4" type="video/mp4" />
                </video>
                <div className={css.details}>
                    <Link href={'/projects'} className={css.button_57} role="button"><span className={css.text}>Show More</span><span>proejcts</span></Link>
                </div>
            </div>
        </section>
    )
}
