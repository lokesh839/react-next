import './App.css'
import './index.css'
import './output.css'


function Home() {

    const getlogin=()=>{
        return window.location.href='./Login'
    }
    return (
        <div class="flex-1 flex flex-col">
            <header class="bg-white shadow-md p-4 flex justify-between items-center">
                <h4 class="text-lg font-semibold">wellcom to my  website</h4>
                <div className=" flex space-x-4">
                <button type="submit" className=" w-full bg-indigo-600 text-white p-3 rounded-mb hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={getlogin}>Login</button>
                </div>
            </header>

            <div className=' bg-red-300'>

            </div>
        </div>
        
    )
}
export default Home;