import React from 'react'
import { Link } from 'react-router-dom'
// Link
export const Loginform = () => {
  return (
   <>
   
   <section className="py-10 justify-center">
    <div className="w-full grid justify-items-center lg:grid-cols-1">
      {/* Form */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-xl p-4 mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="mt-6 text-3xl font-extrabold">LOGIN</h1>
            <p className="mt-2 text-sm text-gray-500">
              or{" "}
         <Link to="/regestration">   <a href="///" className="font-medium text-yellow-500">
                Register
              </a></Link>
            </p>
          </div>
          {/* Sign-In */}
          <div className="mt-8">
            <div className="mt-6">
              <form method="post" className="space-y-6">
                <input
                  id="csrf_token"
                  name="csrf_token"
                  type="hidden"
                  defaultValue="ImZkMDA2YzE2NzIzMjI3ZWZjZTliMTE2OTM5Mzc5MGE4MjRkODU0Mzki.ZDSpaw.7ANdxybtvAaenkJpgyan1iJUPzA"
                />
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      className="select-none block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full bg-white dark:bg-night-900 border-gray-200 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required=""
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      className="select-none block text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full bg-white dark:bg-night-900 border-gray-200 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required=""
                        type="password"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div x-data="{ lockIcon:'closed' }">
                  
                </div>
              </form>
              <div className="flex items-center justify-end mt-3">
              {/* margin: auto;
    width: 97px;
    padding: 7px; */}

                <button className='p-[7px]  w-[97px] bg-[#2E0D23] mx-auto m-auto text-white rounded-md'>login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}
