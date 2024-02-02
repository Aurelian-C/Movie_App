import classes from './UpdateUser.module.css';

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function UpdateUserEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  function onSubmit(data) {
    toast.error('This functionality is currently not enabled!', {
      id: 'form-change-user-data',
      duration: 3000,
    });
  }

  return (
    <div>
      <div className={classes.user}>
        <div className={classes.user__title}>Change account email</div>
        <form className={classes.user__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.user__extra}>
            *If you want to change your email address, enter the new address in
            the field below. Before you can log back into your account, you will
            receive an activation link on the new email address. If you will not
            confirm the new email address, access to the account will be
            restricted.
          </div>
          <div className={classes.user__row}>
            <div>Email address</div>
            <div className={classes.user__column}>
              <input
                className={classes.user__input}
                type="email"
                {...register('email', {
                  required: 'This field is required!',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Email nevalid' },
                })}
              />
              {errors?.email && (
                <div className={classes.user__error}>
                  {errors?.email?.message}
                </div>
              )}
            </div>
          </div>
          <div className={classes.user__row}>
            <div>Confirm email address</div>
            <div className={classes.user__column}>
              <input
                className={classes.user__input}
                type="email"
                {...register('emailConfirm', {
                  required: 'This field is required!',
                  validate: value =>
                    value === getValues().email ||
                    'The email does not match the one above',
                })}
              />
              {errors?.emailConfirm && (
                <div className={classes.user__error}>
                  {errors?.emailConfirm?.message}
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
            >
              Change email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserEmail;
