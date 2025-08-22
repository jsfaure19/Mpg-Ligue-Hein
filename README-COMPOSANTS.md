# 🧩 Système de Composants - Ligue Hein

## 📋 **Vue d'ensemble**

Ce système de composants permet d'éviter la duplication de code entre les pages HTML en chargeant dynamiquement la navbar et le footer depuis des fichiers partiels.

## 🚀 **Compatible avec Surge**

✅ **Hébergement statique** - Fonctionne parfaitement avec Surge  
✅ **Pas de serveur requis** - Tout côté client  
✅ **Performance optimisée** - Chargement asynchrone  
✅ **Gestion d'erreurs** - Fallback en cas de problème  

## 📁 **Structure des fichiers**

```
mpg/
├── partials/                    # Composants réutilisables
│   ├── navbar.html             # Navbar unique et dynamique
│   └── footer.html             # Footer commun
├── js/
│   └── components.js           # Système de chargement
├── index.html                  # Page d'accueil
├── journee-1.html             # Page de la 1ère journée
└── coachs.html                # Page des coachs
```

## 🔧 **Comment ça marche**

### 1. **Placeholders dans vos pages HTML**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Inclure le script des composants -->
    <script src="js/components.js"></script>
</head>
<body>
    <!-- Placeholder pour la navbar -->
    <div id="navbar-placeholder"></div>
    
    <!-- Votre contenu ici -->
    <main>
        <!-- ... -->
    </main>
    
    <!-- Placeholder pour le footer -->
    <div id="footer-placeholder"></div>
</body>
</html>
```

### 2. **Navbar intelligente et adaptative**
La navbar se configure automatiquement selon la page courante :
- **Page d'accueil** → Lien "La une" actif
- **1ère Journée** → Lien "Matchs" actif  
- **Coachs** → Lien "Coachs" actif

### 3. **Chargement automatique**
- ✅ **Navbar** chargée automatiquement et adaptée
- ✅ **Footer** chargé automatiquement
- ✅ **Alpine.js** réinitialisé automatiquement
- ✅ **Gestion d'erreurs** intégrée

## 🎯 **Avantages**

### **Maintenance**
- 🔧 **Un seul fichier navbar** à maintenir
- 🔧 **Un seul endroit** pour modifier le footer
- 🔧 **Cohérence garantie** entre toutes les pages

### **Performance**
- ⚡ **Chargement asynchrone** des composants
- ⚡ **Cache intelligent** (pas de rechargement inutile)
- ⚡ **Gestion d'erreurs** avec fallback

### **Développement**
- 🚀 **Ajout de pages** en quelques lignes
- 🚀 **Modifications globales** instantanées
- 🚀 **Debug facile** avec console logs

## 📝 **Ajouter une nouvelle page**

### 1. **Créer votre fichier HTML**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Nouvelle Page</title>
    <script src="js/components.js"></script>
    <!-- Autres scripts... -->
</head>
<body>
    <div id="navbar-placeholder"></div>
    
    <!-- Votre contenu -->
    
    <div id="footer-placeholder"></div>
</body>
</html>
```

### 2. **Ajouter la détection dans `navbar.html` (optionnel)**
Si vous voulez un lien actif différent, ajoutez la logique dans le script de la navbar :
```javascript
} else if (currentPage.includes('nouvelle-page')) {
    // Activer le lien approprié
    const nouveauLien = document.getElementById('nav-nouveau-lien');
    // ... logique d'activation
}
```

## 🐛 **Dépannage**

### **Console du navigateur**
Le système affiche des logs détaillés :
```
🎯 Initialisation du système de composants...
🚀 Chargement des composants...
✅ Composant navbar chargé avec succès dans #navbar-placeholder
✅ Composant footer chargé avec succès dans #footer-placeholder
✅ Tous les composants chargés !
```

### **Rechargement manuel**
En cas de problème, vous pouvez recharger manuellement :
```javascript
// Dans la console du navigateur
window.reloadComponents();
```

### **Vérification des fichiers**
Assurez-vous que tous les fichiers sont présents :
```bash
ls -la partials/
ls -la js/
```

## 🔄 **Mise à jour des composants**

### **Modifier la navbar**
1. Éditer `partials/navbar.html`
2. Les changements s'appliquent à toutes les pages
3. La logique d'activation s'adapte automatiquement

### **Modifier le footer**
1. Éditer `partials/footer.html`
2. Les changements s'appliquent à toutes les pages

### **Ajouter un nouveau composant**
1. Créer le fichier dans `partials/`
2. L'ajouter dans `components.js`
3. L'utiliser dans vos pages

## 🎉 **C'est tout !**

Votre site utilise maintenant un système de composants professionnel avec **une seule navbar intelligente** qui s'adapte automatiquement, compatible avec Surge, qui vous fait gagner du temps et maintient la cohérence de votre design ! 🚀
