

import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        toast.success('Thank you for subscribing to our newsletter');
        
        setEmail('');
    };

    return (
        <div>
            <div className="bg-green-300 p-10 mt-10">
                <h1 className="text-black font-bold">
                    Want tips & tricks to optimize your flow?
                </h1>
                <p>Sign up to our <span className="text-2xl font-serif font-bold">newsletter</span> and stay up to date.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input
                        className="p-3 flex w-full rounded-md text-black"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit" className="bg-black text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                        Notify Me
                    </button>
                </form>
                <p>
                    We care about the protection of your data. Read our{' '}
                    <span className="text-[#e84747]">Privacy Policy.</span>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Newsletter;
