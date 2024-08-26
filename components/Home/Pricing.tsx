import PricingCard from '@components/Card/PricingCard'
import React from 'react'

export default function Pricing() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-light text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">At Lander, we target markets where the combination of technology, innovation, and investment can generate long-term value and foster economic growth</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <PricingCard
                        title={'Starter'}
                        description='Best option for personal use & for your next project.'
                        amount='$29'
                        unit="/month"
                        features={
                            [{
                                text1: 'Individual configuration',
                            }, {
                                text1: 'No setup, or hidden fees'
                            }, {
                                text1: 'Team size:',
                                text2: '1 developer'
                            }, {
                                text1: 'Premium support:',
                                text2: '6 months'
                            }, {
                                text1: 'Free updates:',
                                text2: '6 months'
                            }]}
                    />
                    <PricingCard
                        title={'Company'}
                        description='Relevant for multiple users, extended & premium support.'
                        amount='$99'
                        unit="/month"
                        features={
                            [{
                                text1: 'Individual configuration',
                            }, {
                                text1: 'No setup, or hidden fees'
                            }, {
                                text1: 'Team size:',
                                text2: '10 developer'
                            }, {
                                text1: 'Premium support:',
                                text2: '24 months'
                            }, {
                                text1: 'Free updates:',
                                text2: '24 months'
                            }]}
                    />
                    <PricingCard
                        title={'Enterprise'}
                        description='Best for large scale uses and extended redistribution rights.'
                        amount='$499'
                        unit="/month"
                        features={
                            [{
                                text1: 'Individual configuration',
                            }, {
                                text1: 'No setup, or hidden fees'
                            }, {
                                text1: 'Team size:',
                                text2: '100+ developer'
                            }, {
                                text1: 'Premium support:',
                                text2: '36 months'
                            }, {
                                text1: 'Free updates:',
                                text2: '36 months'
                            }]}
                    />
                </div>
            </div>

        </section>
    )
}
