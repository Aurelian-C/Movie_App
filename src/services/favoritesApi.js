import { supabase } from './supabase';

export async function addToFavorites({
  id,
  title,
  vote_average,
  release_date,
  genres,
  backdrop_path,
  poster_path,
  overview,
  runtime,
  user_id,
}) {
  const { data, error } = await supabase
    .from('favorites')
    .insert([
      {
        id,
        title,
        vote_average,
        release_date,
        genres,
        backdrop_path,
        poster_path,
        overview,
        runtime,
        user_id,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getFavorites() {
  const { data, error } = await supabase.from('favorites').select('*');

  if (error) throw new Error(error.message);

  return data;
}

export async function removeFavorite(id) {
  const { error } = await supabase.from('favorites').delete().eq('id', id);

  if (error) throw new Error(error.message);
}
