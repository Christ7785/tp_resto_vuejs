<template>
    <div class="plat-item">
        <h3>{{ plat.nom }}</h3>
        <p>{{ plat.description }}</p>
        <p class="prix">{{ plat.prix }}€</p>
        <CustumButton @click="ajouterAuPanier">Ajouter au panier</CustumButton>
    </div>
</template>

<script>
import CustumButton from './CustumButton.vue'

export default {
    name: 'PlatItem',
    components: {
        CustumButton
    },
    props: {
        plat: {
            type: Object,
            required: true
        }
    },
    methods: {
        ajouterAuPanier() {
            this.$emit('ajouter-au-panier', this.plat)
        }
    }
}
</script>

<style scoped>
.plat-item {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    background-color: white;
}

.prix {
    font-weight: bold;
    color: #26b3c6;
    font-size: 1.2em;
}
</style> 