import React from 'react'

export default function HomeComponent() {
  return (
    <div className='container'>
        <div className="flex justify-around">
            <div className="flex">
              <div className="h-10 w-32 bg-blue-100 rounded-sm flex justify-center items-center">
                <p className="text-blue-600 font-bold">Sale 70%</p>
              </div>
            </div>
        </div>
    </div>
  )
}
