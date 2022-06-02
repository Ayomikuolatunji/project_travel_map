import React from 'react'
import {AiFillYoutube,AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"
import logo from "../../assets/images/destination.png"


const Footer = () => {
  return (
   
<footer className="p-4 bg-gray-300 sm:p-6 dark:bg-gray-800">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
               <span className="flex items-center">
                  <img src={logo} className="mr-3 h-8" alt="FlowBite Logo"/>
                    <span className="self-center text-2xl font-semibold   whitespace-nowrap dark:text-white">Travel Advisor</span>
               </span>
             </div>
             <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                        <a href="https://flowbite.com" className="hover:underline">Easy location</a>
                        </li>
                        <li>
                        <a href="https://tailwindcss.com/" className="hover:underline">Find Places</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Linkedin</a>
                        </li>
                        <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                        <span className="hover:underline">Privacy Policy</span>
                        </li>
                        <li>
                        <span className="hover:underline">Terms &amp; Conditions</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
             <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <div className="flex items-center sm:justify-between justify-center flex-col-reverse sm:flex-row">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com" className="hover:underline">Ayoscript</a>. All Rights Reserved.
                </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <div className="social-icons flex my-5 mr-4">
                    <AiFillYoutube className='text-4xl ml-3'/>
                    <AiFillFacebook className="text-4xl ml-3"/>
                    <AiFillLinkedin className='text-4xl ml-3'/>
                    <AiFillInstagram className='text-4xl ml-3'/>
                    <AiFillTwitterSquare className='text-4xl ml-3'/>
                </div>
            </div>
        </div>
</footer>
  )
}

export default Footer  