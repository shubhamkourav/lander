import Link from 'next/link';
import React from 'react'

type Features = {
    text1: string,
    text2?: string,
}
type TPricingCard = {
    title: string;
    description: string;
    amount: string;
    unit: string;
    features: Features[];
}

const GreenCheck = <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
export default function PricingCard({
    title,
    description,
    amount,
    unit,
    features
}: TPricingCard) {
  return (
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
          <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>{description}</p>
          <div className="flex items-baseline justify-center my-8">
              <span className='mr-2 text-5xl font-extrabold'>{amount}</span>
              <span className='text-gray-500 dark:text-gray-400'>{unit}</span>
          </div>
          <ul className="mb-8 space-y-4 text-left">
              {features.map((feature: Features, i) => {
                  return (
                      <li key={i} className="flex items-center space-x-3">
                          {GreenCheck}
                          <span>{feature.text1} <span className="font-semibold">{feature.text2}</span></span>
                      </li>
                  )
              })}
              <li className="flex items-center space-x-3">
                  {GreenCheck}
                  <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                  {GreenCheck}
                  <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                  {GreenCheck}
                  <span>Individual configuration</span>
            </li>
          </ul>
          <Link href="#" className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'>Get started</Link>
    </div>
  )
}
