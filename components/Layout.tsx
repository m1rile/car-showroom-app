import Image from 'next/image'
import CustomButton from './CustomButton'

const Layout = () => {
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

                <CustomButton />
            </div>
        </div>
    )
}

export default Layout
