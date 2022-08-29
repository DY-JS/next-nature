import { useState } from 'react';
import Image from 'next/image';
import ArrowLeftImg from '../public/arrowLeft.png';
import ArrowRightImg from '../public/arrowRight.png';
import AvoidPlasticImg from '../public/avoidPlastic.png';
import ChooseOrganicImg from '../public/chooseOrganic.png';
import MainCardImg from '../public/main-card.png';
import PlantTreesImg from '../public/plantTrees.png';
import SaveEnergyImg from '../public/saveEnergy.png';

import styles from '../styles/Slider.module.scss';

export default function Slider() {
  const images = [
    {
      id: 'avoid plastic',
      number: 4,
      image: (
        <Image
          width={154}
          height={156}
          src={AvoidPlasticImg}
          alt="avoid plastic"
        />
      ),
    },
    {
      id: 'choose organic',
      number: 5,
      image: (
        <Image
          width={210}
          height={213}
          src={ChooseOrganicImg}
          alt="choose organic"
        />
      ),
    },
    {
      id: ' ',
      number: 1,
      image: (
        <Image width={210} height={213} src={MainCardImg} alt="main card" />
      ),
    },
    {
      id: 'plant trees',
      number: 2,
      image: (
        <Image width={211} height={185} src={PlantTreesImg} alt="plant trees" />
      ),
    },
    {
      id: 'save enrgy',
      number: 3,
      image: (
        <Image width={152} height={176} src={SaveEnergyImg} alt="save enrgy" />
      ),
    },
  ];
  const [prepearedImages, setImages] = useState(images);
  const [selected, setSelected] = useState(1);

  const moveRight = () => {
    const first = prepearedImages[0];
    let copy = [...prepearedImages];
    copy.shift();
    copy.push(first);
    setImages(copy);
    setSelected((selected + 1) % 6 || 1);
  };

  const moveLeft = () => {
    const last = prepearedImages[prepearedImages.length - 1];
    let copy = [...prepearedImages];
    copy.pop();
    copy.unshift(last);
    setImages(copy);
    setSelected((selected - 1) % 6 || 5);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider__container}>
        {prepearedImages.map(({ id, image, number }) => (
          <div
            key={id}
            className={styles.slider__img}
            style={
              selected === number
                ? { transform: 'scale(1.3)', transition: 'all .5s' }
                : { transform: 'scale(1)', transition: 'all .5s' }
            }
          >
            <span className={styles.slider__description}>{id}</span>
            {image}
          </div>
        ))}
      </div>
      <div className={styles.slider__controls}>
        <div className={styles.slider__control} onClick={moveLeft}>
          <Image width={8} height={15} src={ArrowLeftImg} alt="left" />
        </div>
        <p className={styles.slider__info}>
          {selected}
          <span className={styles.slider__stat}>{`/${images.length}`}</span>
        </p>
        <div className={styles.slider__control} onClick={moveRight}>
          <Image width={8} height={15} src={ArrowRightImg} alt="right" />
        </div>
      </div>
    </section>
  );
}
