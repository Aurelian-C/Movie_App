import classes from './MotionPictureProductionCompanies.module.css';
import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import { useContext } from 'react';
import { ModeDarkContext } from '../../store/dark-mode';

export default function MotionPictureProductionCompanies({ motion }) {
  const darkModeContext = useContext(ModeDarkContext);

  let invert = { filter: 'none' };
  if (darkModeContext.darkMode) {
    invert = { filter: 'invert()' };
  }

  return (
    <SectionPageSecondary>
      <h2>Production companies</h2>
      <div className={classes.production}>
        <div className={classes.production__companies}>
          {motion.production_companies.map(company => (
            <div key={company.id} className={classes.production__company}>
              <img src={company.logo_path} alt={company.name} style={invert} />
              <h3>{company.name}</h3>
              <h4>{company.origin_country}</h4>
            </div>
          ))}
        </div>
      </div>
    </SectionPageSecondary>
  );
}
