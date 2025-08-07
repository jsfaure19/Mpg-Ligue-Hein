# Ma Ligue MPG - Site Statique

Un site statique pour suivre l'activité de votre ligue MPG, avec un design inspiré du thème officiel MPG.

## 🎯 Fonctionnalités

- **Page d'accueil** avec hero section pour l'article principal
- **Grille d'articles** avec différentes catégories (Match Report, Transferts, Analyse, etc.)
- **Scores de matchs** intégrés dans les articles
- **Page des coachs** avec présentation de chaque équipe
- **Pagination** pour les articles plus anciens
- **Design responsive** avec Tailwind CSS
- **Thème sombre** inspiré de MPG

## 🎨 Design

Le site utilise les couleurs officielles de MPG :
- **Vert MPG** : `#00D9A3` (pour les éléments principaux)
- **Fond sombre** : `#0A0A0A`
- **Gris foncé** : `#1A1A1A` (cartes et navigation)
- **Gris moyen** : `#2A2A2A` (bordures et accents)
- **Texte** : `#E5E5E5`
- **Accent doré** : `#FFD700` (pour les highlights)

## 📁 Structure

```
mpg/
├── index.html              # Page d'accueil avec articles
├── coachs.html            # Page des coachs
├── page2.html             # Page 2 des actualités
├── templates/             # Templates réutilisables
│   ├── article-template.html
│   ├── article-match-template.html
│   ├── hero-article-template.html
│   ├── hero-article-match-template.html
│   └── coach-template.html
└── README.md
```

## 🔧 Utilisation des templates

### 1. Article Hero de match

Utilisez `templates/hero-article-match-template.html` pour créer l'article principal d'un match avec image et score.

**Variables à remplacer :**
- `[DATE]` : Date du match
- `[CATEGORY]` : Toujours "Match Report"
- `[TITLE]` : Titre principal
- `[CONTENT]` : Contenu de l'article
- `[TEAM1]` / `[TEAM2]` : Noms des équipes (répété 3 fois)
- `[SCORE1]` / `[SCORE2]` : Scores
- `[TEAM1_SCORERS]` / `[TEAM2_SCORERS]` : Buteurs par équipe
- `[IMAGE_URL]` : URL de l'image
- `[IMAGE_ALT]` : Texte alternatif

### 1b. Article Hero sans match

Utilisez `templates/hero-article-template.html` pour un article principal sans score.

**Variables à remplacer :**
- `[DATE]` : Date de l'article
- `[CATEGORY]` : Catégorie (Transferts, Analyse, etc.)
- `[TITLE]` : Titre principal  
- `[CONTENT]` : Contenu de l'article
- `[INFO_TITLE]` : Titre de l'encart info (optionnel)
- `[INFO_CONTENT]` : Contenu de l'encart (optionnel)
- `[IMAGE_URL]` : URL de l'image
- `[IMAGE_ALT]` : Texte alternatif

### 2. Article standard

Utilisez `templates/article-template.html` pour les articles sans image.

**Variables à remplacer :**
- `[DATE]` : Date de l'article
- `[CATEGORY_COLOR]` : Classe CSS de couleur
- `[CATEGORY]` : Nom de la catégorie
- `[TITLE]` : Titre de l'article
- `[EXCERPT]` : Extrait/résumé

**Couleurs de catégories :**
- Match Report: `bg-mpg-accent text-mpg-dark`
- Transferts: `bg-blue-600 text-white`
- Analyse: `bg-purple-600 text-white`
- Classement: `bg-green-600 text-white`
- Événement: `bg-pink-600 text-white`

### 3. Article de match

Utilisez `templates/article-match-template.html` pour les articles avec score simple.

**Variables supplémentaires :**
- `[TEAM1]` / `[TEAM2]` : Noms des équipes
- `[SCORE1]` / `[SCORE2]` : Scores

### 4. Coach

Utilisez `templates/coach-template.html` pour ajouter un nouveau coach.

**Variables à remplacer :**
- `[IMAGE_URL]` : Photo du coach
- `[COACH_NAME]` : Nom complet
- `[CLUB_NAME]` : Nom de l'équipe MPG
- `[DESCRIPTION]` : Description du style de jeu
- `[POSITION]` : Position au classement
- `[MATCHES]` : Nombre de matchs joués
- `[WINS]` : Nombre de victoires

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Tailwind :
- **Mobile** : Design en colonne unique
- **Tablet (md)** : Grille 2 colonnes pour articles et coachs
- **Desktop (lg)** : Grille 3 colonnes, hero en 2 colonnes

## 📄 Pagination

Le système de pagination est fonctionnel :
- **Page 1** : `index.html` (articles récents)
- **Page 2** : `page2.html` (articles plus anciens)
- Les liens sont configurés pour naviguer entre les pages
- Ajoutez de nouvelles pages en copiant la structure de `page2.html`

## 🚀 Mise à jour du site

1. **Nouvel article :**
   - Copier le template approprié depuis `templates/`
   - Remplacer toutes les variables `[VARIABLE]`
   - Insérer dans la grille d'articles d'`index.html`

2. **Nouveau coach :**
   - Copier `templates/coach-template.html`
   - Remplacer les variables
   - Ajouter dans la grille de `coachs.html` (6 par ligne, puis 4)

3. **Changer l'article hero :**
   - Modifier la section hero d'`index.html`
   - Utiliser les templates hero comme référence

4. **Mettre à jour la date :**
   - Changer "Dernière mise à jour le XX/XX/XXXX" dans toutes les navbars

## 🎭 Images

Le site utilise des images Unsplash pour les exemples :
- **Articles :** Images de football/sport
- **Coachs :** Portraits avec paramètres `?w=400&h=400&fit=crop&crop=face`

Pour utiliser vos propres images, remplacez les URLs par des chemins locaux dans un dossier `assets/images/`.

## 💡 Conseils

- Respectez la hiérarchie des couleurs MPG
- Utilisez les emojis ⚽ pour les buteurs
- Gardez les descriptions de coachs concises mais expressives
- Variez les catégories d'articles pour plus de dynamisme
- Mettez à jour régulièrement les stats des coachs

---

*"Du foot, des amis, des barres de rire"* 🎉