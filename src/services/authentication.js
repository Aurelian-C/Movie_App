import { supabase } from './supabase';

export async function signUp({ firstName, lastName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// If user is already authenticated, get the JSON object for the logged in user
export async function getCurrentUser() {
  // 1. Get the user credentials from local storage
  const { data: session, error } = await supabase.auth.getSession(); // this method retrieves the current local session (i.e local storage).
  if (!session.session) return null;

  // 2. If there is a session on the local storage, get (re-fetch) the user credential from Supabase.
  // You might think that we could just get the user credentials from the local storage. While that is true, it is a bit more secure to just redownload everything from Supabase
  const { data } = await supabase.auth.getUser(); //

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

// Logout
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
