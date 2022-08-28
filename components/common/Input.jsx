import React, { useEffect, useState } from 'react';

import styles from './../../styles/Input.module.scss';

const Input = ({ type, name, onChange, value, placeholder, inputStyle }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState(true);

  const handleError = () => {
    if (
      (value?.length > 0 && type !== 'email') ||
      (value?.length > 0 && type === 'email' && /\S+@\S+\.\S+/.test(value))
    ) {
      setError(false);
    } else setError(true);
  };

  const handleBlur = (e) => {
    e.currentTarget.name === name && setIsTouched(true);
  };

  useEffect(() => {
    handleError();
    return setIsTouched(false);
  }, [value]);

  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={onChange}
        style={inputStyle}
        className={styles.input}
      />
      {isTouched && error && (
        <div
          className={styles.input__error}
        >{`${name} is not correct or empty`}</div>
      )}
    </>
  );
};

export default Input;
