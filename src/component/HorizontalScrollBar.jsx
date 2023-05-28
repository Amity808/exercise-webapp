import React, { useContext } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';





const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {

    const LeftArrow = () => {
        const {scrollPrev } = useContext(VisibilityContext);

        return (
            <button onClick={() => scrollPrev()}><FaAngleLeft size={30}  /></button>
        )
    }
    const RightArrow = () => {
        const { scrollnext } = useContext(VisibilityContext);

        return (
            <button onClick={() => scrollnext()} className=''><FaAngleRight size={30}  /></button>
        )
    }
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data.map((item) => <div key={item.id || item}  title={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            {/* {item ? <BodyPart item={item} bodyPart={bodyPart} setbodyPart={setBodyPart} /> : <Exercise />} */}
        </div>)
      }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
