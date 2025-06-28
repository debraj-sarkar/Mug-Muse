import MenuCard from './MenuCard'
export default function Menu() {
    return (
        // Main container
        <div className="flex flex-col py-10">
            {/* Explore text container */}
            <div className="py-2 flex self-start ">
                <p className="font-primary text-darkBrown font-bold text-3xl md:text-xl ">Explore Our Menu</p>
            </div>

            <div className="flex flex-wrap justify-between  md:gap-6 md:justify-center py-4">
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </div>
    )
}