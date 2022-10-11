//HEADER y FOOTER
document.getElementById('header').innerHTML=`
<nav class="navbar">
<div class="menu-container">
    <ul class="menu">
        <li class="menu-item">
            <a href="./index.html" class="menu-link">
                <i class="uil uil-estate"></i>
                <p>Home</p>
            </a>
        </li>
        <li class="menu-item">
            <a href="./Noticias.html" class="menu-link">
                <i class="uil uil-newspaper"></i>
                <p>Noticias</p>
            </a>
        </li>
        <li class="menu-item">
            <a href="./Cuestionario.html" class="menu-link">
                <i class="uil uil-clipboard-alt"></i>
                <p>Cuestionario</p>
            </a>
        </li>
        <li class="menu-item">
            <a href="./Contacto.html" class="menu-link">
                <i class="uil uil-postcard"></i>
                <p>Contacto</p>
            </a>
        </li>
        <li class="menu-item user">
            <a href="./login.html" class="menu-link">
                <i class="uil uil-sign-in-alt"></i>
                <p>Login</p>
            </a>
        </li>
        <li class="menu-item">
            <a href="./signup.html" class="menu-link">
                <i class="uil uil-signin"></i>
                <p>Sign In</p>
            </a>
        </li>
    </ul>
    <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</div>
<div class="logo-container">
    <img src="img/logo.png" alt="ANINEWS" width="100" height="100">
</div>
<div class="menu-search-container">
    <div class="searchbar">
        <div class="searchbar-cancel-box">
            <i class="uil uil-times"></i>
        </div>
        <div class="searchbar-input">
            <input type="text" placeholder="Buscar...">
        </div>
        <div class="searchbar-box">
            <i class="uil uil-search"></i>
        </div>
    </div>
</div>
</nav>
`

document.getElementById('footer').innerHTML=`
<div class="social-container">
    <ul>
        <li><a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a></li>
    </ul>
    </div>

    <div class="copyright-container">
    <p>© 2022 Aninews.com - Todos los derechos reservados.</p><br>
    <p>Respeta el trabajo de nuestros redactores. Si quieres copiar o compartir nuestro contenido, puedes
        hacerlo siempre que reconozcas la autoría del contenido.</p>
</div>
`

// MENU ANIMATIONS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.menu-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//SEARCHBAR ANIMATIONS

const searchInput = document.querySelector('.searchbar-input');
const searchButton = document.querySelector('.searchbar-box');
const searchCancel = document.querySelector('.searchbar-cancel-box');
const logoContainer = document.querySelector('.logo-container');
const searchbarContainer = document.querySelector('.menu-search-container');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    searchButton.classList.toggle('active');
    searchCancel.classList.toggle('active');
    logoContainer.classList.toggle('active');
    searchbarContainer.classList.toggle('active');
})

searchCancel.addEventListener('click', () => {
    searchInput.classList.remove('active');
    searchButton.classList.remove('active');
    searchCancel.classList.remove('active');
    logoContainer.classList.remove('active');
    searchbarContainer.classList.remove('active');

    searchInput.querySelector('input').value = '';
})

const logoButton = document.querySelector('.logo-container img');

logoButton.addEventListener('click', () => {
    window.location = './index.html';
})

//SELECCIÓN DE OPCIONES

const qaireOption = document.querySelectorAll(".opcion")
const qaireOption1 = document.querySelectorAll(".pregunta1")
const qaireOption2 = document.querySelectorAll(".pregunta2")
const qaireOption3 = document.querySelectorAll(".pregunta3")
const qaireOption4 = document.querySelectorAll(".pregunta4")
const qaireOption5 = document.querySelectorAll(".pregunta5")

//OPCIONES ELEGIDAS
p1opcionelegida = 0;
p2opcionelegida = 0;
p3opcionelegida = 0;
p4opcionelegida = 0;
p5opcionelegida = 0;

qaireOption1.forEach(n => n.addEventListener('click', () => {
    if (n.id == "P1OA") {
        if (p1opcionelegida == "P1OA") {
            p1opcionelegida = 0;
        } else {
            p1opcionelegida = "P1OA";
            document.getElementById("P1OB").classList.remove('active');
            document.getElementById("P1OC").classList.remove('active');
        }
    };
    if (n.id == "P1OB") {
        if (p1opcionelegida == "P1OB") {
            p1opcionelegida = 0;
        } else {
            p1opcionelegida = "P1OB";
            document.getElementById("P1OA").classList.remove('active');
            document.getElementById("P1OC").classList.remove('active');
        }
    };
    if (n.id == "P1OC") {
        if (p1opcionelegida == "P1OC") {
            p1opcionelegida = 0;
        } else {
            p1opcionelegida = "P1OC";
            document.getElementById("P1OA").classList.remove('active');
            document.getElementById("P1OB").classList.remove('active');
        }
    };
    n.classList.toggle('active');
}));

qaireOption2.forEach(n => n.addEventListener('click', () => {
    if (n.id == "P2OA") {
        if (p2opcionelegida == "P2OA") {
            p2opcionelegida = 0;
        } else {
            p2opcionelegida = "P2OA";
            document.getElementById("P2OB").classList.remove('active');
            document.getElementById("P2OC").classList.remove('active');
        }
    };
    if (n.id == "P2OB") {
        if (p2opcionelegida == "P2OB") {
            p2opcionelegida = 0;
        } else {
            p2opcionelegida = "P2OB";
            document.getElementById("P2OA").classList.remove('active');
            document.getElementById("P2OC").classList.remove('active');
        }
    };
    if (n.id == "P2OC") {
        if (p2opcionelegida == "P2OC") {
            p2opcionelegida = 0;
        } else {
            p2opcionelegida = "P2OC";
            document.getElementById("P2OA").classList.remove('active');
            document.getElementById("P2OB").classList.remove('active');
        }
    };
    n.classList.toggle('active');
}));

qaireOption3.forEach(n => n.addEventListener('click', () => {
    if (n.id == "P3OA") {
        if (p3opcionelegida == "P3OA") {
            p3opcionelegida = 0;
        } else {
            p3opcionelegida = "P3OA";
            document.getElementById("P3OB").classList.remove('active');
            document.getElementById("P3OC").classList.remove('active');
        }
    };
    if (n.id == "P3OB") {
        if (p3opcionelegida == "P3OB") {
            p3opcionelegida = 0;
        } else {
            p3opcionelegida = "P3OB";
            document.getElementById("P3OA").classList.remove('active');
            document.getElementById("P3OC").classList.remove('active');
        }
    };
    if (n.id == "P3OC") {
        if (p3opcionelegida == "P3OC") {
            p3opcionelegida = 0;
        } else {
            p3opcionelegida = "P3OC";
            document.getElementById("P3OA").classList.remove('active');
            document.getElementById("P3OB").classList.remove('active');
        }
    };
    n.classList.toggle('active');
}));

qaireOption4.forEach(n => n.addEventListener('click', () => {
    if (n.id == "P4OA") {
        if (p4opcionelegida == "P4OA") {
            p4opcionelegida = 0;
        } else {
            p4opcionelegida = "P4OA";
            document.getElementById("P4OB").classList.remove('active');
            document.getElementById("P4OC").classList.remove('active');
            document.getElementById("P4OD").classList.remove('active');
        }
    };
    if (n.id == "P4OB") {
        if (p4opcionelegida == "P4OB") {
            p4opcionelegida = 0;
        } else {
            p4opcionelegida = "P4OB";
            document.getElementById("P4OA").classList.remove('active');
            document.getElementById("P4OC").classList.remove('active');
            document.getElementById("P4OD").classList.remove('active');
        }
    };
    if (n.id == "P4OC") {
        if (p4opcionelegida == "P4OC") {
            p4opcionelegida = 0;
        } else {
            p4opcionelegida = "P4OC";
            document.getElementById("P4OA").classList.remove('active');
            document.getElementById("P4OB").classList.remove('active');
            document.getElementById("P4OD").classList.remove('active');
        }
    };
    if (n.id == "P4OD") {
        if (p4opcionelegida == "P4OD") {
            p4opcionelegida = 0;
        } else {
            p4opcionelegida = "P4OD";
            document.getElementById("P4OA").classList.remove('active');
            document.getElementById("P4OB").classList.remove('active');
            document.getElementById("P4OC").classList.remove('active');
        }
    };
    n.classList.toggle('active');
}));

qaireOption5.forEach(n => n.addEventListener('click', () => {
    if (n.id == "P5OA") {
        if (p5opcionelegida == "P5OA") {
            p5opcionelegida = 0;
        } else {
            p5opcionelegida = "P5OA";
            document.getElementById("P5OB").classList.remove('active');
            document.getElementById("P5OC").classList.remove('active');
            document.getElementById("P5OD").classList.remove('active');
        }
    };
    if (n.id == "P5OB") {
        if (p5opcionelegida == "P5OB") {
            p5opcionelegida = 0;
        } else {
            p5opcionelegida = "P5OB";
            document.getElementById("P5OA").classList.remove('active');
            document.getElementById("P5OC").classList.remove('active');
            document.getElementById("P5OD").classList.remove('active');
        }
    };
    if (n.id == "P5OC") {
        if (p5opcionelegida == "P5OC") {
            p5opcionelegida = 0;
        } else {
            p5opcionelegida = "P5OC";
            document.getElementById("P5OA").classList.remove('active');
            document.getElementById("P5OB").classList.remove('active');
            document.getElementById("P5OD").classList.remove('active');
        }
    };
    if (n.id == "P5OD") {
        if (p5opcionelegida == "P5OD") {
            p5opcionelegida = 0;
        } else {
            p5opcionelegida = "P5OD";
            document.getElementById("P5OA").classList.remove('active');
            document.getElementById("P5OB").classList.remove('active');
            document.getElementById("P5OC").classList.remove('active');
        }
    };
    n.classList.toggle('active');
}));

//CAROUSEL
document.querySelectorAll('.carousel-container').forEach(carousel =>{
    const items = document.querySelectorAll('.carousel-item');
    const buttonsHtml=Array.from(items, ()=>{
        return `<span class="carousel-button"></span>`;
    });

    //agrega botones abajo
    carousel.insertAdjacentHTML('beforeend',`
    <div class="carousel-nav">
        ${ buttonsHtml.join("") }
    </div>
    `);

    const buttons=carousel.querySelectorAll('.carousel-button');

    //cuando hago click en un boton
    buttons.forEach((button, i)=>{
        button.addEventListener('click', () =>{
            //deseleccionar items
            items.forEach(item => item.classList.remove('active'));
            buttons.forEach(button => button.classList.remove('active'));

            //seleccionar la imagen correcta por el numero de boton
            items[i].classList.add('active');
            button.classList.add('active');
        })
    });

    
    //Selecciono el primer item al cargar la pagina
    items[0].classList.add('active');
    buttons[0].classList.add('active');
    
    
    let itemIndex=0;
    changeItem();

    function changeItem(){
        itemIndex++;
        if(itemIndex>items.length){
            itemIndex=1;
        }

        //deseleccionar items
        items.forEach(item => item.classList.remove('active'));
        buttons.forEach(button => button.classList.remove('active'));

        //seleccionar la imagen correcta por el numero de boton
        items[itemIndex-1].classList.add('active');
        buttons[itemIndex-1].classList.add('active');
        setTimeout(changeItem,2000)
    }
});

//QUESTIONNAIRE CHARACTERS
function giveMeMyCharacter() {

    function restricciones() {

        //RESTRICCIONES
        if (p1opcionelegida == 0) {
            alert("Por favor, seleccione una opción para la pregunta 1.")
        }
        else if (p2opcionelegida == 0) {
            alert("Por favor, seleccione una opción para la pregunta 2.")
        }
        else if (p3opcionelegida == 0) {
            alert("Por favor, seleccione una opción para la pregunta 3.")
        }
        else if (p4opcionelegida == 0) {
            alert("Por favor, seleccione una opción para la pregunta 4.")
        }
        else if (p5opcionelegida == 0) {
            alert("Por favor, seleccione una opción para la pregunta 5.")
        }
        else { sumaDePersonajes() }
    }

    function sumaDePersonajes() {

        //VARIABLES
        NarutoUzumaki = 0;
        SakuraHaruno = 0;
        SasukeUchiha = 0;
        MonkeyDLuffy = 0;
        ZoroRoronoa = 0;
        Nami = 0;
        AnyaForger = 0;
        LoidForger = 0;
        YorForger = 0;
        IzukuMidoriya = 0;
        OchacoUraraka = 0;
        BakugouKatsuki = 0;
        SenkuIshigami = 0;
        Kohaku = 0;
        Chrome = 0;
        GonFreecs = 0;
        KilluaZoldyck = 0;
        Kurapika = 0;
        TanjiroKamada = 0;
        ZenitsuAgatsuma = 0;
        InosukeHashibira = 0;
        NaofumiIwatani = 0;
        Raphtalia = 0;
        Filo = 0;
        YujiItadori = 0;
        MegumiFushiguro = 0;
        NobaraKugisaki = 0;
        ErenJaeger = 0;
        MikasaAckerman = 0;
        ArminArlert = 0;
        NatsuDragneel = 0;
        LucyHeartfilia = 0;
        GrayFullbuster = 0;
        Asta = 0;
        Yuno = 0;
        NoelleSilva = 0;

        // PREGUNTA 1
        if (p1opcionelegida == "P1OA") {
            SakuraHaruno += 1;
            Nami += 1;
            YorForger += 1;
            OchacoUraraka += 1;
            Kohaku += 1;
            GonFreecs += 1;
            TanjiroKamada += 1;
            Raphtalia += 1;
            YujiItadori += 1;
            MikasaAckerman += 1;
            NatsuDragneel += 1;
            NoelleSilva += 1;
        }
        if (p1opcionelegida == "P1OB") {
            NarutoUzumaki += 1;
            MonkeyDLuffy += 1;
            AnyaForger += 1;
            BakugouKatsuki += 1;
            Chrome += 1;
            KilluaZoldyck += 1;
            ZenitsuAgatsuma += 1;
            Filo += 1;
            NobaraKugisaki += 1;
            ErenJaeger += 1;
            LucyHeartfilia += 1;
        }
        if (p1opcionelegida == "P1OC") {
            SasukeUchiha += 1;
            ZoroRoronoa += 1;
            LoidForger += 1;
            IzukuMidoriya += 1;
            SenkuIshigami += 1;
            Kurapika += 1;
            InosukeHashibira += 1;
            NaofumiIwatani += 1;
            MegumiFushiguro += 1;
            ArminArlert += 1;
            GrayFullbuster += 1;
            Asta += 1;
            Yuno += 1;
        }

        // PREGUNTA 2
        if (p2opcionelegida == "P2OA") {
            ZoroRoronoa += 1;
            Nami += 1;
            AnyaForger += 1;
            YorForger += 1;
            Kohaku += 1;
            GonFreecs += 1;
            ZenitsuAgatsuma += 1;
            Filo += 1;
            NobaraKugisaki += 1;
            MikasaAckerman += 1;
            LucyHeartfilia += 1;
            NoelleSilva += 1;
        }
        if (p2opcionelegida == "P2OB") {
            LoidForger += 1;
            IzukuMidoriya += 1;
            OchacoUraraka += 1;
            SenkuIshigami += 1;
            Chrome += 1;
            Kurapika += 1;
            TanjiroKamada += 1;
            NaofumiIwatani += 1;
            ArminArlert += 1;
            GrayFullbuster += 1;
            Yuno += 1;
        }
        if (p2opcionelegida == "P2OC") {
            NarutoUzumaki += 1;
            SakuraHaruno += 1;
            SasukeUchiha += 1;
            MonkeyDLuffy += 1;
            BakugouKatsuki += 1;
            KilluaZoldyck += 1;
            InosukeHashibira += 1;
            Raphtalia += 1;
            YujiItadori += 1;
            MegumiFushiguro += 1;
            ErenJaeger += 1;
            NatsuDragneel += 1;
            Asta += 1;
        }

        // PREGUNTA 3
        if (p3opcionelegida == "P3OA") {
            AnyaForger += 1;
            LoidForger += 1;
            IzukuMidoriya += 1;
            SenkuIshigami += 1;
            Kohaku += 1;
            KilluaZoldyck += 1;
            TanjiroKamada += 1;
            NaofumiIwatani += 1;
            MegumiFushiguro += 1;
            ArminArlert += 1;
            Yuno += 1;
        }
        if (p3opcionelegida == "P3OB") {
            NarutoUzumaki += 1;
            SasukeUchiha += 1;
            MonkeyDLuffy += 1;
            ZoroRoronoa += 1;
            BakugouKatsuki += 1;
            Kurapika += 1;
            InosukeHashibira += 1;
            Raphtalia += 1;
            YujiItadori += 1;
            ErenJaeger += 1;
            MikasaAckerman += 1;
            NatsuDragneel += 1;
            GrayFullbuster += 1;
            Asta += 1;
        }
        if (p3opcionelegida == "P3OC") {
            NarutoUzumaki += 1;
            SasukeUchiha += 1;
            MonkeyDLuffy += 1;
            ZoroRoronoa += 1;
            BakugouKatsuki += 1;
            Kurapika += 1;
            InosukeHashibira += 1;
            Raphtalia += 1;
            YujiItadori += 1;
            ErenJaeger += 1;
            MikasaAckerman += 1;
            NatsuDragneel += 1;
            GrayFullbuster += 1;
            Asta += 1;
        }

        // PREGUNTA 4
        if (p4opcionelegida == "P4OA") {
            LoidForger += 1;
            SenkuIshigami += 1;
            Chrome += 1;
            Kurapika += 1;
            NaofumiIwatani += 1;
            ArminArlert += 1;
        }
        if (p4opcionelegida == "P4OB") {
            ZoroRoronoa += 1;
            Nami += 1;
            YorForger += 1;
            Kohaku += 1;
            KilluaZoldyck += 1;
            Raphtalia += 1;
            NobaraKugisaki += 1;
            MikasaAckerman += 1;
            LucyHeartfilia += 1;
            Asta += 1;
        }
        if (p4opcionelegida == "P4OC") {
            NarutoUzumaki
            SakuraHaruno += 1;
            SasukeUchiha += 1;
            GonFreecs += 1;
            TanjiroKamada += 1;
            InosukeHashibira += 1;
            YujiItadori += 1;
            MegumiFushiguro += 1;
            NatsuDragneel += 1;
            GrayFullbuster += 1;
            Yuno += 1;
            NoelleSilva += 1;
        }
        if (p4opcionelegida == "P4OD") {
            MonkeyDLuffy += 1;
            AnyaForger += 1;
            IzukuMidoriya += 1;
            OchacoUraraka += 1;
            BakugouKatsuki += 1;
            ZenitsuAgatsuma += 1;
            Filo += 1;
            ErenJaeger += 1;
        }

        // PREGUNTA 5
        if (p5opcionelegida == "P5OA") {
            MonkeyDLuffy += 1;
            KilluaZoldyck += 1;
            Kurapika += 1;
            ZenitsuAgatsuma += 1;
            YujiItadori += 1;
            MegumiFushiguro += 1;
            ErenJaeger += 1;
            ArminArlert += 1;
            GrayFullbuster += 1;
            NoelleSilva += 1;
        }
        if (p5opcionelegida == "P5OB") {
            ZoroRoronoa += 1;
            IzukuMidoriya += 1;
            SenkuIshigami += 1;
            Kohaku += 1;
            Chrome += 1;
            GonFreecs += 1;
            TanjiroKamada += 1;
            InosukeHashibira += 1;
            NaofumiIwatani += 1;
            Yuno += 1;
        }
        if (p5opcionelegida == "P5OC") {
            NarutoUzumaki += 1;
            Nami += 1;
            LoidForger += 1;
            YorForger += 1;
            BakugouKatsuki += 1;
            Raphtalia += 1;
            NobaraKugisaki += 1;
            MikasaAckerman += 1;
            Asta += 1;
        }
        if (p5opcionelegida == "P5OD") {
            SakuraHaruno += 1;
            SasukeUchiha += 1;
            AnyaForger += 1;
            OchacoUraraka += 1;
            Filo += 1;
            NatsuDragneel += 1;
            LucyHeartfilia += 1;
        }
    }

    function calculoDePersonajes() {

        respuestasMaximo = Math.max(NarutoUzumaki, SakuraHaruno, SasukeUchiha, MonkeyDLuffy, ZoroRoronoa, Nami, AnyaForger, LoidForger, YorForger, IzukuMidoriya, OchacoUraraka, BakugouKatsuki, SenkuIshigami, Kohaku, Chrome, GonFreecs, KilluaZoldyck, Kurapika, TanjiroKamada, ZenitsuAgatsuma, InosukeHashibira, NaofumiIwatani, Raphtalia, Filo, YujiItadori, MegumiFushiguro, NobaraKugisaki, ErenJaeger, MikasaAckerman, ArminArlert, NatsuDragneel, LucyHeartfilia, GrayFullbuster, Asta, Yuno, NoelleSilva)

        porcentajeIdentidad = (respuestasMaximo / 5 * 100) + " %";

        personajesPosibles = {
            "Naruto Uzumaki": NarutoUzumaki,
            "Sakura Haruno": SakuraHaruno,
            "Sasuke Uchiha ": SasukeUchiha,
            "Monkey D. Luffy": MonkeyDLuffy,
            "Zoro Roronoa": ZoroRoronoa,
            "Nami": Nami,
            "Anya Forger": AnyaForger,
            "Loid Forger": LoidForger,
            "Yor Forger": YorForger,
            "Izuku Midoriya": IzukuMidoriya,
            "Ochaco Uraraka": OchacoUraraka,
            "Bakugou Katsuki": BakugouKatsuki,
            "Senku Ishigami": SenkuIshigami,
            "Kohaku": Kohaku,
            "Chrome": Chrome,
            "Gon Freecs": GonFreecs,
            "Killua Zoldyck": KilluaZoldyck,
            "Kurapika": Kurapika,
            "Tanjiro Kamada": TanjiroKamada,
            "Zenitsu Agatsuma": ZenitsuAgatsuma,
            "Inosuke Hashibira": InosukeHashibira,
            "Naofumi Iwatani": NaofumiIwatani,
            "Raphtalia": Raphtalia,
            "Filo": Filo,
            "Yuji Itadori": YujiItadori,
            "Megumi Fushiguro": MegumiFushiguro,
            "Nobara Kugisaki": NobaraKugisaki,
            "Eren Jaeger": ErenJaeger,
            "Mikasa Ackerman": MikasaAckerman,
            "Armin Arlert": ArminArlert,
            "Natsu Dragneel": NatsuDragneel,
            "Lucy Heartfilia": LucyHeartfilia,
            "Gray Fullbuster": GrayFullbuster,
            "Asta": Asta,
            "Yuno": Yuno,
            "Noelle Silva": NoelleSilva
        }

        personajesMaximos = []

        Object.entries(personajesPosibles).forEach(par => {
            let clave = par[0];
            let valor = par[1];

            if (valor === respuestasMaximo) {
                personajesMaximos.push(" " + clave)
            }
        });

        if (personajesMaximos.length > 1) {
            random = Math.floor(Math.random() * personajesMaximos.length);
            alert("Sos: " + porcentajeIdentidad + personajesMaximos[random] + ".")
        } else {
            alert("Sos: " + porcentajeIdentidad + personajesMaximos + ".")
        }

    }

    restricciones();
    calculoDePersonajes()
};

//CONTACTO

function enviarContacto() {
    nombreCompleto = document.contactoform.nombre.value;
    correoElectronico = document.contactoform.correo.value;
    mensajeContacto = document.contactoform.mensaje.value;

    if (nombreCompleto.length == 0) {
        document.getElementById("alertanombre").classList = "elemento-formulario alerta active";
    } else {
        document.getElementById("alertanombre").classList = "elemento-formulario alerta"
    }
    if (/\w+@\w+/.test(correoElectronico)) {
        document.getElementById("alertacorreo").classList = "elemento-formulario alerta";
    } else {
        document.getElementById("alertacorreo").classList = "elemento-formulario alerta active"
    }
    if (mensajeContacto.length == 0) {
        document.getElementById("alertamensaje").classList = "elemento-formulario alerta active";
    } else {
        document.getElementById("alertamensaje").classList = "elemento-formulario alerta"
    }
    if (nombreCompleto.length != 0 && /\w+@\w+/.test(correoElectronico) && mensajeContacto.length != 0) {
        alert(`Saludos ${nombreCompleto}: ¡Muchas gracias por enviar su mensaje! Es muy valioso para nosotros.`);
    }
};