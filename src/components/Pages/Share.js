// import React from 'react'

// export const Share = () => {
//     let image = "https://source.unsplash.com/1400x500/?nature";
//     const shareOnWhatsApp = () => {
//         window.open(`https://wa.me/?text=${encodeURIComponent(image)}`);
//     };

//     return (
//         <div>
//             <div className='text-center bold text-4xl'>Share Image on..</div>

//             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//                 <div className="max-w-screen-lg sm:mx-auto">
//                     <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
//                         <div className="mb-4 lg:mb-0">
//                             <button
//                                 onClick={shareOnWhatsApp}
//                                 class="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-red-600 transition duration-200 rounded shadow-md bg-white hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
//                                 aria-label="Sign up"
//                                 title="Sign up"
//                             >
//                                 Whatsapp
//                             </button>
//                             {/* <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
//                                 Whatsapp
//                             </h5> */}
//                         </div>
//                         {/* <div className="flex justify-start w-56 lg:justify-end">
//                             <a
//                                 href="/"
//                                 aria-label=""
//                                 className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                             >
//                                 Learn more
//                                 <svg
//                                     className="inline-block w-3 ml-2"
//                                     fill="currentColor"
//                                     viewBox="0 0 12 12"
//                                 >
//                                     <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                                 </svg>
//                             </a>
//                         </div> */}
//                     </div>
//                     <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
//                         <div className="mb-4 lg:mb-0">
//                             <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
//                                 Facebook
//                             </h5>
//                             {/* <div className="relative pr-8">
//                                 <p className="text-base text-gray-700 md:text-lg">
//                                     Lookout flogging bilge rat main sheet bilge water nipper fluke
//                                     to go on account heave down clap of thunder. Reef sails six
//                                     pounders.
//                                 </p>
//                             </div> */}
//                         </div>
//                         {/* <div className="flex justify-start w-56 lg:justify-end">
//                             <a
//                                 href="/"
//                                 aria-label=""
//                                 className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                             >
//                                 Learn more
//                                 <svg
//                                     className="inline-block w-3 ml-2"
//                                     fill="currentColor"
//                                     viewBox="0 0 12 12"
//                                 >
//                                     <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                                 </svg>
//                             </a>
//                         </div> */}
//                     </div>
//                     <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
//                         <div className="mb-4 lg:mb-0">
//                             <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
//                                 Twitter
//                             </h5>
//                             {/* <div className="relative pr-8">
//                                 <p className="text-base text-gray-700 md:text-lg">
//                                     If one examines precultural libertarianism, one is faced with a
//                                     choice: either accept rationalism.
//                                 </p>
//                             </div> */}
//                         </div>
//                         {/* <div className="flex justify-start w-56 lg:justify-end">
//                             <a
//                                 href="/"
//                                 aria-label=""
//                                 className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                             >
//                                 Learn more
//                                 <svg
//                                     className="inline-block w-3 ml-2"
//                                     fill="currentColor"
//                                     viewBox="0 0 12 12"
//                                 >
//                                     <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                                 </svg>
//                             </a>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from "react";
import { WhatsappShareButton } from "react-share";
// import { Share } from './Share';

export const Share = () => {
    return (
        <WhatsappShareButton
            url="https://www.example.com/image.jpg"
            title="This is an image"
            image="https://www.example.com/image.jpg"
        />
    )
};

export default Share;