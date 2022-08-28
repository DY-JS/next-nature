import React, { useState } from 'react';
import Image from 'next/image';
import StoriesImg from '../public/stories.png';
import VideoImg from '../public/video.png';
import PhotoImg from '../public/Photography.png';
import ArrowLeftImg from '../public/arrowLeft.png';
import ArrowRightImg from '../public/arrowRight.png';

import styles from '../styles/PicturesSlider.module.scss';

export default function PicturesSlider() {
  const [position, setPosition] = useState(0);

  const handleRadioChange = (e) => {
    console.log(e.currentTarget.value);
    setPosition(e.currentTarget.value);
  };

  const content = [
    {
      id: 1,
      image: StoriesImg,
      hashtag: 'stories',
      title: 'Travel In Japan: The True Experience',
    },
    {
      id: 2,
      image: VideoImg,

      hashtag: 'Video Tour',
      title: 'Helping Wild Turtles',
    },
    {
      id: 3,
      image: PhotoImg,
      hashtag: 'Photography',
      title: 'Threats of Indusrial World',
    },
  ];

  return (
    <section className={styles.slider}>
      <div className={styles.slider__container}>
        {content.map(({ id, image }) => (
          <div key={id} className={styles.slider__img}>
            <Image width={112} height={112} src={image} alt="photo" />
          </div>
        ))}
      </div>
      <div className={styles.slider__controls}>
        <div className={styles.slider__control}>
          <Image width={20} height={20} src={ArrowLeftImg} alt="photo" />
        </div>
        <p className={styles.slider__info}>fdfdsf</p>
        <div className={styles.slider__control}>
          <Image width={20} height={20} src={ArrowRightImg} alt="photo" />
        </div>
      </div>
    </section>
  );
}
