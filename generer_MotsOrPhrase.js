const mots = ["abandon", "abattre", "abbaye", "abdos", "abécédaire", "abérration"
, "aboutir", "abricot", "abriter", "abroger", "absinthe", "absorber", "abstinence", "abuser", "accabler"
, "accentuer", "accepter", "accessoire", "accident", "accompagner", "accomplir", "accord", "accroître", "accumulation", "accusé", "acharnement", "acheter", "acquérir", "acte",
"action", "acteur", "activité", "adapter", "addition", "adieu", "admirable", "admirer", "adolescent", "adroit", "adresser", "adulte", "aventure", "avancer", "avion", "agriculture", "aide", "aigle", "aiguille", "air", "alarme", "alchimie", "alcool", "aliment", "alinéa", "alliance", "alléger", "allocution", "allocation", "allumer", "alouette", "altérer", "altruisme", "ami", "amour", "amphibie", "ample", "amputation", "analyser", "ancien", "anecdote", "angélique", "animal", "animer", "année", "annuler", "aparté", "apport", "appeler", "appareil", "apprécier", "approche", "arbre", "architecture", "argument", "armée", "art", "artisan", "artiste", "asile", "aspect", "assaisonner", "asseoir", "assertion", "assister", "associatif", "assumer", "astuce", "atterrissage", "attention", "attraper", "aurore", "avocat", "avouer", "baignoire", "baigner", "balancer", "balise", "bamboos", "banc", "bande", "banquet", "banquier", "bar", "bas", "batterie", "bavarder", "beauté", "bec", "béton", "bibliothèque", "bijou", "bilan", "bille", "bingo", "botanique", "boîte", "bol", "bolide", "bonbon", "bord", "bordure", "bosquet", "bouteille", "brasser", "briller", "bruit", "bulletin", "burger", "cabane", "calculer", "calendrier", "calmar", "calme", "camion", "campagne", "caprice", "capturer", "car", "carnaval", "carte", "cascade", "casser",
"château", "chatouiller", "chemin", "chemise", "chemist", "cheval", "choisir", "chronique", "cigarette", "cinéma", "clarté", "classifier", "client", "climat", "cliquer", "cocotte", "couleur", "combat", "commandement", "communiquer", "compagnie", "compléter", "compréhension", "concentration", "confinement", "confusion", "contact", "continent", "convention", "coordonnée", "courir", "courrier", "couverture", "créer", "critère", "crise", "critique", "croiser", "croître", "culture", "curieux", "cycle", "danser", "date", "déborder", "décalage", "décidé", "déclaration", "défendre", "déficit", "définition", "demander", "démonstration", "départ", "dépendre", "dépression", "désigner", "désir", "dessert", "dessiner", "détail", "détecter", "détendre", "dialogue", "directeur", "discussion", "distance", "document", "dominer", "douleur", "doux", "drapeau", "droit", "durée", "échapper", "éclat", "école", "éclair", "écouter", "édifier", "éditeur", "effort", "élaboration", "élever", "élection", "élite", "émouvoir", "émotion", "empiler", "empêchement", "emploi", "encre", "énergie", "engagement", "ennemi", "enseigner", "entendre", "entreprise", "épicé", "époque", "équitable", "escalier", "espérer", "essence", "étagère", "étalage", "étendre", "éternité", "éthique", "évaluer", "évoluer", "examen", "exiger", "existence", "explorer", "exposition", "expression", "exubérance", "faire", "famille", "fantastique", "fantôme", "fatigue", "février", "feutre", "fil", "filet", "financier", "flambeau", "fleur", "flocon", "forêt", "formulaire", "fossette", "foi", "folie", "fond", "fondateur", "fonctionnement", "fort", "fracture", "frisson", "fumer", "fonction", "galette", "galerie", "gamin", "gans", "général", "géographie", "gestion", "goûter", "grand", "graphique", "graver", "greffer", "groupe", "habiller", "habitude", "histoire", "hôte", "idée", "igloo", "illusion", "image", "immeuble", "improvisation", "impression", "imposer", "importer", "inclure", "indiquer", "industriel", "information", "ingéniosité", "innover", "insister", "institution", "intelligent", "intention", "interroger", "interpréter", "invention", "investir", "invisible", "inviter", "jardin", "jaser", "jour", "journaliste", "jouet", "jubiler", "jus", "juxtaposition", "klaxon", "laboratoire", "lac"
, "langage", "lâcher", "lettre", "livre", "logique", "lundi", "machine", "maçon", "maison", "marcher", "marin", "mariage", "matériel", "maths", "matin", "mécontent", "méfiant", "mélanger", "mélodie", "mémoire", "mélodieux", "mentor", "message", "milieu", "militaire", "minceur", "miracle", "miroir", "mois", "monnaie", "mont", "montrer", "mur", "musique", "mythologie", "naître", "navire", "naturel", "nécessité", "négocier", "noël", "nombre", "objectif", "obtenir", "offrir", "ombre", "orange", "organique", "orientation", "origine", "oser", "ouvrir", "page", "palier", "panneau", "papier", "parenthèse", "partage", "pas", "patiner", "pause", "période", "plaisir", "plan", "plat", "pleurer", "pluralisme", "pollen", "pomme", "porter", "poster", "pouvoir", "précision", "prévoir", "présent", "préservatif", "prix", "probabilité", "produire", "produit", "programmation", "projet", "propre", "proposer", "protection", "quantifier", "quart", "quitter", "réagir", "réalité", "réflexion", "régaler", "région", "registre", "relier", "relâcher", "remplacer", "reporter", "respecter", "résumer", "résultat", "retour", "révéler", "révolte", "riz", "robot", "rôle", "rose", "route", "rougir", "ruine", "savoir", "sentir", "serveur", "service", "signaler", "simuler", "sourire", "soulager", "soumettre", "souterrain", "souffler", "sport", "statue", "styliste", "succès", "suggestion", "super", "supporter", "table", "tag", "talent", "téléphoner", "terrain", "théorie", "troisième", "tranquillité", "transformateur", "traverser", "triangle", "trône", "tuteur", "type", "unique", "union", "univers", "urbaniser", "usager", "vagabonder", "valeur", "valise", "végétal", "vent","vérification", "verre", "vert", "vibrer", "vidéoprojecteur", "vigoureux", "vignette", "village", "vinaigre", "visage", "visiter", "vitesse", "voiture", "voix", "voler", "voter", "voyage", "échelle", "éclairer", "éclatant", "écran", "écraser", "éducation", "énergie", "écrou", "écrire", "étudiant", "évaluation", "évoquer", "étudier", "évident", "évoluer", "événement", "exemple", "expliquer", "exprimer", "étonner", "évaluation", "façade", "faible", "fête", "fétiche", "fier", "fissure", "flamme", "flotter", "flou", "fragrance", "fuir", "futur", "galaxie", "gagne-pain", "gel", "génie", "générer", "glace", "gouffre", "gratitude", "guide", "histoire", "honorer", "imagination", "impeccable", "inattendu", "inaccessible", "invisible", "inspiration", "introduction", "irréversible"
, "jardinier", "jeu", "lumière", "magicien", "malice", "manteau", "marche", "méthode", "miracle", "nature", "naviguer", "navire", "nouveau", "ombre", "onduler", "opportunité", "option", "ouverture", "palais", "passage", "patience", "plongée", "pluie", "plume", "politesse", "puissance", "quasar", "réflexion", "sac", "savoir-faire", "soigner", "spirituel", "synthèse", "tâche", "temple", "tracasser", "traversée", "trembler", "tribu", "unité", "urbain", "utiliser", "valeur", "vivant", "volcan", "voyageur", "éthique", "éducation", "élève", "évolution", "épique", "érudition", "fascination", "gouvernance", "intérêt",
"jubilatoire", "lien", "mémoire", "soutien", "témoignage", "voyager", "zenith","abandonner", "abater", "abécédaire", "abélard", "abêtir", "aberration", "aboutir", "abricot",
"abroger",

"abstinence", "abuser", "accabler", "accent", "acceptation", "accessoire", "accident", "accompagner",

"accomplir", "accord", "accroître", "accusation", "acharnement", "acheter", "acquérir", "acte", "action",

"acteur", "activité", "adapter", "additionner", "adieu", "admirable", "admirer", "adolescent", "adroit",

"adresse", "adultère", "aventure", "avancer", "avion", "agriculture", "aide", "aigle", "aiguille", "air",

"alarme", "alchimie", "alcool", "aliment", "allée", "allumer", "alphabétiser", "alliance", "allocation",

"altruisme", "ami", "amour", "amphibien", "ampleur", "analyser", "ancien", "anecdote", "ange", "animal",

"animer", "année", "annuler", "aparté", "apporter", "appeler", "appareil", "apprécier", "approche", "arbre",

"architecture", "argument", "armement", "armoire", "art", "artiste", "asile", "aspect", "assaisonner",

"asseoir", "assertion", "assister", "assumer", "astuce", "atterrir", "attraction", "attraper", "audace",

"avocat", "avouer", "baignoire", "balancer", "banque", "barrière", "batterie", "beauté", "belle", "beurre",

"bibliothèque", "bijou", "bilan", "bille", "bingo", "biscuit", "boisson", "bol", "boîte", "boulangerie",

"braver", "brillant", "bruit", "bulles", "cabane", "calculer", "calendrier", "calme", "camion", "campagne",

"caprice", "capturer", "carte", "cascade", "casser", "célébrer", "château", "chemin", "chemise", "cheval",

"choisir", "chocolat", "ciel", "cinéma", "circuit", "clarifier", "clarté", "client", "climat", "cliquer",

"cocotte", "combat", "commander", "communauté", "comprendre", "confiance", "connaissance", "conseil",

"considération", "contact", "continent", "conversation", "coopérer", "courrier", "couronne", "couverture",

"créer", "critère", "croissance", "culture", "curieux", "cycle", "danser", "date", "déborder", "décalage",

"décider", "déclaration", "défendre", "définir", "demander", "déposer", "dépression", "désirer", "dessiner",

"détail", "détente", "dialogue", "directeur", "discussion", "dossier", "dynamique", "éclair", "école",

"éclairer", "écouter", "écriture", "éducation", "efficacité", "effort", "élément", "élévation", "élevage",

"élire", "émotion", "empêcher", "encadrer", "encre", "énergie", "engagement", "entreprise", "environnement",

"essentiel", "essence", "étagère", "étendre", "éternité", "éthique", "évaluer", "exagérer", "examen",

"exigence", "exister", "expérience", "explorer", "exposition", "expression", "facilité", "famille", "fasciner",

"fête", "femme", "fenêtre", "fermer", "fête", "flamme", "fleur", "flocon", "forêt", "formation", "fort",

"fracture", "frisson", "frustration", "fumer", "galette", "galerie", "gamin", "garantie", "gâteau", "général",

"géographie", "gérer", "glisser", "gloire", "groupe", "habiller", "habitude", "histoire", "honnêteté",

"horizon", "humain", "idée", "illusion", "image", "imagination", "imposer", "impression", "importance",

"incertitude", "influence", "inspirer", "intellect", "interaction", "introduction", "invitation", "irréel",

"jardin", "jaunir", "jour", "joyeux", "juin", "jupe", "laboratoire", "lac", "langage", "lien", "livre",

"logique", "loi", "lundi", "magie", "maison", "marcher", "mariage", "matériel", "mathématiques", "mélodie",

"mémoire", "méthode", "message", "milieu", "miracle", "mobilité", "monde", "mois", "moteur", "mystère",

"naissance", "nature", "naviguer", "nécessaire", "noël", "nombre", "objectif", "obtenir", "offrir", "ombre",

"opportunité", "organe", "organisation", "oublier", "pantalon", "parent", "partage", "partir", "patience",

"période", "plaisir", "plante", "plat", "plume", "point", "poisson", "pollution", "population", "porter",

"préférer", "préparation", "préserver", "prévenir", "principe", "progrès", "projet", "protection", "quarantaine",

"quitter", "quizz", "race", "raconter", "racine", "ramasser", "rapide", "réaction", "réaliser", "rébellion",

"régime", "relation", "relier", "réparer", "repenser", "répondre", "révélation", "risque", "robot", "rôle",

"rond", "rouge", "ruban", "rumeur", "sable", "savoir", "saison", "salon", "sang", "santé", "satisfaction",

"savant", "scène", "science", "scoop", "secours", "secrétaire", "semaine", "sécurité", "sensation", "sensibilité",

"serpent", "service", "signe", "simuler", "sincère", "situation", "société", "soin", "somme", "soupçon",

"spectacle", "spectre", "spirituel", "stade", "stimulant", "sucre", "sud", "suffisance", "système", "tableau",

"talent", "tâche", "talon", "téléphone", "terrain", "théâtre", "tigre", "tisser", "tourner", "tradition",

"travail", "travers", "tribu", "unité", "univers", "urbaniser", "valider", "valeur", "vanille", "végétal",

"vent", "vérité", "vidéo", "vigne", "village", "vision", "voler", "votre", "voyage", "vulnérabilité",

"xénophobie", "zèbre", "zéro", "abac", "abandon", "abattement", "abduction", "ablatif", "ablution", "abominer",

"abomination", "abréger", "abstème", "académie", "acajou", "accompagné", "accompagner", "accordéon",

"accouchement", "accrocher", "accumulateur", "acériforme", "acharnement", "acolyte", "acoustique", "actuel",

"adapteur", "adénome", "adhérer", "adolescent", "adresser", "adultérine", "agencement", "aggraver", "ahurir",

"alcalin", "alchimiste", "alimentation", "allégement", "allergie", "allocataire", "alternance",
"abandon", "abeille", "abolir", "abri", "absolu", "accès", "accorder", "acheter", "acier", "acteur", "adapter", "adresse", "adulte", "aérien", "affaire", "affection", "affiche", "aide", "aigle", "aimer", "air", "ajouter", "alarme", "album", "aliment", "allemand", "allumer", "amande", "améliorer", "ami", "amour", "ananas", "ancien", "ancre", "ange", "animal", "anniversaire", "annuler", "anonyme", "antenne", "apercevoir", "apparaître", "appel", "apprendre", "approcher", "appuyer", "aquarium", "arc", "arche", "argent", "aride", "arme", "aromatique", "arrêter", "arrivée", "art", "article", "ascenseur", "assembler", "assiette", 
"assister", "attacher", "attaque", "atteindre", "attention", "attraper", "aubergine", "aujourd'hui", "automne", "autoriser", "avancer", "aventurier", "avion", "avoir", "avril", "baie", "baisser", "balcon", "balle", "ballon", "banc", "barbe", "barque", "bas", "bateau", "beau", "beauté", "bec", "beige", "besoin", "bibliothèque", "bicyclette", "bien", "bière", "bijou", "billet", "blanc", "bleu", "bloc", "blouse", "boire", "bois", "boîte", "bonheur", "bouche", "boulanger", "bout", "boutique", "branche", "bras", "brave", "brillant", "briser", "broche", "brosse", "bruit", "bureau", "but", "cadeau", "café", "cahier", "calcul", "calendrier", "calme", "camarade", "campagne", "canal", "canard", "cancer", "candidat", "capable", "car", "caramel", "carbone", "carte", "casque", "casser", "cause", "cave", "ceinture", "célébrer", 
"centre", "cercle", "cerise", "cerner", "chaise", "chaleur", "champ", "chance", "changer", "chanter", "chaque", "charge", "chariot", "charme", "chat", "château", "chaud", "chef", "chemin", "chercher", "cheval", "chien", "chiffre", "chocolat", "choisir", "chose", "chute", "ciel", "cinéma", "cinq", "citron", "classe", "clé", "client", "climat", "cloche", "clown", "cocher", "cœur", "col", "colère", "colis", "coller", "colline", "colonne", "colorer", "comédie", "comprendre", "compte", "conduire", "confiance", "confort", "connaître", "conscience", "construire", "content", "contrôle", "copain", "corail", "corde", "cornet", "corps", "correction", "costume", "coton", "cou", "couleur", "coup", "cour", "courage", "courbe", "courir", "couronne", "courrier", "crabe", "créer", "crime", "crise", "critère", "croire", "croix", "cuisinier", "culotte", "cure", "cycle", "danger", "danse", "dauphin", "debout", "décembre", "décrire", "décrocher", "défaite", "défense", "défiler", "degré", "déjeuner", "demande", "dent", "départ", "dépense", "dépôt", "dernière", "descendre", "désir", "dessin", "détail", "détecter", "développer", "deviner", "devoir", "diamant", "dieu", "difficile", "dîner", "dire", "disque", "distinguer", "divan", "divertir", "docteur", "document", "donner", "dormir", "dos", "double", "douche", "douleur", "drapeau", "droit", "druide", "dupliquer", "échapper", "éclair", "éclat", "école", "écran", "écriture", "écureuil", "effet", "églantine", "église", "élargir", "éléphant", "élévation", "élever", "élève", "éloigner", "émeraude", "emmener", "empire", "emplacement", "emporter", "enfance", "enfant", "engager", "ensemble", "entendre", "entrée", "envie", "envoyer", "épaule", "épée", "équipe", "équilibre", "errer", "erreur", "escalier", "espace", "espoir", "esprit", "essence", "essentiel", "essuyer", "étable", "étage", "étang", "étendre", "étincelle", "étoile", "étranger", "étroit", "étude", "événement", "éviter", "exemple", "exercice", "exister", "expérience", "expliquer", "explorer", "exposition", "extra", "fabriquer", "facile", "facteur", "faim", "faisceau", "falloir", "famille", "fantaisie", "farce", "fardeau", "fatigue", "faucon", "faveur", "fée", "femme", "fenêtre", "fer", "ferme", "fête", "feu", "feuille", "fibre", "fichier", "fiche", "film", "filtre",
"final", "finir", "fiole", "fissure", "fixer", "flamme", "flèche", "fleuve", "flocon", "floraison", "fleur", "foin", "foire", "fois", "foncé", "fond", "force", "forêt", "formule", "fort", "fouet", "foule", "four", "fourche", "fournir", "fraise", "français", "frapper", "frein", "frère", "frisson", "froid", "fromage", "fuite", "fumée", "funéraire", "gagner", "galerie", "galop", "garage", "garde", "gaspiller", "gâteau", "gauche", "geler", "gendarme", "général", "générosité", "génie", "gérer", "gestes", "gigantesque", "girafe", "glace", "glisser", "gloire", "gobelin", "gomme", "gorge", "gouffre", "goutte", "grandir", "gratte", "grenouille", "grève", "griller", "grimoire", "grotte", "guerre", "guider", "habile", "habit", "habiter", "haie", "haine", "halte", "harmonie", "hâte", "haut", "héberger", "hélice", "hémisphère", "hérisson", "hermine", "héroïque", "hésiter", "heure", "hibou", "histoire", "hiver", "honnête", "horizon", "horloge", "humain", "humeur", "humide", "hutte", "idée", "ignorer", "illusion", "image", "imitation", "immense", "impact", "important", "imposer", "impression", "incroyable", "indiquer", "informer", "ingénieur", "insecte", "inspiration", "installer", "instant", "instruction", "intérêt", "interrompre", "introduire", "inventer", "invité", "invisible", "jardin", "jaune", "jean", "jet", "jeu", "jeune", "joie", "jonc", "jouer", "journal", "journée", "jouvence", "juge", "jumeau", "jungle", "jupe", "jusqu'à", "juste", "kangourou", "kayak", "kilo", "kilomètre", "labyrinthe", "lac", "lacet", "lâcher", "lacune", "lait", "lancer", "lanterne", "lapin", "large", "larme", "laurier", "lavande", "laver", "légende", "légume", "lendemain", "léopard", "lèpre", "lettre", "libellule", "libre", "licorne", "lieu", "ligue", "limite", "lion", "liquide", "liste", "lit", "livre", "locomotive", "loi", "loisir", "long", "loup", "lueur", "lundi", "lune", "lutin", "lyre", "machine", "magasin", "magie", "magnétisme", "maigre", "maillot", "main", "maire", "maison", "maître", "maladie", "malheur", "malice", "maman", "manche", "manger", "manière", "manquer", "marcher", "marée", "marge", "marin", "marmite", "masque", "masser", "matin", "mauvais", "mécanisme", "médaillon", "méditer", "mémoire", "même", "mendiant", "ménage", "mener", "mensonge", "mentor", "mer", "merci", "mercredi", "mère", "mesure", "mettre", "midi", "miel", "mignon", "milieu", "million", "mine", "miroir", "miser", "mitraillette", "mode", "modèle", "moineau", "mois", "moment", "monde", "montagne", "monter",
"montre", "mordre", "morceau", "mort", "mot", "moteur", "moulin", "mourir", "moustache", "mouton", "moyen", "mûr", "muraille", "mystère", "naissance", "narrer", "national", "nature", "neige", "nettoyer", "niveau", "noir", "nom", "nombre", "noter", "nouveau", "noyer", "nuage", "nuit", "objectif", "obstacle", "occasion", "océan", "odeur", "offre", "oiseau", "olive", "ombre", "oncle", "opéra", "opinion", "orage", "orange", "orchestre", "ordinaire", "organe", "orignal", "origine", "ouvrir", "page", "pain", "palais", "pamplemousse", "panier", "panne", "papier", "parc", "parcours", "parfait", "parler", "partager", "passage", "passion", "pâte", "patience", "patron", "pause", "pays", "pêche", "peigne", "peinture", "pelouse", "pencher", "pendule", "pénible", "pensée", "perdre", "perle", "permettre", "perroquet", "personne", "petit", "peu", "peur", "phare", "phrase", "physique", "piano", "pic", "pièce", "pied", "pierre", "pigeon", "pilier", "pince", "pioche", "pique", "pirate", "piste", "plage", "plaindre", "plaire", "plaisir", "plan", "planche", "planète", "plante", "plat", "plein", "pleurer", "plonger", "poésie", "poids", "poignard", "poignée", "poil", "point", "pointe", "poisson", "pomme", "pont", "populaire", "port", "porte", "portrait", "poser", "position", "possible", "pot", "poudre", "poule", "poumon", "pour", "pourquoi", "pousser", "pouvoir", "prairie", "précaution", "précieux", "préférer", "premier", "prendre", "près", "présence", "préserver", "pressentir", "prêt", "printemps", "prison", "prix", "problème", "proche", "produit", "professeur", "projet", "promenade", "proposer", "propre", "protéger", "prouver", "public", "puis", "puiser", "pull", "punir", "pyramide", "quai", "quand", "quart", "quatre", "question", "queue", "quitter", "raison", "ramasser", "rang", "ranger", "rapide", "rapport", "rare", "rassembler", "rater", "rayon", "réaliser", "réalité", "recevoir", "récit", "recommencer", "récréation", "réduire", "reflet", "refuser", "regarder", "régime", "région", "régulier", "relation", "relever", "remède", "remettre", "remonter", "remplacer", "renard", "rendre", "renoncer", "rentrée", "rentrée", "réparer", "répartir", "répétez", "répondre", "réputation", "réserver", "résistance", "résoudre", "respect", "respirer", "reste", "retard", "retenir", "retour", "réunion", "réussir", "réveiller", "revenir", "rêve", "revient", "révolution", "richesse", "rideau", "rien", "rigide",
"rire", "risque", "rivière", "robe", "roi", "rôle", "roman", "rompre", "ronfler", "rose", "route", "roux", "royal", "ruche", "rue", "rugir", "ruine", "rumeur", "sable", "sac", "sage", "salade", "salle", "salon", "saluer", "sang", "santé", "sauter", "savane", "savoir", "science", "scooter", "seau", "sec", "second", "secret", "secteur", "secouer", "sécurité", "seigneur", "semaine", "sembler", "sentir", "séparer", "septembre", "serpent", "service", "siège", "signal", "signer", "simple", "singe", "sirène", "situation", "société", "soif", "soir", "sois", "soit", "soldat", "soleil", "solide", "sombre", "sommeil", "sommet", "sonner", "sort", "sorte", "sortir", "souci", "souffrir", "souhait", "soulager", "soulever", "souligne", "souper", "source", "sourire", "sous", "soutien", "spécial", "sphère", "statue", "station", "statut", "stylo", "sucre", "suivre", "sujet", "support", "supposer", "surface", "surprendre", "surtout", "surveiller", "système", "table", "tâche", "taille", "talent", "tapis", "tard", "téléphone", "tempête", "temps", "tente", "terminer", "terre", "terrible", "tête", "théâtre", "thème", "tirer", "tissu", "titan", "titres", "toboggan", "tomate", "tomber", "tonnerre", "toque", "tortue", "toucher", "tour", "tourner", "tousser", "tracer", "tradition", "train", "trait", "traitement", "trajet", "tranquille", "transformer", "transmettre", "travailler", "traverser", "trembler", "trésor", "triompher", "triste", "trompette", "trou", "trouver", "troisième", "tuile", "tulipe", "turquoise", "tuyau", "type", "unifier", "unique", "univers", "utile", "vacances", "valise", "valoir", "vase", "vendre", "venir", "vent", "ver", "verbe", "verdure", "vérité", "verre", "vers", "veste", "vêtements", "vieux", "vigilance", "ville", "violon", "visible", "vision", "visite", "vite", "vivant", "vitesse", "vivre", "voile", "voir"]

function genererMots(){;

    var motRandom = mots[Math.floor(Math.random() * mots.length)];
    document.getElementById("afficherMotATrouver").innerText = "Mot à écrire : "+motRandom;
    return motRandom;
}
