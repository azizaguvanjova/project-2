import React, { useState } from "react"


const Accordion = ({title,content}) => {
    const [isOpen, setIsOpen] = useState(false)

    // akordionun acık/kapali durumunu degiştirir
    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
   
    <div className="bg-white">
       
<button onClick={toggleAccordion}
 className="flex justify-between w-full text-left">
<span className="font-semibold">{title}</span>
<span className=" h-5 w-5 border-blue-700 border-[1px] text-center bg-blue-200">{isOpen ? '-' : '+'}</span>
</button>
{isOpen && <div className="mt-2 ">{content}</div>}
    </div>
    </>
  )
}
export default Accordion