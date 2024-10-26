
export const RevenueCard = ({
    title,
    amount
}) => {
    return <div className="bg-white rounded shadow-md flex flex-col mx-2 my-2 p-3"> 
        <div className="text-sm">
            {title}
        </div>
        <div className="text-2xl pt-2">
            {amount}
        </div>
    </div>
}