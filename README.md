# SAWA - Menu digital premium

## Présentation du projet

SAWA est un site one-page conçu comme un menu digital premium pour un café.  
Le projet est pensé pour une consultation rapide sur smartphone via QR code, avec un rendu noir et doré élégant, responsive et sans backend.

Le site inclut :

- un hero premium
- une navigation par ancres
- une section "Nos incontournables"
- un menu dynamique avec filtres et recherche
- des sections À propos, Horaires, Contact et QR code
- un bouton WhatsApp flottant
- un bouton retour en haut
- une structure simple à publier sur GitHub Pages

## Structure des fichiers

Le projet contient exactement les fichiers suivants :

- `index.html` : structure HTML sémantique, métadonnées SEO, sections du site
- `style.css` : charte visuelle, responsive, animations légères et composants
- `script.js` : rendu dynamique du menu, filtres, recherche, interactions d'interface
- `README.md` : documentation d'utilisation, personnalisation et publication

## Utilisation en local

1. Placez les 4 fichiers dans un même dossier.
2. Ouvrez `index.html` directement dans votre navigateur.
3. Le site fonctionne sans serveur local ni backend.

Pour un test plus proche d'une mise en ligne, vous pouvez aussi utiliser une extension type Live Server dans VS Code, mais ce n'est pas obligatoire.

## Comment personnaliser les produits et les informations

### Modifier les informations du café

Dans `index.html`, vous pouvez adapter rapidement :

- le nom du café
- le slogan
- l'adresse
- le téléphone
- le lien WhatsApp
- les horaires
- les textes de présentation

Les zones principales à personnaliser sont :

- le hero
- les sections `À propos`, `Horaires`, `Contact`
- le footer
- la section QR code

### Modifier les produits du menu

Tous les produits sont centralisés dans `script.js`, dans le tableau `products`.

Chaque produit suit cette structure :

```js
{
  name: "Cappuccino",
  description: "Mousse légère et café riche",
  price: 22,
  category: "cafes",
  label: "Cafés",
  featured: true
}
```

Vous pouvez :

- changer un produit existant
- modifier un prix
- changer une description
- ajouter un nouveau produit
- retirer un produit
- choisir s'il apparaît dans "Nos incontournables" avec `featured: true`

### Modifier les catégories

Les filtres sont définis dans le tableau `categories` de `script.js`.

Si vous ajoutez une nouvelle catégorie :

1. ajoutez-la dans `categories`
2. utilisez le même identifiant dans les produits concernés

## Publier sur GitHub Pages étape par étape

### 1. Créer un dépôt GitHub

1. Connectez-vous à votre compte GitHub.
2. Cliquez sur `New repository`.
3. Donnez un nom au dépôt, par exemple `sawa-menu`.
4. Laissez le dépôt en public.
5. Validez la création.

### 2. Envoyer les fichiers dans le dépôt

Vous pouvez le faire soit via l'interface GitHub, soit avec Git en local.

#### Option simple via l'interface web

1. Ouvrez le dépôt nouvellement créé.
2. Cliquez sur `Add file` puis `Upload files`.
3. Déposez `index.html`, `style.css`, `script.js` et `README.md`.
4. Validez avec `Commit changes`.

#### Option via Git en local

Depuis le dossier du projet :

```bash
git init
git add .
git commit -m "Initial commit - SAWA premium menu"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/sawa-menu.git
git push -u origin main
```

## Activer GitHub Pages

1. Ouvrez le dépôt sur GitHub.
2. Allez dans `Settings`.
3. Ouvrez la section `Pages`.
4. Dans `Build and deployment`, choisissez `Deploy from a branch`.
5. Sélectionnez la branche `main` et le dossier `/(root)`.
6. Cliquez sur `Save`.

GitHub publiera le site en quelques instants.

## Récupérer l'URL publique

Après activation, GitHub Pages affichera l'URL publique dans la section `Pages`.

Elle aura généralement cette forme :

```text
https://votre-utilisateur.github.io/sawa-menu/
```

C'est cette URL qu'il faudra utiliser pour :

- partager le menu
- l'ouvrir depuis un smartphone
- générer le QR code

## Générer un QR code à partir de l'URL

Une fois l'URL publique récupérée :

1. copiez l'URL GitHub Pages
2. ouvrez un générateur de QR code
3. collez l'URL
4. téléchargez le QR code en PNG ou SVG
5. remplacez ensuite le placeholder visuel du site si vous souhaitez aussi afficher ce QR code en ligne

Outils possibles :

- https://www.qr-code-generator.com/
- https://goqr.me/
- https://www.canva.com/

## Conseils pour une mise en production simple

- gardez les fichiers à la racine du projet pour éviter les problèmes de chemins sur GitHub Pages
- compressez les futures images si vous ajoutez de vrais visuels
- testez le site sur iPhone et Android avant impression du QR code
- vérifiez les liens `tel:` et `wa.me`
- remplacez les informations de contact fictives par les vraies coordonnées
- si vous ajoutez un logo ou une image de partage, mettez à jour les métadonnées Open Graph dans `index.html`

## Recommandation pratique

Pour un rendu encore plus crédible en production :

- ajoutez un vrai QR code dans la section dédiée
- remplacez l'adresse par la localisation précise
- mettez un numéro WhatsApp réel
- ajoutez éventuellement un aperçu social (`og:image`)

Le projet est prêt à être utilisé tel quel comme base de déploiement sur GitHub Pages.
