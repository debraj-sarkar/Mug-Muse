import star from '../src/assets/Star.svg'
import latteMug from '../src/assets/LatteMug.svg'
import favorite from '../src/assets/favorite.svg'
import add from '../src/assets/add.svg'
export default function MenuCard() {
    return (
        <>
            {/* Card container */}
            <div className=" bg-cardBackground rounded-lg p-4 flex flex-col mb-4 md:w-46">
                {/* Rating & Price */}
                <div className="flex justify-between w-full">
                    <div className="bg-white rounded-xl flex px-2 text-sm items-center" >
                        <img src={star} className='mr-1.5 w-4' />
                        <p className="font-secondary font-bold">4.5</p>
                    </div>
                    <p className="font-secondary font-bold">$1.99</p>
                </div>

                {/* Latte image */}
                <img src={latteMug} />

                {/* Item name & ingredients */}
                <div className="self-start">
                    <p className='font-primary font-bold text-lg'>Latte</p>
                    <p className='text-xs'>Coffee 30% and Milk 70%</p>
                </div>

                {/* Favorite & add to cart */}
                <div className="mt-2.5 flex items-center">
                    {/* Favorite & add to cart */}
                    <div className="flex justify-between items-center w-full">
                        <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={favorite} alt="" className='h-5 w-5' />
                        </div>
                        <div className="flex bg-darkBrown rounded-lg p-2 items-center">
                            <img src={add} className='w-6 mr-1' />
                            <p className='font-secondary font-semibold text-white text-sm'>Add</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}