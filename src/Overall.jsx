import React from "react";
import { useState } from "react";
import pics from './pics/Landing page V1/desktop/Image-container.png'
import pics1 from './pics/Landing page V1/desktop/image.png'
import pics2 from './pics/Landing page V1/desktop/Logo.png'
import pics3 from './pics/Landing page V1/desktop/Work Together Image.png'
import pics4 from './pics/Landing page V1/desktop/color.png'
import pics5 from './pics/Landing page V1/desktop/cup.png'
import pics6 from './pics/Landing page V1/desktop/Element.png'
import pics7 from './pics/Landing page V1/desktop/sponsors.png'
import pics8 from './pics/Landing page V1/desktop/Apps.png'
import pics9 from './pics/Landing page V1/desktop/App-icon.png'




function Overall() {


    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownIndex) => {
        setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
    };
    return (

        // <div class="bg-gray-100 flex flex-col items-center justify-center min-h-screen w-full" >


            <body class=" bg-white flex flex-col items-center justify-center min-h-screen w-full">

        
               <div class="max-w-7xl mx-auto p-8 space-y-16">

                <div>
                    <header class=" bg-blue-800 text-white flex justify-between items-center p-4 w-full ">
                        <div class="flex items-center">
                            <img src={pics2} alt="Whitespace Logo" class="h-10 mr-2" />

                        </div>
                        <div >  
                    <nav className="flex space-x-8">
                    {/* Dropdown 1 */}  
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown(1)}
                                className="hover:text-gray-200 focus:outline-none"
                            >
                                Products
                            </button>
                            {openDropdown === 1 && (
                                <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10 ">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
                                </div>
                            )}
                        </div>
                        {/* Dropdown 2 */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown(2)}
                                className="hover:text-gray-200 focus:outline-none"
                            >
                                Solutios
                            </button>
                            {openDropdown === 2 && (
                                <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option A</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option B</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option C</a>
                                </div>
                            )}
                        </div>


                        {/* Dropdown 3 */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown(3)}
                                className="hover:text-gray-200 focus:outline-none"
                            >
                               Resources
                            </button>
                            {openDropdown === 3 && (
                                <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option X</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option Y</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option Z</a>
                                </div>
                            )}
                        </div>


                        {/* Dropdown 4 */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown(4)}
                                className="hover:text-gray-200 focus:outline-none"
                            >
                                Pricing
                            </button>
                            {openDropdown === 4 && (
                                <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option Alpha</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option Beta</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option Gamma</a>
                                </div>
                            )}
                        </div>

                    </nav>
                </div>
                <div className=''>
                    <a href="#" className=" bg-yellow-200 text-blue-600 px-4 py-2 rounded ">
                        Login
                    </a>
                </div>
               
                <button type='button' className=' bg-sky-400 rounded p-2'>Try Whitepace free &rarr;</button>


                    </header>


                    <main class="flex flex-col md:flex-row items-center p-8 bg-blue-800 text-white w-full">

                        <div class="md:w-1/2 mb-8 md:mr-8">
                            <h1 class="text-4xl font-bold mb-4">Get More Done with <span class="font-semibold">whitespace</span></h1>
                            <p class="mb-6">Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.</p>
                            <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Try Whitespace Free &rarr;</a>
                        </div>

                        <div class="md:w-1/2">
                            <img src={pics} alt="Project Management" className="w-50 h-60" />
                        </div>
                    </main>


                </div>

                                        <div class="max-w-7xl mx-auto p-8 space-y-16 ">
                        <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row md:items-center">
                            <div class="md:w-1/2">
                                <h2 class="text-4xl font-bold mb-4">Project Management</h2>
                                <p class="text-lg mb-6">Images, videos, PDFs, and audio files are supported. Create math expressions and
                                    diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Get Started
                                    &rarr;</a>
                            </div>
                            <div class="md:w-1/2 mt-6 md:mt-0">
                                <img src={pics1}
                                    alt="Project Management" class="rounded-lg" />

                            </div>

                        </div>

                        <div class=" bg-white shadow-lg rounded-lg p-8 flex flex-col items-center ">
                            <div class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">

                                <div class="md:w-1/2">
                                    <img src={pics3} alt="Work Together" />
                                </div>


                                <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                                    <h2 class="text-4xl font-bold mb-4">Work together</h2>
                                    <p class="mb-6">With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                                    <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Try it now &rarr;</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-800 text-white p-8">
                        <div class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">

                            <div class="md:w-1/2 md:pr-8 mb-8">
                                <h2 class="text-4xl font-bold mb-4">Use as Extension</h2>
                                <p class="mb-6">For your next project, consider a Domain-specific tool. It works great for all extensions.</p>
                                <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Learn More &rarr;</a>
                            </div>


                            <div class="md:w-1/2">
                                <img src={pics4} alt="Domain-specific Tool" class="rounded-lg shadow-lg w-full" />
                            </div>
                        </div>
                    </div>

                    <div class="bg-white py-16">
                        <div class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">

                            <div class="md:w-1/2 mb-8 md:mb-0">
                                <img src={pics5} alt="Customize Tool" class="rounded-lg shadow-lg w-full" />
                            </div>


                            <div class="md:w-1/2 md:pl-8">
                                <h2 class="text-4xl font-bold mb-4">Customise it to your needs</h2>
                                <p class="mb-6">Customise the app to your style and needs. With built-in tools, you can create your own style and design your experience.</p>
                                <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Learn More &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-100 py-16">
                        <div class="max-w-7xl mx-auto">
                            <h2 class="text-4xl font-bold text-center mb-8">Choose Your Plan</h2>
                            <p class="mb-6">Whether you want to get organized, keep your personal life on track, or boost workplace
                                productivity, Evernote has the right plan for you.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <h3 class="text-2xl font-bold mb-2">Free</h3>
                                    <p class="text-lg mb-4">$0</p>
                                    <p>Capture ideas and find them quickly</p>
                                    <ul class="text-left mb-6">
                                        <li>* Sync unlimited devices</li>
                                        <li>* 10 GB monthly uploads</li>
                                        <li>* 200 MB max. note size
                                        </li>
                                        <li>* Customize Home dashboard and access extra widgets</li>
                                        <li>* Connect primary Google Calendar account
                                        </li>
                                        <li>* Add due dates, reminders, and notifications to your tasks
                                        </li>
                                    </ul>
                                    <a href="#" class="bg-w hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">Get
                                        started</a>
                                </div>
                                <div class=" bg-blue-800 text-white rounded-lg shadow-lg p-6 text-center">
                                    <h3 class="text-2xl font-bold mb-2">Personal</h3>
                                    <p class="text-lg mb-4 text-yellow-400">$11.99</p>
                                    <p>Keep home and family on track</p>
                                    <ul class="text-left mb-6">
                                        <li>* Sync unlimited devices</li>
                                        <li>* 10 GB monthly uploads
                                        </li>
                                        <li>* 200 MB max. note size
                                        </li>
                                        <li>* Customize Home dashboard and access extra widgets</li>
                                        <li>* Connect primary Google Calendar account
                                        </li>
                                        <li>* Add due dates, reminders, and notifications to your tasks
                                        </li>
                                    </ul>
                                    <a href="#" class="bg-blue-400  text-white font-bold py-2 px-4 rounded">Get
                                        started</a>
                                </div>
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center ">
                                    <h3 class="text-2xl font-bold mb-2">Organization</h3>
                                    <p class="text-lg mb-4">$49.99</p>
                                    <p>Capture ideas and find them quickly</p>
                                    <ul class="text-left mb-6">
                                        <li>* Sync unlimited devices</li>
                                        <li>* 10 GB monthly uploads
                                        </li>
                                        <li>* 200 MB max. note size
                                        </li>
                                        <li>*Customize Home dashboard and access extra widgets
                                        </li>
                                        <li>* Connect primary Google Calendar account
                                        </li>
                                        <li>* Add due dates, reminders, and notifications to your tasks

                                        </li>
                                    </ul>
                                    <a href="#" class="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">Get
                                        started</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class=" bg-blue-800  text-white max-w-4xl mx-auto text-center p-8 relative">
                        <h1 class="text-4xl font-bold mb-4">
                            Your work,everywhere you are
                        </h1>
                        <p class="mb-6">
                            Access your notes from your computer, phone, or tablet by synchronizing with various services, including
                            whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A
                            terminal app is also available!
                        </p>
                        <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Try Tasky
                            &rarr;</a>

                    </div>


                    <div class=" bg-white max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">
                        <div class="max-w-7xl mx-auto p-8">

                            <div class="flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 mb-8 md:mb-0">
                                    <h2 class="text-4xl font-bold mb-4">100% your data</h2>
                                    <p class="mb-6">The app is open source and your notes are saved in an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.</p>
                                    <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Read more &rarr;</a>
                                </div>
                                <div class="md:w-1/2">
                                    <img src={pics6} alt="Data Security" />
                                </div>
                            </div>


                            <div class="mt-16 text-center">
                                <h3 class="text-2xl font-bold mb-4">Our Sponsors</h3>
                                <div class="flex justify-center space-x-8">
                                    <img src={pics7} alt="Apple" class="h-8" />

                                </div>
                            </div>
                        </div>

                    </div>




                    <div class="max-w-7xl mx-auto p-8 relative text-center bg-blue-800 text-white">


                        <div class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">

                            <div class="md:w-1/2 mb-8 md:mb-0">
                                <img src={pics8} alt="Favorite " />
                            </div>


                            <div class="md:w-1/2 md:pl-8">
                                <h2 class="text-4xl font-bold mb-4">Work with Your Favorite Apps Using whitespace</h2>
                                <p class="mb-6">Whitespace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                                <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Read More &rarr;</a>
                            </div>
                        </div>

                    </div>



                    <div class=" bg-white max-w-7xl mx-auto p-8 text-center ">
                        <h2 class="text-4xl font-bold mb-8">What Our Clients <span class="font-semibold text-yellow-500">Says</span>
                        </h2>
                        <div class="flex justify-center space-x-4">
                            <div class="bg-white shadow-lg rounded-lg p-6 w-80 ">
                                <p class="text-lg mb-4">"Whitespace is designed as a collaboration tool for businesses that is a
                                    full project management solution."</p>
                                <div class="overflow-visible">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzwVKQG5n0OqBE0MzziiKRh2m_4WX4y-K5A&s"
                                        alt="woman" class="w-10 h-10" />
                                </div>
                                <h4 class="font-bold">Oberon Shaw, MCH</h4>
                                <p class="text-sm text-gray-500">Head of Talent Acquisition, North America</p>

                            </div>
                            <div class="bg-blue-200 shadow-lg rounded-lg p-6 w-80">
                                <p class="text-lg mb-4">"Whitespace is designed as a collaboration tool for businesses that is a
                                    full project management solution."</p>
                                <div class="overflow-visible">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSN6vrUZeKVCZoP4XP1CIbyuNPJ_pcuRoC-A&s"
                                        alt="man" class=" w-10 h-10" />
                                </div>
                                <h4 class="font-bold">Oberon Shaw, MCH</h4>
                                <p class="text-sm text-gray-500">Head of Talent Acquisition, North America</p>
                            </div>
                            <div class="bg-white shadow-lg rounded-lg p-6 w-80">
                                <p class="text-lg mb-4">"Whitespace is designed as a collaboration tool for businesses that is a
                                    full project management solution."</p>
                                <div class="overflow-visible">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedkJJQe4nRNP06r069cx-AvIWW64FyqgcVQ&s"
                                        alt="man" class=" w-10 h-10" />
                                </div>
                                <h4 class="font-bold">Oberon Shaw, MCH</h4>
                                <p class="text-sm text-gray-500">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                        <div class="mt-6">
                            <span class="text-blue-500">...</span>
                        </div>
                    </div>



                    <div>
                        <div class="flex-grow flex flex-col items-center justify-center text-center p-8 bg-blue-900 text-white">
                            <h1 class="text-4xl font-bold mb-4">Try Whitepace <span class="font-semibold">today</span></h1>
                            <p class="mb-6">Get started for free.<br />Add your whole team as your needs grow.</p>
                            <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Try Tasky Free
                                &rarr;</a>
                            <p class="mt-8">On a big team? Contact sales</p>
                            <div class="flex justify-center space-x-4 mt-2">
                                <img src={pics9} alt="Apple" class="h-8" />

                            </div>
                        </div>

                        <footer class="bg-blue-900 text-gray-200 py-8">
                            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div class="md:col-span-1">
                                    <div class="flex items-center mb-4">
                                        <img src={pics2} alt="Whitespace Logo" class="h-8 mr-2" />

                                    </div>
                                    <p>Whitespace was crafted for the new ways we live and work. We make a better workspace around
                                        the world.</p>
                                </div>
                                <div>
                                    <h3 class="font-bold mb-2">Product</h3>
                                    <ul>
                                        <li><a href="#" class="hover:underline">Overview</a></li>
                                        <li><a href="#" class="hover:underline">Pricing</a></li>
                                        <li><a href="#" class="hover:underline">Customer stories</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 class="font-bold mb-2">Resources</h3>
                                    <ul>
                                        <li><a href="#" class="hover:underline">Blog</a></li>
                                        <li><a href="#" class="hover:underline">Guides & tutorials</a></li>
                                        <li><a href="#" class="hover:underline">Help center</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 class="font-bold mb-2">Company</h3>
                                    <ul>
                                        <li><a href="#" class="hover:underline">About us</a></li>
                                        <li><a href="#" class="hover:underline">Careers</a></li>
                                        <li><a href="#" class="hover:underline">Media kit</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="text-center text-sm mt-8">
                                <p>English | Terms & privacy | Security | Status</p>
                                <p>©2021 Whitespace LLC.</p>
                            </div>
                        </footer>
                    </div>


                </div>
            </body>

        // </div>

    );


}

export default Overall;