export default {
	profile: [
		{
			title: "🌍 Géomatique",
			content: "Étant géographe et géomaticien, mes compétences me permettent de traiter des problèmes spatiaux de natures variées en utilisant les systèmes d'information géographique et techniques de télédétection.",
		},
		{
			title: "💡 Innovation",
			content: "Menant une veille technologique régulière, je me tiens informé des nouveautés en géomatique et science des données. Cela m'aide à développer ma culture scientifique et à cibler des méthodes novatrices pour mes travaux.",
		},
		{
			title: "👥 Projets collaboratifs",
			content: "J'accorde une attention toute particulière au fait d'employer mes compétences pour aider autrui. Cela s'exprime par une affinité pour l'enseignement, et par la participation à des projets collaboratifs à vocation humanitaire.",
		},
	],
	languages: [
		{
			language: "Français",
			flag: "/icons/drapeau-france.svg",
			level: "Langue maternelle",
		},
		{
			language: "Anglais",
			flag: "/icons/drapeau-uk.svg",
			level_oral: "B2",
			level_written: "C1",
		},
		{
			language: "Allemand",
			flag: "/icons/drapeau-allemagne.svg",
			level_oral: "A2",
			level_written: "A2",
		},
		{
			language: "Espéranto",
			flag: "/icons/drapeau-esperanto.svg",
			level: "Débutant",
		},
	],
	skills: {
		os: {
			label: "Systèmes d'exploitation",
			icon: "ph-desktop-fill",
			items: [
			{
				title: "GNU/Linux",
				icon: "/icons/linux.svg",
			},
			{
				title: "Windows",
				icon: "/icons/windows.svg",
			},
			{
				title: "z/OS",
				icon: "/icons/ibm-z.svg",
				enableDark: true,
			}]
		},
		gis: {
			label: "SIG et cartographie",
			icon: "ph-compass-fill",
			items: [
				{
					title: "QGIS",
					icon: "/icons/qgis.svg",
					level: 3,
				},
				{
					title: "GRASS",
					icon: "/icons/grass.svg",
					level: 3,
				},
				{
					title: "SAGA",
					icon: "/icons/saga.webp",
					level: 3,
				},
				{
					title: "ArcMap",
					icon: "/icons/arcgis.svg",
					level: 3,
				},
				{
					title: "JOSM",
					icon: "/icons/josm.svg",
					level: 3,
				},
				{
					title: "Cartes & Données",
					icon: "/icons/cartesetdonnees.svg",
					level: 3,
				},

				{
					title: "FME",
					icon: "/icons/fme.png",
					level: 1,
				},
			],
		},
		ml: {
			label: "Télédétection",
			icon: "ph-planet-fill",
			items: [
				{
					title: "GDAL",
					icon: "/icons/gdal.svg",
					level: 3,
				},
				{
					title: "SNAP",
					icon: "/icons/snap.jpg",
					level: 3,
				},
				{
					title: "Orfeo Toolbox",
					icon: "/icons/orfeo.png",
					level: 3,
				},
				{
					title: "ENVI",
					icon: "/icons/envi.png",
					level: 3,
				},
				{
					title: "Google Earth Engine",
					icon: "/icons/googleearthengine.svg",
					level: 2,
				},
			],
		},
		programming: {
			label: "Développement",
			icon: "ph-cpu-fill",
			items: [
				{
					title: "Python",
					icon: "/icons/python.svg",
					level: 3,
				},
				{
					title: "Cobol",
					icon: "/icons/cobol.svg",
					level: 3,
				},
				{
					title: "HTML 5",
					icon: "/icons/html.svg",
					level: 3,
				},
				{
					title: "CSS 3",
					icon: "/icons/css.svg",
					level: 3,
				},
				{
					title: "JavaScript",
					icon: "/icons/javascript.svg",
					level: 2,
				},
				{
					title: "R",
					icon: "/icons/r.svg",
					level: 2,
				},
				{
					title: "SQL",
					icon: "/icons/sql.svg",
					level: 2,
				},
				{
					title: "JCL",
					icon: "/icons/jcl.svg",
					level: 2,
				},
				{
					title: "Bash",
					icon: "/icons/bash.svg",
					level: 1,
					enableDark: true,
				},
				{
					title: "Matlab",
					icon: "/icons/matlab.svg",
					level: 1,
				},
				{
					title: "Rust",
					icon: "/icons/rust.svg",
					level: 1,
					enableDark: true,
				},
				{
					title: "C",
					icon: "/icons/c.svg",
					level: 1,
				},
				{
					title: "C#",
					icon: "/icons/c-sharp.svg",
					level: 1,
				},
			],
		},
		web: {
			label: "Bibliothèques web",
			icon: "ph-browsers-fill",
			items: [
				{
					title: "Astro",
					icon: "/icons/astro.svg",
					level: 3,
				},
				{
					title: "Tailwind",
					icon: "/icons/tailwind.svg",
					level: 3,
				},
				{
					title: "React",
					icon: "/icons/react.svg",
					level: 2,
				},
				{
					title: "Vite",
					icon: "/icons/vite.svg",
					level: 2,
				},
				{
					title: "Leaflet",
					icon: "/icons/leaflet.svg",
					level: 2,
				},
				{
					title: "OpenLayers",
					icon: "/icons/openlayers.svg",
					level: 2,
				},
				{
					title: "Webpack",
					icon: "/icons/webpack.svg",
					level: 1,
				},
				{
					title: "jQuery",
					icon: "/icons/jquery.svg",
					level: 1,
					enableDark: true,
				},
			],
		},
		markup: {
			label: "Markup et notation",
			icon: "ph-brackets-angle-fill",
			items: [
				{
					title: "Markdown",
					icon: "/icons/markdown.svg",
					level: 3,
					enableDark: true,
				},
				{
					title: "JSON",
					icon: "/icons/json.svg",
					level: 3,
					enableDark: true,
				},
				{
					title: "LaTeX",
					icon: "/icons/latex.svg",
					level: 2,
					enableDark: true,
				},
				{
					title: "XML",
					icon: "/icons/xml.svg",
					level: 1,
				},
			],
		}, 
		database: {
			label: "Bases de données",
			icon: "ph-database-fill",
			items: [
				{
					title: "PostgreSQL",
					icon: "/icons/pgsql.svg",
					level: 2,
				},	
				{
					title: "PostGIS",
					icon: "/icons/postgis.png",
					level: 2,
				},	
				{
					title: "DB2",
					icon: "/icons/db2.svg",
					level: 2,
				},	
				{
					title: "DL/I",
					icon: "/icons/dl1.svg",
					level: 1,
				},	
			],
		}, 
		_3d: {
			label: "Photogrammétrie et 3D",
			icon: "ph-cube-fill",
			items: [
				{
					title: "Agisoft Metashape",
					icon: "/icons/metashape.svg",
					level: 3,
				},
				{
					title: "Blender",
					icon: "/icons/blender.svg",
					level: 2,
				},
				{
					title: "CloudCompare",
					icon: "/icons/cloudcompare.png",
					level: 2,
				},
				{
					title: "Meshlab",
					icon: "/icons/meshlab.svg",
					level: 2,
				},
				{
					title: "Godot",
					icon: "/icons/godot.svg",
					level: 1,
				},
				{
					title: "Unity",
					icon: "/icons/unity.svg",
					level: 1,
					enableDark: true,
				},
			],
		},
		design: {
			label: "Infographie",
			icon: "ph-paint-brush-fill",
			items:		[
				{
					title: "Figma",
					icon: "/icons/figma.svg",
					level: 2,
				},
				{
					title: "Photoshop",
					icon: "/icons/photoshop.svg",
					level: 2,
				},
				{
					title: "Illustrator",
					icon: "/icons/illustrator.svg",
					level: 2,
				},
				{
					title: "The Gimp",
					icon: "/icons/gimp.svg",
					level: 2,
				},
				{
					title: "Inkscape",
					icon: "/icons/inkscape.svg",
					level: 2,
				},
				{
					title: "InDesign",
					icon: "/icons/indesign.svg",
					level: 1,
				},
			],
		},
		others: {
			label: "Outils transversaux",
			icon: "ph-puzzle-piece-fill",
			items: [
				{
					title: "LibreOffice",
					icon: "/icons/libreoffice.svg",
					level: 3,
					enableDark: true,
				},
				{
					title: "Microsoft Office",
					icon: "/icons/ms-office.svg",
					level: 3,
				},
				{
					title: "Conda",
					icon: "/icons/conda.svg",
					level: 3,
				},
				{
					title: "Google Colab",
					icon: "/icons/colaboratory.svg",
					level: 3,
				},
				{
					title: "VirtualBox",
					icon: "/icons/virtualbox.svg",
					level: 3,
				},
				{
					title: "Git",
					icon: "/icons/git.svg",
					level: 2,
				},
				{
					title: "NPM",
					icon: "/icons/npm.svg",
					level: 2,
				},
				{
					title: "Google Compute Engine",
					icon: "/icons/compute-engine.svg",
					level: 1,
				},
				{
					title: "Vagrant",
					icon: "/icons/vagrant.svg",
					level: 1,
				},
				{
					title: "Docker",
					icon: "/icons/docker.svg",
					level: 1,
				},
			],
		},
	},
	experiences: [
		{
			start: "Février 2022",
			end: "Avril 2022",
			employer: "Euro Information",
			position: "Développeur Analyste Mainframe",
			tasks: [
				"Enrichissement et maintenance des applicatifs métiers de type Mainframe (Cobol) et intranet back-office (C#).",
				"Etude des besoins de la maîtrise d'ouvrage, rédaction des spécifications fonctionnelles et techniques, mise en qualification des développements réalisés.",
			],
		},
		{
			start: "Novembre 2019",
			end: "Mai 2021",
			employer: "Faculté de Géographie et d'Aménagement de Strasbourg",
			position: "Enseignant vacataire",
			tasks: [
				"Cours dispensés en :",
				"Licence 3 Géographie — Cartographie thématique de niveau III, Initiation à la télédétection spatiale.",
				"Master 1 Observation de la Terre et Géomatique (OTG) — Remise à niveau en SIG, Remise à niveau en télédétection.",
				"Master 1 Géographie, Aménagement, Environnement et Développement (GAED) — Remise à niveau en SIG.",
			],
		},
		{
			start: "Octobre 2019",
			end: "Mai 2021",
			employer: "Université de Strasbourg",
			position: "Doctorant contractuel",
			tasks: [
				"Sujet de la thèse de doctorat : « Développement de produits spatiaux inédits pour évaluer les effets des changements passés sur la biodiversité floristique actuelle. »",
				"📰 Publication de deux articles dans des revues académiques à comité de lecture. Publication d'un article de vulgarisation.",
				"🏆 Prix du meilleur poster doctoral.",
				"Collecte, géoréférencement et assemblage des cartes historiques disponibles sur la zone d'étude jusqu'en 1760. Digitalisation des postes d'occupation du sol pertinents.",
				"Collecte et préparation des photographies aériennes (correction du bruit et du vignettage, découpe) disponibles sur la zone d'étude jusqu'en 1950. Production d'ortho-mosaïques et modèles 3D par restitution photogrammétrique.",
				"Développement de modèles de deep learning (CNN) pour la colorisation IRRVB et la segmentation sémantique de la série temporelle d'ortho-mosaïques.",
				"Calcul de métriques paysagères et indices environnementaux pour le développement d'un protocole de collecte des données botaniques sur le terrain.",
			],
		},
		{
			start: "Avril 2019 (Octobre 2018 officieusement)",
			end: "Mai 2019",
			employer: "CNRS, Universités de Strasbourg et Lyon II",
			position: "Ingénieur d'études",
			tasks: [
				"Mise en forme et analyse de la base de données géo-historiques de Ptolémée.",
				"Vérification de la qualité des données, nettoyage et formalisation des informations attributaires, développement d'outils d'analyse basées sur des méthodes statistiques.",
				"Création de cartes statistiques et interactives, ainsi que d'infographies à destination d'un public d'historiens.",
			],
		},
		{
			start: "Mars 2018",
			end: "Août 2018",
			employer: "Université de Strasbourg",
			position: "Stage de fin d'études",
			tasks: [
				"Sujet : « L'apport des méthodes d'apprentissage profond pour l'exploitation des photographies aériennes anciennes — Développement de techniques de colorisation automatique. »",
				"Développement et comparaison de modèles de deep learning (GAN, AE, CNN) pour la colorisation RVB d'images satellitaires et photographies aériennes panchromatiques.",
				"Colorisation automatique d'une série temporelle d'ortho-mosaïques sur l'Eurométropole de Strasbourg.",
				"Evaluation de l'apport de la couleur pour la production automatique d'occupations du sol historiques.",
			],
		},
		{
			start: "Mai 2016",
			end: "Février 2018",
			employer: "CNRS, LIVE, EOST, Université de Strasbourg",
			position: "Stages et vacations",
			tasks: [
				"Agrégation de diverses expériences réalisées sur une période continue durant mes études.",
				"Développement de la chaîne de traitements Urba-Opt pour la classification automatique des surfaces artificialisées à partir d'images Sentinel-2.",
				"Comparaison des produits disponibles sur la tache artificialisée pour plusieurs métropoles françaises, et évaluation de leurs apports.",
				"Développement d'une chaîne de traitements pour évaluer la qualité des MNS obtenus par restitution photogrammétrique avec DSM-Opt, à partir d'images Pléiades stéréos et tri-stéréos.",
				"Production de MNS et MNE sur l'Eurométropole de Strasbourg à partir de relevés LiDAR. Exploration de l'apport des primitives géométriques et fonctions mathématiques simples pour résumer un nuage de points LiDAR.",
				"Production d'infographies, posters et cartes interactives diverses pour les différentes missions.",
			],
		},
	],
	education: [
		{
			start: "Novembre 2021",
			end: "Janvier 2022",
			organism: "M2i Formation",
			place: "A distance",
			title: "Formation de Développeur Mainframe",
			content: "Algorithmique, z/OS, TSO, JCL, COBOL, SQL, DB2, DL/I.",
		},
		{
			start: "Juin 2020",
			end: "Août 2020",
			organism: "ETH Zürich",
			place: "A distance",
			title: "LE-01x: Landscape Ecology",
			content: "Concepts en écologie des paysages, modélisation des systèmes, métriques paysagères, usages de la télédétection, paysage et société, écologie urbaine, services écosystémiques.",
		},
		{
			start: "2016",
			end: "2018",
			organism: "Université de Strasbourg",
			place: "Strasbourg",
			title: "Master Observation de la Terre et Géomatique",
			honors: "Mention « Très bien ».",
		},
		{
			start: "2013",
			end: "2016",
			organism: "Université de Strasbourg",
			place: "Strasbourg",
			title: "Licence de Géographie",
			honors: "Mention « Très bien ».",
		},
		{
			start: "2012",
			end: "2013",
			organism: "Université de Strasbourg",
			place: "Strasbourg",
			title: "Première Année Commune des Etudes de Santé",
		},
		{
			end: "2012",
			organism: "Lycée des Métiers Sainte Clotilde",
			place: "Strasbourg",
			title: "Baccalauréat Scientifique",
		},
	]
}