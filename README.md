# Restaurant Vue - Gestion de restaurant en ligne

## Description
Restaurant Vue est une application web développée avec Vue.js 3 qui permet aux utilisateurs de consulter le menu d'un restaurant, commander des plats et de gérer les commandes. Cette application illustre l'utilisation des différents concepts fondamentaux de Vue.js.

## Fonctionnalités
- **Page d'accueil** avec présentation du restaurant
- **Menu interactif** affichant la liste des plats disponibles
- **Panier d'achat** permettant de gérer les plats sélectionnés
- **Administration** pour gérer les commandes en cours

## Concepts Vue.js utilisés
- **Directives** (v-for, v-if, v-bind)
- **Components & Props**
- **Events ($emit)**
- **Slots**
- **Watchers**
- **Lifecycle Hooks**
- **Provide/Inject**
- **Vue Router**

## Installation
```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Guide d'utilisation
1. **Page d'accueil**: Présentation du restaurant
2. **Menu**: Parcourir les plats et les ajouter au panier
3. **Panier**: Voir les plats ajoutés, modifier leurs quantités et finaliser la commande
4. **Administration**: Accéder à la liste des commandes et les marquer comme "prêtes"

## Exemples de code

### Utilisation des props et events
```javascript
// Dans PlatItem.vue
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

// Dans MenuPage.vue
<PlatItem 
    v-for="plat in plats" 
    :key="plat.id" 
    :plat="plat" 
    @ajouter-au-panier="ajouterAuPanier"
/>
```

### Utilisation des slots
```html
<!-- Dans PlatItem.vue -->
<div class="badge-container">
    <slot name="badge"></slot>
</div>

<!-- Dans MenuPage.vue -->
<PlatItem :plat="plat">
    <template v-slot:badge v-if="plat.nouveau">
        <span class="badge-nouveau">Nouveau</span>
    </template>
</PlatItem>
```

### Surveillance réactive avec watchers
```javascript
// Dans Panier.vue
watch: {
    total: function(newTotal, oldTotal) {
        if (oldTotal && newTotal !== oldTotal) {
            this.totalChanged = true
            setTimeout(() => {
                this.totalChanged = false
            }, 300)
        }
    }
}
```

### Partage de données avec provide/inject
```javascript
// Dans App.vue
provide() {
    return {
        commandes: this.commandes
    }
}

// Dans AdminPage.vue
inject: ['commandes']
```



---

Projet réalisé dans le cadre du cours de Vue.js 3 à l'EPSI.
