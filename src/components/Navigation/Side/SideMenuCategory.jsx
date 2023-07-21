import { useState } from 'react';
import classes from './SideMenuCategory.module.css';
import { Link } from 'react-router-dom';

export default function SideMenuCategory({
  categoryTitle,
  categoryData,
  onHideSideMenu,
}) {
  const [visible, setVisible] = useState(false);

  const hidden = visible ? '' : 'hidden';

  function handleContainerVisibility() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <li className={classes['dropdown-menu__item']}>
      <h3
        className={classes['dropdown-menu__title']}
        onClick={handleContainerVisibility}
      >
        {categoryTitle}
      </h3>
      <ul className={`${classes['dropdown-menu__container-extras']} ${hidden}`}>
        {categoryData.map((item, idx) => {
          return (
            <li className={classes['dropdown-menu__extra']} key={idx}>
              <Link to={item.url} onClick={onHideSideMenu}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
