import React from 'react'

const Footer = () => {
  return (
    <footer className='py-20 bg-slate-950 border border-slate-800'>
            <div className='container'>
                <div className='flex flex-row justify-between'>
                    <div className='w-1/3 flex flex-col gap-6'>
                        <div className='w-full h-auto'>
                            <img src='./src/media/assets/img/atl-logo.png' alt='' className='w-auto h-auto' />
                        </div>
                        <p>AletheaAI is building a progressively decentralized & permissionless protocol -
                            enabling the creation of AI Assets, characters, and DApps, governed by the community.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col gap-6'>
                        <h1 className='text-2xl font-bold'>Team</h1>
                        <p>AletheaAI is building a progressively decentralized & permissionless protocol -
                            enabling the creation of AI Assets, characters, and DApps, governed by the community.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col gap-6'>
                         <h1 className='text-2xl font-bold'>Community</h1>
                        <div className='flex flex-row justify-start items-center gap-4 '>
                            <img src="./src/media/assets/img/twitter.svg" alt="" />
                            <img src="./src/media/assets/img/tiktok.svg" alt="" />
                            <img src="./src/media/assets/img/youtube.svg" alt="" />
                            <img src="./src/media/assets/img/LinkedIn.svg" alt="" />
                            <img src="./src/media/assets/img/Exclude.svg" alt="" />
                            <img src="./src/media/assets/img/discord.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
