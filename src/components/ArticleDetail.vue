<script setup>
import { ref } from 'vue';
import { ARTICLES_API } from '../const/config.js';
import { useRoute } from 'vue-router'

const article = ref({ id: 0, title: '', description: ''});

const route = useRoute()
console.log(route.params.id);
getArticleFromApi(route.params.id);

function getArticleFromApi(idArticle){
  fetch(`${ARTICLES_API}/${idArticle}`).then(response => {
      response.json().then(json => {
          article.value = { id: json.id, title: json.title, description: json.description};
      });
    });
}

</script>

<template>
    <article class="border-black card p-1 m-1">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
    </article>
</template>