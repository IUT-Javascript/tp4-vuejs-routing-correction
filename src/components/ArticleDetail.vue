<script setup>
import { ref } from 'vue';
import { ARTICLES_API } from '../const/config.js';
import { useRoute, useRouter } from 'vue-router'

const article = ref({ id: 0, title: '', description: ''});

const route = useRoute();
const router = useRouter();

console.log(route.params.id);
getArticleFromApi(route.params.id);

function getArticleFromApi(idArticle){
  fetch(`${ARTICLES_API}/${idArticle}`).then(response => {
      response.json().then(json => {
          article.value = { id: json.id, title: json.title, description: json.description};
      });
    });
}

function deleteArticle(){
    fetch(`${ARTICLES_API}/${article.value.id}`,  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
  }).then(response => {
    if(response.ok){
        //router.push({ path: '/' });
        router.push({ name: 'list' });
    }
  });
}

</script>

<template>
    <article class="border-black card p-1 m-1">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>

        <button @click="deleteArticle">Delete</button>
    </article>
</template>