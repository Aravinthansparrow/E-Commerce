import React from 'react'
import styles from '../../styles/styles'
import CountDown from './CountDown'

const EventCard = ({active,data}) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg lg:flex p-2  ${active ? "unset" : "mb-12"}`}>
        <div className="w-full lg:-w[50%] m-auto">
            <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
        </div>
        <div className="w-full lg:[w-50%] flex flex-col justify-center">
            <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
            <p>Samsung Galaxy S23 Ultra. Expert Review. View Gallery. 6.8" (QHD) Screen Size. 108 | 40 MP …
Apple iPhone 14 Pro Max. Expert Review. View Gallery. 6.7" (QHD) Screen Size. 48 | 12 MP …
Google Pixel 7 Pro. Expert Review. View Gallery. 6.57" (2K) Screen Size. 16 | 16 MP Camera. …</p>
            <div className="flex py-2 justify-between">
                <div className="flex">
                    <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                    1099$
                    </h5>
                    <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                    199$
                    </h5>
                </div>
                <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                    120 sold
                </span>
            </div>
            <CountDown data={data} />
        </div>
    </div>
  )
}

export default EventCard
