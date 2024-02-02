import classes from './UpdateUser.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import TooltipPassword from '../../ui/Tooltip/TooltipPassword';
import { updateUserEmailOrPassword } from '../../services/apiUsers';
import useUpdateEmailOrPassword from './useUpdateEmailOrPassword';
import SpinnerMini from '../../ui/Spinner/SpinnerMini';

function UpdateUserPassword() {
  const [inputTypeText, setInputTypeText] = useState(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState(false);
  const { updateEmailOrPassword, isLoadingUpdateEmailOrPassword } =
    useUpdateEmailOrPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm();
  const passwordInput = useWatch({ control, name: 'password' });

  const onSubmit = data => {
    const password = data.password.trim();
    updateEmailOrPassword(password);
  };

  return (
    <div className={classes.user}>
      <div className={classes.user__title}>Change account password</div>
      <form className={classes.user__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.user__row}>
          <div>New password</div>
          <div className={classes.user__column}>
            <TooltipPassword
              password={passwordInput}
              inputPasswordFocus={inputPasswordFocus}
            />
            <div className={classes.user__password}>
              <input
                className={classes.user__input}
                type={inputTypeText ? 'text' : 'password'}
                onFocus={() => setInputPasswordFocus(true)}
                {...register('password', {
                  onBlur: () => setInputPasswordFocus(false),
                  required: 'This field is required!',
                  minLength: {
                    value: 8,
                    message: 'The new password must contain 8 characters',
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
              <div className={classes.user__error}>
                {errors?.password?.message}
              </div>
            )}
          </div>
        </div>

        <div className={classes.user__row}>
          <div>Confirm new password</div>
          <div className={classes.user__column}>
            <input
              className={classes.user__input}
              type={inputTypeText ? 'text' : 'password'}
              {...register('passwordConfirm', {
                required: 'This field is required!',
                validate: value =>
                  value === getValues().password || 'Passwords do NOT MATCH!',
              })}
            />
            {errors?.passwordConfirm && (
              <div className={classes.user__error}>
                {errors?.passwordConfirm?.message}
              </div>
            )}
          </div>
        </div>

        <div className={classes.user__buttons}>
          <button
            type="reset"
            className={`${classes.user__button} ${classes['user__button--reset']}`}
          >
            Reset
          </button>
          <button
            type="submit"
            className={`${classes.user__button} ${classes['user__button--update']}`}
            disabled={isLoadingUpdateEmailOrPassword}
          >
            {isLoadingUpdateEmailOrPassword ? (
              <SpinnerMini />
            ) : (
              'Change password'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserPassword;
