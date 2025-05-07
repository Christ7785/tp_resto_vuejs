<template>
    <div class="admin-page">
        <h1>Administration des commandes</h1>

        <div v-if="commandes.length === 0" class="aucune-commande">
            Aucune commande en attente
        </div>

        <div v-else class="liste-commandes">
            <CommandeItem v-for="commande in commandes" :key="commande.id" :commande="commande"
                @marquer-prete="marquerCommandePrete" />
        </div>
    </div>
</template>

<script>
import CommandeItem from '../components/CommandeItem.vue'

export default {
    name: 'AdminPage',
    components: {
        CommandeItem
    },
    inject: ['commandes'],
    methods: {
        marquerCommandePrete(id) {
            const commande = this.commandes.find(c => c.id === id)
            if (commande) {
                commande.prete = !commande.prete
            }
        }
    }
}
</script>

<style scoped>
.admin-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

h1 {
    color: #26b3c6;
    text-align: center;
    margin-bottom: 2rem;
}

.aucune-commande {
    text-align: center;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    color: #666;
}

.liste-commandes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>