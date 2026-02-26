<script setup>
import { getArticleById } from '@/services/articleServices';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // useRoute est un composable de Vue Router qui permet d'accéder aux informations de la route actuelle, y compris les paramètres de l'URL.
const router = useRouter();
const articleId = route.params.idArticle; // On récupère l'ID de l'article depuis les paramètres de la route
const article = ref();

onMounted(async () => {
    try{
        article.value = await getArticleById(articleId); // On récupère les détails de l'article en utilisant l'ID et on met à jour la valeur de article   
    }
    catch(error) {
        console.error('Article not found with ID:', articleId);
        // Rediriger vers la page d'article non trouvé
        router.push({ name: 'articleNotFound' });
    }
})
</script>

<template>
    <div v-if="article">
        <h1>"{{ article.title }}" created by user {{ article.userId }}</h1>

        <p>{{ article.description }}</p>
    </div>
    <div v-else>
        <p>Loading article details...</p>
    </div>
</template>