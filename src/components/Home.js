import React from 'react'

export const Home = () => {
    return (
        <div className='item-center'>
            <div className='text-center bold text-4xl'>Share Image</div>
            <img
                className="object-cover w-1/2 h-42 md:h-64 xl:h-80"
                src="https://source.unsplash.com/1400x500/?nature"
                alt=""
            />
            <div className="px-2">
                <a
                    href="/share"
                    class="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
                    aria-label="Share"
                    title="Share"
                >
                    Share
                </a>
            </div>
        </div>
    )
}
