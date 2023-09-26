'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Layout = () => {
    const handleScroll = () => {}

    return (
        <div className="layout">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="layout__title">
                    Find, book, or rent a car easily!
                </h1>

                <p className="laytout__subtitle">
                    Streamline your car rental experience with our efforts
                    booking cars.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />

                <div className="layout__image-container">
                    <div className="layout__image">
                        <Image
                            src="/layout.png"
                            alt="layout"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="layout__image-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Layout
