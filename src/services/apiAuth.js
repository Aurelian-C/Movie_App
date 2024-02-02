import { supabase } from './supabase';

// Signup
export async function signUp({ firstName, lastName, email, password }) {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (signUpError) throw new Error(signUpError.message);

  return signUpData;
}

// Login
export async function login({ email, password }) {
  const { data: credentials, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { user } = credentials;

  await supabase
    .from('users_regular')
    .upsert({
      user_id: user.id,
      first_name: user.user_metadata.firstName,
      last_name: user.user_metadata.lastName,
    })
    .select();

  return credentials;
}

// Logout
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

// Reset forgot password
export async function resetForgotPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://biblia-online.ro/cont/setari/schimbare-parola',
  });

  if (error) return { authData: data, authError: error };

  return { authData: data, authError: error };
}

// User credentials
export async function getUser() {
  // A user can have an account that is NOT CONFIRMED
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();
  if (!session.session) return { user: null, session: null };

  const { data } = await supabase.auth.getUser();

  if (sessionError) throw new Error(sessionError?.message);

  return { user: data?.user, session: session?.session };
}

// Delete user account
export async function deleteUser() {
  // 1. See if the user has an active session
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (!session.session || sessionError) throw new Error(sessionError.message);

  throw Error();

  //   const { error } = await supabase.rpc('delete_user_account');
  //   if (error) throw new Error(error?.message);
}
