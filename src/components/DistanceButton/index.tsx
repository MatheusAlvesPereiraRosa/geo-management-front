import { GiPathDistance } from "react-icons/gi";

interface Props {
    distance?: () => {}
}

export const DistanceButton = ({distance}: Props) => (
    <div className="absolute bottom-24 right-4">
        <button onClick={distance} className="p-5 bg-amber-600 aspect-square rounded-full">
            <GiPathDistance className="text-white" size={25} />
        </button>
    </div>
)