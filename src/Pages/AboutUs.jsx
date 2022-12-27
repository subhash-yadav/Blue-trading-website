import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const AboutUs = () => {
  return (
    <div className="container m-auto text-center mb-5">
      <div className="px-5 lg:p-40 text-center py-10 m-auto">
        <h1 className="text-center relative text-5xl font-bold text-light-blue-100 mb-10">
          About Us
        </h1>

        <p className="lg:leading-loose text-gray-500 text-2xl lg:text-4xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est{" "}
        </p>
      </div>

      <table className="container m-auto">
        <tr>
          <td className="block md:inline-block text-8xl font-bold text-light-blue-100 lg:border-r-2 border-gray-500 px-11">
            <CountUp
              start={0}
              end={20}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              prefix="+"
              suffix=""
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            >
              {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <span className="text-[30px] text-gray-500 block mt-6">
              Lorem Ipsum
            </span>
          </td>
          <td className="block md:inline-block text-8xl font-bold text-light-blue-100 lg:border-r-2 border-gray-500 px-11">
          <CountUp
              start={0}
              end={7}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              prefix=""
              suffix=""
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            >
              {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <span className="text-[30px] text-gray-500 block mt-6">
              Lorem Ipsum
            </span>
          </td>
          <td className="block md:inline-block text-8xl font-bold text-light-blue-100 lg:border-r-2 border-gray-500 px-11">
          <CountUp
              start={1050}
              end={2010}
              duration={2.75}
              separator=""
              decimals={0}
              decimal=","
              prefix=""
              suffix=""
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            >
              {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <span className="text-[30px] text-gray-500 block mt-6">
              Lorem Ipsum
            </span>
          </td>
          <td className="block lg:inline-block text-8xl font-bold text-light-blue-100  px-11">
          <CountUp
              start={50}
              end={115}
              duration={2.75}
              separator=" "
              decimals={0}
              decimal=","
              prefix=""
              suffix=""
              onEnd={() => console.log("Ended! 👏")}
              onStart={() => console.log("Started! 💨")}
            >
              {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <span className="text-[40px] text-gray-500 block mt-6">
              Lorem Ipsum
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AboutUs;
