<script setup>
import { defineProps } from 'vue';

defineProps(['article']);
</script>

<template>
    <article class="border-black card p-1 m-1">
        <RouterLink :to="`articles/${article.id}`">{{ article.title }}</RouterLink>
        <p>{{ article.description }}</p>
    </article>
</template> 