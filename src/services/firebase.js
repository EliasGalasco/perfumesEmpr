import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  orderBy,
  limit,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_K4gg3jhxpXgx8zneV4Jcykk3n2VwESA",
  authDomain: "tiendaperfume-d7b43.firebaseapp.com",
  projectId: "tiendaperfume-d7b43",
  storageBucket: "tiendaperfume-d7b43.appspot.com",
  messagingSenderId: "966577059700",
  appId: "1:966577059700:web:4940aeece9a05c4c459e21",
  measurementId: "G-MGQ4E5YF00"
};

/*Iniciamos la base de datos */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

/*Conectar firestore */
/*--1 Obtener el primer producto-- */
export async function getSingleItem(itemid) {
  const docRef = doc(db, "productos", itemid);
  const snapshot = await getDoc(docRef);
  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}
/*2 Obtener todos los products de fireStore */
export async function getItems(){
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, limit(22))
  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map(documento => ({...documento.data(), id: documento.id}))
  return dataDocs
}

/*3 Obtener productos segun su CATEGORIA */
export async function getCategoryId(categoryid){
  const productsCollection = collection(db, 'productos') 
  const q = query (productsCollection, where("category", "==", categoryid))
  
  const querySnapshot = await getDocs(q)
  const dataDocs = querySnapshot.docs.map((documento) => ({...documento.data(), id: documento.id}))
  return dataDocs
}
/*Crear Una seccion order en FireBase  */
export async function creadorOrdenDeCompra(order){
  const ordersCollection = collection(db, "orders");
  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}

export async function exportDataWithBatch() {
  const productsCollection = collection(db, "productos");
  const batch = writeBatch(db);
  const productos = [{
    "titulo": "MosChino toy 2",
    "id": 1,
    "detalle": "Fragancia estilo italiano",
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://cdn.discordapp.com/attachments/701992486037618688/1075998937451860059/IMG-20230216-WA0132.jpg"
  },{
    "titulo": "Good Girl",
    "id": 2,
    "detalle": `Las cualidades dulces, imponentes y seductoras del jazmín aportan una brillante feminidad a Good Girl. El lado misterioso de Good Girl se expresa con el rico y fragante cacao y la embriagadora haba tonka, mientras que la almendra y el café le aportan notas de audaz vitalidad
    Para: Ella
    Ella es: Seductora y fuerte
    Ocasión: Día y noche
    Familia olfativa: ÁMBAR Ámbar Floral
    La fragancia: Intensa y provocativa`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://cdn.discordapp.com/attachments/701992486037618688/1076019027991863326/eee74fda4c1946002bb12395a54c6836.jpg"
  },{
    "titulo": "La vie est belle boutique",
    "id": 3,
    "detalle": "Con La Vie Est Belle Eau de Parfum, Lancôme crea el equilibrio perfecto combinando la nobleza del lirio, la profundidad del pachuli y el retorno de un gourmet accord.",
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://cdn.discordapp.com/attachments/701992486037618688/1076019028268691517/3069230ebb87e13a449be85de1d54c39.jpg"
  },{
    "titulo": "Olympea Solar",
    "id": 4,
    "detalle": "Olympea Solar es el nuevo Eau de Parfum de Paco Rabanne. Representa lafragancia de la diosa Amazona. Feroz, independiente y con un poderradiante. Una verdadera belleza oriental, victoriosa y contundente. Unestallido luminoso de brillo sensual que revela múltiples facetas.Floral y oriental Notas de salida: Mandarina y Naranja Notas decorazón: Musgo de roble y flore de tiare Notas de fondo: flor decananga y benjuí",
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://perfugroupar.vtexassets.com/arquivos/ids/173810-800-800?v=637878058022600000&width=800&height=800&aspect=true"
  },{
    "titulo": "Amor Amor",
    "id": 5,
    "detalle": "El perfume de mujer Amor Amor de Cacharel se caracteriza por ser una fragancia que perdura en el tiempo, una fragancia de una marca reconocida que ofrece una magnífica relación calidad-precio. Si eres amante de los perfumes que brindan un aroma especiado, cítrico y floral, este es tu perfume. Su aroma es bastante suave, de modo que si deseas que el aroma de esta fragancia se perciba es importante utilizar una buena cantidad para que su fragancia se desprenda allá por donde pases. En general, puede decirse que es una gran compra, tanto por marca como por precio y calidad. Un gran producto en todos los sentidos.",
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://dqm4sv5xk0oaj.cloudfront.net/products/15234/large/3360373063680_02.jpg?1575983506"
  },{
    "titulo": "Halloween rosa",
    "id": 6,
    "detalle": `Usando la magia se hace perfume. Una fantasía de frutas brillantes, un elixir fascinante y misterioso
    Notas de Salida: Frambuesa, Sorbete de Pera y Esencia de Mandarina.
    Notas de Corazón: Jazmín, Absoluto de Fresia y Peonia Rosa.
    Notas de Fondo: Esencia de Pachuli, Vainilla y Tonka.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_696279-MLA42166477141_062020-O.webp"
  },{
    "titulo": "Halloween celeste",
    "id": 7,
    "detalle": `Fragancia femenina de ensueño. De familia olfativa Floral.

    Halloween Blue Drop es enternecedora, suave y delicada. Un sueño donde todo nos parece sutil, tierno y aterciopelado, nos envuelve y traslada a un mundo de fantasias. Al pasar dejarás tu estela en el aire compartiendo tus sueños con el resto.
    
    Pirámide olfativa:
    Notas de salida: manzana verde y lavanda
    Nota de corazón: jazmín, violeta y flores blancas.
    Notas de fondo: almizcle, ambar, especias y canela.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://d2ye0ltusw47tz.cloudfront.net/10088584-thickbox_default/perfume-mujer-jesus-del-pozo-halloween-blue-drop-edt-100-ml.jpg"
  },{
    "titulo": "Pure xs mujer",
    "id": 8,
    "detalle": `Lo que tenés que saber de este producto
    _Aroma: floral.
    _País de origen: Francia.
    _Para acompañar un estilo único.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_941106-MLA50527065981_062022-O.webp"
  },{
    "titulo": "Black xs mujer  ",
    "id": 9,
    "detalle": `Tipo de Fragancia: Eau de parfum; Intensa y Floral
    Una fragancia amaderada, floral y afrutada
    Es radiante y alegre en sus primeros instantes. En el corazón, la violeta negra, la flor de cacao y el eléboro despliegan sus encantos. En esta composición pensada para seducir. En la nota de fondo, la sobredosis de la madera de Massoia es la interpretación femenina del metal, tan vinculado a Paco Rabanne. Es la columna vertebral de esta fragancia, completada con pachulí y vainilla negra
    OTRAS CARACTERISTICAS:
    Notas de salida: Flor de tamarindo, arandano, bayas de pimienta rosa
    Notas de corazón: Charming Hellebore rose, flor de cacao, violeta negra voluptuosa
    Notas de fondo: Pachuli, Vainilla negra, Madera de massoia`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://d2ye0ltusw47tz.cloudfront.net/10089360-large_default/perfume-importado-mujer-paco-rabanne-black-xs-edp-30-ml.jpg"
  },{
    "titulo": "L'interdit Givenchcy",
    "id": 10,
    "detalle": `Notas de Salida: Pera y bergamota.
    Notas de Corazón: Nardos, flor de azahar del naranjo y jazmín sambac.
    Notas de Fondo: Pachulí, vainilla, ambroxan y vetiver.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://rougeb2car.vtexassets.com/arquivos/ids/189122-800-auto?v=637941154610570000&width=800&height=auto&aspect=true"
  },{
    "titulo": "Angel y demonio clásico",
    "id": 11,
    "detalle": `Perfume Angel O Demonio Eau de Parfum 100ML Ange ou Demon de Givenchy es una fragancia de la familia olfativa Oriental Floral para Mujeres. Ange ou Demon se lanzó en 2006. Ange ou Demon fue creada por Olivier Cresp y Jean-Pierre Bethouart. Las Notas de Salida son mandarina, azafrán y tomillo; las Notas de Corazón son azucena, orquídea y ylang-ylang; las Notas de Fondo son haba tonka, vainilla, palo de rosa de Brasil y musgo de roble.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://pedidosfarma.vtexassets.com/arquivos/ids/157872-800-auto?v=636723035717100000&width=800&height=auto&aspect=true"
  },{
    "titulo": "Angel y demonio pink",
    "id": 12,
    "detalle": `Refresca tu rutina de belleza con Ange Ou Demon Le Secret eau de parfum, una fragancia ligera para mujer repleta de flores y notas afrutadas. Introducido por Givenchy en 2014, este aroma crujiente se abre con notas de hoja de té, limón y arándano, con notas de jazmín que aportan dulzura en el corazón. Una nota base de almizcle mejora el aroma en el secado hacia abajo y equilibra la fragancia perfectamente. Usa Ange Ou Demon Le Secret para poner un poco de primavera en tu paso y sentirte extra hermosa todos los días.

    Notas de fragancia:Arándano, Té, Limón Amalfi, Lirio de Agua, Peonía, Jazmín, Patchouli, Notas Woody
    Uso recomendado:Romántico`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_636495-MLA52372989405_112022-O.webp"
  },{
    "titulo": "Olympea",
    "id": 13,
    "detalle": `Olympéa, una diosa de los tiempos modernos, la mujer de todas las victorias.

    Vainilla salada imperial, capricho divino. Jazmín de agua y flor de jengibre envueltos en cachemir. Cautivadora y exquisita adicción. Su mirada magnética y su eau de parfum nos conducen hacia una estela de seducción.
    
    Una poción divina de sensualidad adictiva.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://www.farmaciassanchezantoniolli.com.ar/2188-large_default/paco-rabanne-olympea-edp-80-ml-fragancia-femenina.jpg"
  },{
    "titulo": "Olympea acqua",
    "id": 14,
    "detalle": `Es una fragancia de familia olfativa floral acuatica para mujeres. Esta fragancia es nueva.
    Las notas de salida son bergamota de calabria, notas acuaticas, petit grain, pomelo y naranja, las notas de corazon son flor de jengibre, jazmin, flor de azahar del naranjo, durazno y rosa, las notas de fondo son vainilla, ambar gris, sal, madera de cachemira, benjui y sandalo.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_900441-MLA28180421465_092018-O.webp"
  },{
    "titulo": "Olympea legend",
    "id": 15,
    "detalle": `Características: Olympea Legend de Paco Rabanne es una fragancia de la familia olfativa Oriental Floral para Mujeres. Esta fragancia es nueva. Olympea Legend se lanzó en 2019. La Nariz detrás de esta fragancia es Loc Dong. Las Notas de Salida son sal de mar, ciruela y chabacano; las Notas de Corazón son flor de jengibre y notas florales; las Notas de Fondo son vainilla, ámbar, arena y haba tonka.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_766993-MLA42581344743_072020-O.webp"
  },{
    "titulo": "Olympea Blossom",
    "id": 16,
    "detalle": `Olympea Blossom, un contraste delicioso entre una explosión de flores y una sensualidad cautivadora. En su salida, un toque picante de rosas da paso al intenso sorbete de grosella.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/177/541/products/3349668588718_11-4e28ae6ecc2616996c16250941621641-480-0.jpg"
  },{
    "titulo": "Play Rosa  ",
    "id": 17,
    "detalle": `Es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Play For Her se lanzó en 2010. Play For Her fue creada por Emilie Bevierre-Coppermann y Lucas Sieuzac. Las Notas de Salida son pimienta rosa, durazno (melocotón), flor de azahar del naranjo, guisante de olor y bergamota; las Notas de Corazón son orquídea, flor de tiaré, flor de cuaba blanca (madera de amyris) y magnolia; las Notas de Fondo son haba tonka, sándalo, almizcle, pachulí y benjuí`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://fraguru.com/mdimg/perfume/375x500.9369.jpg"
  },{
    "titulo": "L'eau D'issey Rosa",
    "id": 18,
    "detalle": `L'Eau d'Issey Rose & Rose de Issey Miyake es una fragancia de la familia olfativa Floral Frutal para Mujeres. L'Eau d'Issey Rose & Rose se lanzó en 2019. Las Notas de Salida son frambuesa, pera y pimienta rosa; las Notas de Corazón son rosa de Bulgaria (rosa Damascena de Bulgaria), rosa y osmanto (olivo oloroso); las Notas de Fondo son madera de cachemira, ámbar y pachulí`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_652744-MLA43465301745_092020-O.jpg"
  },{
    "titulo": "La tentación de Nina",
    "id": 19,
    "detalle": `Esta fragancia promete el encantamiento a través del poder de la seducción femenina, la cual se convierte en una de las más dulces y ardientes tentaciones.

    Notas de Fragancia: La Nota de Salida es bergamota; las Notas de Corazón son macarrones dulces, limón (lima ácida), almendra, rosa de Bulgaria (rosa Damascena de Bulgaria) y frambuesa; las Notas de Fondo son vainilla Bourbon, almizcle blanco y sándalo.
    Contenido 80 ml`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://falabella.scene7.com/is/image/FalabellaPE/13892258_1?wid=800&hei=800&qlt=70"
  },{
    "titulo": "Bella Nina",
    "id": 20,
    "detalle": `Descripción olfativa:
    BELLA de Nina Ricci es lanzado en 2018 que pertenece a la familia Floral Frutal para mujeres. La marca lo presenta dentro de su colección Les Belles de Nina que incluye Nina, Luna y esta nueva incorporación, Bella. Las perfumistas Louise Turner y Sofía Constant han sabido reflejar la esencia de una mujer atrevida, que quizás no siempre acata las reglas, pero cuenta con una feminidad única. Es algo que se refleja en su composición ácido-floral: inicia con notas de mandarina verde, ruibarbo y limón. En el corazón encontramos lo que denominan Jalea Rosa compuesta por rosa y fresia, y finaliza con almizcle blanco y vainilla.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_933742-MLA30409321280_052019-O.webp"
  },{
    "titulo": "Nina Luna",
    "id": 21,
    "detalle": `Luna de Nina Ricci es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Esta fragrancia es nueva.

    Las Notas de Salida son bayas silvestres, flor de azahar del naranjo, lima (limón verde) y naranja tangerina; las Notas de Corazón son caramelo, siempreviva, jazmín y pera; las Notas de Fondo son sándalo, vainilla de Madagascar, regaliz y almizcle blanco.
    
    . Se retira por microcentro, o se puede coordinar para retirar por , palermo, belgrano o martinez.`,
    "precio": 3399,
    "discount": 25,
    "category": "perfumes",
    "stock": "En stock",
    "cantidad": 22,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_792725-MLA25493752416_042017-O.webp"
  }
];
  for (let item of productos) {
    item.index = item.id;
    delete item.id;

    const newDoc = doc(productsCollection);
    batch.set(newDoc, item);
  }

  const commitDone = await batch.commit();
  console.log("--->", commitDone);
}