import classes from './FilterContent.module.css';
import { useState } from 'react';
import Slider from './Slider';
import Keywords from './Keywords';

export default function FilterContent() {
  const [sortIsVisible, setSortIsVisible] = useState(false);
  const [sortTitle, setSortTitle] = useState('None Selected');

  const handleSortTitle = e => {
    const title = String(e.target.textContent);
    setSortTitle(title);
    setSortIsVisible(false);
  };

  const handleSortVisibility = e => {
    const formLists = document.querySelectorAll(
      `.${classes['form__list-item']}`
    );

    const title = document.querySelector(
      `.${classes['form__sort-title']}`
    ).textContent;
    formLists.forEach(list => {
      list.classList.remove(`${classes.selected}`);
      if (list.textContent === title) {
        list.classList.add(`${classes.selected}`);
      }
    });

    if (!sortIsVisible) {
      setSortIsVisible(true);
    } else {
      setSortIsVisible(false);
    }
  };

  let searchClasses = sortIsVisible
    ? classes.form__search
    : `${classes.form__search} hidden`;

  return (
    <>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Show Me</h4>
          <i
            className={`fa-solid fa-circle-question ${classes.form__icon}`}
          ></i>
        </div>
        <div className={classes.form__details}>
          <div className={classes.form__detail}>
            <input type="radio" id="input--everything" name="input__radio" />
            <label htmlFor="input--everything">Everything</label>
          </div>
          <div className={classes.form__detail}>
            <input type="radio" id="input--seen" name="input__radio" disabled />
            <label htmlFor="input--seen">Movies I Haven't Seen</label>
          </div>
          <div className={classes.form__detail}>
            <input
              type="radio"
              id="input--unseen"
              name="input__radio"
              disabled
            />
            <label htmlFor="input--unseen">Movies I Have Seen</label>
          </div>
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Availabilities</h4>
        </div>
        <div className={classes.form__detail}>
          <input type="checkbox" id="input--availabilities" />
          <label htmlFor="input--availabilities">
            Search all availabilities?
          </label>
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Release Dates</h4>
        </div>
        <div className={classes.form__detail}>
          <input type="checkbox" id="input--releases" />
          <label htmlFor="input--releases">Search all releases?</label>
        </div>
        <div className={classes.form__detail}>
          <label htmlFor="input--from-date">from</label>
          <input type="date" id="input--from-date" />
        </div>
        <div className={classes.form__detail}>
          <label htmlFor="input--to-date">to</label>
          <input type="date" id="input--to-date" />
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Genres</h4>
        </div>
        <div className={classes.form__selection}>
          <div className={classes.form__select}>Action</div>
          <div className={classes.form__select}>Adventure</div>
          <div className={classes.form__select}>Animation</div>
          <div className={classes.form__select}>Comedy</div>
          <div className={classes.form__select}>Crime</div>
          <div className={classes.form__select}>Documentary</div>
          <div className={classes.form__select}>Drama</div>
          <div className={classes.form__select}>Family</div>
          <div className={classes.form__select}>Fantasy</div>
          <div className={classes.form__select}>History</div>
          <div className={classes.form__select}>Horror</div>
          <div className={classes.form__select}>Music</div>
          <div className={classes.form__select}>Mystery</div>
          <div className={classes.form__select}>Romance</div>
          <div className={classes.form__select}>Science Fiction</div>
          <div className={classes.form__select}>TV Movie</div>
          <div className={classes.form__select}>Thriller</div>
          <div className={classes.form__select}>War</div>
          <div className={classes.form__select}>Western</div>
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Certification</h4>
        </div>
        <div className={classes.form__selection}>
          <div className={classes.form__select}>NR</div>
          <div className={classes.form__select}>G</div>
          <div className={classes.form__select}>PG</div>
          <div className={classes.form__select}>PG-13</div>
          <div className={classes.form__select}>R</div>
          <div className={classes.form__select}>NC-17</div>
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Language</h4>
          <i
            className={`fa-solid fa-circle-question ${classes.form__icon}`}
          ></i>
        </div>

        <div className={classes.form__sort}>
          <div
            className={classes['form__sort-header']}
            onClick={handleSortVisibility}
          >
            <h5 className={classes['form__sort-title']}>{sortTitle}</h5>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <div className={searchClasses}>
            <div className={classes.form__inputs}>
              <input type="text" className={classes.input__search} />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <ul className={classes.form__languages}>
              <li className={classes.form__language} onClick={handleSortTitle}>
                None Selected
              </li>
              <li className={classes.form__language} onClick={handleSortTitle}>
                English (462,269)
              </li>
              <li className={classes.form__language} onClick={handleSortTitle}>
                French (53,222)
              </li>
              <li className={classes.form__language} onClick={handleSortTitle}>
                German (45,881)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>User Score</h4>
        </div>
        <Slider minValue="0" maxValue="10" stepValue="1" />
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Minim User Votes</h4>
        </div>
        <Slider minValue="0" maxValue="500" stepValue="50" />
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Runtime</h4>
        </div>
        <Slider minValue="0" maxValue="400" stepValue="20" />
      </div>
      <div className={classes.form__section}>
        <div className={classes.form__header}>
          <h4 className={classes.form__title}>Keywords</h4>
        </div>
        <Keywords />
      </div>
    </>
  );
}
