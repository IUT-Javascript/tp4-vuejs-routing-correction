import { createWebHistory, createRouter } from 'vue-router';
import ArticleList from './components/ArticleList.vue';
import ArticleForm from './components/ArticleForm.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import NotFound from './components/NotFound.vue';
import ArticleNotFound from './components/ArticleNotFound.vue';

const routes = [
  { name: 'home', path: '/', component: ArticleList },
  { name: 'addArticle', path: '/articles/add', component: ArticleForm },
  { name: 'articleNotFound', path: '/articles/not-found', component: ArticleNotFound },
  { name: 'article', path: '/articles/:idArticle', component: ArticleDetail },
  { name: 'notFound', path: '/:pathMatch(.*)', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});