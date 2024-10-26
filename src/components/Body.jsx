import { Search } from "./Search"

export const Body = () => {
    return <div className="bg-gray-100 w-full pt-4">
        <div className="flex justify-start mx-3">
            Transactions | This Month
        </div>
        <div className="p-3 shadow-lg">
            <div className="shadow-lg bg-white pt-2 pl-1">
            <div>
                <Search />
            </div>
            <div className="flex">
                <button>Sort</button>
                <button></button>
            </div>
            </div>
        </div>
    </div>
}