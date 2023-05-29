import classes from './SectionSecondary.module.css';

export default function SectionSecondary({ className, children }) {
  return (
    <section className={`${classes.section} ${className}`}>
      <div className={classes.division}>{children}</div>
    </section>
  );
}
