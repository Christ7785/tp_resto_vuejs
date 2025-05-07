<template>
    <div class="commande-item">
        <h3>Commande #{{ commande.id }}</h3>
        <div class="client-info">
            <p><strong>Client:</strong> {{ commande.nomClient }}</p>
        </div>
        <div class="plats-commandes">
            <h4>Plats commandés:</h4>
            <ul>
                <li v-for="(plat, index) in commande.plats" :key="index">
                    {{ plat.nom }} x{{ plat.quantite }} - {{ plat.prix * plat.quantite }}€
                </li>
            </ul>
        </div>
        <div class="total">
            <p><strong>Total:</strong> {{ calculerTotal() }}€</p>
        </div>
        <button class="btn-pret" :class="{ 'prete': commande.prete }" @click="marquerPrete">
            {{ commande.prete ? 'Commande prête' : 'Marquer comme prête' }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'CommandeItem',
    props: {
        commande: {
            type: Object,
            required: true
        }
    },
    methods: {
        calculerTotal() {
            return this.commande.plats.reduce((total, plat) => {
                return total + (plat.prix * plat.quantite)
            }, 0).toFixed(2)
        },
        marquerPrete() {
            this.$emit('marquer-prete', this.commande.id)
        }
    }
}
</script>

<style scoped>
.commande-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

h3 {
    color: #26b3c6;
    margin-top: 0;
}

.plats-commandes ul {
    list-style-type: none;
    padding-left: 0;
}

.plats-commandes li {
    margin-bottom: 0.5rem;
}

.total {
    font-weight: bold;
    margin-top: 1rem;
}

.btn-pret {
    background-color: #26b3c6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
}

.prete {
    background-color: #4CAF50;
}
</style>