import React, { Component } from 'react';
import SliderHomeHardun from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

class SliderHome extends Component {
  render() {
    const params = {
      slidesPerView: 2,
      grabCursor: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
    const imgStyles = {
		  borderRadius: "3px"
		};

    return(
      <SliderHomeHardun {...params}>
        <img style={imgStyles} src="https://s3.bukalapak.com/uploads/flash_banner/30203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_tbg.jpg.webp"/>
        <img style={imgStyles} src="https://s3.bukalapak.com/uploads/flash_banner/33203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_update2_GAS.jpg.webp"/>
        <img style={imgStyles} src="https://s0.bukalapak.com/uploads/flash_banner/57203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_sapa.jpg.webp"/>
        <img style={imgStyles} src="https://s2.bukalapak.com/uploads/flash_banner/22052/homepage_banner/s-834-352/Banner_A-B_Test.jpg.webp"/>
        <img style={imgStyles} src="https://s4.bukalapak.com/uploads/flash_banner/96203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_%281%29.jpg.webp"/>
      </SliderHomeHardun>
    )
  }
}

export default SliderHome;