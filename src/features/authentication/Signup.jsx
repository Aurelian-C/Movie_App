import classes from './Signup.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSignup } from './useSignup';
import SectionPagePrimary from '../../ui/SectionWrappers/SectionPagePrimary';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { signup, isLoadingSignup } = useSignup();

  const onSubmit = data => {
    const formObject = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    signup(formObject);
  };

  return (
    <SectionPagePrimary>
      <div className={classes.signin}>
        <div className={classes.signin__title}>
          <h2>Sign up for an account</h2>
          <p>
            Signing up for an account is free and easy. Fill out the form below
            to get started.
          </p>
        </div>

        <div className={classes.signin__social}>
          <div className={classes.signin__info}>
            <div className={classes.signin__benefits}>
              Benefits of having an account
            </div>
            <ul className={classes.signin__list}>
              <li>Keep track of your watched movies and TV shows</li>
              <li>Build a list of favorites</li>
              <li>Create and edit custom lists</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.form__control}>
              <label>First name</label>
              <input
                type="text"
                {...register('firstName', {
                  required: 'This field is required!',
                  validate: value =>
                    value.trim() !== '' || 'You type only spaces!',
                })}
              />
              {errors?.firstName && (
                <div className={classes.form__error}>
                  {errors?.firstName?.message}
                </div>
              )}
            </div>

            <div className={classes.form__control}>
              <label>Last name</label>
              <input
                type="text"
                {...register('lastName', {
                  required: 'This field is required!',
                  validate: value =>
                    value.trim() !== '' || 'You type only spaces!',
                })}
              />
              {errors?.lastName && (
                <div className={classes.form__error}>
                  {errors?.lastName?.message}
                </div>
              )}
            </div>

            <div className={classes.form__control}>
              <label>Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'This field is required!',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
                })}
              />
              {errors?.email && (
                <div className={classes.form__error}>
                  {errors?.email?.message}
                </div>
              )}
            </div>

            <div className={classes.form__control}>
              <label>Password (6 characters minimum)</label>
              <input
                type="password"
                {...register('password', {
                  required: 'This field is required!',
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters',
                  },
                })}
              />
              {errors?.password && (
                <div className={classes.form__error}>
                  {errors?.password?.message}
                </div>
              )}
            </div>
            <div className={classes.form__control}>
              <label>Password confirm</label>
              <input
                type="password"
                {...register('passwordConfirm', {
                  required: 'This field is required!',
                  validate: value =>
                    value === getValues().password ||
                    'The passwords do not match',
                })}
              />
              {errors?.passwordConfirm && (
                <div className={classes.form__error}>
                  {errors?.passwordConfirm?.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={classes.form__button}
              disabled={isLoadingSignup}
            >
              Sign In
            </button>
          </form>
        </div>

        <Link to="/" className={classes.home__link}>
          Back to Home Page
        </Link>
      </div>
    </SectionPagePrimary>
  );
}

export default Signup;
