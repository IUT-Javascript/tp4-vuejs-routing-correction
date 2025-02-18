<script setup>
import { ref } from 'vue';
import { ARTICLES_API } from '../const/config.js';

const title = defineModel('title');
const description = defineModel('description');

const hasError = ref(false);

function addArticle(){
    if(!title.value || !description.value){
        hasError.value = true;
        return;
    }

    const article = {
        title: title.value,
        description: description.value
    }

    console.log('ArticleForm.addArticle', article);
    postArticleToApi(article);

    resetForm();
}

function postArticleToApi(article){    
  fetch(ARTICLES_API,  {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(article)
  }).then();
    
}

function resetForm(){
    title.value = '';
    description.value = '';
    hasError.value = false; 
}
</script>

<template>
    <div v-if="hasError">
        All fields are required !
    </div>

    <form @submit.prevent="addArticle">
        <div>
            <label>Title</label>
            <input type="text" v-model="title"/>
        </div>

        <div>
            <label>Description</label>
            <textarea v-model="description"></textarea>
        </div>

        <button type="submit">Add</button>
    </form>
</template>