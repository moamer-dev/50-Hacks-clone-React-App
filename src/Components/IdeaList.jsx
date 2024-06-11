import React from 'react'
import { db } from '../../utils/index.js';
import { hacks } from '../../utils/schema.js';
import { ToastContainer, toast } from 'react-toastify';
import { eq } from 'drizzle-orm';



function IdeaList({ ideas, refreshData }) {


    const handlevoteup = async (id, ideavote) => {
        const response = await db.update(hacks)
            .set({ vote: ideavote + 1 })
            .where(eq(hacks.id, id))
        if (response) {
            refreshData()
            notifyUp()
        }
    }

    const handlevotedown = async (id, ideavote) => {
        const response = await db.update(hacks)
            .set({ vote: ideavote - 1 })
            .where(eq(hacks.id, id))
        if (response) {
            refreshData()
            notifyDown()
        }
    }

    const notifyUp = () => toast("Good Job!");
    const notifyDown = () => toast("Oops!");


    return (
        <>
            <ToastContainer />
            <div className='my-5'>
                {ideas.length > 0 ? ideas.map((idea, index) => (
                    <div key={index} className='p-5 border shadow-lg rounded-lg my-3'>
                        <div key={index} className='flex flex-col my-5'>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <p className='ml-3 text-lg font-bold'>{index + 1}.{' '}{idea.content}</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='mr-3 text-lg font-bold'>{idea.vote}</p>
                                    <button onClick={() => handlevoteup(idea.id, idea.vote)} className=' text-white px-3 py-1 rounded-lg mx-1'>🤩</button>
                                    <button onClick={() => handlevotedown(idea.id, idea.vote)} className=' text-white px-3 py-1 rounded-lg'>💩</button>
                                </div>
                            </div>
                            <p className='text-start ms-8'><span className='font-bold'>By </span> {idea.username} <span className='font-bold'>on </span> {idea.created_at}</p>
                        </div>
                    </div>
                )) : <p className='text-lg text-center'>No Ideas Found</p>}

            </div>
        </>
    )
}

export default IdeaList
