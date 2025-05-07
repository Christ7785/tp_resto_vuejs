<template>
    <div class="not-found">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>Désolé, la page que vous recherchez n'existe pas.</p>
        <CustumButton @click="retourAccueil">Retour à l'accueil</CustumButton>
    </div>
</template>

<script>
import CustumButton from '../components/CustumButton.vue'

export default {
    name: 'NotFound',
    components: {
        CustumButton
    },
    methods: {
        retourAccueil() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.not-found {
    text-align: center;
    padding: 2rem;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.not-found h1 {
    font-size: 6rem;
    color: #26b3c6;
    margin: 0;
    line-height: 1;
}

.not-found h2 {
    font-size: 2rem;
    color: #333;
    margin: 1rem 0;
}

.not-found p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
}
</style> 