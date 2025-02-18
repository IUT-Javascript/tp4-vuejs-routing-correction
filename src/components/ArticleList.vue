<script setup>
import { ref } from 'vue';
import { ARTICLES_API } from '../const/config.js';
import ArticleCard from './ArticleCard.vue';

const articles = ref([]);
getArticlesFromApi();

function getArticlesFromApi(){
  fetch(ARTICLES_API).then(response => {
      response.json().then(json => {
          json.forEach(a => {
            const article = { id: a.id, title: a.title, description: a.description};
            articles.value.push(article);
        });
      });
    });
}
</script>

<template>
    <h3 v-if="articles.length">There are {{ articles.length }} articles</h3>

    <ArticleCard v-if="articles.length" v-for="article in articles" 
                    :key="article.title" 
                    :article="article"/>  
                    
    <h3 v-else>
        No articles
    </h3>
</template>