//HEADER y FOOTER
document.getElementById('header').innerHTML = `
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

document.getElementById('footer').innerHTML = `
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
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const items = document.querySelectorAll('.carousel-item');
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    //agrega botones abajo
    carousel.insertAdjacentHTML('beforeend', `
    <div class="carousel-nav">
        ${buttonsHtml.join("")}
    </div>
    `);

    const buttons = carousel.querySelectorAll('.carousel-button');

    //cuando hago click en un boton
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
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


    let itemIndex = 0;
    changeItem();

    function changeItem() {
        itemIndex++;
        if (itemIndex > items.length) {
            itemIndex = 1;
        }

        //deseleccionar items
        items.forEach(item => item.classList.remove('active'));
        buttons.forEach(button => button.classList.remove('active'));

        //seleccionar la imagen correcta por el numero de boton
        items[itemIndex - 1].classList.add('active');
        buttons[itemIndex - 1].classList.add('active');
        setTimeout(changeItem, 2000)
    }
});

//QUESTIONNAIRE CHARACTERS
function giveMeMyCharacter() {

    function restricciones() {

        //RESTRICCIONES
        if (p1opcionelegida == 0) {
            // document.getElementById("bloque-pregunta-1").focus();
            alert("Por favor, seleccione una opción para la pregunta 1.");
            return 0
        }
        else if (p2opcionelegida == 0) {
            // document.getElementById("bloque-pregunta-2").focus();
            alert("Por favor, seleccione una opción para la pregunta 2.")
            return 0
        }
        else if (p3opcionelegida == 0) {
            // document.getElementById("bloque-pregunta-3").focus();
            alert("Por favor, seleccione una opción para la pregunta 3.")
            return 0
        }
        else if (p4opcionelegida == 0) {
            // document.getElementById("bloque-pregunta-4").focus();
            alert("Por favor, seleccione una opción para la pregunta 4.")
            return 0
        }
        else if (p5opcionelegida == 0) {
            // document.getElementById("bloque-pregunta-5").focus();
            alert("Por favor, seleccione una opción para la pregunta 5.")
            return 0
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
            personajeMaximo = personajesMaximos[random];
            mostrarResultado(personajeMaximo, porcentajeIdentidad)
        } else {
            personajeMaximo = personajesMaximos;
            mostrarResultado(personajeMaximo, porcentajeIdentidad)
        }
    }

    restricciones();
    calculoDePersonajes()

    //POPUP DE RESULTADO
    overlay = document.getElementById('overlay');
    popup = document.getElementById('popup');
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    function mostrarResultado(personaje, porcentaje) {

        personaje = String(personaje).trim()
        //Verificación del personaje para el resultado

        if (personaje == 'Naruto Uzumaki') {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.NarutoUzumaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Naruto es un ninja de la Aldea Oculta de la Hoja. Fue marginado en un principio por tener sellado en su interior a una bestia legendaria, el Zorro de Nueve Colas. Sin embargo, su determinación por convertirse en el Hokage lo llevará a desarrollar sus capacidades para aprovechar el chakra natural y el de la bestia legendaria en su interior.</div>`;
        } else if (personaje == "Sakura Haruno") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.SakuraHaruno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sakura es una kunoichi de la Aldea Oculta de la Hoja. Aunque suele tener mal carácter, se preocupa mucho por las personas que quiere. Esta personalidad la llevó a desarrollar sus habilidades de ninja médico pero también a refinar su técnica para poder concentrar el chakra en sus puños y ganar fuerza adicional.</div>`
        } else if (personaje == "Sasuke Uchiha") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.SasukeUchiha.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sasuke es casi el último miembro vivo del clan Uchiha, uno de los clanes ninja más respetados de la Aldea Oculta de la Hoja. Su trágica historia familiar forma su única meta: volverse lo suficientemente poderoso, cueste lo que cueste, como para vengarse de su hermano mayor por haber asesinado al resto de su clan.</div>`
        } else if (personaje == "Monkey D. Luffy") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.MonkeyD.Luffy.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luffy zarpa al mar con el único objetivo de convertirse en el rey de los piratas. Aunque zarpó en solitario, en el transcurso de su viaje conocerá personas que lo seguirán y se convertirán en miembros de su banda pirata: los "Sombrero de Paja". Luffy no es una persona muy inteligente ni con mucho tacto, pero tiene un fuerte sentido de la justicia. Además, es usuario de la fruta Gomu Gomu: una fruta legendaria que le permite estirarse como una goma, pero que a cambio le quita su capacidad para nadar.</div>`
        } else if (personaje == "Zoro Roronoa") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.ZoroRoronoa.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">El Cazador de Piratas Roronoa Zoro, ex cazarrecompensas, se vuelve un combatiente de la banda pirata "Sombrero de Paja" luego de ser rescatado por Luffy de las manos de la Marina. Zoro acepta unirse a la tripulación con la única condición de que ello no obstaculice su objetivo principal: el de convertirse en el mejor espadachín del mundo. Su técnica especial se llama Santoryu, porque literalmente se basa en un estilo que utiliza tres espadas: una espada en cada mano y una tercera en la boca.</div>`
        } else if (personaje == "Nami") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Nami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Apodada "Gata Ladrona", Nami es la navegante de la banda pirata "Sombrero de Paja". Si bien es un tanto cobarde, ella es capaz de arriesgarse por las personas que más valora. Su poder reside en su conocimiento sobre los fenómenos climáticos y en su capacidad de manipular ciertas condiciones climáticas con su arma personalizada, el "Clima-Tact".</div>`
        } else if (personaje == "Anya Forger") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.AnyaForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Anya es una niña pequeña muy curiosa y con una afición por la aventura. Amante de los animes de espías y el maní, Anya es adoptada por Loid Forger, el mejor espía de Westalis, con el objetivo de cumplir una misión para conservar la paz mundial. Lo que su nuevo padre no sabe es que ella posee el increíble poder de leer mentes, y es la única que sabrá los secretos que guardan todos a su alrededor...</div>`
        } else if (personaje == "Loid Forger") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.LoidForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Loid Forger es la nueva identidad del mejor espía de Westalis, alias "Twilight". Con el objetivo de de conservar la paz mundial, Loid debe secretamente llevar a cabo la "operación Strix": formar una familia falsa, inscribir a su hijo en una institución educativa de élite y lograr que acumule méritos llamados "Stella", para acceder a las reuniones de padres de estudiantes de honor y contactar así a su cauto objetivo. Capaz de cumplir innumerables y complejas misiones, esta misión será el mayor desafío que haya enfrentado hasta el momento.</div>`
        } else if (personaje == "Yor Forger") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.YorForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Yor Briar conoce a Loid en una situación muy oportuna: ella necesitaba una pareja falsa para no preocupar a su hermano, y él una madre falsa para poder ingresar a su hija en un colegio de élite. En un instante, ambos forman un vínculo más permanente que les permite a ambos continuar con sus respectivas misiones ocultas. Yor es una persona bastante despistada pero de buen corazón. Además, su fuerza y sus habilidades de combate son del más alto nivel.</div>`
        } else if (personaje == "Izuku Midoriya") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.IzukuMidoriya.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Izuku fue una de las pocas personas que en una sociedad de superhumanos no desarrolló ningún superpoder. Sin embargo, el héroe que más admira, el superhéroe #1 "All Might", le otorgará el don "One for All", el único superpoder que puede heredarse y fortalecerse con cada generación. Si bien al principio no logra adaptarse bien al poder acumulado de "One for All", su determinación y su capacidad de análisis le permitirán sacarle todo el provecho a su poder heredado.</div>`
        } else if (personaje == "Ochaco Uraraka") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.OchacoUraraka.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Bakugou Katsuki") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.BakugouKatsuki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Senku Ishigami") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.SenkuIshigami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Kohaku") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Kohaku.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Chrome") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Chrome.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Gon Freecs") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.GonFreecs.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Killua Zoldyck") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.KilluaZoldyck.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Kurapika") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Kurapika.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Tanjiro Kamada") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.TanjiroKamada.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Zenitsu Agatsuma") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.ZenitsuAgatsuma.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Inosuke Hashibira") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.InosukeHashibira.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Naofumi Iwatani") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.NaofumiIwatani.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Raphtalia") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Raphtalia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Filo") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Filo.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Yuji Itadori") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.YujiItadori.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Megumi Fushiguro") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.MegumiFushiguro.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Nobara Kugisaki") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.NobaraKugisaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Eren Jaeger") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.ErenJaeger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Mikasa Ackerman") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.MikasaAckerman.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Armin Arlert") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.ArminArlert.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Natsu Dragneel") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.NatsuDragneel.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Lucy Heartfilia") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.LucyHeartfilia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Gray Fullbuster") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.GrayFullbuster.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Asta") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Asta.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje"></div>`
        } else if (personaje == "Yuno") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.Yuno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Con talento con la magia desde su nacimiento, Yuno comienza su carrera como caballero mágico en la casa más prestigiosa: "Amanecer Dorado". Si bien es discriminado por su origen plebeyo, su determinación por convertirse en el Rey Mago lo llevan a pulir aún más sus habilidades mágicas, incluso a niveles superiores a los de la realeza. Además de sus propias capacidades, Yuno fue elegido por el espíritu de viento, Sylph, que le otogará su poder en batalla.</div>`
        } else if (personaje == "Noelle Silva") {
            HTMLInterno = `<img id="imagen.personaje" src='img\\personaje.NoelleSilva.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Noelle es miembro de la nobleza pero se unió al escuadrón de los "Toros Negros", la casa más marginada de caballeros mágicos, debido a su falta de control mágico. Como podría esperarse de la nobleza, su personalidad es naturalmente engreída, pero su tiempo con los Toros Negros va a ablandar su carácter, y también mejorar su técnica de control de mana. Su elemento mágico es el agua, lo que también refleja su flexibilidad y dinamismo.</div>`
        };

        console.log(`Sos ${porcentaje} ${personaje}`);
        document.getElementById('nombreDePersonaje').innerHTML = `Sos ${porcentaje} ${personaje}`;
        document.getElementById('contenedorPersonaje').innerHTML = HTMLInterno
        overlay.classList.add('active');
        popup.classList.add('active');
    };
};

function cerrarPopup() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
};

function completarCuestionario() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
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