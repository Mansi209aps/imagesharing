// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Home } from './components/Home';
// import { Share } from './components/Pages/Share';




// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/share' element={<Share />} />

//         </Routes>
//       </BrowserRouter>


//     </>
//   );
// }

// export default App;
// import React, { Component } from 'react';

// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   WhatsappIcon,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
// } from 'react-share';

// export default class App extends Component {
//   render() {
//     // const shareUrl = 'https://www.pakkamarwadi.tk/';
//     return (
//       <div className='flex flex-col justify-center'>
//         <div className='text-center bold text-4xl'>Share Image</div>
//         <img
//           className="object-cover w-1/2 h-42 md:h-64 xl:h-80"
//           src="https://source.unsplash.com/1400x500/?nature"
//           alt=""
//         />
//         <div
//           style={{
//             background: '#0000',
//             height: '100vh',
//             width: '100%',
//           }}
//         >
//           <div className="px-2 py-2">
//             <a
//               href="/share"
//               class="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
//               aria-label="Share"
//               title="Share"
//             >
//               Share
//             </a>
//           </div>

//           <FacebookShareButton
//             url="https:source.unsplash.com/1400x500/?nature"
//             quote={'Title or jo bhi aapko likhna ho'}
//             hashtag={'#portfolio...'}
//           >
//             <FacebookIcon size={40} round={true} />
//           </FacebookShareButton>

//           <WhatsappShareButton
//             url="https:source.unsplash.com/1400x500/?nature"
//             quote={'Title or jo bhi aapko likhna ho'}
//             hashtag={'#portfolio...'}
//           >
//             <WhatsappIcon size={40} round={true} />
//           </WhatsappShareButton>

//           <TwitterShareButton
//             url="https:source.unsplash.com/1400x500/?nature"
//             quote={'Title or jo bhi aapko likhna ho'}
//             hashtag={'#portfolio...'}
//           >
//             <TwitterIcon size={40} round={true} />
//           </TwitterShareButton>
//         </div>
//       </div>
//     );
//   }
// }

// import React, { Component, useState } from 'react';
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   WhatsappIcon,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
// } from 'react-share';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showDialog: false
//     };
//   }

//   toggleDialog = () => {
//     this.setState(prevState => ({
//       showDialog: !prevState.showDialog
//     }));
//   };

//   render() {
//     const { showDialog } = this.state;

//     return (
//       <div className='flex flex-col justify-center'>
//         <div className='text-center bold text-4xl'>Share Image</div>
//         <img
//           className="object-cover w-1/2 h-42 md:h-64 xl:h-80"
//           src="https://source.unsplash.com/1400x500/?nature"
//           alt=""
//         />
//         <div
//           style={{
//             background: '#0000',
//             height: '100vh',
//             width: '100%',
//           }}
//         >
//           <div className="px-2 py-2">
//             <button
//               onClick={this.toggleDialog}
//               className="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
//               aria-label="Share"
//               title="Share"
//             >
//               Share
//             </button>
//           </div>

//           {showDialog && (
//             <div className="dialog">
//               <FacebookShareButton
//                 url="https:source.unsplash.com/1400x500/?nature"
//                 quote={'Title or jo bhi aapko likhna ho'}
//                 hashtag={'#portfolio...'}
//               >
//                 <FacebookIcon size={40} round={true} />
//               </FacebookShareButton>

//               <WhatsappShareButton
//                 url="https:source.unsplash.com/1400x500/?nature"
//                 quote={'Title or jo bhi aapko likhna ho'}
//                 hashtag={'#portfolio...'}
//               >
//                 <WhatsappIcon size={40} round={true} />
//               </WhatsappShareButton>

//               <TwitterShareButton
//                 url="https:source.unsplash.com/1400x500/?nature"
//                 quote={'Title or jo bhi aapko likhna ho'}
//                 hashtag={'#portfolio...'}
//               >
//                 <TwitterIcon size={40} round={true} />
//               </TwitterShareButton>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import Modal from 'react-modal';
import './Modal.css';

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className='flex flex-col justify-center items-center'>
        <div className='text-center font-bold text-4xl p-2 pb-4'>Share Image</div>
        <img
          className="text-center object-cover w-1/2 pb-4 h-42 md:h-64 xl:h-80"
          src="https://source.unsplash.com/1400x500/?nature"
          alt=""
        />
        <div
          style={{
            background: '#0000',
            height: '100vh',
            width: '100%',
          }}
        >
          <div className="px-2 py-2 text-center">
            <button
              onClick={this.openModal}
              className="inline-flex items-center justify-center h-12 px-5 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 hover:text-white hover:border-2 border-white focus:shadow-outline focus:outline-none"
              aria-label="Share"
              title="Share"
            >
              Share
            </button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Share Modal"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="modal-content">
              <h1 className='text-center pb-4'>Share Image</h1>
              <div className="share-icons">
                <FacebookShareButton
                  url="https:source.unsplash.com/1400x500/?nature"
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton
                  url="https:source.unsplash.com/1400x500/?nature"
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <TwitterShareButton
                  url="https:source.unsplash.com/1400x500/?nature"
                  quote={'Title or jo bhi aapko likhna ho'}
                  hashtag={'#portfolio...'}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>
            </div>
            <button onClick={this.closeModal} className="close-button">
              Close
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}
