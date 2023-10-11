import { Link } from 'react-router-dom';
import SectionPageSecondary from '../../ui/SectionWrappers/SectionPageSecondary';
import classes from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/Spinner/SpinnerMini';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isLoadingLogin } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  return (
    <SectionPageSecondary>
      <div className={classes.login}>
        <div className={classes.login__title}>
          <h2>Login to your account</h2>
          <p>
            In order to use the editing and saving capabilities of this website,
            you will need to login to your account. If you do not have an
            account, registering for an account is free and simple.
          </p>
        </div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form__control}>
            <label className={classes.form__label} htmlFor="username">
              Email:
            </label>
            <div className={classes.form__handle}>
              <input
                className={classes.form__input}
                type="email"
                id="username"
                {...register('email', {
                  required: 'This field is required!',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address!',
                  },
                })}
              />
              {errors?.email && (
                <div className={classes.form__error}>
                  {errors?.email?.message}
                </div>
              )}
            </div>
          </div>
          <div className={classes.form__control}>
            <label className={classes.form__label} htmlFor="password">
              Password:
            </label>
            <div className={classes.form__handle}>
              <input
                className={classes.form__input}
                type="password"
                id="password"
                {...register('password', {
                  required: 'This field is required!',
                })}
              />
              {errors?.password && (
                <div className={classes.form__error}>
                  {errors?.password?.message}
                </div>
              )}
            </div>
          </div>
          <button
            className={classes.form__button}
            type="submit"
            disabled={isLoadingLogin}
          >
            {isLoadingLogin ? <SpinnerMini /> : 'Login'}
          </button>
        </form>
        <div className={classes.signup}>
          <div className={classes.signup__title}>
            You don't have an account?
          </div>
          <Link to="/signup" className={classes.signup__link}>
            Create a new account
          </Link>
        </div>
        <Link to="/" className={classes.home__link}>
          Back to Home Page
        </Link>
      </div>
    </SectionPageSecondary>
  );
}

export default Login;
