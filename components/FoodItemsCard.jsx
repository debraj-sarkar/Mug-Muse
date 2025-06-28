export default function FoodItemsCard({ image }) {
    return (
        <div className='h-12 w-12 flex justify-center items-center rounded-lg bg-cardBackground mr-2'>
            <img src={image} className='h-8 w-8' />
        </div>
    )
}