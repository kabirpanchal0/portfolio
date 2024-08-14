'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import css from './menubar.module.scss';
import { FaBars } from "react-icons/fa6";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import Image from 'next/image';

export default function MenuBar({ data }: any) {

    const router = useRouter();
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState<any>();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLogoOpen, setIsLogoOpen] = useState<boolean>(false);
    const [isSocialVisible, setIsSocialVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <section className={`${css.menu}`}>
            <div className={css.inner_menu_div}>
                <div className={css.logoMain} onMouseEnter={() => setIsLogoOpen(true)} onMouseLeave={() => { setIsLogoOpen(false), setIsSocialVisible(false) }}>
                    <div className={css.logoDiv} >
                     <Image src={'/newLogo.png'} alt='logoimage' height={54} width={54} className={css.logoImage} />
                    </div>
                    {isLogoOpen ?
                        <button className={css.arrowBtn} onClick={() => setIsSocialVisible(true)}>
                            <RiArrowDownWideFill className={css.downArrow} />
                        </button>
                        : null}
                    {isSocialVisible ?
                        <div className={css.socialIconsDiv}>
                            <Link href={'https://github.com/kabirpanchal0'} className={css.link}><FaGithub /></Link>
                            <Link href={'https://web.whatsapp.com/'} className={css.link}><FaWhatsapp /></Link>
                            <Link href={'https://www.instagram.com/'} className={css.link}><FaInstagram /></Link>
                            <Link href={''} className={css.link}><FaLinkedin /></Link>
                            <Link href={'tel:9924681842'} className={css.link}><IoIosCall /></Link>
                        </div>
                        :
                        null}
                </div>
                {!isMobile ?
                    <div className={css.close_menu} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                        {isVisible ?
                            <>
                                {data?.menus?.map((menuData: any) => {
                                    return (
                                        <Link key={menuData.id} href={menuData?.slug} className={css.menu_link} >{menuData?.name}</Link>
                                    )
                                })}
                            </>
                            :
                            <FaBars />
                        }
                    </div>
                    : null}
            </div>
        </section>
    )
}
