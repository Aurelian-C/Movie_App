import classes from './SectionPageSecondary.module.css';

export default function SectionPageSecondary({ className, children }) {
  return (
    <section className={`${classes.section} ${className}`}>
      <div className={classes.division}>{children}</div>
    </section>
  );
}
