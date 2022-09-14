import Link from 'next/link';

// styles
import styles from './NavbarModalItem.module.scss';

type NavbarItem = {
  name: string;
  link: string;
};

type Props = {
  navItem: NavbarItem;
  onCloseModal: () => void;
};

export const NavbarModalItem = ({ navItem, onCloseModal }: Props) => {
  const { link, name } = navItem;
  return (
    <li className={styles.list_item}>
      <Link href={link}>
        <a onClick={onCloseModal}>{name}</a>
      </Link>
    </li>
  );
};
