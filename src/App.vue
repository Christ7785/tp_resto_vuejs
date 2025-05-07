<script>
import Panier from './components/Panier.vue'

export default {
    name: 'App',
    components: {
        Panier
    },
    data() {
        return {
            panier: []
        }
    },
    methods: {
        ajouterAuPanier(plat) {
            const platExistant = this.panier.find(p => p.id === plat.id)
            if (platExistant) {
                platExistant.quantite++
            } else {
                this.panier.push({ ...plat, quantite: 1 })
            }
        },
        modifierQuantite({ index, changement }) {
            this.panier[index].quantite += changement
        },
        supprimerPlat(index) {
            this.panier.splice(index, 1)
        },
        finaliserCommande() {
            alert('Votre commande a été validée !')
            this.panier = []
        }
    }
}
</script>

<template>
    <div class="app">
        <header class="header">
            <img src="/Iconresto.png" alt="Logo du restaurant" class="logo">
            <h1 class="titre">Le Restaurant Vue</h1>
        </header>

        <nav class="navigation">
            <router-link to="/" class="lien">Accueil</router-link>
            <router-link to="/menu" class="lien">Menu</router-link>
        </nav>

        <main class="contenu">
            <router-view @ajouter-au-panier="ajouterAuPanier" />
        </main>

        <Panier 
            :plats="panier" 
            @modifier-quantite="modifierQuantite"
            @supprimer-plat="supprimerPlat"
            @finaliser-commande="finaliserCommande"
        />
    </div>
</template>

<style>
.app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    font-family: 'Arial', sans-serif;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 8px;
}

.logo {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
}

.titre {
    color: #26b3c6;
    margin: 0;
    font-size: 2rem;
}

.navigation {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 8px;
}

.lien {
    text-decoration: none;
    color: #26b3c6;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.contenu {
    margin-bottom: 2rem;
}
</style>
