import react from "react";
import './App.css'
import './index.css'
import './output.css'

function Login() {

    const getforgot = () => {
        return window.location.href = './Forgotpass'
    }

    const getwork = () => {
        return window.location.href = './Workflow'
    }

    return (
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 class="text-2xl font-semibold text-center mb-6">Creator Dashboard</h2>

                <form action="">
                    <div className=" mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="email" name="email" className=" w-full p-3  border-gray-300 rounded-md focus: outline-none focus:ring focus:ring-indigo-200" />

                    </div>
                    <div className="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-700">password</label>
                        <input type="email" name="email" className=" w-full p-3  border-gray-300 rounded-md focus: outline-none focus:ring focus:ring-indigo-200" />
                    </div>

                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" name="remembar" className=" h-4 w-4 text-indigo-600  border-gray-300  rounded" />
                            <label For="remembar" className=" ml-2 block text-sm text-gray-900">Remembar me</label>
                        </div>
                        <a href="#" className=" text-sm text-indigo-600 hover:text-indigo-500" onClick={getforgot}> Forgot password?</a>

                    </div>
                    <button type="submit" className=" w-full bg-indigo-600 text-white p-3 rounded-mb hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={getwork}>singin</button>
                </form>

            </div>

        </div>

    )

}
export default Login;