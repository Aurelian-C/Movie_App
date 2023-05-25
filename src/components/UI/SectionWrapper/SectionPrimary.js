import classes from './SectionPrimary.module.css';

export default function SectionPrimary({ className, children }) {
  return (
    <section className={`${classes.section} ${className}`}>{children}</section>
  );
}
