'use client'
import React, { useState } from 'react';
import css from './aboutSection.module.scss';
import homePageData from '@/utils/homeData'
import Divider from '@/components/shared/Divider/page';
import Link from 'next/link';
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

interface AboutDataProps {
    AboutMeDetails: {
        title: string;
        description: string;
        details: {
            heading: string;
            detailsComponent: any[];
        }
        skills: {
            heading: string,
            categoryComponent: any[];
        }
    }

}

const skills = [
    { icon: <FaReact />, style: `react`, name: 'React JS' },
    { icon: <SiNextdotjs />, style: `next`, name: 'Next JS' },
    { icon: <FaNodeJs />, style: `node`, name: 'Node JS' },
    { icon: <IoLogoJavascript />, style: `javascript`, name: 'Javascript' },
    { icon: <IoLogoHtml5 />, style: `html`, name: 'HTML' },
    { icon: <FaCss3Alt />, style: `css`, name: 'CSS' },
    { icon: <FaBootstrap />, style: `bootstrap`, name: 'Bootstrap' },
    { icon: <SiTailwindcss />, style: `tailwind`, name: 'Tailwind CSS' },
    { icon: <SiStrapi />, style: `strapi`, name: 'Strapi CMS' },
    { icon: <SiNestjs />, style: `nest`, name: 'Nest JS' },
    { icon: <GrMysql />, style: `mysql`, name: 'MySql' },
]


export default function AboutSection() {
    const [showName, setShowName] = useState<any>(null);
    const aboutData: AboutDataProps = homePageData?.data?.attributes;
    const toggleShowHide = (e: any, id: any) => {
        setShowName((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    console.log('', showName)
    return (
        <section className='container'>
            <div className={css.aboutSection}>
                <div className={css.skills_div}>

                    <h1>Skills</h1>
                    <div className={css.skills_icons}>
                        <div className={css.left_border}> </div>
                        {skills?.length > 0 &&
                            <>
                                {skills?.map((items: any, index: number) => {
                                    return (
                                        <div key={items?.id} className={css.skils_and_text}>
                                            <Link href={''} className={`${css[items.style]}`} onMouseEnter={() => setShowName(index)} onMouseLeave={() => setShowName(null)}> {items.icon}</Link>
                                            {showName === index && <p>{items?.name}</p>}
                                        </div>
                                    )
                                })}
                            </>}
                        <div className={css.right_border}> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


{/* <div className={css.customDetails}>
                    <div>
                        <h1 dangerouslySetInnerHTML={{ __html: aboutData?.AboutMeDetails?.title }} />
                        <p>{aboutData?.AboutMeDetails?.description}</p>
                    </div>
                </div> */}
{/* <div className={css.details}>
                    <h4>{aboutData?.AboutMeDetails?.details?.heading}</h4>
                    {aboutData?.AboutMeDetails?.details?.detailsComponent?.length > 0 &&
                        <ul>
                            {aboutData?.AboutMeDetails?.details?.detailsComponent?.map((detailsData: any, index: number) => {
                                return (
                                    <li key={index}>{detailsData?.name}<strong> {detailsData?.value}</strong></li>
                                )
                            })}
                        </ul>
                    }
                </div>
                <div className={css.skills}>
                    <h4>{aboutData?.AboutMeDetails?.skills?.heading}</h4>
                    {aboutData?.AboutMeDetails?.skills?.categoryComponent.length > 0 &&
                        <div className={css.categoryDiv}>
                            {aboutData?.AboutMeDetails?.skills?.categoryComponent?.map((skillsData: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <span className={css.categoryHeading}>{skillsData?.categoryHeading}</span>
                                        <ul>
                                            {skillsData?.skills?.map((items: any, index: number) => {
                                                return (
                                                    <li key={index}><strong>{items?.name}</strong></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div> */}