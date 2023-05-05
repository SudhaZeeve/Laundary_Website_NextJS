/* eslint-disable react-hooks/rules-of-hooks */
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = (props) => {
    const { data } = props;

    const [activeIndex, setActiveIndex] = useState(null);

    const contentRefs = data.reduce((acc, _, i) => {
        acc[i] = useRef(null);
        return acc;
    }, {});

    const handleClick = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    }
    return (
        <>
            {data.map((key, i) => {
                return (
                    <>
                        <div onClick={() => handleClick(i)} ref={contentRefs[i]} className=' w-full accordion ' key={i}>
                            <div className='cursor-pointer my-1'>
                                <span className="font-semibold text-gray-500 flex flex-row justify-between items-center">
                                    <p>{key.Heading}</p>

                                    {
                                        (activeIndex !== i)
                                            ? <MdKeyboardArrowDown />
                                            : <MdKeyboardArrowUp />
                                    }

                                </span>
                            </div>
                            {(activeIndex === i) && (
                                <div className="text-gray-500 text-md p-2">
                                    {/* <AnimatePresence mode="wait"> */}
                                    {key.Description}
                                    {/* </AnimatePresence>  */}
                                </div>
                            )}
                        </div>

                    </>
                );
            })}
        </>

    );
}
export default Accordion;