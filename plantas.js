/* DATOS DE LA GUÍA. El orden de este arreglo es el orden de navegación.
   Los nombres se asocian a la lista del usuario: no identifican por sí solos
   los ejemplares del campus. "sp." significa especie aún sin determinar.
   Para añadir una planta, copia un objeto y usa un id único y permanente. */
window.PLANTAS = [
  {
    id: 'guayaba', imagen: 'imagenes/guayaba.jpg', nombre: 'Guayaba', original: 'guayaba',
    cientifico: 'Psidium guajava', familia: 'Myrtaceae', tipo: 'Árbol frutal',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Nombre científico asociado a la guayaba común. Falta documentar el ejemplar del campus.',
    intro: 'Un fruto aromático y una corteza que cuenta su historia.',
    descripcion: 'Árbol pequeño de la América tropical, cultivado por sus frutos. Su corteza lisa se desprende en láminas y deja áreas de distintos tonos.',
    rasgos: [['Hojas', 'Simples, opuestas y con nervaduras laterales bien marcadas.'], ['Flores', 'Blancas, con numerosos estambres que sobresalen.'], ['Fruto', 'Baya aromática, con muchas semillas y pulpa de color variable.']],
    cuidados: [['Luz', 'Ubicar con buena exposición al sol.'], ['Agua y suelo', 'Mantener buen drenaje y atender el riego durante el establecimiento.'], ['Observación', 'Revisar frutos y brotes; registrar daños y retirar material enfermo con orientación técnica.']],
    curiosidades: [['Una piel cambiante', 'La descamación de la corteza ayuda a reconocerlo.'], ['Más de un color', 'La pulpa puede ser blanca, amarillenta o rosada según la variedad.']],
    fuentes: [['World Agroforestry · Psidium guajava', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Psidium_guajava.PDF']]
  },
  {
    id: 'duranta', imagen: 'imagenes/duranta.jpg', nombre: 'Duranta limón', original: 'darante de limon',
    cientifico: 'Duranta erecta', familia: 'Verbenaceae', tipo: 'Arbusto ornamental',
    estado: 'Nombre interpretado', pendiente: true,
    nota: 'Se interpretó “darante de limón” como duranta limón. Confirmar con foto; no se asigna un cultivar sin evidencia.',
    intro: 'Un toque de luz entre el verde del jardín.',
    descripcion: 'Arbusto ornamental de origen americano. Las selecciones de follaje amarillo verdoso se utilizan en bordes y setos.',
    rasgos: [['Hojas', 'Pequeñas, generalmente opuestas; verdes o amarillentas según la selección.'], ['Flores', 'La especie produce racimos de flores, con frecuencia violetas o azuladas.'], ['Frutos', 'Pequeños, amarillo anaranjado; no son comestibles.']],
    cuidados: [['Luz', 'Buena iluminación; la especie admite sol o sombra parcial.'], ['Agua y suelo', 'Suelo con buen drenaje, sin mantener las raíces encharcadas.'], ['Poda', 'Podas moderadas para conservar su forma; evitar retirar continuamente todos los brotes florales.']],
    curiosidades: [['Arbusto, no cítrico', '“Limón” describe aquí el aspecto del follaje, no un parentesco con los limoneros.'], ['Visitas al jardín', 'Sus flores atraen polinizadores. Las hojas y los frutos son tóxicos si se ingieren.']],
    fuentes: [['NC State Extension · Duranta erecta', 'https://plants.ces.ncsu.edu/plants/duranta-erecta/']]
  },
  {
    id: 'palma-navidad', imagen: 'imagenes/palma-navidad.jpg', nombre: 'Palma de Navidad', alias: 'Palma de Manila', original: 'palma de navidad o manilla',
    cientifico: 'Adonidia merrillii', familia: 'Arecaceae', tipo: 'Palmera',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'También publicada como Veitchia merrillii. Se normalizó “manilla” a Manila.',
    intro: 'Una copa elegante y racimos que se visten de rojo.',
    descripcion: 'Palmera tropical originaria de Filipinas, apreciada como ornamental por su tronco esbelto y sus hojas arqueadas.',
    rasgos: [['Tronco', 'Generalmente solitario, liso y grisáceo.'], ['Hojas', 'Pinnadas: cada hoja se divide en numerosos folíolos.'], ['Frutos', 'En racimos; pasan de verde a rojo al madurar.']],
    cuidados: [['Luz', 'Crece con sol o sombra parcial en clima cálido.'], ['Riego', 'Necesita agua regular, ajustada a la lluvia y al drenaje.'], ['Mantenimiento', 'Vigilar amarillamientos anormales. La nutrición debe adecuarse a las necesidades de las palmeras.']],
    curiosidades: [['Una por una', 'Tres troncos juntos suelen ser varias plantas agrupadas.'], ['Nombre de temporada', 'El nombre Navidad alude al aspecto de sus racimos rojos; el calendario cambia según el lugar.']],
    fuentes: [['NC State Extension · Adonidia merrillii', 'https://plants.ces.ncsu.edu/plants/adonidia-merrillii/']]
  },
  {
    id: 'limon-criollo', imagen: 'imagenes/limon-criollo.jpg', nombre: 'Limón criollo', original: 'limon crioyo',
    cientifico: 'Citrus × aurantiifolia', familia: 'Rutaceae', tipo: 'Árbol frutal',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Asociado al limón criollo o mexicano; confirmar la variedad del campus. El signo × indica origen híbrido.',
    intro: 'Pequeño, aromático y parte de nuestra cocina.',
    descripcion: 'Cítrico de copa ramificada, frecuentemente con espinas, conocido por sus frutos pequeños y de jugo ácido.',
    rasgos: [['Hojas', 'Simples, aromáticas y relativamente pequeñas.'], ['Flores', 'Blancas, pequeñas y perfumadas.'], ['Frutos', 'Redondos u ovalados, de cáscara fina; amarillean al madurar.']],
    cuidados: [['Luz', 'Pleno sol y espacio entre la copa y otras plantas.'], ['Agua y suelo', 'Drenaje adecuado y riego ajustado al clima, sobre todo en plantas jóvenes.'], ['Sanidad', 'Observar brotes y hojas. El amarillamiento irregular requiere diagnóstico antes de aplicar tratamientos.']],
    curiosidades: [['Verde y amarillo', 'El limón criollo puede tener cáscara amarilla cuando está maduro.'], ['Semillas especiales', 'Una semilla puede contener más de un embrión.']],
    fuentes: [['UF/IFAS · Key Lime Growing', 'https://ask.ifas.ufl.edu/publication/CH092']]
  },
  {
    id: 'guazimo', imagen: 'imagenes/guazimo.jpg', nombre: 'Guázimo', original: 'guazimo',
    cientifico: 'Guazuma ulmifolia', familia: 'Malvaceae', tipo: 'Árbol',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Guácima y guázimo pueden nombrar la misma especie. Se mantienen dos registros porque aparecen separados en tu lista.',
    intro: 'Sombra y vida en el paisaje tropical.',
    descripcion: 'Árbol americano de copa redondeada, frecuente en potreros, cercas y vegetación secundaria.',
    rasgos: [['Hojas', 'Alternas, con borde aserrado y base desigual.'], ['Flores', 'Pequeñas, agrupadas y de tono amarillento.'], ['Frutos', 'Cápsulas duras, oscuras y de superficie verrugosa.']],
    cuidados: [['Luz', 'Se desarrolla mejor con abundante sol.'], ['Establecimiento', 'Evitar competencia fuerte alrededor de las plantas jóvenes.'], ['Seguimiento', 'Registrar pérdida de hojas y daño de insectos; proteger la corteza de golpes.']],
    curiosidades: [['Árbol de sombra', 'Es común conservarlo en potreros para dar sombra.'], ['Un recurso en época seca', 'Sus hojas y frutos se usan como forraje en sistemas ganaderos.']],
    fuentes: [['World Agroforestry · Guazuma ulmifolia', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Guazuma_ulmifolia.PDF']]
  },
  {
    id: 'casia', nombre: 'Casia', original: 'casia',
    cientifico: 'Cassia / Senna · por confirmar', familia: 'Fabaceae (orientativa)', tipo: 'Árbol o arbusto por identificar',
    estado: 'Identificación pendiente', pendiente: true,
    nota: 'Casia es un nombre usado para varias especies de Cassia y Senna. Se necesitan fotos de hojas, flores y vainas para elegir un nombre científico completo.',
    intro: 'El nombre común es el comienzo de una identificación.',
    descripcion: 'Esta ficha conserva el nombre recibido. Cassia fistula y Senna siamea son posibilidades de referencia, no identificaciones del ejemplar.',
    rasgos: [['Hojas', 'Fotografiar una hoja completa y la disposición de sus folíolos.'], ['Flores', 'Registrar color, forma y si los racimos cuelgan o se mantienen erguidos.'], ['Vainas', 'Fotografiar tamaño y forma: pueden ayudar a separar especies parecidas.']],
    cuidados: [['Antes de recomendar', 'Identificar la especie para ajustar luz, riego y espacio.'], ['Conservar el ejemplar', 'Evitar podas drásticas mientras se completa el registro.'], ['Registrar', 'Anotar ubicación y fotografiar sus cambios durante la floración.']],
    curiosidades: [['Dos ejemplos distintos', 'Cassia fistula tiene racimos amarillos colgantes y vainas largas y cilíndricas.'], ['La forma importa', 'Senna siamea presenta flores amarillas en agrupaciones terminales y vainas aplanadas.']],
    fuentes: [['World Agroforestry · Cassia fistula (comparación)', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Cassia_fistula.PDF'], ['World Agroforestry · Senna siamea (comparación)', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Senna_siamea.PDF']]
  },
  {
    id: 'nopal', nombre: 'Nopal o tuna', original: 'nopal o tuna',
    cientifico: 'Opuntia sp.', familia: 'Cactaceae', tipo: 'Cactus',
    estado: 'Especie pendiente', pendiente: true,
    nota: 'Nopal o tuna comprende varias especies. Opuntia ficus-indica es un ejemplo conocido, pero no se asigna al ejemplar sin fotografías.',
    intro: 'Una planta que guarda agua en sus tallos.',
    descripcion: 'Cactus de tallos aplanados, conocidos como pencas o cladodios. La especie concreta se confirmará observando pencas, espinas, flores y frutos.',
    rasgos: [['Pencas', 'Son tallos; no son hojas grandes.'], ['Areolas', 'Pequeños puntos de los que nacen espinas y diminutos gloquidios.'], ['Flores y frutos', 'Su forma y color varían entre especies.']],
    cuidados: [['Luz', 'Buena exposición solar, con adaptación gradual si estaba bajo sombra.'], ['Riego', 'Evitar exceso de agua; necesita sustrato muy bien drenado.'], ['Manipulación', 'Usar protección adecuada: los gloquidios pueden irritar la piel.']],
    curiosidades: [['Reservas vivas', 'Los cladodios almacenan agua y realizan fotosíntesis.'], ['Diversidad', 'El género Opuntia reúne numerosas especies; el nombre tuna no señala una sola.']],
    fuentes: [['NC State Extension · Opuntia', 'https://plants.ces.ncsu.edu/plants/opuntia/']]
  },
  {
    id: 'jobo', imagen: 'imagenes/jobo.jpg', nombre: 'Jobo', original: 'arbol jobo',
    cientifico: 'Spondias mombin', familia: 'Anacardiaceae', tipo: 'Árbol frutal',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Nombre asociado al jobo de fruto amarillo. Confirmar con frutos y hojas; otros Spondias reciben nombres locales semejantes.',
    intro: 'Frutos amarillos entre una copa de hojas compuestas.',
    descripcion: 'Árbol tropical americano que puede perder su follaje durante parte del año. Produce frutos carnosos con una estructura interna dura y fibrosa.',
    rasgos: [['Hojas', 'Compuestas, divididas en varios folíolos.'], ['Flores', 'Pequeñas y reunidas en panículas.'], ['Frutos', 'Generalmente amarillos al madurar, aromáticos y con pulpa jugosa.']],
    cuidados: [['Espacio', 'Reservar lugar suficiente para el crecimiento de la copa.'], ['Establecimiento', 'Mantener las plantas jóvenes sin competencia fuerte y atenderlas durante sequías.'], ['Seguimiento', 'Observar ramas y frutos; registrar las épocas de floración y cosecha del campus.']],
    curiosidades: [['Familia compartida', 'Jobo y mango pertenecen a Anacardiaceae.'], ['Un fruto aprovechado', 'Se consume fresco y se utiliza en bebidas y conservas.']],
    fuentes: [['World Agroforestry · Spondias mombin', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Spondias_mombin.PDF']]
  },
  {
    id: 'limon-dulce', imagen: 'imagenes/limon-dulce.jpg', nombre: 'Limón dulce', original: 'limon dulce',
    cientifico: 'Citrus × limetta · propuesta', familia: 'Rutaceae', tipo: 'Árbol frutal',
    estado: 'Identificación pendiente', pendiente: true,
    nota: 'Propuesta provisional. “Limón dulce” también se aplica a otros cítricos de baja acidez; confirmar con frutos, hojas y antecedentes de la planta.',
    intro: 'Un cítrico cuyo nombre necesita contexto.',
    descripcion: 'Se propone Citrus × limetta como referencia de trabajo. No se ha comprobado la identidad ni la variedad del ejemplar universitario.',
    rasgos: [['Hojas', 'Registrar forma, tamaño y pecíolo.'], ['Flores', 'Fotografiar color y disposición sin dañar la planta.'], ['Frutos', 'Registrar forma, cáscara y pulpa; el sabor dulce por sí solo no determina la especie.']],
    cuidados: [['Luz', 'Como orientación para cítricos, buscar buena exposición al sol.'], ['Agua y suelo', 'Evitar encharcamientos; ajustar riego al suelo y la lluvia.'], ['Confirmación', 'El manejo particular se completará al identificar el ejemplar.']],
    curiosidades: [['Un nombre compartido', 'Los nombres populares de los cítricos cambian según el país y la variedad.'], ['Híbridos', 'El símbolo × se utiliza en nombres botánicos de origen híbrido.']],
    fuentes: [['UF/IFAS · Cultivo de un cítrico (cuidados generales)', 'https://ask.ifas.ufl.edu/publication/CH092']]
  },
  {
    id: 'madero-negro', imagen: 'imagenes/madero-negro.jpg', nombre: 'Madero negro', original: 'madero negro',
    cientifico: 'Gliricidia sepium', familia: 'Fabaceae', tipo: 'Árbol leguminoso',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Nombre científico asociado al madero negro usado en cercas vivas de Centroamérica.',
    intro: 'Un árbol que también puede formar una cerca viva.',
    descripcion: 'Árbol tropical de hojas compuestas y flores rosadas, utilizado en sistemas agroforestales y como sombra de cultivos.',
    rasgos: [['Hojas', 'Pinnadas, con varios folíolos de borde entero.'], ['Flores', 'Rosadas, de forma característica de muchas leguminosas.'], ['Frutos', 'Vainas aplanadas que se abren al secarse.']],
    cuidados: [['Luz y drenaje', 'Favorecer un sitio luminoso y evitar suelos permanentemente anegados.'], ['Formación', 'La poda se ajusta a su función: sombra, cerca viva o árbol del campus.'], ['Seguimiento', 'Proteger brotes nuevos y registrar la respuesta después de la poda.']],
    curiosidades: [['Cooperación bajo tierra', 'Puede fijar nitrógeno mediante asociación con bacterias en sus raíces.'], ['Rebrote', 'Su capacidad de rebrotar favorece el uso en cercas vivas.']],
    fuentes: [['World Agroforestry · Gliricidia sepium', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Gliricidia_sepium.PDF']]
  },
  {
    id: 'roble-sabana', imagen: 'imagenes/roble-sabana.jpg', nombre: 'Roble de sabana', original: 'soble de sabana',
    cientifico: 'Tabebuia rosea', familia: 'Bignoniaceae', tipo: 'Árbol de flor',
    estado: 'Nombre interpretado', pendiente: true,
    nota: 'Se interpretó “soble de sabana” como roble de sabana. Confirmar con hojas y flores.',
    intro: 'Una floración rosada que transforma el paisaje.',
    descripcion: 'Árbol americano de floración vistosa, con hojas compuestas y semillas aladas. Puede perder sus hojas durante la estación seca.',
    rasgos: [['Hojas', 'Generalmente cinco folíolos dispuestos como los dedos de una mano.'], ['Flores', 'Tubulares, habitualmente rosadas o de tonos claros.'], ['Frutos', 'Cápsulas alargadas con semillas provistas de alas.']],
    cuidados: [['Ubicación', 'Reservar espacio para su copa y buena exposición a la luz.'], ['Establecimiento', 'Atender las plantas jóvenes durante periodos secos.'], ['Mantenimiento', 'Evitar heridas en el tronco y podas innecesarias de ramas grandes.']],
    curiosidades: [['Viaje con el viento', 'Las alas de sus semillas facilitan su dispersión.'], ['Otro tipo de roble', 'No pertenece al género Quercus de los robles verdaderos.']],
    fuentes: [['World Agroforestry · Tabebuia rosea', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Tabebuia_rosea.PDF']]
  },

  {
    id: 'jicaro', nombre: 'Jícaro', original: 'arbol de jicaro',
    cientifico: 'Crescentia sp.', familia: 'Bignoniaceae', tipo: 'Árbol',
    estado: 'Especie pendiente', pendiente: true,
    nota: 'El nombre jícaro puede corresponder a Crescentia alata o Crescentia cujete. Falta distinguir el ejemplar con hojas, flores y frutos.',
    intro: 'La identidad también está en la forma de sus hojas.',
    descripcion: 'Registro provisional del género Crescentia. No se asigna una de las dos especies únicamente por el nombre popular.',
    rasgos: [['Hojas', 'Una fotografía de hojas completas es clave para comparar las especies.'], ['Frutos', 'Registrar su forma y tamaño con una referencia de escala.'], ['Flores', 'Fotografiar dónde nacen y cómo se ven de frente y de lado.']],
    cuidados: [['Identificar', 'Confirmar la especie antes de establecer una ficha de manejo.'], ['Proteger', 'Evitar golpes, clavos o amarres ajustados en el tronco.'], ['Registrar', 'Guardar ubicación, fotografías y fechas de observación.']],
    curiosidades: [['Un género, varias especies', 'Crescentia alata y Crescentia cujete no son nombres intercambiables.'], ['Dato pendiente', 'No se han medido ni identificado los frutos del ejemplar del campus.']],
    fuentes: []
  },
  {
    id: 'nancite-macho', nombre: 'Nancite macho', original: 'nancite macho',
    cientifico: 'Por determinar', familia: 'Por determinar', tipo: 'Árbol por identificar',
    estado: 'Identificación pendiente', pendiente: true,
    nota: 'El nombre local no basta para asignar una especie. Clethra hondurensis aparece como candidata regional; necesita comprobación. No se sustituye por el nancite común.',
    intro: 'Primero observar; después, darle su nombre científico.',
    descripcion: 'Se conserva el nombre utilizado en el campus. La identificación requiere fotos del árbol completo, hojas por ambas caras, flores y frutos si están presentes.',
    rasgos: [['Hojas', 'Fotografiar ambas caras y el borde de la hoja.'], ['Flores', 'Registrar color y forma de las agrupaciones florales.'], ['Frutos y corteza', 'Añadir fotos nítidas y una referencia de tamaño.']],
    cuidados: [['Manejo pendiente', 'No se prescribe riego ni poda específicos sin confirmar la especie.'], ['Conservación', 'Evitar daños en raíces, corteza y ramas.'], ['Validación', 'Solicitar apoyo de un docente de biología o un herbario con el registro fotográfico.']],
    curiosidades: [['Nombre local', '“Macho” no demuestra por sí solo el sexo biológico de este árbol.'], ['Identificar con evidencia', 'Las flores y los frutos suelen aportar caracteres decisivos.']],
    fuentes: [['Kew · Clethra (candidato, no identificación)', 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:14681-1']]
  },
  {
    id: 'pitaya', nombre: 'Pitaya', alias: 'Fruta del dragón', original: 'pitaya o fruta del dargon',
    cientifico: 'Selenicereus sp.', familia: 'Cactaceae', tipo: 'Cactus trepador',
    estado: 'Especie pendiente', pendiente: true,
    nota: 'Pitaya reúne varias especies e híbridos. Selenicereus undatus y S. costaricensis son ejemplos; no se elige uno sin observar la planta y su fruto.',
    intro: 'Un cactus trepador con flores que abren de noche.',
    descripcion: 'Las pitayas cultivadas incluyen cactus de tallos carnosos que necesitan apoyo. En publicaciones anteriores muchas aparecen como Hylocereus.',
    rasgos: [['Tallos', 'Carnosos y angulosos, con areolas y raíces aéreas.'], ['Flores', 'Grandes; en las pitayas comunes se abren por la noche.'], ['Frutos', 'De cáscara vistosa; el color de la pulpa depende de especie o variedad.']],
    cuidados: [['Soporte', 'Proporcionar un tutor resistente para sostener los tallos.'], ['Agua y suelo', 'Evitar encharcamientos y mantener buena circulación de aire.'], ['Luz y observación', 'Buena iluminación; vigilar quemaduras y retirar tallos dañados con herramientas limpias.']],
    curiosidades: [['No es un árbol', 'Su forma de crecimiento es la de un cactus trepador.'], ['Una noche especial', 'Muchas flores duran una sola noche; conviene observar al atardecer.']],
    fuentes: [['NC State Extension · Selenicereus undatus (referencia)', 'https://plants.ces.ncsu.edu/plants/selenicereus-undatus/'], ['UF/IFAS · Pitaya y sus variedades', 'https://ask.ifas.ufl.edu/publication/HS303']]
  },
  {
    id: 'caimito', imagen: 'imagenes/caimito.jpg', nombre: 'Caimito', original: 'caimito',
    cientifico: 'Chrysophyllum cainito', familia: 'Sapotaceae', tipo: 'Árbol frutal',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Nombre asociado al caimito común. Falta documentar el ejemplar del campus.',
    intro: 'Hojas doradas por debajo, una estrella por dentro.',
    descripcion: 'Árbol tropical de follaje persistente. Destaca por el contraste entre la cara superior verde brillante y el envés cobrizo de sus hojas.',
    rasgos: [['Hojas', 'Simples, alternas y brillantes; envés de tonos dorados o cobrizos.'], ['Flores', 'Pequeñas y poco llamativas.'], ['Frutos', 'Redondeados; la cáscara puede ser verde o morada según la variedad.']],
    cuidados: [['Suelo', 'Prefiere un suelo fértil y con buen drenaje.'], ['Agua', 'Atender especialmente el riego de las plantas jóvenes durante periodos secos.'], ['Observación', 'Revisar frutos y brotes; registrar daños antes de decidir un tratamiento.']],
    curiosidades: [['Una estrella', 'Un corte transversal del fruto permite apreciar un patrón estrellado.'], ['Dos caras', 'El movimiento de las hojas muestra su contraste de verde y dorado.']],
    fuentes: [['World Agroforestry · Chrysophyllum cainito', 'https://apps.worldagroforestry.org/treedb/AFTPDFS/Chrysophyllum_cainito.PDF']]
  },
  {
    id: 'mango', imagen: 'imagenes/mango.jpg', nombre: 'Mango', original: 'mango',
    cientifico: 'Mangifera indica', familia: 'Anacardiaceae', tipo: 'Árbol frutal',
    estado: 'Nombre asociado', pendiente: false,
    nota: 'Se conserva la ficha inicial del mango. La variedad, edad y ubicación del ejemplar están pendientes.',
    intro: 'Bajo su copa, comienza un recorrido por la naturaleza.',
    descripcion: 'Árbol perenne de la familia Anacardiaceae, originario de la región indobirmana. Su copa puede alcanzar un tamaño considerable.',
    rasgos: [['Hojas', 'Alargadas y de textura coriácea; se vuelven verde oscuro al madurar.'], ['Flores', 'Pequeñas, agrupadas en panículas ramificadas.'], ['Frutos', 'Drupas con pulpa carnosa y una semilla grande protegida por una cubierta dura.']],
    cuidados: [['Luz', 'Prefiere pleno sol y espacio para desarrollar su copa.'], ['Agua y suelo', 'Necesita buen drenaje; ajustar el riego a lluvia, suelo y edad.'], ['Poda', 'La poda de mantenimiento suele realizarse después de la cosecha.']],
    curiosidades: [['Pequeños visitantes', 'Diversos insectos, incluidas moscas, participan en la polinización.'], ['Verde también puede ser maduro', 'El color del fruto cambia según la variedad.']],
    fuentes: [['UF/IFAS · Mango Growing', 'https://ask.ifas.ufl.edu/publication/MG216']]
  }
];
