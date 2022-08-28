import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeadlineImg from '../public/Headline.svg';
import ParrotImg from '../public/Parrot.svg';
import LocationImg from '../public/location.svg';
import PowImg from '../public/pows.svg';
import BranchImg from '../public/branch.svg';
import LeafTopLittleImg from '../public/leaf1.svg';
import BigLeaf from '../public/big-leaf.svg';
import MiddleLeaf from '../public/middle-leaf.svg';
import LeafBottomBlue from '../public/leaf-bottom1.svg';
import LeafBottomGreen from '../public/leaf-bottom2.svg';
import HeartImg from '../public/heart.svg';

import styles from '../styles/Subheader.module.scss';

export default function Subheader() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    setValue('');
  };

  return (
    <div className={styles.subheader}>
      <div className={styles.subheader__left}>
        <Image src={HeadlineImg} width={593} height={293} alt="logo" />
        <p className={styles.subheader__text}>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </p>
        <div className={styles.subheader__input}>
          <input
            value={value}
            type="search"
            placeholder="Find the place to help"
            className={styles.subheader__search}
            onChange={handleChange}
          />
          <div className={styles.subheader__location}>
            <Image src={LocationImg} width={14} height={20} alt="logo" />
          </div>
          <button className={styles.subheader__button} onClick={handleSubmit}>
            SEARCH
          </button>
        </div>
      </div>
      <div className={styles.subheader__right}>
        <div className={styles.subheader__parrot}>
          <Image src={ParrotImg} width={305} height={494} alt="parrot" />
          <div className={styles.subheader__topleaf}>
            <Image src={LeafTopLittleImg} width={24} height={47} alt="leaf" />
          </div>
          <div className={styles.subheader__bigleaf}>
            <Image src={BigLeaf} width={129} height={52} alt="leaf" />
          </div>
          <div className={styles.subheader__midleleaf}>
            <Image src={MiddleLeaf} width={53} height={25} alt="leaf" />
          </div>
          <div className={styles.subheader__bottomleafblue}>
            <Image src={LeafBottomBlue} width={49} height={23} alt="leaf" />
          </div>
          <div className={styles.subheader__bottomleafgreen}>
            <Image src={LeafBottomGreen} width={35} height={17} alt="leaf" />
          </div>
        </div>
        <div className={styles.subheader__pows}>
          <Image src={PowImg} width={71} height={109} alt="paw" />
          <Image src={PowImg} width={71} height={109} alt="paw" />
        </div>
        <div className={styles.subheader__branch}>
          <Image src={BranchImg} width={320} height={11} alt="branch" />
        </div>
        <div className={styles.subheader__card}>
          <div className={styles.subheader__heart}>
            <Image src={HeartImg} width={33} height={38} alt="heart" />
          </div>
          <div className={styles.subheader__members}>
            <p className={styles.subheader__title}>Members</p>
            <p className={styles.subheader__number}>29128</p>
          </div>
        </div>
      </div>
    </div>
  );
}
