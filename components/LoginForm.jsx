import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrownLeaf from '../public/BrownLeaf.png';
import BlueLeaf from '../public/BlueLeaf.png';
import Input from './common/Input';
import Button from './common/Button';

import styles from '../styles/Form.module.scss';

export default function LoginForm() {
  const initialInputs = {
    name: '',
    email: '',
  };
  const [inputs, setInputs] = useState(initialInputs);
  const inputStyle = { paddingLeft: '24px' };
  //const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setInputs((current) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setInputs(initialInputs);
  };

  return (
    <section className={styles.form}>
      <div className={styles.form__getstarted}>
        <p className={styles.form__title}>Get started today!</p>
        <p className={styles.form__text}>
          Learn more about how you can save our planet's nature. From smart
          consumption to switching to renewable energy, each of us can do our
          part to save the planet.
        </p>
      </div>

      <div className={styles.form__formblock}>
        <div className={styles.form__form}>
          <div className={styles.form__brownleaf}>
            <Image src={BrownLeaf} width={73} height={45} alt="leaf" />
          </div>
          <div className={styles.form__blueleaf}>
            <Image src={BlueLeaf} width={31} height={16} alt="leaf" />
          </div>
          <p className={styles.form__formtitle}>Login</p>
          <div className={styles.form__input}>
            <Input
              name="name"
              value={inputs.name}
              type="text"
              placeholder="Name"
              inputStyle={inputStyle}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__input}>
            <Input
              name="email"
              value={inputs.email}
              type="email"
              placeholder="Email"
              inputStyle={inputStyle}
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__button}>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              disabled={Object.values(inputs).some((v) => v === '')}
            >
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
