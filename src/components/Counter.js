import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter({ end, className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className="counter">
       

        <div className="counter-row">
         

        

          <div className="counter-column">
            <strong data-number="24">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={end} duration={5}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;