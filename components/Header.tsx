'use client'
import Link from "next/link";
import config from "@config/config.json";
import menu from "@config/menu.json";
import { useEffect, useState } from "react";

// static
const activeClass = "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white";
const inActiveClass = "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
export default function Header() {
    const { title } = config.site;
    const { main } = menu
    const [theme, setTheme] = useState('')
    const [transClass, setTranClass] = useState('')

    const [activeNav, setActiveNav] = useState('');

    useEffect(() => {
        setActiveNav(main[0].id)
        if (localStorage.getItem('color-theme')) {
            setTheme(localStorage.getItem('color-theme') as string)
        } else {
            if ((!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setTheme('dark')
            } else {

                setTheme('light')
            }
        }
    }, [])
    const switchTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('color-theme', theme === 'dark' ? 'light' : 'dark');
    }
    useEffect(() => {
        setTranClass(theme === 'dark' ? 'translate-x-10' : '')
        document.documentElement.className = `${theme} transition-colors ease-in delay-100 duration-100`
    }, [theme])
    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link href={"/"} className="flex items-center">
                        <img
                            src={"/images/logo.svg"}
                            className="h-6 mr-3 sm:h-9"
                            alt={title}
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            {title}
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div className="bg-gray-300 w-20 mx-auto mt-1 cursor-pointer rounded-3xl dark:bg-purple-700 lg:mt-0">
                            <div onClick={() => switchTheme()} className={`bg-white w-10 h-10  scale-75 rounded-3xl duration-300 transition-transform dark:bg-gray-900 ${transClass}`}
                            >
                                {theme == 'dark' ?
                                    <svg className="scale-75 w-10 h-10 transition-transform rotate-0 delay-100 duration-700 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                    : <svg className="scale-75 transition-transform -rotate-90 delay-100 duration-700 w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {main.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => setActiveNav(item.id)}>
                                        <Link href={item.url} className={`block py-2 pl-3 pr-4 ${activeNav === item.id ? activeClass : inActiveClass}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
};