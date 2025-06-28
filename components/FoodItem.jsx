import FoodItemsCard from './FoodItemsCard'
// Food item images
import Bread from '../src/assets/foodItems/Bread.svg'
import Cake from '../src/assets/foodItems/Cake.svg'
import Coffee from '../src/assets/foodItems/Coffee.svg'
import CupCake from '../src/assets/foodItems/Cupcake.svg'
import MilkShake from '../src/assets/foodItems/Milkshake.svg'
export default function FoodItem() {
    const FoodItemImages = [Bread, Cake, Coffee, CupCake, MilkShake]
    return (
        // Food Items 
        <div className='flex py-8'>
            {FoodItemImages.map((image, index) => (
                <FoodItemsCard key={index} image={image} />
            ))}
        </div>
    )
}