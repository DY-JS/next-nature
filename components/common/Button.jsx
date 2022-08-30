import styles from './../../styles/Button.module.scss';

export default function Button({
  type = 'button',
  onSubmit = null,
  buttonStyle = null,
  disabled,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onSubmit}
      style={buttonStyle}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
}
