import React, { useEffect, useState } from 'react';
import { Flame, Atom, ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';
import { db } from '../../utils/index.js';
import { hacks } from '../../utils/schema.js';
import { useLocation } from 'react-router-dom';
import { desc, asc, } from 'drizzle-orm';
import IdeaList from '../Components/IdeaList';

export const Tab = () => {
    const [activeTab, setActiveTab] = useState('#hot');
    const location = useLocation();
    const [ideas, setIdeas] = useState([]);

    const fetchIdeas = async (tab) => {
        let orderByColumn;
        if (tab === '#top' || tab === '#hot') {
            orderByColumn = desc(hacks.vote);
        } else if (tab === '#low') {
            orderByColumn = asc(hacks.vote);
        } else {
            orderByColumn = desc(hacks.id);
        }

        const response = await db.select().from(hacks).orderBy(orderByColumn).limit(50);
        setIdeas(response);
        console.log(response);
    };

    useEffect(() => {
        setActiveTab(location.hash);
    }, [location]);

    useEffect(() => {
        fetchIdeas(activeTab);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        fetchIdeas(tab);
    };

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered">
                <a href="/#hot" onClick={(e) => { e.preventDefault(); handleTabClick('#hot'); }} role="tab" className={`tab text-lg ${activeTab === '#hot' && 'tab-active font-bold'}`}><Flame size={20} className="mx-2 text-red-400" /> Hot</a>
                <a href="/#new" onClick={(e) => { e.preventDefault(); handleTabClick('#new'); }} role="tab" className={`tab text-lg ${activeTab === '#new' && 'tab-active font-bold'}`}><Atom size={20} className="mx-2 text-amber-400" />New</a>
                <a href="/#top" onClick={(e) => { e.preventDefault(); handleTabClick('#top'); }} role="tab" className={`tab text-lg ${activeTab === '#top' && 'tab-active font-bold'}`}><ArrowUpNarrowWide size={20} className="mx-2 text-green-400" /> Top</a>
                <a href="/#low" onClick={(e) => { e.preventDefault(); handleTabClick('#low'); }} role="tab" className={`tab text-lg ${activeTab === '#low' && 'tab-active font-bold'}`}><ArrowDownNarrowWide size={20} className="mx-2 text-orange-400" />Lowest</a>

            </div>
            <IdeaList ideas={ideas} refreshData={() => fetchIdeas(activeTab)} />
        </>
    );
};
