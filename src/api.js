
import axios from 'axios';

const API_KEY = 'c2a49959fbf84b42a0690592e15e1956'; 
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = '', page = 1) => {
  const url = `${BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&pageSize=10&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
