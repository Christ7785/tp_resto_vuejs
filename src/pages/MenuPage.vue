<template>
    <div class="menu-page">
        <h1>Notre Menu</h1>
        <div class="plats-container">
            <PlatItem 
                v-for="plat in plats" 
                :key="plat.id" 
                :plat="plat"
                @ajouter-au-panier="ajouterAuPanier"
            />
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
                    prix: 12.90
                },
                {
                    id: 2,
                    nom: 'Steak Frites',
                    description: 'Steak de bœuf, frites maison, sauce au choix',
                    prix: 18.90
                },
                {
                    id: 3,
                    nom: 'Pâtes Carbonara',
                    description: 'Pâtes fraîches, lardons, crème, parmesan',
                    prix: 14.90
                }
            ]
        }
    },
    methods: {
        ajouterAuPanier(plat) {
            this.$emit('ajouter-au-panier', plat)
            alert(`${plat.nom} a été ajouté au panier !`)
        }
    }
}
</script>

<style scoped>
.menu-page {
    padding: 2rem;
}

.plats-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}
</style> 