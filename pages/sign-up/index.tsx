export default function SignUp(){
    return(
        <section className="relative py-20">
            <div className="container">
                <h1 className="font-display text-jacarta-700 py-10 text-center text-4xl font-medium dark:text-white">
                    Sign Up
                </h1>
                <div className="mx-auto max-w-[24rem]">
                    <div className="mb-6">
                    <label
                        htmlFor="item-name"
                        className="font-display text-jacarta-700 mb-2 block dark:text-white"
                    >
                        Name<span className="text-red">*</span>
                    </label>
                    <input
                        type="text"
                        id="item-name"
                        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                        placeholder="Enter your Full Name"
                        required
                    />
                    </div>
                    {/* Phone */}
                    <div className="mb-6">
                    <label
                        htmlFor="item-phone"
                        className="font-display text-jacarta-700 mb-2 block dark:text-white"
                    >
                        Phone <span className="text-red">*</span>
                    </label>
                    <input
                        type="text"
                        id="item-phone"
                        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                        placeholder="Enter your Phone"
                        required
                    />
                    </div>
                    {/* Email */}

                    <div className="mb-6">
                    <label
                        htmlFor="item-email"
                        className="font-display text-jacarta-700 mb-2 block dark:text-white"
                    >
                        Email<span className="text-red">*</span>
                    </label>
                    <input
                        type="email"
                        id="item-phone"
                        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                        placeholder="Enter your Email"
                        required
                    />
                    </div>
                    <div className="mb-6">
                    <label
                        htmlFor="item-pass"
                        className="font-display text-jacarta-700 mb-2 block dark:text-white"
                    >
                        Password<span className="text-red">*</span>
                    </label>
                    <input
                        type="password"
                        id="item-pass"
                        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                        placeholder="Password"
                        required
                    />
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <button
                            className="bg-accent-lighter border-2 text-black cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                            >
                            Signup 
                        </button>
                        <span>Existing user? Sign-in 
                            <a href="/sign-in">
                                <span className="underline text-blue-500 ml-1">
                                    here
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}