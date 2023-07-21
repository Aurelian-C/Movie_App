import classes from './SectionPagePrimary.module.css';

export default function SectionPagePrimary({ className, children }) {
  return (
    <section className={`${classes.section} ${className}`}>{children}</section>
  );
}
