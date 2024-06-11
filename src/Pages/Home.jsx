import React from 'react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleThemeChange = (e) => {
        setTheme(e.target.value)
        localStorage.setItem('theme', e.target.value)
    }
    const themes = [
        "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
        "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
        "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
        "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
        "night", "coffee", "winter", "dim", "nord", "sunset",
    ];
    return (
        <div className="flex justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-6 mb-4">
                    Top 50 productivity hacks chosen by internet and you
                </h1>
                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={handleThemeChange}
                    value={theme}
                >
                    <option disabled>Select a theme</option>
                    {themes.map((theme, index) => (
                        <option key={index} value={theme}>
                            {theme}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Home