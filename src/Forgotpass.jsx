import react from "react";
import './App.css'
import './index.css'
import './output.css'

function Forgotpass() {
    const getlog=()=> {
        return window.location.href ='./Login'

    }

    return (
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 class="text-2xl font-bold text-center mb-6">Forgot Your Password?</h2>
            <p class="text-gray-600 text-center mb-4">Enter your email address to reset your password</p>
            <form action="">

                <div className=" mb-4">
                    <label for="email" className=" block text-gray-700 text-sm font-bold mb-2" >emailaddress</label>
                    <input type="email" id="email" className=" shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Send Reset Link
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={getlog}>
                        Back to Login
                    </a>

                </div>
            </form>


        </div>

    )

}
export default Forgotpass;