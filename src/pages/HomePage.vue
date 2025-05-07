<template>
    <div class="home-page">
        <h1>Le Restaurant Vue</h1>
        <p class="description">
            Bienvenue dans notre restaurant gastronomique, pour des plat gastronomique
        </p>
        <CustumButton @click="allerAuMenu">Voir le Menu</CustumButton>
    </div>
</template>

<script>
import CustumButton from '../components/CustumButton.vue'

export default {
    name: 'HomePage',
    components: {
        CustumButton
    },
    methods: {
        allerAuMenu() {
            this.$router.push('/menu')
        }
    }
}
</script>

<style scoped>
.home-page {
    text-align: center;
    padding: 2rem;
}

.description {
    max-width: 600px;
    margin: 2rem auto;
    line-height: 1.6;
}
</style> 