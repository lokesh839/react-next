import react from "react";
import './App.css'
import './index.css'
import './output.css'


function Workflow() {
    return (
        <div class="bg-gray-100 h-screen flex">

            <aside className=" w-64 bg-gray-800 text-white flex flex-col">
                <div className=" p-6">
                    <h1>Workflow Dashboard</h1>
                </div>
                <nav className="m-10">
                    <a href="#" className=" block py-2.5 px-4 rounded hover:bg-gray-700 transition">Dashborsd</a>
                    <a href="#" className=" block py-2.5 px-4 rounded hover:bg-gray-700 transition">projects</a>
                    <a href="#" className=" block py-2.5 px-4 rounded hover:bg-gray-700 transition">tasks</a>
                    <a href="#" className=" block py-2.5 px-4 rounded hover:bg-gray-700 transition">reports</a>
                    <a href="#" className=" block py-2.5 px-4 rounded hover:bg-gray-700 transition">settings</a>
                </nav>
            </aside>
            <div class="flex-1 flex flex-col">
                <header class="bg-white shadow-md p-4 flex justify-between items-center">
                    <div class="text-lg font-semibold">Welcome to Your Dashboard</div>
                    <div className=" flex space-x-4">
                        <input type="text" placeholder="search...." className="border p-2 rounded-md" />
                    </div>
                </header>

                <main className="p-6  bg-gray-100 flex-1">
                    <h2>workflow overview</h2>


                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold mb-4">Step 1: Design</h3>
                            <p class="text-gray-600 mb-4">Create wireframes, design mockups, and user flows.</p>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Step</button>
                        </div>


                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold mb-4">Step 2: Development</h3>
                            <p class="text-gray-600 mb-4">Write code, set up databases, and implement APIs.</p>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Step</button>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold mb-4">Step 3: Testing</h3>
                            <p class="text-gray-600 mb-4">Perform unit tests, integration tests, and user testing.</p>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Step</button>
                        </div>
                        
                    </div>

                </main>

            </div>

        </div>

    )
}
export default Workflow;