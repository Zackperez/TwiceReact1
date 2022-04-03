import logo from './logo.svg';
import Testimonio from './componentes/testimonio';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Miembros de TWICE</h1>
        <Testimonio
          imagen='nayeon'
          nombre='Im Na-yeon'
          pais='Sur Corea'
          profesion='Cantante/Bailarina'
          empresa='JYPE'
          descripcion={['Im Na-yeon (Hangul: 임나연, Seúl;', <strong> 22 de septiembre de 1995 </strong>, '), conocida artísticamente como Nayeon, es una cantante y bailarina surcoreana que, después de participar en el reality show televisivo de supervivencia Sixteen en 2015, se convirtió en parte del grupo femenino, Twice formado por JYP Entertainment.']}
        />
        <Testimonio
          imagen='jeongyeon'
          nombre='Yoo Jeong-yeon'
          pais='Sur Corea'
          profesion='Cantante/Bailarina'
          empresa='JYPE'
          descripcion={["Yoo Jeong-yeon (hangul: 유정연, Suwon, Gyeonggi,", <strong> 1 de noviembre de 1996 </strong>, "), más conocida en su carrera de artista como Jeongyeon (hangul: 정연), es una cantante, bailarina, Modelo, Compositora y MC surcoreana que debutó como miembro del grupo musical Twice en 2015."]}
        />
        <Testimonio
          imagen='momo'
          nombre='Momo Harai'
          pais='Japon'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion={["Hirai Momo (平井 もも Hirai Momo, Kyōtanabe,", <strong> 9 de noviembre de 1996</strong>, ")también conocida como Momo (hangul: 모모), es una cantante, rapera, bailarina y compositora japonesa, integrante del grupo femenino de k-pop Twice."]}
        />
        <Testimonio
          imagen='sana'
          nombre='Sana Minatozaki'
          pais='Japon'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion={["Sana Minatozaki (湊崎 紗夏 Minatozaki?, Tennōji-ku, Osaka,", <strong>29 de diciembre de 1996</strong>, ")​, comúnmente conocida por el monónimo Sana (coreano: 사나 , japonés: サナ), es una cantante, bailarina, compositora, y presentadora japonesa, que actualmente reside en Corea del Sur. Debutó en 2015 como miembro del grupo femenino Twice creado por JYP Entertainment.​"]}
        />
        <Testimonio
          imagen='jihyo'
          nombre='Park Jihyo'
          pais='Sur Corea'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion="Park Ji-hyo (Guri, Gyeonggi, Corea del Sur; 1 de febrero de 1997), más conocida como Jihyo, es una cantautora, modelo y bailarina surcoreana. En 2015, participó en el programa Sixteen, donde compitió para formar parte de Twice.​ Debutó como integrante, centro y líder del grupo en el mismo año, bajo JYP Entertainment.​"
        />
        <Testimonio
          imagen='mina'
          nombre='Mina Sharon Myoi'
          pais='Japon'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion="Mina Sharon Myoi (San Antonio, Texas; 24 de marzo de 1997), conocida simplemente como Mina, es una cantante, bailarina, modelo y compositora japonesa nacida en Estados Unidos, miembro del grupo femenino Twice, formado por JYP Entertainment en 2015.2​3​4​"
        />
        <Testimonio
          imagen='dahyun'
          nombre='Kim Dahyun'
          pais='Sur Corea'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion="Kim Da-hyun (en coreano, 김다현) (Seongnam, Provincia de Gyeonggi; 28 de mayo de 1999), más conocida como Dahyun, es una rapera, cantante, compositora, modelo y bailarina surcoreana. Es miembro del grupo femenino Twice formado por JYP Entertainment."
        />
        <Testimonio
          imagen='chaeyoung'
          nombre='Son Chae-young'
          pais='Sur Corea'
          profesion='Bailarina/Cantante/Compositora'
          empresa='JYPE'
          descripcion="Son Chae-young (hangul: 손채영; Seúl, 23 de abril de 1999), más conocida como Chaeyoung, es una cantante, rapera, modelo, bailarina y compositora surcoreana,1​ que debutó en la escena musical en 20152​ con el grupo femenino Twice."
        />
        <Testimonio
          imagen='tzuyu'
          nombre='Chou Tzuyu'
          pais='Taiwan'
          profesion='Bailarina/Cantante'
          empresa='JYPE'
          descripcion="Chou Tzuyu (chino tradicional: 周子瑜; pinyin: Zhōu Zǐyú, hangul: 저우쯔위; Tainan, Taiwán, 14 de junio de 1999), conocida simplemente como Tzuyu (en hangul, 쯔위), es una cantante, modelo y bailarina taiwanesa. Tzuyu debutó como integrante del girl group Twice en 2015 bajo el sello discográfico JYP Entertainment."
        />

      </div>
    </div>
  );
}



export default App;
