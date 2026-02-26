<script setup>
import { COLOR_ERROR } from "@/constants/colors";
import { onMounted, reactive, ref } from "vue";
import { addArticle } from '../services/articleServices';
import { getUsers } from '../services/userService';
import { useRouter } from 'vue-router';

const router = useRouter();
const error = ref('');
const users = ref([]);

const form = reactive({
  title: '',
  description: '',
  userId: 0
});

function handleSubmit() {
    console.log('Form submitted!', form);
    error.value = '';

    if(form.title.length < 3) {
        error.value = 'Title must be at least 3 characters long.';
        return;
    }
    
    if(form.description.length < 10) {
        error.value = 'Description must be at least 10 characters long.';
        return;
    }
    
    if(form.userId <= 0) {
        error.value = 'Author must be selected.';
        return;
    }

    // On émet un événement personnalisé 'addArticle' avec les données du formulaire 
    const article = {
        title: form.title,
        description: form.description,
        userId: form.userId
    }

    addArticle(article);

    // router.push('/');
    router.push({ name: 'home' });
}

onMounted(async () => {
    users.value = await getUsers();
});
</script>

<template>
    <p v-if="error" :style="{ color: COLOR_ERROR }">{{ error }}</p>

    <form @submit.prevent="handleSubmit">
        <div>
            <label>Book title</label><br/>
            <input type="text" v-model="form.title"/>
        </div>

        <div>
            <label>Book description</label><br/>
            <textarea v-model="form.description"></textarea>
        </div>

        <div>
            <label>Author</label><br/>
            <select v-model="form.userId">
                <option value="0">Select an author</option>
                <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.name }}
                </option>
            </select>
        </div>

        <input type="submit" value="Submit" />
    </form> 
</template>

<style scoped></style>
