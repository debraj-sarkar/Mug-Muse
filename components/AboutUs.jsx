import FoodItem from "./FoodItem";
import MilkShakeGlass from "../src/assets/milkshakeGlass.svg"
export default function AboutUs() {
    return (
        <div className="py-10">
            {/* About use heading */}
            <p className="font-primary text-darkBrown font-bold text-3xl md:text-xl">About Us</p>
            <div className="flex items-center">
                {/* Background & Image */}
                <div className=" flex items-center md:w-[250px] h-full">
                    <img src={MilkShakeGlass} alt="" className="hidden md:block" />
                </div>

                <div className="flex flex-1 flex-col justify-center md:ml-8" >
                    {/* About us content */}
                    <div className="my-4">
                        <p className="font-secondary my-2">
                            At <span className="text-accentBeige">Mug Muse</span>, we blend a passion for coffee with a sense of community. Since <span className="text-accentBeige">1998</span>, we've been serving carefully crafted cups that inspire meaningful connections. Each sip is a sensory journey, and every encounter is an opportunity to create lasting memories.
                        </p>

                        <p className="font-secondary">
                            Join us at <span className="text-accentBeige">Mug Muse</span> as we continue to celebrate the art of coffee and the warmth of togetherness.
                        </p>
                    </div>
                    <div className="">
                        <FoodItem />
                    </div>
                </div>
            </div>
        </div>

    )
}