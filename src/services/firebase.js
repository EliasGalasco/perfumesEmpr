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
      detalle: `Las cualidades dulces, imponentes y seductoras del jazm??n aportan una brillante feminidad a Good Girl. El lado misterioso de Good Girl se expresa con el rico y fragante cacao y la embriagadora haba tonka, mientras que la almendra y el caf?? le aportan notas de audaz vitalidad
    Para: Ella
    Ella es: Seductora y fuerte
    Ocasi??n: D??a y noche
    Familia olfativa: ??MBAR ??mbar Floral
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
        "Con La Vie Est Belle Eau de Parfum, Lanc??me crea el equilibrio perfecto combinando la nobleza del lirio, la profundidad del pachuli y el retorno de un gourmet accord.",
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
        "Olympea Solar es el nuevo Eau de Parfum de Paco Rabanne. Representa lafragancia de la diosa Amazona. Feroz, independiente y con un poderradiante. Una verdadera belleza oriental, victoriosa y contundente. Unestallido luminoso de brillo sensual que revela m??ltiples facetas.Floral y oriental Notas de salida: Mandarina y Naranja Notas decoraz??n: Musgo de roble y flore de tiare Notas de fondo: flor decananga y benju??",
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
        "El perfume de mujer Amor Amor de Cacharel se caracteriza por ser una fragancia que perdura en el tiempo, una fragancia de una marca reconocida que ofrece una magn??fica relaci??n calidad-precio. Si eres amante de los perfumes que brindan un aroma especiado, c??trico y floral, este es tu perfume. Su aroma es bastante suave, de modo que si deseas que el aroma de esta fragancia se perciba es importante utilizar una buena cantidad para que su fragancia se desprenda all?? por donde pases. En general, puede decirse que es una gran compra, tanto por marca como por precio y calidad. Un gran producto en todos los sentidos.",
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
      detalle: `Usando la magia se hace perfume. Una fantas??a de frutas brillantes, un elixir fascinante y misterioso
    Notas de Salida: Frambuesa, Sorbete de Pera y Esencia de Mandarina.
    Notas de Coraz??n: Jazm??n, Absoluto de Fresia y Peonia Rosa.
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
      detalle: `Fragancia femenina de ensue??o. De familia olfativa Floral.

    Halloween Blue Drop es enternecedora, suave y delicada. Un sue??o donde todo nos parece sutil, tierno y aterciopelado, nos envuelve y traslada a un mundo de fantasias. Al pasar dejar??s tu estela en el aire compartiendo tus sue??os con el resto.
    
    Pir??mide olfativa:
    Notas de salida: manzana verde y lavanda
    Nota de coraz??n: jazm??n, violeta y flores blancas.
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
      detalle: `Lo que ten??s que saber de este producto
    _Aroma: floral.
    _Pa??s de origen: Francia.
    _Para acompa??ar un estilo ??nico.`,
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
    Es radiante y alegre en sus primeros instantes. En el coraz??n, la violeta negra, la flor de cacao y el el??boro despliegan sus encantos. En esta composici??n pensada para seducir. En la nota de fondo, la sobredosis de la madera de Massoia es la interpretaci??n femenina del metal, tan vinculado a Paco Rabanne. Es la columna vertebral de esta fragancia, completada con pachul?? y vainilla negra
    OTRAS CARACTERISTICAS:
    Notas de salida: Flor de tamarindo, arandano, bayas de pimienta rosa
    Notas de coraz??n: Charming Hellebore rose, flor de cacao, violeta negra voluptuosa
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
    Notas de Coraz??n: Nardos, flor de azahar del naranjo y jazm??n sambac.
    Notas de Fondo: Pachul??, vainilla, ambroxan y vetiver.`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://rougeb2car.vtexassets.com/arquivos/ids/189122-800-auto?v=637941154610570000&width=800&height=auto&aspect=true",
    },
    {
      titulo: "Angel y demonio cl??sico",
      id: 11,
      detalle: `Perfume Angel O Demonio Eau de Parfum 100ML Ange ou Demon de Givenchy es una fragancia de la familia olfativa Oriental Floral para Mujeres. Ange ou Demon se lanz?? en 2006. Ange ou Demon fue creada por Olivier Cresp y Jean-Pierre Bethouart. Las Notas de Salida son mandarina, azafr??n y tomillo; las Notas de Coraz??n son azucena, orqu??dea y ylang-ylang; las Notas de Fondo son haba tonka, vainilla, palo de rosa de Brasil y musgo de roble.`,
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
      detalle: `Refresca tu rutina de belleza con Ange Ou Demon Le Secret eau de parfum, una fragancia ligera para mujer repleta de flores y notas afrutadas. Introducido por Givenchy en 2014, este aroma crujiente se abre con notas de hoja de t??, lim??n y ar??ndano, con notas de jazm??n que aportan dulzura en el coraz??n. Una nota base de almizcle mejora el aroma en el secado hacia abajo y equilibra la fragancia perfectamente. Usa Ange Ou Demon Le Secret para poner un poco de primavera en tu paso y sentirte extra hermosa todos los d??as.

    Notas de fragancia:Ar??ndano, T??, Lim??n Amalfi, Lirio de Agua, Peon??a, Jazm??n, Patchouli, Notas Woody
    Uso recomendado:Rom??ntico`,
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
      detalle: `Olymp??a, una diosa de los tiempos modernos, la mujer de todas las victorias.

    Vainilla salada imperial, capricho divino. Jazm??n de agua y flor de jengibre envueltos en cachemir. Cautivadora y exquisita adicci??n. Su mirada magn??tica y su eau de parfum nos conducen hacia una estela de seducci??n.
    
    Una poci??n divina de sensualidad adictiva.`,
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
      detalle: `Caracter??sticas: Olympea Legend de Paco Rabanne es una fragancia de la familia olfativa Oriental Floral para Mujeres. Esta fragancia es nueva. Olympea Legend se lanz?? en 2019. La Nariz detr??s de esta fragancia es Loc Dong. Las Notas de Salida son sal de mar, ciruela y chabacano; las Notas de Coraz??n son flor de jengibre y notas florales; las Notas de Fondo son vainilla, ??mbar, arena y haba tonka.`,
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
      detalle: `Olympea Blossom, un contraste delicioso entre una explosi??n de flores y una sensualidad cautivadora. En su salida, un toque picante de rosas da paso al intenso sorbete de grosella.`,
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
      detalle: `Es una fragancia de la familia olfativa ??mbar Floral para Mujeres. Play For Her se lanz?? en 2010. Play For Her fue creada por Emilie Bevierre-Coppermann y Lucas Sieuzac. Las Notas de Salida son pimienta rosa, durazno (melocot??n), flor de azahar del naranjo, guisante de olor y bergamota; las Notas de Coraz??n son orqu??dea, flor de tiar??, flor de cuaba blanca (madera de amyris) y magnolia; las Notas de Fondo son haba tonka, s??ndalo, almizcle, pachul?? y benju??`,
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
      detalle: `L'Eau d'Issey Rose & Rose de Issey Miyake es una fragancia de la familia olfativa Floral Frutal para Mujeres. L'Eau d'Issey Rose & Rose se lanz?? en 2019. Las Notas de Salida son frambuesa, pera y pimienta rosa; las Notas de Coraz??n son rosa de Bulgaria (rosa Damascena de Bulgaria), rosa y osmanto (olivo oloroso); las Notas de Fondo son madera de cachemira, ??mbar y pachul??`,
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 22,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_652744-MLA43465301745_092020-O.jpg",
    },
    {
      titulo: "La tentaci??n de Nina",
      id: 19,
      detalle: `Esta fragancia promete el encantamiento a trav??s del poder de la seducci??n femenina, la cual se convierte en una de las m??s dulces y ardientes tentaciones.

    Notas de Fragancia: La Nota de Salida es bergamota; las Notas de Coraz??n son macarrones dulces, lim??n (lima ??cida), almendra, rosa de Bulgaria (rosa Damascena de Bulgaria) y frambuesa; las Notas de Fondo son vainilla Bourbon, almizcle blanco y s??ndalo.
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
      detalle: `Descripci??n olfativa:
    BELLA de Nina Ricci es lanzado en 2018 que pertenece a la familia Floral Frutal para mujeres. La marca lo presenta dentro de su colecci??n Les Belles de Nina que incluye Nina, Luna y esta nueva incorporaci??n, Bella. Las perfumistas Louise Turner y Sof??a Constant han sabido reflejar la esencia de una mujer atrevida, que quiz??s no siempre acata las reglas, pero cuenta con una feminidad ??nica. Es algo que se refleja en su composici??n ??cido-floral: inicia con notas de mandarina verde, ruibarbo y lim??n. En el coraz??n encontramos lo que denominan Jalea Rosa compuesta por rosa y fresia, y finaliza con almizcle blanco y vainilla.`,
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

    Las Notas de Salida son bayas silvestres, flor de azahar del naranjo, lima (lim??n verde) y naranja tangerina; las Notas de Coraz??n son caramelo, siempreviva, jazm??n y pera; las Notas de Fondo son s??ndalo, vainilla de Madagascar, regaliz y almizcle blanco.
    
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
        "Blossom Nina de Nina Ricci es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. Blossom Nina se lanz?? en 2021. Las Notas de Salida son pomelo, pera y frambuesa; las Notas de Coraz??n son peon??a, rosa y fresia; las Notas de Fondo son almizcle, cedro y s??ndalo.",
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
        "Ricci Ricci de Nina Ricci es una fragancia de la familia olfativa Floral Frutal para Mujeres. Ricci Ricci se lanz?? en 2009. Las Notas de Salida son ruibarbo, bergamota y flor de luna; las Notas de Coraz??n son tuberosa, rosa centifolia y notas afrutadas; las Notas de Fondo son pachul??, ??mbar y almizcle.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 17,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_724160-MLM44985756608_022021-O.webp",
    },
    {
      titulo: "J'adore cl??sico",
      id: 24,
      detalle:
        "J'adore de Christian Dior es una fragancia de la familia olfativa Floral para Mujeres. J'adore se lanz?? en 1999. La Nariz detr??s de esta fragrancia es Calice Becker. Las Notas de Salida son magnolia, mel??n, durazno, pera, bergamota y mandarina; las Notas de Coraz??n son tuberosa, ciruela, violeta, orqu??dea, fresia, jazm??n, lirio de los valles y rosa; las Notas de Fondo son almizcle, vainilla, cedro y zarzamora (frambuesa negra).",
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
        "J'adore Black de Christian Dior es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. J'adore Black se lanz?? en 2021. La Nariz detr??s de esta fragrancia es Francois Demachy. Las Notas de Salida son bergamota y pera; las Notas de Coraz??n son rosa, magnolia y flor del melocot??n; las Notas de Fondo son pachul?? y almizcle blanco.",
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
        "J'adore in'joy de Christian Dior es una fragancia floral acu??tica para mujeres. Las notas de salida son sal y neroli; las notas de coraz??n son jazm??n sambac y ylang-ylang; las notas de fondo son durazno y notas amaderadas.",
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
        "CH Rosas de Carolina Herrera es una fragancia de la familia olfativa Floral para Mujeres. CH Rosas se lanz?? en 2018. Las Notas de Salida son pimienta rosa, bergamota y litchi; las Notas de Coraz??n son rosa, peon??a y lirio de los valles (muguete); las Notas de Fondo son pachul??, vetiver y cedro.",
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
        "CH Rojo de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. CH Rojo se lanz?? en 2021. Las Notas de Salida son frambuesa, naranja sanguina, lim??n (lima ??cida) y maracuy?? (fruta de la pasi??n); las Notas de Coraz??n son peon??a, jazm??n sambac (sampaguita), fresia y frangipani (plumeria, plumaria, atapaima); las Notas de Fondo son pachul?? y ambroxan.",
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
        "CH New York de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. CH New York se lanz?? en 2016. Las Notas de Salida son toronja (pomelo), bergamota y lim??n (lima ??cida); las Notas de Coraz??n son jazm??n, rosa y lirio de los valles (muguete); las Notas de Fondo son s??ndalo, cedro y almizcle.",
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
        "Chanel No. 5 de Chanel es una fragancia de la familia olfativa Floral Aldeh??dica para Mujeres. Chanel No. 5 se lanz?? en 1921. La Nariz detr??s de esta fragrancia es Ernest Beaux. Las Notas de Salida son aldeh??dos, neroli, ylang-ylang, bergamota y lim??n (lima ??cida); las Notas de Coraz??n son ra??z de lirio, jazm??n, rosa y iris; las Notas de Fondo son haba tonka, vetiver, almizcle, s??ndalo, musgo de roble, civeta y ??mbar.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 15,
      imagen:
        "https://meperfumery.com.ar/wp-content/uploads/2022/10/Chanel-N-5-2.jpg",
    },
    {
      titulo: "Si Armani Cl??sico",
      id: 38,
      detalle:
        "Si de Giorgio Armani es una fragancia de la familia olfativa Chipre Frutal para Mujeres. Si se lanz?? en 2013. La Nariz detr??s de esta fragrancia es Christine Nagel. Las Notas de Salida son cassis, bergamota, mandarina y fresia; las Notas de Coraz??n son rosa de mayo, neroli y osmanto (olivo oloroso); las Notas de Fondo son pachul??, vainilla, ambroxan y notas amaderadas.",
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
        "Si Passione de Giorgio Armani es una fragancia de la familia olfativa Floral Frutal para Mujeres. Si Passione se lanz?? en 2018. La Nariz detr??s de esta fragrancia es Julie Mass??. Las Notas de Salida son pera, grosellas negras y pimienta rosa; las Notas de Coraz??n son rosa, jazm??n, heliotropo y grosellas negras; las Notas de Fondo son cedro, vainilla y pachul??.",
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
        "You de Giorgio Armani es una fragancia de la familia olfativa Floral para Mujeres. Esta fragrancia es nueva. You se lanz?? en 2017. Las Notas de Salida son neroli y frambuesa; las Notas de Coraz??n son jazm??n y rosa; las Notas de Fondo son almizcle y vainilla.",
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
        "Live Irresistible Rosy Crush de Givenchy es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Live Irresistible Rosy Crush se lanz?? en 2019. Las Notas de Salida son pimienta rosa, grosellas negras y pi??a; las Notas de Coraz??n son rosa, peon??a y litchi; las Notas de Fondo son almizcle, cedro y ??mbar.",
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
        "Live Irresistible de Givenchy es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Live Irresistible se lanz?? en 2015. Las Notas de Salida son pi??a, toronja (pomelo) y maracuy?? (fruta de la pasi??n); las Notas de Coraz??n son rosa, pimienta rosa y lirio de los valles (muguete); las Notas de Fondo son ??mbar, almizcle, notas amaderadas y vainilla.",
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
        "Very Irresistible Sensual de Givenchy es una fragancia de la familia olfativa Floral para Mujeres. Very Irresistible Sensual se lanz?? en 2005. La Nariz detr??s de esta fragrancia es Dominique Ropion. Las Notas de Salida son an??s estrellado, bayas de enebro",
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
        "Live Irresistible Eau de Toilette de Givenchy es una fragancia de la familia olfativa Floral Frutal para Mujeres. Live Irresistible Eau de Toilette se lanz?? en 2015. La Nariz detr??s de esta fragrancia es Dominique Ropion. Las Notas de Salida son pi??a, toronja",
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
        "Kenzo Amour de Kenzo es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Kenzo Amour se lanz?? en 2006. La Nariz detr??s de esta fragrancia es Daphne Bugey. Las Notas de Salida son arroz y notas blancas",
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
        "Una fragancia floral y afrutada, con notas de toronja, mandarina, rosa, lirio del valle, peon??a, jazm??n, almizcle y cedro.",
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
        "Una fragancia floral oriental con notas de mandarina, rosa b??lgara, opop??naco, incienso y vainilla.",
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
        "Una fragancia amaderada con notas de hojas de t??, jengibre, pera, peon??a, almizcle blanco y cedro.",
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
        "Una fragancia floral afrutada con notas de lim??n, jazm??n, peon??a, pera, flor de ciruela y vainilla.",
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
        "Kenzo World celeste es una fragancia fresca y floral con notas de pera, jazm??n y peon??a. La combinaci??n de estos ingredientes crea una fragancia delicada y suave, perfecta para el d??a a d??a.",
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
        "Kenzo World rosa es una fragancia floral y afrutada con notas de frambuesa, peon??a y magnolia. La combinaci??n de estos ingredientes crea una fragancia dulce y suave, perfecta para cualquier ocasi??n.",
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
        "212 Carolina Herrera es una fragancia fresca y floral con notas de mandarina, gardenia y s??ndalo. La combinaci??n de estos ingredientes crea una fragancia sofisticada y elegante, perfecta para llevar en ocasiones especiales.",
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
        "212 VIP Rose es una fragancia floral y afrutada con notas de champagne rosado, melocot??n y almizcle. La combinaci??n de estos ingredientes crea una fragancia fresca y elegante, ideal para llevar en ocasiones especiales.",
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
        "212 VIP Red es una fragancia oriental y especiada con notas de ron, pimienta y ??mbar. La combinaci??n de estos ingredientes crea una fragancia intensa y seductora, perfecta para llevar en ocasiones nocturnas.",
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
        "212 VIP Green es una fragancia fresca y arom??tica con notas de lima, menta y jengibre. La combinaci??n de estos ingredientes crea una fragancia masculina y refrescante, ideal para llevar durante el d??a.",
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
        "212 Sexy es una fragancia floral y oriental con notas de bergamota, pimienta rosa y vainilla. La combinaci??n de estos ingredientes crea una fragancia seductora y sofisticada, ideal para llevar en ocasiones especiales.",
      precio: 3399,
      discount: 25,
      category: "perfumes",
      stock: "En stock",
      cantidad: 18,
      imagen: "https://perfugroupar.vtexassets.com/arquivos/ids/172743/8411061865491_1.jpg?v=637838380559900000",
    },
    {
      titulo: "212 VIP Edici??n",
      id: 62,
      detalle:
        "212 VIP Edici??n es una fragancia fresca y oriental con notas de ron, frutas ex??ticas y madera de cedro. La combinaci??n de estos ingredientes crea una fragancia intensa y seductora, perfecta para llevar en ocasiones nocturnas.",
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
        "Tresor es una fragancia floral y afrutada con notas de rosa, albaricoque y vainilla. La combinaci??n de estos ingredientes crea una fragancia dulce y rom??ntica, ideal para llevar durante el d??a.",
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
        "Tresor Midnight es una fragancia oriental y floral con notas de rosa, jazm??n y vainilla. La combinaci??n de estos ingredientes crea una fragancia intensa y rom??ntica, ideal para llevar en ocasiones especiales.",
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
      "detalle": "Madonna Jean Paul Gaultier es una fragancia floral y amaderada con notas de naranja, rosa y pachul??. La combinaci??n de estos ingredientes crea una fragancia sensual y atrevida, ideal para llevar en ocasiones nocturnas.",
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
        "detalle": "Organza es una fragancia floral y oriental con notas de jazm??n, vainilla y s??ndalo. La combinaci??n de estos ingredientes crea una fragancia elegante y sofisticada, ideal para llevar en ocasiones especiales.",
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
        "detalle": "Good Girl Rojo es un perfume intenso y seductor que combina notas florales y especiadas. En la salida, se perciben notas de bergamota, lim??n y mandarina. En el coraz??n, se encuentran notas de jazm??n sambac, rosa y canela. Y en el fondo, notas de pralin??, ??mbar, pachul?? y cedro.",
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
        "detalle": "Good Girl Blanco es un perfume fresco y luminoso que combina notas florales y c??tricas. En la salida, se perciben notas de lim??n y bergamota. En el coraz??n, se encuentran notas de jazm??n sambac, rosa y flor de azahar. Y en el fondo, notas de almizcle y madera de cedro.",
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
        "detalle": "Good Girl Violeta es un perfume floral y afrutado que combina notas de bayas, bergamota, mandarina y lich?? en la salida. En el coraz??n, se encuentran notas de jazm??n, rosa y flor de naranjo. Y en el fondo, notas de pralin??, pachul?? y vainilla.",
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
        "detalle": "Good Girl Rosa es un perfume fresco y floral que combina notas de bergamota, lim??n y mandarina en la salida. En el coraz??n, se encuentran notas de rosa, jazm??n y flor de azahar. Y en el fondo, notas de almizcle, cedro y pachul??.",
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
        "detalle": "SCANDAL Gold es un perfume oriental y dulce que combina notas de miel, naranja sanguina y mandarina en la salida. En el coraz??n, se encuentran notas de gardenia, jazm??n y flor de naranjo. Y en el fondo, notas de pachul??, caramelo, vainilla y haba tonka.",
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
        "detalle": "So Scandal es un perfume floral y afrutado que combina notas de pera, frambuesa y c??tricos en la salida. En el coraz??n, se encuentran notas de rosa, jazm??n y gardenia. Y en el fondo, notas de pachul??, vainilla y pralin??.",
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
        "detalle": "Scandal Night es un perfume oriental y floral que combina notas de naranja sanguina y pera en la salida. En el coraz??n, se encuentran notas de jazm??n, gardenia y miel. Y en el fondo, notas de pachul??, caramelo y vainilla.",
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
        "detalle": "Invictus Femme es un perfume floral y amaderado que combina notas de toronja rosada, jazm??n y vainilla salada en la salida. En el coraz??n, se encuentran notas de flor de azahar y notas amaderadas. Y en el fondo, notas de ??mbar gris, pachul?? y madera de cachemira.",
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
        "detalle": "Invictus Gold es un perfume oriental y amaderado que combina notas de toronja, azafr??n y sal en la salida. En el coraz??n, se encuentran notas de rosa, jazm??n y especias. Y en el fondo, notas de ??mbar, pachul?? y madera de guayaco.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "http://cdn.shopify.com/s/files/1/0612/1111/5767/products/eeea00b374eea4545a023a23964ef4e8-e1631715159485.jpg?v=1645433382"
      },{
        "titulo": "Toy Rosa",
        "id": 77,
        "detalle": "Toy Rosa es un perfume floral y afrutado que combina notas de pomelo, manzana y naranja en la salida. En el coraz??n, se encuentran notas de rosa, jazm??n y flor de naranjo. Y en el fondo, notas de almizcle, cedro y ??mbar.",
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
        "detalle": "212 Gota Dorada es un perfume floral y afrutado que combina notas de bergamota, mandarina y frutas ex??ticas en la salida. En el coraz??n, se encuentran notas de flores blancas y jazm??n. Y en el fondo, notas de almizcle y maderas blancas.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/72624703_485092222078600_2884136651695587328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeH6i1BWODJ5QuVmlWLXgqFp35PVCPHy8Lzfk9UI8fLwvBYra2TdO9mu5fksizo3d1oB6ZmmaBsYVQ8ncRfuJf5D&_nc_ohc=1FN0-Bk2g00AX9sSo3S&_nc_ht=scontent.fros2-1.fna&oh=00_AfADCTGXkduSXR5ycAkZoO3I2Hc2519nFreDVtngKh-suw&oe=6417AB1D"
      },
      {
        "titulo": "H??roes Mujer",
        "id": 79,
        "detalle": "H??roes Mujer es un perfume floral y amaderado que combina notas de bergamota, lim??n y mandarina en la salida. En el coraz??n, se encuentran notas de rosa, jazm??n y flor de azahar. Y en el fondo, notas de pachul??, madera de cedro y almizcle.",
        "precio": 3399,
        "discount": 25,
        "category": "perfumes",
        "stock": "En stock",
        "cantidad": 10,
        "imagen": "https://dqm4sv5xk0oaj.cloudfront.net/products/37629/large/open-uri20220328-22044-1d5whp4.?1648487738"
      },{
        "titulo": "Lady Million",
        "id": 80,
        "detalle": "Lady Million es un perfume floral y amaderado que combina notas de naranja amarga, frambuesa y neroli en la salida. En el coraz??n, se encuentran notas de azahar y jazm??n. Y en el fondo, notas de miel, pachul?? y madera de cedro.",
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
        "detalle": "CH Sublime es un perfume floral y oriental que combina notas de bergamota, pimienta rosa y flor de pasionaria en la salida. En el coraz??n, se encuentran notas de rosa, orqu??dea y gardenia. Y en el fondo, notas de pachul??, almizcle y haba tonka.",
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
