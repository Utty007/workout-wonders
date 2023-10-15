/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import USFlag from '../Asset/Flag-United-States-of-America.webp'
import UKFlag from '../Asset/Flag_of_the_United_Kingdom.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonials data
const testimonials = [
  {
    text: "This women's workout program has truly empowered me to take charge of my fitness journey. The results are amazing, and I feel stronger and more confident every day. Highly recommend!",
    name: 'Emma',
    countryFlag: USFlag,
    color: 'rgb(255, 83, 0)',
    }, {
        text: "I can't say enough good things about this program. It's been life-changing for me. The workouts are challenging yet doable, and the supportive community is a game-changer. I've never felt better!",
        name: 'Maria',
        countryFlag: UKFlag,
        color: 'rgb(255, 83, 0)',
  }, {
        text: "The results from this women's workout program are incredible. I've lost weight, gained muscle, and improved my overall health. It's not just a program; it's a lifestyle change that's worth every moment.",
        name: 'Angela',
        countryFlag: USFlag,
        color: 'rgb(255, 83, 0)',
  }, {
        text: "What I love most about this program is the inclusivity and support. It doesn't matter where you're starting from; everyone is welcomed and encouraged. The coaches are fantastic, and you're never alone on this journey." ,
        name: 'Monica',
        countryFlag: UKFlag,
        color: 'rgb(255, 83, 0)',
  }, {
        text: "I appreciate the balanced approach of this workout program. It's not just about looking good; it's about feeling good and being healthy. The nutrition guidance and workouts are spot on.",
        name: 'Ashley',
        countryFlag: USFlag,
        color: 'rgb(255, 83, 0)',
  }, {
        text: "The motivation this program provides is incredible. The daily workouts are a highlight of my day, and the progress I've made has been astounding. It's more than just exercises; it's a daily dose of inspiration.",
        name: 'Lillian',
        countryFlag: UKFlag,
        color: 'rgb(255, 83, 0)',
  }
  // Add other testimonials here
];

const TestimonialCard = ({ text, name, countryFlag, color }) => (
  <div
    style={{
      backgroundColor: color,
      color: 'white',
      padding: '20px',
      margin: '0 5px',
      borderRadius: '10px',
    }}
  >
    <p>{text}</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={countryFlag}
        alt="Country Flag"
        style={{ width: '20px', height: '20px', marginRight: '10px' }}
      />
      <span>{name}</span>
    </div>
  </div>
);

const TestimonialSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
