import styles from '../styles/CardTemplate.module.scss';

export default function CardTemplate({
  title,
  text,
  flex,
  background,
  transform,
  position,
  zIndex,
}) {
  return (
    <div
      className={styles.template}
      style={{
        transform: transform,
        flex: flex,
        background: background,
        zIndex: zIndex,
        position: position,
      }}
    >
      <div className={styles.template__article}>
        <p className={styles.template__name}>{title}</p>
        <p className={styles.template__text}>{text}</p>
      </div>
      <div className={styles.template__white}>
        <div className={styles.template__shadow}></div>
      </div>
    </div>
  );
}
