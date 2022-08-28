import Link from 'next/link';
import Button from './common/Button';
import ActionItem from './ActionItem';

import styles from '../styles/Actions.module.scss';

export default function Actions() {
  const items = [
    {
      id: 1,
      title: 'What can I do to protect our planet?',
      text:
        'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
    {
      id: 2,
      title: 'How to save nature ecology?',
      text:
        'We engage in an experiment that is certain to fail. The gigantic experiment is running worldwide and is based on the hypothesis that unlimited growth is possible on a limited planet.',
    },
    {
      id: 3,
      title: 'What is nature conservation?',
      text:
        'Nature conservation is the moral philosophy and conservation movement focused on protecting species from extinction, maintaining and restoring habitats, enhancing ecosystem services, and protecting biological diversity.',
    },
  ];
  return (
    <section className={styles.actions}>
      <div className={styles.actions__getstarted}>
        <p className={styles.actions__title}>Ready to Get started?</p>
        <p className={styles.actions__text}>
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <div className={styles.actions__button}>
          <Button type="button">
            <Link href={'/'}>
              <a>CONTACT US</a>
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.actions__info}>
        {items.map(({ id, title, text }) => (
          <ActionItem key={id} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}
