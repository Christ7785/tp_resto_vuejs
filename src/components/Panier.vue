<template>
    <div class="panier">
        <h2>Votre Panier</h2>
        <div v-if="plats.length === 0" class="panier-vide">
            Votre panier est vide
        </div>
        <div v-else>
            <div v-for="(plat, index) in plats" :key="index" class="panier-item">
                <div class="plat-info">
                    <h3>{{ plat.nom }}</h3>
                    <p>{{ plat.prix }}€</p>
                </div>
                <div class="quantite">
                    <button @click="diminuerQuantite(index)">-</button>
                    <span>{{ plat.quantite }}</span>
                    <button @click="augmenterQuantite(index)">+</button>
                </div>
                <button class="supprimer" @click="supprimerPlat(index)">Supprimer</button>
            </div>
            <div class="total" :class="{ 'total-change': totalChanged }">
                Total: {{ total }}€
            </div>
            <CustumButton @click="finaliserCommande">Finaliser la commande</CustumButton>
        </div>
    </div>
</template>

<script>
import CustumButton from './CustumButton.vue'

export default {
    name: 'Panier',
    components: {
        CustumButton
    },
    props: {
        plats: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            totalChanged: false,
            lastTotal: 0
        }
    },
    computed: {
        total() {
            return this.plats.reduce((acc, plat) => acc + (plat.prix * plat.quantite), 0).toFixed(2)
        }
    },
    methods: {
        augmenterQuantite(index) {
            this.$emit('modifier-quantite', { index, changement: 1 })
        },
        diminuerQuantite(index) {
            if (this.plats[index].quantite > 1) {
                this.$emit('modifier-quantite', { index, changement: -1 })
            }
        },
        supprimerPlat(index) {
            this.$emit('supprimer-plat', index)
        },
        finaliserCommande() {
            this.$emit('finaliser-commande')
        }
    },
    watch: {
        total: function (newTotal, oldTotal) {
            if (oldTotal && newTotal !== oldTotal) {
                this.totalChanged = true
                this.lastTotal = oldTotal

                setTimeout(() => {
                    this.totalChanged = false
                }, 300)
            }
        }
    },
    mounted() {
        console.log('Le composant Panier est monté')
    }
}
</script>

<style scoped>
.panier {
    padding: 1rem;
    background-color: #b8f4d6;
    border-radius: 8px;
}

.panier-vide {
    text-align: center;
    padding: 2rem;
    color: #666;
}

.panier-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
}

.plat-info {
    flex: 1;
}

.quantite {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.quantite button {
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
}

.supprimer {
    color: red;
    background: none;
    border: none;
    cursor: pointer;
}

.total {
    text-align: right;
    font-weight: bold;
    font-size: 1.2em;
    margin: 1rem 0;
    transition: color 0.3s ease;
}

.total-change {
    color: #ff6b6b;
    animation: pulse 0.3s ease;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>