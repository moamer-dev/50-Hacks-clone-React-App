import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { Undo2 } from 'lucide-react';
import { Send } from 'lucide-react';
import { Info } from 'lucide-react';
import { db } from '../../utils/index.js';
import { hacks } from '../../utils/schema.js';
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';





function NewIdea() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [ideas, setIdeas] = useState('');
    const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
    const navigation = useNavigate();


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

    }, [theme]);



    const handelChangeUsername = (e) => {
        setUsername(e.target.value)
        localStorage.setItem('username', e.target.value)
    }
    const handleSubmit = async () => {
        const response = await db.insert(hacks).values({
            content: ideas,
            username: username,
            created_at: moment().format('DD-MM-YYYY')
        }).returning({ id: hacks.id })

        if (response) {
            localStorage.setItem('username', username)
            console.log('data inserted')
            notify()
            setIdeas('')
        }
    }

    const notify = () => toast("Wow so easy !");



    return (
        <>
            <ToastContainer />
            <NavBar />
            <button onClick={() => navigation('/')} className="btn btn-warning mt-7"><Undo2 size={18} />Back</button>
            <h1 className="text-center text-xl font-bold mt-6">Your #1 productivity hack?
            </h1>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Your hack</span>
                </div>
                <textarea onChange={(e) => setIdeas(e.target.value)} className="textarea textarea-bordered h-24" placeholder="What helps you get things done?"></textarea>
            </label>

            <label className="form-control mt-7">
                <div className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt flex"> <Info size={14} className='mx-1' />No account needed</span>
                </div>
                <input onChange={(e) => handelChangeUsername(e)} type="text" placeholder="Username" className="input input-bordered " value={username} />
            </label>

            <div className="label mt-7">
                <span className="label-text">Show off your Twitter handle?</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
                @
                <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>

            <button disabled={!(ideas && username)} onClick={handleSubmit} className="btn btn-warning mt-7 w-full">Send <Send size={20} /> </button>

        </>
    )
}

export default NewIdea