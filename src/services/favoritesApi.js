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
  media_type,
  user_id,
}) {
  const { data, error } = await supabase
    .from('favorites')
    .insert([
      {
        id,
        title,
        vote_average,
        release_date: new Date(release_date),
        genres,
        backdrop_path,
        poster_path,
        overview,
        runtime,
        media_type,
        user_id,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getFavorites(category, sortBy, order) {
  let url = supabase.from('favorites');

  if (category === 'all' || !category) {
    url = url.select('*');
  }

  if (category === 'movie' || category === 'tv') {
    url = url.select('*').eq('media_type', category);
  }

  const { data, error } = await url.order(sortBy, {
    ascending: order === 'ascending',
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function removeFavorite(id) {
  const { error } = await supabase.from('favorites').delete().eq('id', id);

  if (error) throw new Error(error.message);
}
