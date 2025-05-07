<template>
    <div class="plat-item">
        <!-- Slot pour ajouter un badge ou autre élément sur le plat -->
        <div class="badge-container">
            <slot name="badge"></slot>
        </div>

        <h3>{{ plat.nom }}</h3>
        <p>{{ plat.description }}</p>

        <!-- Slot par défaut pour personnaliser le contenu -->
        <slot>
            <p class="prix">{{ plat.prix }}€</p>
        </slot>

        <!-- Slot pour personnaliser le bouton d'action -->
        <slot name="action">
            <CustumButton @click="ajouterAuPanier">Ajouter au panier</CustumButton>
        </slot>
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
    position: relative;
}

.badge-container {
    position: absolute;
    top: 0;
    right: 0;
}

.prix {
    font-weight: bold;
    color: #26b3c6;
    font-size: 1.2em;
}
</style>