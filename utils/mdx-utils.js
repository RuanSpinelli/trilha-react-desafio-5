import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts?select=*'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
  try {
    const { data, error } = await api.get(`/posts?id=eq.${id}`);

    if (error) {
      console.error('Erro ao buscar o post:', error);
      return {};
    }

    return data?.[0] || {}; // retorna o primeiro post (espera-se que venha só 1)
  } catch (err) {
    console.error('Erro inesperado ao buscar o post:', err);
    return {};
  }
}