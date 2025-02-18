import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import ArticleList from './components/ArticleList.vue'
import ArticleForm from './components/ArticleForm.vue'
import ArticleDetail from './components/ArticleDetail.vue'

const routes = [
    { path: '/', component: ArticleList, name: 'list' },
    { path: '/articles/add', component: ArticleForm },
    { path: '/articles/:id', component: ArticleDetail },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App)
    .use(router)
    .mount('#app')