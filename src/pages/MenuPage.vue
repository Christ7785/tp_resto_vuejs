<template>
    <div class="menu-page">
        <h1>Notre Menu</h1>
        <div class="notification" v-if="showNotification">
            <p>{{ notificationMessage }}</p>
        </div>
        <div class="plats-container">
            <PlatItem v-for="plat in plats" :key="plat.id" :plat="plat" @ajouter-au-panier="ajouterAuPanier">
                <template v-slot:badge v-if="plat.nouveau">
                    <span class="badge-nouveau">Nouveau</span>
                </template>
            </PlatItem>
        </div>
    </div>
</template>

<script>
import PlatItem from '../components/PlatItem.vue'

export default {
    name: 'MenuPage',
    components: {
        PlatItem
    },
    data() {
        return {
            plats: [
                {
                    id: 1,
                    nom: 'Salade César',
                    description: 'Salade romaine, croûtons, parmesan, sauce césar',
                    prix: 12.90,
                    nouveau: false
                },
                {
                    id: 2,
                    nom: 'Steak Frites',
                    description: 'Steak de bœuf, frites maison, sauce au choix',
                    prix: 18.90,
                    nouveau: true
                },
                {
                    id: 3,
                    nom: 'Pâtes Carbonara',
                    description: 'Pâtes fraîches, lardons, crème, parmesan',
                    prix: 14.90,
                    nouveau: false
                }
            ],
            showNotification: false,
            notificationMessage: '',
            platsDansLePanier: 0
        }
    },
    methods: {
        ajouterAuPanier(plat) {
            this.$emit('ajouter-au-panier', plat)
            this.notificationMessage = `${plat.nom} a été ajouté au panier !`
            this.showNotification = true
            this.platsDansLePanier++

            setTimeout(() => {
                this.showNotification = false
            }, 3000)
        }
    },
    watch: {
        platsDansLePanier: function (newCount, oldCount) {
            console.log(`Nombre de plats dans le panier: ${newCount} (précédemment ${oldCount})`)
        }
    },
    mounted() {
        console.log('Le composant MenuPage est monté')
    }
}
</script>

<style scoped>
.menu-page {
    padding: 2rem;
    position: relative;
}

.plats-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #26b3c6;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
}

.badge-nouveau {
    background-color: #ff6b6b;
    color: white;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    position: absolute;
    top: -10px;
    right: -10px;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>