import classes from './SectionGrid.module.css';

export default function SectionGrid({ sectionTitle, children }) {
  return (
    <section className={classes.section}>
      <div className={classes.section__container}>
        <h2 className={classes.section__title}>{sectionTitle}</h2>
        <div className={classes.section__cards}>{children}</div>
      </div>
    </section>
  );
}