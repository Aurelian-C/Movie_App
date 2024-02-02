import classes from './Signup.module.css';
import ToastSignupMessage from '../../ui/Toast/ToastSignupMessage';
import SpinnerMini from '../../ui/Spinner/SpinnerMini';
import TooltipPassword from '../../ui/Tooltip/TooltipPassword';

import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';
import { useSignup } from './useSignup';

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SectionPagePrimary from '../../ui/SectionWrappers/SectionPagePrimary';

function Signup() {
  const [inputTypeText, setInputTypeText] = useState(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm();
  const passwordInput = useWatch({ control, name: 'password' });

  const { signup, isLoadingSignup } = useSignup();

  const onSubmit = data => {
    const formObject = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
    };

    signup(formObject, {
      onSuccess: () =>
        toast(t => <ToastSignupMessage toastObject={t} />, {
          icon: null,
          duration: 30000,
          id: 'signup-confirmation-message',
        }),
    });
  };

  return (
    <SectionPagePrimary>
      {' '}
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
              <li>
                Salvează ultimele vizualizări pentru a relua citirea Bibliei de
                la ultima salvare
              </li>
              <li>Create and edit custom lists</li>
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <div className={classes.form__control}>
                <label>First Name</label>
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
                <label>Last Name</label>
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
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email',
                    },
                  })}
                />
                {errors?.email && (
                  <div className={classes.form__error}>
                    {errors?.email?.message}
                  </div>
                )}
              </div>

              <div className={classes.form__control}>
                <TooltipPassword
                  password={passwordInput}
                  inputPasswordFocus={inputPasswordFocus}
                />
                <label>Password</label>
                <div className={classes.form__input}>
                  <input
                    type={inputTypeText ? 'text' : 'password'}
                    onFocus={() => setInputPasswordFocus(true)}
                    {...register('password', {
                      onBlur: () => setInputPasswordFocus(false),
                      required: 'This field is required!',
                      minLength: {
                        value: 8,
                        message:
                          'The password must contain at least 8 characters',
                      },
                      control: control,
                    })}
                  />
                  <i
                    className={`fa-solid ${
                      inputTypeText ? 'fa-eye-slash' : 'fa-eye'
                    }`}
                    onClick={() => setInputTypeText(!inputTypeText)}
                  ></i>
                </div>
                {errors?.password && (
                  <div className={classes.form__error}>
                    {errors?.password?.message}
                  </div>
                )}
              </div>

              <div className={classes.form__control}>
                <label>Confirm password</label>
                <input
                  type={inputTypeText ? 'text' : 'password'}
                  {...register('passwordConfirm', {
                    required: 'This field is required!',
                    validate: value =>
                      value === getValues().password ||
                      'Passwords do NOT MATCH!',
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
                {isLoadingSignup ? <SpinnerMini /> : 'Sing In'}
              </button>
            </form>
          </div>
        </div>

        <Link to="/login" className={classes.home__link}>
          Back
        </Link>
      </div>
    </SectionPagePrimary>
  );
}

export default Signup;
