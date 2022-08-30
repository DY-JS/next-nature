import React, { useState } from 'react';
import Image from 'next/image';
import StoriesImg from '../public/stories.png';
import VideoImg from '../public/video.png';
import PhotoImg from '../public/Photography.png';
import ArrowLeftImg from '../public/arrowLeft.png';
import ArrowRightImg from '../public/arrowRight.png';

import styles from '../styles/Traveles.module.scss';
import CardTemplate from './CardTemplate';

export default function Traveles({ placesRef }) {
  const [position, setPosition] = useState(0);

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

  const templates = [
    {
      id: 1,
      title: 'Travel In Japan: The True Experience',
      text:
        'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
      background: '#FFBD9E',
    },
    {
      id: 2,
      title: 'Helping Wild Turtles To Travel In Japan',
      text:
        'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
      background: '#FFADAD',
    },
    {
      id: 3,
      title: 'Threats of Modern Indusrial World',
      text:
        'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
      background: '#CBCBFF',
    },
  ];

  return (
    <section className={styles.traveles}>
      <div className={styles.traveles__top}>
        {content.map(({ id, image, hashtag, title }) => (
          <div key={id} className={styles.traveles__item}>
            <div className={styles.traveles__img}>
              <Image width={112} height={112} src={image} alt="photo" />
            </div>
            <div className={styles.traveles__description}>
              <p className={styles.traveles__hash}>
                <span>
                  <strong># </strong>
                </span>
                {hashtag}
              </p>
              <p className={styles.traveles__title}>{title}</p>
              <p className={styles.traveles__see}>See all</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.traveles__slider}>
        <button
          disabled={position === 0}
          className={styles.traveles__action}
          onClick={() => setPosition((current) => current - 1)}
        >
          <Image width={24} height={44} src={ArrowLeftImg} alt="left" />
        </button>
        <div className={styles.traveles__window}>
          {templates.map(({ id, title, text, background }, i) => {
            return i === position ? (
              <CardTemplate
                key={id}
                title={title}
                text={text}
                background={background}
                flex="1"
                transform="translateX(0)"
                position="relative"
                zIndex="2"
              />
            ) : (
              <CardTemplate
                key={id}
                title={title}
                text={text}
                background={background}
                flex="0"
                transform="translateX(-200%)"
                position="absolute"
                zIndex="0"
              />
            );
          })}
        </div>
        <button
          disabled={position === templates.length - 1}
          className={styles.traveles__action}
          onClick={() => setPosition((current) => current + 1)}
        >
          <Image width={24} height={44} src={ArrowRightImg} alt="right" />
        </button>

        <div ref={placesRef} className={styles.traveles__choise}>
          {content.map(({ id }, i) => (
            <div
              key={id}
              className={styles.traveles__radio}
              style={
                position === i ? { background: '#000' } : { background: '#FFF' }
              }
              onClick={() => setPosition(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
