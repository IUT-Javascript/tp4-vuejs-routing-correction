import { createWebHistory, createRouter } from 'vue-router';
import ArticleList from './components/ArticleList.vue';
import ArticleForm from './components/ArticleForm.vue';

const routes = [
  { name: 'home', path: '/', component: ArticleList },
  { name: 'addArticle', path: '/articles/add', component: ArticleForm },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});