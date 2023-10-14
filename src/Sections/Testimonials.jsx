/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from '../Asset/IMG_1.jpeg'
import Img2 from '../Asset/IMG_2.jpeg'
import Img3 from '../Asset/IMG_3.jpeg'
import Img4 from '../Asset/IMG_4.jpeg'
import Img5 from '../Asset/IMG_5.jpeg'
import Img6 from '../Asset/IMG_6.jpeg'
import Img7 from '../Asset/IMG_7.jpeg'
import Img8 from '../Asset/IMG_8.jpeg'
import Img9 from '../Asset/IMG_9.jpeg'
import Img10 from '../Asset/IMG_10.jpeg'
import Style from './Testimonial.module.css'

const Testimonials = () => {
    const Images = [{id: 1, image: Img1}, {id: 2, image: Img2}, {id: 3, image: Img3}, {id: 4, image: Img4}, {id: 5, image: Img5}, {id: 6, image: Img6}, {id: 7, image: Img7}, {id: 8, image: Img8}, {id: 9, image: Img9}, {id: 10, image: Img10}]
    return <div className={Style.Testimonials}>
        <h2>See results below</h2>
        <div className={Style.testimonial}>{Images.map((img) => {
            return <img src={img.image} key={img.id}/>
        })}</div>
    </div>
}

export default Testimonials