import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import imageData from './images/ani.jpeg'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#4c8b81",marginRight:"10%",height:"8%",width:"4%", justifyContent:"center",alignItems:"center",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,zIndex:99, display: "flex", background: "#4c8b81",marginLeft:"10%",height:"8%",width:"4%", justifyContent:"center",alignItems:"center",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="relative">
    <div className="slider-container mt-4">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" />
          <div className="absolute top-[37%] left-[17.3%] z-50 text-white ">
          <p className="text-4xl font-black w-[85%] text-center">Boost Your Buiseness with our Innovative Solutions</p>
          <p className="text-lg font-semibold text-center w-[85%] mt-4">We provided top-notch digital solutions to diverse industries</p>
          <a href="/letsstart" className="flex text-lg font-semibold  w-[20%] items-center justify-center  ml-[33%] mt-4 bg-[#4c8b81] p-2 rounded gap-2">Let's Start<IoMdArrowForward /></a>
          </div>
        </div>

        <div>
        <img src={image2} alt="" />
        <div className="absolute top-[38%] left-[31.7%] z-50 text-white ">
          <p className="text-4xl font-black  text-center">INDIA'S#1 APP DEVELOPMENT COMPANY</p>
          <p className="text-lg font-semibold text-center mt-4">6+ Yrs in Biz, 100+ App Done, 100% Quality Work</p>
          <a href="/letsstart" className="flex text-lg font-semibold  w-[20%] items-center justify-center  ml-[39%] mt-4 bg-[#4c8b81] p-2 rounded gap-2">Let's Start<IoMdArrowForward /></a>
          </div>
        </div>

        <div>
        <img src={image3} alt="" />
        <div className="absolute top-[38%] left-[46.5%] z-50 text-white ">
          <p className="text-4xl font-black  text-center">Choose Our Comprehensive Solutions</p>
          <p className="text-lg font-semibold text-center mt-4">Customized Web design services</p>
          <a href="/letsstart" className="flex text-lg font-semibold  w-[20%] items-center justify-center  ml-[39%] mt-4 bg-[#4c8b81] p-2 rounded gap-2">Let's Start<IoMdArrowForward /></a>
          </div>
        </div>
      </Slider>
      <div className=" bg-[#022d62] flex h-40 p-4  items-center mx-20 gap-10 absolute top-[81%] left-[10%]">
      <img className="h-40 absolute left-0 w-1/6 rounded" src={imageData} alt="" />
            <h3 className="text-2xl font-bold text-white z-10">Our Clients</h3>
            <div className="flex gap-9">
                <img className="h-10 p-2" src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/HomeOnlineLogo.png" alt='logo' />
                <img className="h-10 p-2" src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/mygon.png" alt="logo" />
                <img className="h-10 p-2" src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/touchpointtrans.png" alt="logo" />
                <img className="h-10 p-2" src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/vinebrookhomes.png" alt="logo" />
                <img className="h-10 p-2" src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/oklus.png" alt="logo" />
            </div>
            <a className="flex items-center gap-1 text-base font-semibold text-white" href="/gotothome">Case Studies<IoMdArrowForward /></a>
      </div>
    </div>
    </div>
  );
}

export default CustomArrows;
