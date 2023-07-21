import { Link, useLocation } from 'react-router-dom';
import classes from './SectionGrid.module.css';

export default function SectionGrid({
  sectionTitle,
  includeCast = false,
  children,
}) {
  const { pathname } = useLocation();

  return (
    <section className={classes.section}>
      <div className={classes.section__container}>
        <div className={classes.section__actions}>
          <h2 className={classes.section__title}>{sectionTitle}</h2>
          {includeCast && (
            <Link to={`${pathname}/cast`} className={classes.section__anchor}>
              Full Cast & Crew
            </Link>
          )}
        </div>
        <div className={classes.section__cards}>{children}</div>
      </div>
    </section>
  );
}
