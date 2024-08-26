import { Accordion, } from '@components/Accordion/Accordion'
import { AccordionContent } from '@components/Accordion/AccordionContent'
import { AccordionPanel } from '@components/Accordion/AccordionPanel'
import { AccordionTitle } from '@components/Accordion/AccordionTitle'
import Link from 'next/link'
import React from 'react'

export default function FAQ() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                <h2 className="mb-6 text-3xl font-extrabold tracking-light text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                <div className="max-w-screen-md mx-auto">
                    <Accordion>
                        <AccordionPanel>
                            <AccordionTitle showIcon={true} iconClass='w-6 h-6 shrink-0' className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'>Can I use Lander in open-source projects?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Lander is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle showIcon={true} iconClass='w-6 h-6 shrink-0' className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'>Is there a Figma file available?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Lander is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Lander.</p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle showIcon={true} iconClass='w-6 h-6 shrink-0' className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'>What are the differences between Lander and Tailwind UI</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Lander are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Lander relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Lander, Lander Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><Link href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Lander Pro</Link></li>
                                    <li><Link href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</Link></li>
                                </ul>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle
                                showIcon={true}
                                iconClass='w-6 h-6 shrink-0'
                                className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                            >
                                What about browser support?
                            </AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Lander are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Lander relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Lander, Lander Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><Link href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Lander Pro</Link></li>
                                    <li><Link href="#" className="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</Link></li>
                                </ul>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
