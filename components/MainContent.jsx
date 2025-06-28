import rightArrow from '../src/assets/right-arrow.svg'


// Coffee Cup image
import CoffeeCup from '../src/assets/foodItems/CoffeeCup.svg'
import FoodItem from './FoodItem'

export default function MainContent() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between flex-wrap py-10'>
            {/* Left Section */}
            <div className='w-full md:w-1/2 px-4 '>
                {/* Headings */}
                <div>
                    <p className="font-primary font-semibold text-darkBrown text-2xl md:text-3xl py-2">
                        Awaken Your Senses,<br />One Sip at a Time.
                    </p>
                    <p className="font-secondary text-primaryBlack py-2 text-sm md:text-base">
                        Your daily retreat for exceptional coffee and meaningful connections.
                    </p>
                    <div className='flex items-center py-2 cursor-pointer'>
                        <p className='font-secondary font-semibold text-accentBeige'>View menu</p>
                        <img src={rightArrow} className='ml-2 w-4 h-4' />
                    </div>
                </div>
                <FoodItem />
            </div>

            {/* Right Section - Coffee Cup */}
            <div className='flex flex-1 justify-center items-center'>
                <img src={CoffeeCup} className='object-fill w-full h-auto' />
            </div>
        </div>
    )
}