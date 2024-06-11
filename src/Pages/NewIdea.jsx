import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { Undo2 } from 'lucide-react';
import { Send } from 'lucide-react';
import { Info } from 'lucide-react';



function NewIdea() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <NavBar />
            <button className="btn btn-warning mt-7"><Undo2 size={18} />Back</button>
            <h1 className="text-center text-xl font-bold mt-6">Your #1 productivity hack?
            </h1>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Your hack</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" placeholder="What helps you get things done?"></textarea>
            </label>

            <label className="form-control mt-7">
                <div className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt flex"> <Info size={14} className='mx-1' />No account needed</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered " />
            </label>

            <div className="label mt-7">
                <span className="label-text">Show off your Twitter handle?</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
                @
                <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>

            <button className="btn btn-warning mt-7 w-full">Send <Send size={20} /> </button>

        </>
    )
}

export default NewIdea