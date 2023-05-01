import {AiFillStar} from "react-icons/ai"

function Rating(){
    return(
        <div className="flex">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400"/>
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
        </div>
    );
}
export default Rating;