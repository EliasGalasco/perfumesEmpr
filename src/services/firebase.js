import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_K4gg3jhxpXgx8zneV4Jcykk3n2VwESA",
  authDomain: "tiendaperfume-d7b43.firebaseapp.com",
  projectId: "tiendaperfume-d7b43",
  storageBucket: "tiendaperfume-d7b43.appspot.com",
  messagingSenderId: "966577059700",
  appId: "1:966577059700:web:4940aeece9a05c4c459e21",
  measurementId: "G-MGQ4E5YF00",
};

/*Iniciamos la base de datos */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

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
export async function getItems() {
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, limit(90), orderBy('index'));
  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map((documento) => ({
    ...documento.data(),
    id: documento.id,
  }));
  return dataDocs;
}

/*3 Obtener productos segun su CATEGORIA */
export async function getCategoryId(categoryid) {
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, where("category", "==", categoryid));

  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map((documento) => ({
    ...documento.data(),
    id: documento.id,
  }));
  return dataDocs;
}
/*Crear Una seccion order en FireBase  */
export async function creadorOrdenDeCompra(order) {
  const ordersCollection = collection(db, "orders");
  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}

export async function exportDataWithBatch() {
  const productsCollection = collection(db, "productos");
  const batch = writeBatch(db);
  const productos = [
    {
      titulo: "MosChino toy 2",
      id: 1,
      detalle: "Fragancia estilo italiano",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://cdn.discordapp.com/attachments/701992486037618688/1075998937451860059/IMG-20230216-WA0132.jpg",
    },
    {
      titulo: "Good Girl",
      id: 2,
      detalle: `Las cualidades dulces, imponentes y seductoras del jazmín aportan una brillante feminidad a Good Girl. El lado misterioso de Good Girl se expresa con el rico y fragante cacao y la embriagadora haba tonka, mientras que la almendra y el café le aportan notas de audaz vitalidad
    Para: Ella
    Ella es: Seductora y fuerte
    Ocasión: Día y noche
    Familia olfativa: ÁMBAR Ámbar Floral
    La fragancia: Intensa y provocativa`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://cdn.discordapp.com/attachments/701992486037618688/1076019027991863326/eee74fda4c1946002bb12395a54c6836.jpg",
    },
    {
      titulo: "La vie est belle boutique",
      id: 3,
      detalle:
        "Con La Vie Est Belle Eau de Parfum, Lancôme crea el equilibrio perfecto combinando la nobleza del lirio, la profundidad del pachuli y el retorno de un gourmet accord.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://cdn.discordapp.com/attachments/701992486037618688/1076019028268691517/3069230ebb87e13a449be85de1d54c39.jpg",
    },
    {
      titulo: "Olympea Solar",
      id: 4,
      detalle:
        "Olympea Solar es el nuevo Eau de Parfum de Paco Rabanne. Representa lafragancia de la diosa Amazona. Feroz, independiente y con un poderradiante. Una verdadera belleza oriental, victoriosa y contundente. Unestallido luminoso de brillo sensual que revela múltiples facetas.Floral y oriental Notas de salida: Mandarina y Naranja Notas decorazón: Musgo de roble y flore de tiare Notas de fondo: flor decananga y benjuí",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://perfugroupar.vtexassets.com/arquivos/ids/173810-800-800?v=637878058022600000&width=800&height=800&aspect=true",
    },
    {
      titulo: "Amor Amor",
      id: 5,
      detalle:
        "El perfume de mujer Amor Amor de Cacharel se caracteriza por ser una fragancia que perdura en el tiempo, una fragancia de una marca reconocida que ofrece una magnífica relación calidad-precio. Si eres amante de los perfumes que brindan un aroma especiado, cítrico y floral, este es tu perfume. Su aroma es bastante suave, de modo que si deseas que el aroma de esta fragancia se perciba es importante utilizar una buena cantidad para que su fragancia se desprenda allá por donde pases. En general, puede decirse que es una gran compra, tanto por marca como por precio y calidad. Un gran producto en todos los sentidos.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://dqm4sv5xk0oaj.cloudfront.net/products/15234/large/3360373063680_02.jpg?1575983506",
    },
    {
      titulo: "Halloween rosa",
      id: 6,
      detalle: `Usando la magia se hace perfume. Una fantasía de frutas brillantes, un elixir fascinante y misterioso
    Notas de Salida: Frambuesa, Sorbete de Pera y Esencia de Mandarina.
    Notas de Corazón: Jazmín, Absoluto de Fresia y Peonia Rosa.
    Notas de Fondo: Esencia de Pachuli, Vainilla y Tonka.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_696279-MLA42166477141_062020-O.webp",
    },
    {
      titulo: "Halloween celeste",
      id: 7,
      detalle: `Fragancia femenina de ensueño. De familia olfativa Floral.

    Halloween Blue Drop es enternecedora, suave y delicada. Un sueño donde todo nos parece sutil, tierno y aterciopelado, nos envuelve y traslada a un mundo de fantasias. Al pasar dejarás tu estela en el aire compartiendo tus sueños con el resto.
    
    Pirámide olfativa:
    Notas de salida: manzana verde y lavanda
    Nota de corazón: jazmín, violeta y flores blancas.
    Notas de fondo: almizcle, ambar, especias y canela.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://d2ye0ltusw47tz.cloudfront.net/10088584-thickbox_default/perfume-mujer-jesus-del-pozo-halloween-blue-drop-edt-100-ml.jpg",
    },
    {
      titulo: "Pure xs mujer",
      id: 8,
      detalle: `Lo que tenés que saber de este producto
    _Aroma: floral.
    _País de origen: Francia.
    _Para acompañar un estilo único.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_941106-MLA50527065981_062022-O.webp",
    },
    {
      titulo: "Black xs mujer  ",
      id: 9,
      detalle: `Tipo de Fragancia: Eau de parfum; Intensa y Floral
    Una fragancia amaderada, floral y afrutada
    Es radiante y alegre en sus primeros instantes. En el corazón, la violeta negra, la flor de cacao y el eléboro despliegan sus encantos. En esta composición pensada para seducir. En la nota de fondo, la sobredosis de la madera de Massoia es la interpretación femenina del metal, tan vinculado a Paco Rabanne. Es la columna vertebral de esta fragancia, completada con pachulí y vainilla negra
    OTRAS CARACTERISTICAS:
    Notas de salida: Flor de tamarindo, arandano, bayas de pimienta rosa
    Notas de corazón: Charming Hellebore rose, flor de cacao, violeta negra voluptuosa
    Notas de fondo: Pachuli, Vainilla negra, Madera de massoia`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://d2ye0ltusw47tz.cloudfront.net/10089360-large_default/perfume-importado-mujer-paco-rabanne-black-xs-edp-30-ml.jpg",
    },
    {
      titulo: "L'interdit Givenchcy",
      id: 10,
      detalle: `Notas de Salida: Pera y bergamota.
    Notas de Corazón: Nardos, flor de azahar del naranjo y jazmín sambac.
    Notas de Fondo: Pachulí, vainilla, ambroxan y vetiver.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://rougeb2car.vtexassets.com/arquivos/ids/189122-800-auto?v=637941154610570000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Angel y demonio clásico",
      id: 11,
      detalle: `Perfume Angel O Demonio Eau de Parfum 100ML Ange ou Demon de Givenchy es una fragancia de la familia olfativa Oriental Floral para Mujeres. Ange ou Demon se lanzó en 2006. Ange ou Demon fue creada por Olivier Cresp y Jean-Pierre Bethouart. Las Notas de Salida son mandarina, azafrán y tomillo; las Notas de Corazón son azucena, orquídea y ylang-ylang; las Notas de Fondo son haba tonka, vainilla, palo de rosa de Brasil y musgo de roble.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://pedidosfarma.vtexassets.com/arquivos/ids/157872-800-auto?v=636723035717100000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Angel y demonio pink",
      id: 12,
      detalle: `Refresca tu rutina de belleza con Ange Ou Demon Le Secret eau de parfum, una fragancia ligera para mujer repleta de flores y notas afrutadas. Introducido por Givenchy en 2014, este aroma crujiente se abre con notas de hoja de té, limón y arándano, con notas de jazmín que aportan dulzura en el corazón. Una nota base de almizcle mejora el aroma en el secado hacia abajo y equilibra la fragancia perfectamente. Usa Ange Ou Demon Le Secret para poner un poco de primavera en tu paso y sentirte extra hermosa todos los días.

    Notas de fragancia:Arándano, Té, Limón Amalfi, Lirio de Agua, Peonía, Jazmín, Patchouli, Notas Woody
    Uso recomendado:Romántico`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_636495-MLA52372989405_112022-O.webp",
    },
    {
      titulo: "Olympea",
      id: 13,
      detalle: `Olympéa, una diosa de los tiempos modernos, la mujer de todas las victorias.

    Vainilla salada imperial, capricho divino. Jazmín de agua y flor de jengibre envueltos en cachemir. Cautivadora y exquisita adicción. Su mirada magnética y su eau de parfum nos conducen hacia una estela de seducción.
    
    Una poción divina de sensualidad adictiva.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://www.farmaciassanchezantoniolli.com.ar/2188-large_default/paco-rabanne-olympea-edp-80-ml-fragancia-femenina.jpg",
    },
    {
      titulo: "Olympea acqua",
      id: 14,
      detalle: `Es una fragancia de familia olfativa floral acuatica para mujeres. Esta fragancia es nueva.
    Las notas de salida son bergamota de calabria, notas acuaticas, petit grain, pomelo y naranja, las notas de corazon son flor de jengibre, jazmin, flor de azahar del naranjo, durazno y rosa, las notas de fondo son vainilla, ambar gris, sal, madera de cachemira, benjui y sandalo.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_900441-MLA28180421465_092018-O.webp",
    },
    {
      titulo: "Olympea legend",
      id: 15,
      detalle: `Características: Olympea Legend de Paco Rabanne es una fragancia de la familia olfativa Oriental Floral para Mujeres. Esta fragancia es nueva. Olympea Legend se lanzó en 2019. La Nariz detrás de esta fragancia es Loc Dong. Las Notas de Salida son sal de mar, ciruela y chabacano; las Notas de Corazón son flor de jengibre y notas florales; las Notas de Fondo son vainilla, ámbar, arena y haba tonka.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_766993-MLA42581344743_072020-O.webp",
    },
    {
      titulo: "Olympea Blossom",
      id: 16,
      detalle: `Olympea Blossom, un contraste delicioso entre una explosión de flores y una sensualidad cautivadora. En su salida, un toque picante de rosas da paso al intenso sorbete de grosella.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/177/541/products/3349668588718_11-4e28ae6ecc2616996c16250941621641-480-0.jpg",
    },
    {
      titulo: "Play Rosa  ",
      id: 17,
      detalle: `Es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Play For Her se lanzó en 2010. Play For Her fue creada por Emilie Bevierre-Coppermann y Lucas Sieuzac. Las Notas de Salida son pimienta rosa, durazno (melocotón), flor de azahar del naranjo, guisante de olor y bergamota; las Notas de Corazón son orquídea, flor de tiaré, flor de cuaba blanca (madera de amyris) y magnolia; las Notas de Fondo son haba tonka, sándalo, almizcle, pachulí y benjuí`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://fraguru.com/mdimg/perfume/375x500.9369.jpg",
    },
    {
      titulo: "L'eau D'issey Rosa",
      id: 18,
      detalle: `L'Eau d'Issey Rose & Rose de Issey Miyake es una fragancia de la familia olfativa Floral Frutal para Mujeres. L'Eau d'Issey Rose & Rose se lanzó en 2019. Las Notas de Salida son frambuesa, pera y pimienta rosa; las Notas de Corazón son rosa de Bulgaria (rosa Damascena de Bulgaria), rosa y osmanto (olivo oloroso); las Notas de Fondo son madera de cachemira, ámbar y pachulí`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_652744-MLA43465301745_092020-O.jpg",
    },
    {
      titulo: "La tentación de Nina",
      id: 19,
      detalle: `Esta fragancia promete el encantamiento a través del poder de la seducción femenina, la cual se convierte en una de las más dulces y ardientes tentaciones.

    Notas de Fragancia: La Nota de Salida es bergamota; las Notas de Corazón son macarrones dulces, limón (lima ácida), almendra, rosa de Bulgaria (rosa Damascena de Bulgaria) y frambuesa; las Notas de Fondo son vainilla Bourbon, almizcle blanco y sándalo.
    Contenido 80 ml`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://falabella.scene7.com/is/image/FalabellaPE/13892258_1?wid=800&hei=800&qlt=70",
    },
    {
      titulo: "Bella Nina",
      id: 20,
      detalle: `Descripción olfativa:
    BELLA de Nina Ricci es lanzado en 2018 que pertenece a la familia Floral Frutal para mujeres. La marca lo presenta dentro de su colección Les Belles de Nina que incluye Nina, Luna y esta nueva incorporación, Bella. Las perfumistas Louise Turner y Sofía Constant han sabido reflejar la esencia de una mujer atrevida, que quizás no siempre acata las reglas, pero cuenta con una feminidad única. Es algo que se refleja en su composición ácido-floral: inicia con notas de mandarina verde, ruibarbo y limón. En el corazón encontramos lo que denominan Jalea Rosa compuesta por rosa y fresia, y finaliza con almizcle blanco y vainilla.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_933742-MLA30409321280_052019-O.webp",
    },
    {
      titulo: "Nina Luna",
      id: 21,
      detalle: `Luna de Nina Ricci es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Esta fragrancia es nueva.

    Las Notas de Salida son bayas silvestres, flor de azahar del naranjo, lima (limón verde) y naranja tangerina; las Notas de Corazón son caramelo, siempreviva, jazmín y pera; las Notas de Fondo son sándalo, vainilla de Madagascar, regaliz y almizcle blanco.
    
    . Se retira por microcentro, o se puede coordinar para retirar por , palermo, belgrano o martinez.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_792725-MLA25493752416_042017-O.jpg",
    },
    {
      titulo: "Blossom Nina",
      id: 22,
      detalle:
        "Blossom Nina de Nina Ricci es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. Blossom Nina se lanzó en 2021. Las Notas de Salida son pomelo, pera y frambuesa; las Notas de Corazón son peonía, rosa y fresia; las Notas de Fondo son almizcle, cedro y sándalo.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://cdn.fragrancenet.com/images/photos/900x900/300641.jpg",
    },
    {
      titulo: "Ricci Ricci",
      id: 23,
      detalle:
        "Ricci Ricci de Nina Ricci es una fragancia de la familia olfativa Floral Frutal para Mujeres. Ricci Ricci se lanzó en 2009. Las Notas de Salida son ruibarbo, bergamota y flor de luna; las Notas de Corazón son tuberosa, rosa centifolia y notas afrutadas; las Notas de Fondo son pachulí, ámbar y almizcle.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 17,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_724160-MLM44985756608_022021-O.webp",
    },
    {
      titulo: "J'adore clásico",
      id: 24,
      detalle:
        "J'adore de Christian Dior es una fragancia de la familia olfativa Floral para Mujeres. J'adore se lanzó en 1999. La Nariz detrás de esta fragrancia es Calice Becker. Las Notas de Salida son magnolia, melón, durazno, pera, bergamota y mandarina; las Notas de Corazón son tuberosa, ciruela, violeta, orquídea, fresia, jazmín, lirio de los valles y rosa; las Notas de Fondo son almizcle, vainilla, cedro y zarzamora (frambuesa negra).",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 11,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_707750-MLA43215696963_082020-V.jpg",
    },
    {
      titulo: "J'adore Black",
      id: 25,
      detalle:
        "J'adore Black de Christian Dior es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. J'adore Black se lanzó en 2021. La Nariz detrás de esta fragrancia es Francois Demachy. Las Notas de Salida son bergamota y pera; las Notas de Corazón son rosa, magnolia y flor del melocotón; las Notas de Fondo son pachulí y almizcle blanco.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen: "https://static.wixstatic.com/media/423812_5bc308d9dcf648a0bf1b1144ecb1576f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    },
    {
      titulo: "J'adore in'joy",
      id: 26,
      detalle:
        "J'adore in'joy de Christian Dior es una fragancia floral acuática para mujeres. Las notas de salida son sal y neroli; las notas de corazón son jazmín sambac y ylang-ylang; las notas de fondo son durazno y notas amaderadas.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 12,
      imagen: "https://perfugroupar.vtexassets.com/arquivos/ids/176628/jadore2.jpg?v=637938374539070000",
    },
    {
      titulo: "CH rosa",
      id: 27,
      detalle:
        "CH Rosas de Carolina Herrera es una fragancia de la familia olfativa Floral para Mujeres. CH Rosas se lanzó en 2018. Las Notas de Salida son pimienta rosa, bergamota y litchi; las Notas de Corazón son rosa, peonía y lirio de los valles (muguete); las Notas de Fondo son pachulí, vetiver y cedro.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen: "https://fueradelsistema.co/wp-content/uploads/2016/04/ch-pink.jpg",
    },
    {
      titulo: "CH Rojo",
      id: 32,
      detalle:
        "CH Rojo de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. CH Rojo se lanzó en 2021. Las Notas de Salida son frambuesa, naranja sanguina, limón (lima ácida) y maracuyá (fruta de la pasión); las Notas de Corazón son peonía, jazmín sambac (sampaguita), fresia y frangipani (plumeria, plumaria, atapaima); las Notas de Fondo son pachulí y ambroxan.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_613632-MLA43560001017_092020-O.jpg",
    },
    {
      titulo: "CH New York",
      id: 33,
      detalle:
        "CH New York de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. CH New York se lanzó en 2016. Las Notas de Salida son toronja (pomelo), bergamota y limón (lima ácida); las Notas de Corazón son jazmín, rosa y lirio de los valles (muguete); las Notas de Fondo son sándalo, cedro y almizcle.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "Agotado",
      cantidad: 10,
      imagen: "https://cdn.batitienda.com/baticloud/images/product_picture_ce0901222bca414d88402d078b2b792a_637724647145467617_0_m.jpg",
    },
    {
      titulo: "Chanel No. 5",
      id: 37,
      detalle:
        "Chanel No. 5 de Chanel es una fragancia de la familia olfativa Floral Aldehídica para Mujeres. Chanel No. 5 se lanzó en 1921. La Nariz detrás de esta fragrancia es Ernest Beaux. Las Notas de Salida son aldehídos, neroli, ylang-ylang, bergamota y limón (lima ácida); las Notas de Corazón son raíz de lirio, jazmín, rosa y iris; las Notas de Fondo son haba tonka, vetiver, almizcle, sándalo, musgo de roble, civeta y ámbar.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen:
        "https://meperfumery.com.ar/wp-content/uploads/2022/10/Chanel-N-5-2.jpg",
    },
    {
      titulo: "Si Armani Clásico",
      id: 38,
      detalle:
        "Si de Giorgio Armani es una fragancia de la familia olfativa Chipre Frutal para Mujeres. Si se lanzó en 2013. La Nariz detrás de esta fragrancia es Christine Nagel. Las Notas de Salida son cassis, bergamota, mandarina y fresia; las Notas de Corazón son rosa de mayo, neroli y osmanto (olivo oloroso); las Notas de Fondo son pachulí, vainilla, ambroxan y notas amaderadas.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen:
        "https://perfugroupar.vtexassets.com/arquivos/ids/156635/3605521816511_3.jpg?v=637679384062830000",
    },
    {
      titulo: "Si Armani Rojo",
      id: 39,
      detalle:
        "Si Passione de Giorgio Armani es una fragancia de la familia olfativa Floral Frutal para Mujeres. Si Passione se lanzó en 2018. La Nariz detrás de esta fragrancia es Julie Massé. Las Notas de Salida son pera, grosellas negras y pimienta rosa; las Notas de Corazón son rosa, jazmín, heliotropo y grosellas negras; las Notas de Fondo son cedro, vainilla y pachulí.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen:
        "https://perfugroupar.vtexassets.com/arquivos/ids/156606/3614271994806_2.jpg?v=637679383954570000",
    },
    {
      titulo: "You Armani",
      id: 40,
      detalle:
        "You de Giorgio Armani es una fragancia de la familia olfativa Floral para Mujeres. Esta fragrancia es nueva. You se lanzó en 2017. Las Notas de Salida son neroli y frambuesa; las Notas de Corazón son jazmín y rosa; las Notas de Fondo son almizcle y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_842659-MLA42120327224_062020-O.jpg",
    },
    {
      titulo: "Live irresistible rouge",
      id: 41,
      detalle:
        "Live Irresistible Rosy Crush de Givenchy es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Live Irresistible Rosy Crush se lanzó en 2019. Las Notas de Salida son pimienta rosa, grosellas negras y piña; las Notas de Corazón son rosa, peonía y litchi; las Notas de Fondo son almizcle, cedro y ámbar.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen:
        "https://rougeb2car.vtexassets.com/arquivos/ids/188099-800-auto?v=637921064290500000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Live irresistible",
      id: 42,
      detalle:
        "Live Irresistible de Givenchy es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Live Irresistible se lanzó en 2015. Las Notas de Salida son piña, toronja (pomelo) y maracuyá (fruta de la pasión); las Notas de Corazón son rosa, pimienta rosa y lirio de los valles (muguete); las Notas de Fondo son ámbar, almizcle, notas amaderadas y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 20,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_622963-MLA44593703252_012021-O.jpg",
    },
    {
      titulo: "Very Irresistible Sensual",
      id: 43,
      detalle:
        "Very Irresistible Sensual de Givenchy es una fragancia de la familia olfativa Floral para Mujeres. Very Irresistible Sensual se lanzó en 2005. La Nariz detrás de esta fragrancia es Dominique Ropion. Las Notas de Salida son anís estrellado, bayas de enebro",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_116321-MLA20773355577_062016-O.jpg",
    },
    {
      titulo: "Live Irresistible Naranja",
      id: 44,
      detalle:
        "Live Irresistible Eau de Toilette de Givenchy es una fragancia de la familia olfativa Floral Frutal para Mujeres. Live Irresistible Eau de Toilette se lanzó en 2015. La Nariz detrás de esta fragrancia es Dominique Ropion. Las Notas de Salida son piña, toronja",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_864117-MLA51743787885_092022-O.jpg",
    },
    {
      titulo: "Kenzo Amour Filin",
      id: 45,
      detalle:
        "Kenzo Amour de Kenzo es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Kenzo Amour se lanzó en 2006. La Nariz detrás de esta fragrancia es Daphne Bugey. Las Notas de Salida son arroz y notas blancas",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://i.ebayimg.com/thumbs/images/g/wtgAAOSw9Ftj1ZZQ/s-l225.jpg",
    },
    {
      titulo: "Kenzo j'eu d'amour",
      id: 46,
      detalle:
        "Una fragancia floral y afrutada, con notas de toronja, mandarina, rosa, lirio del valle, peonía, jazmín, almizcle y cedro.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://www.kenzoparfums.com/dw/image/v2/BBZW_PRD/on/demandware.static/-/Sites-kenzoparfums-catalog/default/dw34ee4435/images/products-images-kmj/K87165000_2_2.jpg?sw=525&sh=525&sm=fit",
    },
    {
      titulo: "Kenzo flower",
      id: 47,
      detalle:
        "Una fragancia floral suave con notas de violeta, rosa, espino, almizcle y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://elbloquear.vtexassets.com/arquivos/ids/164383-800-auto?v=637907464446970000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Kenzo flower elixir",
      id: 48,
      detalle:
        "Una fragancia floral oriental con notas de mandarina, rosa búlgara, opopónaco, incienso y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://fraganciasdelmundo.com/1925-large_default/flower-by-kenzo-l-elixir-edp.jpg",
    },
    {
      titulo: "Kenzo flower Poppy",
      id: 49,
      detalle:
        "Una fragancia floral fresca con notas de bergamota, pera, rosa, gardenia, almizcle y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://getthelookar.vteximg.com.br/arquivos/ids/165085-1000-1000/217749_eau-de-parfum-kenzo-flower-poppy-bouquet-x-80-ml_imagen-1.jpg?v=637670879317000000",
    },
    {
      titulo: "Kenzo World verde",
      id: 50,
      detalle:
        "Una fragancia amaderada con notas de hojas de té, jengibre, pera, peonía, almizcle blanco y cedro.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/168/110/products/kenzo-world-21-c13821bdfa1e21fc3b15950970839277-640-0.jpg",
    },
    {
      titulo: "Kenzo World amarillo",
      id: 51,
      detalle:
        "Una fragancia floral afrutada con notas de limón, jazmín, peonía, pera, flor de ciruela y vainilla.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://fraganciasdelmundo.com/1690-large_default/kenzo-world-power-edp.jpg",
    },
    {
      titulo: "Kenzo World celeste",
      id: 52,
      detalle:
        "Kenzo World celeste es una fragancia fresca y floral con notas de pera, jazmín y peonía. La combinación de estos ingredientes crea una fragancia delicada y suave, perfecta para el día a día.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen: "https://perfugroupar.vtexassets.com/arquivos/ids/176007/kenzo-homme-eau-edp.jpg?v=637920381795400000",
    },
    {
      titulo: "Kenzo World rosa",
      id: 55,
      detalle:
        "Kenzo World rosa es una fragancia floral y afrutada con notas de frambuesa, peonía y magnolia. La combinación de estos ingredientes crea una fragancia dulce y suave, perfecta para cualquier ocasión.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 18,
      imagen: "https://static02.rp-luxury.com/2181-large_default/kenzo-world-edt.jpg",
    },
    {
      titulo: "212 Carolina Herrera",
      id: 57,
      detalle:
        "212 Carolina Herrera es una fragancia fresca y floral con notas de mandarina, gardenia y sándalo. La combinación de estos ingredientes crea una fragancia sofisticada y elegante, perfecta para llevar en ocasiones especiales.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 8,
      imagen: "https://www.farmacialeloir.com.ar/img/articulos/carolina_herrera_212_nyc_eau_de_toilette_mujer_1.jpg",
    },
    {
      titulo: "212 VIP Rose",
      id: 58,
      detalle:
        "212 VIP Rose es una fragancia floral y afrutada con notas de champagne rosado, melocotón y almizcle. La combinación de estos ingredientes crea una fragancia fresca y elegante, ideal para llevar en ocasiones especiales.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 10,
      imagen: "https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/0/103797-b-212-vip-ros_-edp-80ml.jpg",
    },
    {
      titulo: "212 VIP Red",
      id: 59,
      detalle:
        "212 VIP Red es una fragancia oriental y especiada con notas de ron, pimienta y ámbar. La combinación de estos ingredientes crea una fragancia intensa y seductora, perfecta para llevar en ocasiones nocturnas.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_803414-MLA48465098163_122021-O.jpg",
    },
    {
      titulo: "212 VIP Green",
      id: 60,
      detalle:
        "212 VIP Green es una fragancia fresca y aromática con notas de lima, menta y jengibre. La combinación de estos ingredientes crea una fragancia masculina y refrescante, ideal para llevar durante el día.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 20,
      imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/309/497/products/1-2-1-copia-en-conflicto-de-desktop-1gke71a-2020-09-291-fd9346daddce22e2e416245366283010-640-0.jpg",
    },
    {
      titulo: "212 Sexy",
      id: 61,
      detalle:
        "212 Sexy es una fragancia floral y oriental con notas de bergamota, pimienta rosa y vainilla. La combinación de estos ingredientes crea una fragancia seductora y sofisticada, ideal para llevar en ocasiones especiales.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 18,
      imagen: "https://perfugroupar.vtexassets.com/arquivos/ids/172743/8411061865491_1.jpg?v=637838380559900000",
    },
    {
      titulo: "212 VIP Edición",
      id: 62,
      detalle:
        "212 VIP Edición es una fragancia fresca y oriental con notas de ron, frutas exóticas y madera de cedro. La combinación de estos ingredientes crea una fragancia intensa y seductora, perfecta para llevar en ocasiones nocturnas.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen: "https://perfugroupar.vtexassets.com/arquivos/ids/176943/212-Vip-EDP.png?v=637943745298100000",
    },
    {
      titulo: "Tresor",
      id: 63,
      detalle:
        "Tresor es una fragancia floral y afrutada con notas de rosa, albaricoque y vainilla. La combinación de estos ingredientes crea una fragancia dulce y romántica, ideal para llevar durante el día.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 20,
      imagen: "https://getthelookar.vteximg.com.br/arquivos/ids/158948-1000-1000/202401_eau-de-parfum-lancome-la-nuit-tresor-x-75-ml_imagen-1.jpg?v=637245574048900000",
    },
    {
      titulo: "Tresor Midnight",
      id: 64,
      detalle:
        "Tresor Midnight es una fragancia oriental y floral con notas de rosa, jazmín y vainilla. La combinación de estos ingredientes crea una fragancia intensa y romántica, ideal para llevar en ocasiones especiales.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 25,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_992341-MLA44001294034_112020-O.jpg",
    },
    {
      "titulo": "Madonna Jean Paul Gaultier",
      "id": 65,
      "detalle": "Madonna Jean Paul Gaultier es una fragancia floral y amaderada con notas de naranja, rosa y pachulí. La combinación de estos ingredientes crea una fragancia sensual y atrevida, ideal para llevar en ocasiones nocturnas.",
      "precio": 3399,
      "discount": 25,
      "category": "perfumes",
      "stock": "En stock",
      "cantidad": 25,
      "imagen": "https://i.ebayimg.com/images/g/UGMAAOSw8oFXyCWU/s-l640.jpg"
      },
      {
        "titulo": "Organza",
        "id": 66,
        "detalle": "Organza es una fragancia floral y oriental con notas de jazmín, vainilla y sándalo. La combinación de estos ingredientes crea una fragancia elegante y sofisticada, ideal para llevar en ocasiones especiales.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 25,
        "imagen": "https://perfugroupar.vtexassets.com/arquivos/ids/158269/3274878212354_3.jpg?v=637681175180470000"
      },
      {
        "titulo": "Good Girl Rojo",
        "id": 68,
        "detalle": "Good Girl Rojo es un perfume intenso y seductor que combina notas florales y especiadas. En la salida, se perciben notas de bergamota, limón y mandarina. En el corazón, se encuentran notas de jazmín sambac, rosa y canela. Y en el fondo, notas de praliné, ámbar, pachulí y cedro.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 25,
        "imagen": "https://missperfumes.com.ar/wp-content/uploads/2019/09/perfumes-especiales-good-girl-white-100ml-obelisco-d_q_np_817000-mla29465729306_022019-f.jpg"
      },
      {
        "titulo": "Good Girl Blanco",
        "id": 69,
        "detalle": "Good Girl Blanco es un perfume fresco y luminoso que combina notas florales y cítricas. En la salida, se perciben notas de limón y bergamota. En el corazón, se encuentran notas de jazmín sambac, rosa y flor de azahar. Y en el fondo, notas de almizcle y madera de cedro.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 25,
        "imagen": "https://missperfumes.com.ar/wp-content/uploads/2019/09/perfumes-especiales-good-girl-white-100ml-obelisco-d_q_np_615086-mla29465731273_022019-f.jpg"
      },
      {
        "titulo": "Good Girl Violeta",
        "id": 70,
        "detalle": "Good Girl Violeta es un perfume floral y afrutado que combina notas de bayas, bergamota, mandarina y lichí en la salida. En el corazón, se encuentran notas de jazmín, rosa y flor de naranjo. Y en el fondo, notas de praliné, pachulí y vainilla.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://i.pinimg.com/originals/be/eb/43/beeb43a21260fcb0ada3902420f11426.jpg"
      },
      {
        "titulo": "Good Girl Rosa",
        "id": 71,
        "detalle": "Good Girl Rosa es un perfume fresco y floral que combina notas de bergamota, limón y mandarina en la salida. En el corazón, se encuentran notas de rosa, jazmín y flor de azahar. Y en el fondo, notas de almizcle, cedro y pachulí.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_703554-MLA42490811319_072020-O.webp"
      },
      {
        "titulo": "SCANDAL Gold",
        "id": 72,
        "detalle": "SCANDAL Gold es un perfume oriental y dulce que combina notas de miel, naranja sanguina y mandarina en la salida. En el corazón, se encuentran notas de gardenia, jazmín y flor de naranjo. Y en el fondo, notas de pachulí, caramelo, vainilla y haba tonka.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://cdn.shopify.com/s/files/1/0586/8060/6885/products/scandal-gold-perfume-chile_300x.jpg?v=1671185613"
      },
      {
        "titulo": "So Scandal",
        "id": 73,
        "detalle": "So Scandal es un perfume floral y afrutado que combina notas de pera, frambuesa y cítricos en la salida. En el corazón, se encuentran notas de rosa, jazmín y gardenia. Y en el fondo, notas de pachulí, vainilla y praliné.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_984840-MLA44023745870_112020-O.jpg"
      },
      {
        "titulo": "Scandal Night",
        "id": 74,
        "detalle": "Scandal Night es un perfume oriental y floral que combina notas de naranja sanguina y pera en la salida. En el corazón, se encuentran notas de jazmín, gardenia y miel. Y en el fondo, notas de pachulí, caramelo y vainilla.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_681435-MLA31599238546_072019-O.webp"
      },
      {
        "titulo": "Invictus Femme",
        "id": 75,
        "detalle": "Invictus Femme es un perfume floral y amaderado que combina notas de toronja rosada, jazmín y vainilla salada en la salida. En el corazón, se encuentran notas de flor de azahar y notas amaderadas. Y en el fondo, notas de ámbar gris, pachulí y madera de cachemira.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_655518-MLA51802335475_102022-V.jpg"
      },
      {
        "titulo": "Invictus Gold",
        "id": 76,
        "detalle": "Invictus Gold es un perfume oriental y amaderado que combina notas de toronja, azafrán y sal en la salida. En el corazón, se encuentran notas de rosa, jazmín y especias. Y en el fondo, notas de ámbar, pachulí y madera de guayaco.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "http://cdn.shopify.com/s/files/1/0612/1111/5767/products/eeea00b374eea4545a023a23964ef4e8-e1631715159485.jpg?v=1645433382"
      },{
        "titulo": "Toy Rosa",
        "id": 77,
        "detalle": "Toy Rosa es un perfume floral y afrutado que combina notas de pomelo, manzana y naranja en la salida. En el corazón, se encuentran notas de rosa, jazmín y flor de naranjo. Y en el fondo, notas de almizcle, cedro y ámbar.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_927040-MLA45734006476_042021-O.jpg"
      },
      {
        "titulo": "212 Gota Dorada",
        "id": 78,
        "detalle": "212 Gota Dorada es un perfume floral y afrutado que combina notas de bergamota, mandarina y frutas exóticas en la salida. En el corazón, se encuentran notas de flores blancas y jazmín. Y en el fondo, notas de almizcle y maderas blancas.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/72624703_485092222078600_2884136651695587328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeH6i1BWODJ5QuVmlWLXgqFp35PVCPHy8Lzfk9UI8fLwvBYra2TdO9mu5fksizo3d1oB6ZmmaBsYVQ8ncRfuJf5D&_nc_ohc=1FN0-Bk2g00AX9sSo3S&_nc_ht=scontent.fros2-1.fna&oh=00_AfADCTGXkduSXR5ycAkZoO3I2Hc2519nFreDVtngKh-suw&oe=6417AB1D"
      },
      {
        "titulo": "Héroes Mujer",
        "id": 79,
        "detalle": "Héroes Mujer es un perfume floral y amaderado que combina notas de bergamota, limón y mandarina en la salida. En el corazón, se encuentran notas de rosa, jazmín y flor de azahar. Y en el fondo, notas de pachulí, madera de cedro y almizcle.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://dqm4sv5xk0oaj.cloudfront.net/products/37629/large/open-uri20220328-22044-1d5whp4.?1648487738"
      },{
        "titulo": "Lady Million",
        "id": 80,
        "detalle": "Lady Million es un perfume floral y amaderado que combina notas de naranja amarga, frambuesa y neroli en la salida. En el corazón, se encuentran notas de azahar y jazmín. Y en el fondo, notas de miel, pachulí y madera de cedro.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://www.farmaciassanchezantoniolli.com.ar/1406-medium_default/paco-rabanne-lady-million-edp-30-ml-fragancia-femenina.jpg"
      },
      {
        "titulo": "CH Sublime",
        "id": 81,
        "detalle": "CH Sublime es un perfume floral y oriental que combina notas de bergamota, pimienta rosa y flor de pasionaria en la salida. En el corazón, se encuentran notas de rosa, orquídea y gardenia. Y en el fondo, notas de pachulí, almizcle y haba tonka.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_985809-MLA31114652318_062019-O.jpg"
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
