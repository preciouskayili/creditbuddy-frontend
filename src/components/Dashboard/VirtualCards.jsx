import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";

const VirtualCards = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 10
    },
  });
  return (
    <>
      <div className="keen-slider" ref={sliderRef}>
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="w-[95%] cursor-pointer bg-gradient-to-bl from-[#0A82FC] to-[#2d55dc] rounded-xl text-white shadow-2xl">
              <div className="w-full px-8 flex flex-col justify-center">
                <div className="flex justify-between pt-8">
                  <div>
                    <h5 className="text-white/70 font-bold text-xs">
                      Card balance
                    </h5>
                    <h3 className="font-bold text-xl">$32,819.00</h3>
                  </div>
                  <img
                    className="h-4"
                    src="https://www.seekpng.com/png/full/212-2128294_visa-png.png"
                  />
                </div>
                <div className="flex justify-between pt-20 pb-7">
                  <div>
                    <p className="font-medium uppercase text-sm">
                      Precious Kayili
                    </p>
                    <p className="font-bold text-white/70">
                      **** **** **** 3225
                    </p>
                  </div>
                  <p>
                    <small className="text-[10px] block">VALID THRU</small>
                    <span className="text-sm font-bold text-white/70">
                      08/22
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VirtualCards;
