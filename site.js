(() => {
  // Set to the official product page once the app has an Apple ID.
  const APP_STORE_URL = '';
  const languages = ['en', 'pt', 'es', 'fr', 'de', 'it'];
  const translations = {
    'The app': ['O app', 'La app', 'L’app', 'Die App', 'L’app'],
    'Platform': ['Plataforma', 'Plataforma', 'Plateforme', 'Plattform', 'Piattaforma'],
    'Get FitΛ': ['Baixar FitΛ', 'Descargar FitΛ', 'Télécharger FitΛ', 'FitΛ laden', 'Scarica FitΛ'],
    'FITNESS FOR iPHONE': ['FITNESS NO iPHONE', 'FITNESS PARA iPHONE', 'FITNESS SUR iPHONE', 'FITNESS FÜRS iPHONE', 'FITNESS SU iPHONE'],
    'Move with': ['Mova-se com', 'Muévete con', 'Bougez avec', 'Beweg dich', 'Muoviti con'],
    'purpose.': ['propósito.', 'propósito.', 'intention.', 'bewusst.', 'intenzione.'],
    'Your Galaxy Fit3, connected to iPhone. A closer look at your pulse today, and a new home for your training tomorrow.': ['Sua Galaxy Fit3 conectada ao iPhone. Hoje, acompanhe seu pulso. Amanhã, tenha um lugar para registrar seus treinos.', 'Tu Galaxy Fit3 conectada al iPhone. Hoy, una mirada a tu pulso. Mañana, un espacio para tus entrenamientos.', 'Votre Galaxy Fit3 connectée à l’iPhone. Aujourd’hui, suivez votre pouls. Demain, retrouvez vos entraînements au même endroit.', 'Deine Galaxy Fit3, verbunden mit dem iPhone. Heute hast du deinen Puls im Blick. Morgen findest du hier auch dein Training.', 'La tua Galaxy Fit3 connessa a iPhone. Oggi puoi seguire il tuo battito. Domani avrai uno spazio per i tuoi allenamenti.'],
    'Explore the app': ['Explore o app', 'Explora la app', 'Découvrir l’app', 'App entdecken', 'Esplora l’app'],
    'HEART RATE': ['FREQUÊNCIA CARDÍACA', 'FRECUENCIA CARDÍACA', 'FRÉQUENCE CARDIAQUE', 'HERZFREQUENZ', 'FREQUENZA CARDIACA'],
    'Fit3 sample reading': ['Amostra da Fit3', 'Muestra de la Fit3', 'Mesure de la Fit3', 'Fit3-Beispielmessung', 'Lettura di esempio Fit3'],
    'FIELD SERIES': ['SÉRIE DE CAMPO', 'SERIE DE CAMPO', 'SÉRIE TERRAIN', 'FELDSERIE', 'SERIE SUL CAMPO'],
    'Scroll to explore': ['Role para explorar', 'Desplázate para explorar', 'Défiler pour découvrir', 'Zum Entdecken scrollen', 'Scorri per esplorare'],
    'THE APP': ['O APP', 'LA APP', 'L’APP', 'DIE APP', 'L’APP'],
    'Your wrist, in focus.': ['Seu pulso em foco.', 'Tu muñeca en foco.', 'Votre poignet à la loupe.', 'Dein Handgelenk im Fokus.', 'Il tuo polso in primo piano.'],
    'Explore a snapshot from a Galaxy Fit3 on iPhone. Select a reading to see how it appears in FitΛ.': ['Explore dados de uma Galaxy Fit3 capturados no iPhone. Selecione uma leitura para ver como ela aparece no FitΛ.', 'Explora datos de una Galaxy Fit3 capturados en iPhone. Elige una lectura para ver cómo aparece en FitΛ.', 'Explorez des données de Galaxy Fit3 recueillies sur iPhone. Sélectionnez une mesure pour voir son affichage dans FitΛ.', 'Entdecke Messwerte einer Galaxy Fit3 auf dem iPhone. Wähle einen Wert und sieh dir an, wie FitΛ ihn anzeigt.', 'Esplora i dati di una Galaxy Fit3 acquisiti su iPhone. Seleziona una lettura per vedere come appare in FitΛ.'],
    'Heart rate': ['Frequência cardíaca', 'Frecuencia cardíaca', 'Fréquence cardiaque', 'Herzfrequenz', 'Frequenza cardiaca'],
    'Band battery': ['Bateria da pulseira', 'Batería de la pulsera', 'Batterie du bracelet', 'Akkustand', 'Batteria del bracciale'],
    'Bluetooth signal': ['Sinal Bluetooth', 'Señal Bluetooth', 'Signal Bluetooth', 'Bluetooth-Signal', 'Segnale Bluetooth'],
    'Sample capture': ['Amostra', 'Muestra', 'Échantillon', 'Beispielmessung', 'Campione'],
    'Interactive product preview': ['Demonstração interativa', 'Demostración interactiva', 'Démo interactive', 'Interaktive Vorschau', 'Anteprima interattiva'],
    'THE PLATFORM': ['A PLATAFORMA', 'LA PLATAFORMA', 'LA PLATEFORME', 'DIE PLATTFORM', 'LA PIATTAFORMA'],
    'Beyond the': ['Além da', 'Más allá de la', 'Au-delà du', 'Mehr als ein', 'Oltre il'],
    'band.': ['pulseira.', 'pulsera.', 'bracelet.', 'Armband.', 'bracciale.'],
    'Galaxy Fit3 is our first integration. We’re designing FitΛ around the person wearing it, with room to train and track progress with or without a band.': ['A Galaxy Fit3 é a nossa primeira integração. Estamos criando o FitΛ para quem treina e quer acompanhar sua evolução, com ou sem pulseira.', 'Galaxy Fit3 es nuestra primera integración. Estamos diseñando FitΛ para que puedas entrenar y seguir tu progreso, con o sin pulsera.', 'La Galaxy Fit3 est notre première intégration. Nous concevons FitΛ pour vous permettre de vous entraîner et de suivre vos progrès, avec ou sans bracelet.', 'Die Galaxy Fit3 ist unsere erste Integration. Wir entwickeln FitΛ für Menschen, die trainieren und ihre Fortschritte verfolgen möchten, mit oder ohne Armband.', 'Galaxy Fit3 è la nostra prima integrazione. Stiamo progettando FitΛ per chi si allena e vuole seguire i propri progressi, con o senza bracciale.'],
    'Connected wearables': ['Dispositivos conectados', 'Dispositivos conectados', 'Objets connectés', 'Verbundene Wearables', 'Dispositivi indossabili'],
    'In testing': ['Em testes', 'En pruebas', 'En test', 'In Erprobung', 'In fase di test'],
    'Physical iPhone tests cover heart rate, battery, incoming call alerts and first-time Fit3 setup. Step syncing is implemented and awaits testing on the band.': ['Os testes em iPhone físico abrangem batimentos, bateria, alertas de chamadas e configuração inicial da Fit3. A sincronização de passos está implementada e aguarda teste na pulseira.', 'Las pruebas en un iPhone físico abarcan pulso, batería, avisos de llamadas y configuración inicial de la Fit3. La sincronización de pasos está implementada y pendiente de pruebas en la pulsera.', 'Les essais sur iPhone physique couvrent le pouls, la batterie, les alertes d’appel et la configuration initiale de la Fit3. La synchronisation des pas est implémentée et doit encore être testée sur le bracelet.', 'Tests auf einem physischen iPhone umfassen Puls, Akku, Anrufhinweise und die Ersteinrichtung der Fit3. Die Schrittsynchronisation ist implementiert und muss noch am Armband getestet werden.', 'I test su iPhone fisico riguardano battito, batteria, avvisi di chiamata e configurazione iniziale di Fit3. La sincronizzazione dei passi è implementata e attende la verifica sul bracciale.'],
    'Training journal': ['Diário de treino', 'Diario de entrenamiento', 'Journal d’entraînement', 'Trainingstagebuch', 'Diario di allenamento'],
    'Planned': ['Planejado', 'En proyecto', 'Prévu', 'Geplant', 'In programma'],
    'A place to log sessions, revisit workouts and follow your training history, even on days you leave your band at home.': ['Um espaço para registrar sessões, rever treinos e acompanhar seu histórico, mesmo nos dias em que a pulseira fica em casa.', 'Un espacio para registrar sesiones, repasar rutinas y consultar tu historial, incluso los días en que dejes la pulsera en casa.', 'Un espace pour consigner vos séances, revoir vos exercices et suivre votre historique, même quand votre bracelet reste à la maison.', 'Hier kannst du Einheiten festhalten, vergangene Workouts ansehen und dein Training verfolgen, auch wenn dein Armband zu Hause bleibt.', 'Uno spazio per registrare le sessioni, rivedere gli allenamenti e seguire il tuo percorso, anche quando lasci il bracciale a casa.'],
    'Body composition': ['Composição corporal', 'Composición corporal', 'Composition corporelle', 'Körperzusammensetzung', 'Composizione corporea'],
    'Track changes over time using measurements from a compatible scale, including bioimpedance where supported.': ['Acompanhe as mudanças ao longo do tempo com as medições de uma balança compatível, incluindo bioimpedância quando disponível.', 'Sigue los cambios a lo largo del tiempo mediante mediciones de una báscula compatible, incluida la bioimpedancia si está disponible.', 'Suivez votre évolution grâce aux mesures d’une balance compatible, y compris la bio-impédance si elle est prise en charge.', 'Verfolge Veränderungen anhand der Messwerte einer kompatiblen Waage, einschließlich Bioimpedanz, sofern unterstützt.', 'Segui i cambiamenti nel tempo con le misurazioni di una bilancia compatibile, inclusa la bioimpedenza se supportata.'],
    'Independent fitness software for iPhone.': ['Software fitness independente para iPhone.', 'Software de fitness independiente para iPhone.', 'Logiciel de fitness indépendant pour iPhone.', 'Unabhängige Fitnesssoftware fürs iPhone.', 'Software fitness indipendente per iPhone.'],
    'App Store availability': ['Disponibilidade na App Store', 'Disponibilidad en el App Store', 'Disponibilité sur l’App Store', 'Verfügbarkeit im App Store', 'Disponibilità su App Store'],
    'The iPhone app is in development. The official App Store link will appear here when FitΛ is available.': ['O app para iPhone está em desenvolvimento. O link oficial da App Store aparecerá aqui quando o FitΛ estiver disponível.', 'La app para iPhone está en desarrollo. El enlace oficial al App Store aparecerá aquí cuando FitΛ esté disponible.', 'L’app pour iPhone est en développement. Le lien officiel vers l’App Store apparaîtra ici dès que FitΛ sera disponible.', 'Die iPhone-App ist in Entwicklung. Sobald FitΛ verfügbar ist, erscheint hier der offizielle App-Store-Link.', 'L’app per iPhone è in fase di sviluppo. Il link ufficiale all’App Store apparirà qui quando FitΛ sarà disponibile.'],
    'Back to the site': ['Voltar ao site', 'Volver al sitio', 'Revenir au site', 'Zurück zur Website', 'Torna al sito'],
    'Language': ['Idioma', 'Idioma', 'Langue', 'Sprache', 'Lingua'],
    'Close': ['Fechar', 'Cerrar', 'Fermer', 'Schließen', 'Chiudi'],
    'Preview readings': ['Leituras de demonstração', 'Lecturas de demostración', 'Mesures de démonstration', 'Beispielmesswerte', 'Letture dimostrative'],
    'FitΛ — Fitness in motion': ['FitΛ — Fitness em movimento', 'FitΛ — Fitness en movimiento', 'FitΛ — Le fitness en mouvement', 'FitΛ — Fitness in Bewegung', 'FitΛ — Fitness in movimento'],
    'Explore FitΛ, the independent fitness app for iPhone. Starting with Galaxy Fit3, built around the way you move.': ['Conheça o FitΛ, app fitness independente para iPhone. Começa com a Galaxy Fit3 e acompanha seu jeito de se movimentar.', 'Descubre FitΛ, la app de fitness independiente para iPhone. Empieza con Galaxy Fit3 y se adapta a tu forma de moverte.', 'Découvrez FitΛ, l’app de fitness indépendante pour iPhone. Elle débute avec la Galaxy Fit3 et s’adapte à votre façon de bouger.', 'Entdecke FitΛ, die unabhängige Fitness-App fürs iPhone. Sie startet mit der Galaxy Fit3 und orientiert sich an deiner Bewegung.', 'Scopri FitΛ, l’app fitness indipendente per iPhone. Inizia con Galaxy Fit3 e segue il tuo modo di muoverti.']
  };

  const key = 'fitlambda.site.language';
  const select = document.getElementById('language');
  const strings = Array.from(document.querySelectorAll('[data-i]'), element => [element, element.textContent.trim()]);
  const labels = Array.from(document.querySelectorAll('[aria-label]'), element => [element, element.getAttribute('aria-label')]);
  const description = document.querySelector('meta[name="description"]');
  const originalTitle = document.title;
  const originalDescription = description.content;
  function browserLanguage() {
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    return preferred.map(language => (language || '').toLowerCase().split('-')[0]).find(language => languages.includes(language)) || 'en';
  }
  let override;
  try { override = localStorage.getItem(key); } catch {}
  function apply(language) {
    const index = languages.indexOf(language) - 1;
    function translate(source) {
      return translations[source]?.[index] ?? source;
    }
    for (const [element, source] of strings) element.textContent = translate(source);
    for (const [element, source] of labels) element.setAttribute('aria-label', translate(source));
    document.documentElement.lang = language;
    document.title = translate(originalTitle);
    description.content = translate(originalDescription);
    select.value = language;
  }
  apply(languages.includes(override) ? override : browserLanguage());
  select.addEventListener('change', () => {
    override = select.value;
    try { localStorage.setItem(key, override); } catch {}
    apply(override);
  });
  window.addEventListener('languagechange', () => {
    if (!languages.includes(override)) apply(browserLanguage());
  });

  const dialog = document.getElementById('release');
  for (const button of document.querySelectorAll('[data-release]')) {
    button.addEventListener('click', () => {
      if (APP_STORE_URL) window.location.assign(APP_STORE_URL);
      else dialog.showModal();
    });
  }
  for (const id of ['close', 'back']) {
    document.getElementById(id).addEventListener('click', () => dialog.close());
  }
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
