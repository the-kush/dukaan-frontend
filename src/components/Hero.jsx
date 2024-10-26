import { Dropdown } from "./Dropdown";

export const Hero = () => {
    return <div className="bg-gray-100">
        <div className="flex justify-between py-4 mx-4">
            <div className="text-xl">Overview</div>
            <div><Dropdown /></div>
        </div>
    </div>
}