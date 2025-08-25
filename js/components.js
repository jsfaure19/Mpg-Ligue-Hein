// Système de composants pour Surge (hébergement statique)
class ComponentLoader {
    constructor() {
        this.components = {};
        this.loadedComponents = new Set();
    }

    // Activer le bon lien de navigation selon la page courante
    activateNavigation() {
        const currentPage = window.location.pathname;
        console.log(`📍 Activation de la navigation pour la page: ${currentPage}`);
        
        // Désactiver tous les liens actifs
        document.querySelectorAll('#nav-la-une, #nav-matchs, #nav-coachs').forEach(link => {
            if (link) {
                link.classList.remove('text-mpg-green', 'font-medium', 'border-b-2', 'border-mpg-green', 'pb-1');
                link.classList.add('text-mpg-text', 'hover:text-mpg-green', 'transition-colors');
            }
        });
        
        // Activer le bon lien selon la page
        if (currentPage.includes('journee-1')) {
            // Page de la 1ère journée - activer "Matchs"
            const matchsBtn = document.getElementById('nav-matchs');
            if (matchsBtn) {
                matchsBtn.classList.remove('text-mpg-text', 'hover:text-mpg-green', 'transition-colors');
                matchsBtn.classList.add('text-mpg-green', 'font-medium', 'border-b-2', 'border-mpg-green', 'pb-1');
                console.log('✅ Lien "Matchs" activé');
            }
        } else if (currentPage.includes('journee-2')) {
            // Page de la 2ème journée - activer "Matchs"
            const matchsBtn = document.getElementById('nav-matchs');
            if (matchsBtn) {
                matchsBtn.classList.remove('text-mpg-text', 'hover:text-mpg-green', 'transition-colors');
                matchsBtn.classList.add('text-mpg-green', 'font-medium', 'border-b-2', 'border-mpg-green', 'pb-1');
                console.log('✅ Lien "Matchs" activé');
            }
        } else if (currentPage.includes('coachs')) {
            // Page des coachs - activer "Coachs"
            const coachsLink = document.getElementById('nav-coachs');
            if (coachsLink) {
                coachsLink.classList.remove('text-mpg-text', 'hover:text-mpg-green', 'transition-colors');
                coachsLink.classList.add('text-mpg-green', 'font-medium', 'border-b-2', 'border-mpg-green', 'pb-1');
                console.log('✅ Lien "Coachs" activé');
            }
        } else {
            // Page d'accueil - activer "La une"
            const laUneLink = document.getElementById('nav-la-une');
            if (laUneLink) {
                laUneLink.classList.remove('text-mpg-text', 'hover:text-mpg-green', 'transition-colors');
                laUneLink.classList.add('text-mpg-green', 'font-medium', 'border-b-2', 'border-mpg-green', 'pb-1');
                console.log('✅ Lien "La une" activé');
            }
        }
    }

    // Charger un composant depuis un fichier
    async loadComponent(name, selector) {
        // Éviter de recharger un composant déjà chargé
        if (this.loadedComponents.has(`${name}-${selector}`)) {
            return;
        }

        try {
            // Ajouter un paramètre de version pour éviter le cache
            const timestamp = Date.now();
            const response = await fetch(`partials/${name}.html?v=${timestamp}`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            
            // Insérer le HTML dans le sélecteur
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
                
                // Réinitialiser Alpine.js si nécessaire
                if (window.Alpine) {
                    window.Alpine.initTree(element);
                }
                
                // Marquer comme chargé
                this.loadedComponents.add(`${name}-${selector}`);
                
                console.log(`✅ Composant ${name} chargé avec succès dans ${selector}`);
                
                // Si c'est la navbar, activer la navigation
                if (name === 'navbar') {
                    // Petit délai pour s'assurer que le DOM est prêt
                    setTimeout(() => {
                        this.activateNavigation();
                    }, 100);
                }
            } else {
                console.error(`❌ Sélecteur ${selector} non trouvé`);
            }
        } catch (error) {
            console.error(`❌ Erreur lors du chargement du composant ${name}:`, error);
            
            // Afficher un message d'erreur dans le placeholder
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = `
                    <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center">
                        <p class="text-red-400 text-sm">Erreur de chargement du composant ${name}</p>
                        <p class="text-red-500/60 text-xs mt-1">Vérifiez votre connexion internet</p>
                    </div>
                `;
            }
        }
    }

    // Charger tous les composants par défaut
    async loadAll() {
        console.log('🚀 Chargement des composants...');
        
        // Charger la navbar unique (qui s'adapte automatiquement)
        await this.loadComponent('navbar', '#navbar-placeholder');
        
        // Charger le footer
        await this.loadComponent('footer', '#footer-placeholder');
        
        console.log('✅ Tous les composants chargés !');
    }

    // Charger un composant spécifique
    async load(name, selector) {
        await this.loadComponent(name, selector);
    }

    // Recharger un composant
    async reload(name, selector) {
        this.loadedComponents.delete(`${name}-${selector}`);
        await this.loadComponent(name, selector);
    }

    // Recharger tous les composants
    async reloadAll() {
        this.loadedComponents.clear();
        await this.loadAll();
    }
}

// Initialiser quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Initialisation du système de composants...');
    
    // Créer l'instance globale
    window.componentLoader = new ComponentLoader();
    
    // Charger tous les composants
    window.componentLoader.loadAll();
});

// Fonction globale pour recharger manuellement
window.reloadComponents = () => {
    if (window.componentLoader) {
        window.componentLoader.reloadAll();
    }
};
