import React from 'react'
import Button from '../../../../components/Button'
import { ShoppingCart, ReceiptText } from "lucide-react"

const HomeSection = () => {

  const buttonsData = [
    {
      id: 1,
      icon: <ShoppingCart />,
      text: "Add to Cart",
    },
    {
      id: 2,
      icon: <ReceiptText />,
      text: "More Details",
    },
  ];

  return (
    <section className='home-section'>
      <div className='container'>
        <div className='row'>
          <div className='left-home'>
            <h1 className='text-6xl font-bold'>
              G502 HERO WIRELESS
            </h1>
            <p className='slogan text-3xl'>
              Logitech High Performance Wireless Gaming Mouse
            </p>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, ipsa, quod ut dolorem, praesentium voluptate
              unde animi dolore omnis doloremque distinctio culpa.
            </p>
            <h2 className='price font-bold text-3xl'>USD 99.99</h2>
            <div className='buttons'>
              {buttonsData.map((btn) => {
                return <Button key={btn.id} icon={btn.icon} text={btn.text} />
              })}
            </div>
          </div>
          <div className='right-home'>
            <img
              className="mouse-image"
              src="./src/media/image/mouse.png"
              alt="mouse"
            />
            <span class="g502-text">G502</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
