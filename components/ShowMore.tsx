'use client'

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import { CustomButton } from '@/components'

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const router = useRouter()

    const handleNavgation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavgation}
                />
            )}
        </div>
    )
}

export default ShowMore
