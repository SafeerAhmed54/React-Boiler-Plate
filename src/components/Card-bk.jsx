import React from 'react'

const Card = () => {
    return (
        <section className='card-section bg-slate-950 border border-slate-800'>
            <div className='container'>
                <div className='row p-14'>
                    <div className='left-card'>
                        <h1 className='text-4xl font-bold'>The Dawn of the Generative Age</h1>
                    </div>
                    <div className='right-card'>
                        <p>In the same way that the internet revolutionized content distribution,
                            AI is revolutionizing content creation. Large Language Models such as GPT-3,
                            Text-to-Image Models like Stable Diffusion, DALL-E 2, Imagen, and now Alethea's
                            Text-to-Character AI System, TOLSTOY-1, mark the beginning of a new age in
                            content creation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card
