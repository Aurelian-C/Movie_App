import classes from './Select.module.css';

function Select({ value, options, onChange }) {
  return (
    <select
      className={`${classes.select} ${classes['select--white']}`}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
