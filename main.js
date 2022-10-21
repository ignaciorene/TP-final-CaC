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

//CUESTIONARIO

//SELECCIÓN DE OPCIONES

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

//RESTRICCIONES
function restricciones() {
    falta1 = "";
    falta2 = "";
    falta3 = "";
    falta4 = "";
    falta5 = "";

    if (p1opcionelegida == 0) {
        document.getElementById("bloque-pregunta-1").focus();
        // document.getElementById("alertaopcion1").classList.add('active');
        falta1 = "  - Pregunta 1.\n"
    }
    if (p2opcionelegida == 0) {
        // document.getElementById("alertaopcion1").classList.remove('active');
        document.getElementById("bloque-pregunta-2").focus();
        // document.getElementById("alertaopcion2").classList.add('active');
        falta2 = "  - Pregunta 2.\n"
    }
    if (p3opcionelegida == 0) {
        // document.getElementById("alertaopcion2").classList.remove('active');
        document.getElementById("bloque-pregunta-3").focus();
        // document.getElementById("alertaopcion3").classList.add('active');
        falta3 = "  - Pregunta 3.\n"
    }
    if (p4opcionelegida == 0) {
        // document.getElementById("alertaopcion3").classList.remove('active');
        document.getElementById("bloque-pregunta-4").focus();
        // document.getElementById("alertaopcion4").classList.add('active');
        falta4 = "  - Pregunta 4.\n"
    }
    if (p5opcionelegida == 0) {
        // document.getElementById("alertaopcion4").classList.remove('active');
        document.getElementById("bloque-pregunta-5").focus();
        // document.getElementById("alertaopcion5").classList.add('active');
        falta5 = "  - Pregunta 5."
    }
    if (p1opcionelegida == 0 || p2opcionelegida == 0 || p3opcionelegida == 0 || p4opcionelegida == 0 || p5opcionelegida == 0) {
        alert(`Por favor, seleccione opciones para las siguientes preguntas:\n${falta1}${falta2}${falta3}${falta4}${falta5}`)
        return 0
    }
    else {
        // document.getElementById("alertaopcion5").classList.remove('active');
        sumaDePersonajes()
    }
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
        SakuraHaruno += 1;
        Nami += 1;
        YorForger += 1;
        OchacoUraraka += 1;
        Chrome += 1;
        GonFreecs += 1;
        ZenitsuAgatsuma += 1;
        Filo += 1;
        NobaraKugisaki += 1;
        LucyHeartfilia += 1;
        NoelleSilva += 1;
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
    calculoDePersonajes()
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
        "Katsuki Bakugo": BakugouKatsuki,
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
        "Itadori Yuji": YujiItadori,
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

//POPUP DE RESULTADO
overlay = document.getElementById('overlay');
popup = document.getElementById('popup');
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

function mostrarResultado(personaje, porcentaje) {

    personaje = String(personaje).trim()
    //Verificación del personaje para el resultado

    if (personaje == 'Naruto Uzumaki') {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NarutoUzumaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Naruto es un ninja de la Aldea Oculta de la Hoja. Fue marginado en un principio por tener sellado en su interior a una bestia legendaria, el Zorro de Nueve Colas. Sin embargo, su determinación por convertirse en el Hokage lo llevará a desarrollar sus capacidades para aprovechar el chakra natural y el de la bestia legendaria en su interior.</div>`;
    } else if (personaje == "Sakura Haruno") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SakuraHaruno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sakura es una kunoichi de la Aldea Oculta de la Hoja. Aunque suele tener mal carácter, se preocupa mucho por las personas que quiere. Esta personalidad la llevó a desarrollar sus habilidades de ninja médico pero también a refinar su técnica para poder concentrar el chakra en sus puños y ganar fuerza adicional.</div>`
    } else if (personaje == "Sasuke Uchiha") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SasukeUchiha.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sasuke es casi el último miembro vivo del clan Uchiha, uno de los clanes ninja más respetados de la Aldea Oculta de la Hoja. Su trágica historia familiar forma su única meta: volverse lo suficientemente poderoso, cueste lo que cueste, como para vengarse de su hermano mayor por haber asesinado al resto de su clan.</div>`
    } else if (personaje == "Monkey D. Luffy") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MonkeyD.Luffy.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luffy zarpa al mar con el único objetivo de convertirse en el rey de los piratas. Aunque zarpó en solitario, en el transcurso de su viaje conocerá personas que lo seguirán y se convertirán en miembros de su banda pirata: los "Sombrero de Paja". Luffy no es una persona muy inteligente ni con mucho tacto, pero tiene un fuerte sentido de la justicia. Además, es usuario de la fruta Gomu Gomu: una fruta legendaria que le permite estirarse como una goma, pero que a cambio le quita su capacidad para nadar.</div>`
    } else if (personaje == "Zoro Roronoa") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ZoroRoronoa.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">El Cazador de Piratas Roronoa Zoro, ex cazarrecompensas, se vuelve un combatiente de la banda pirata "Sombrero de Paja" luego de ser rescatado por Luffy de las manos de la Marina. Zoro acepta unirse a la tripulación con la única condición de que ello no obstaculice su objetivo principal: el de convertirse en el mejor espadachín del mundo. Su técnica especial se llama Santoryu, porque literalmente se basa en un estilo que utiliza tres espadas: una espada en cada mano y una tercera en la boca.</div>`
    } else if (personaje == "Nami") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Nami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Apodada "Gata Ladrona", Nami es la navegante de la banda pirata "Sombrero de Paja". Si bien es un tanto cobarde, ella es capaz de arriesgarse por las personas que más valora. Su poder reside en su conocimiento sobre los fenómenos climáticos y en su capacidad de manipular ciertas condiciones climáticas con su arma personalizada, el "Clima-Tact".</div>`
    } else if (personaje == "Anya Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.AnyaForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Anya es una niña pequeña muy curiosa y con una afición por la aventura. Amante de los animes de espías y el maní, Anya es adoptada por Loid Forger, el mejor espía de Westalis, con el objetivo de cumplir una misión para conservar la paz mundial. Lo que su nuevo padre no sabe es que ella posee el increíble poder de leer mentes, y es la única que sabrá los secretos que guardan todos a su alrededor...</div>`
    } else if (personaje == "Loid Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.LoidForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Loid Forger es la nueva identidad del mejor espía de Westalis, alias "Twilight". Con el objetivo de de conservar la paz mundial, Loid debe secretamente llevar a cabo la "operación Strix": formar una familia falsa, inscribir a su hijo en una institución educativa de élite y lograr que acumule méritos llamados "Stella", para acceder a las reuniones de padres de estudiantes de honor y contactar así a su cauto objetivo. Capaz de cumplir innumerables y complejas misiones, esta misión será el mayor desafío que haya enfrentado hasta el momento.</div>`
    } else if (personaje == "Yor Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.YorForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Yor Briar conoce a Loid en una situación muy oportuna: ella necesitaba una pareja falsa para no preocupar a su hermano, y él una madre falsa para poder ingresar a su hija en un colegio de élite. En un instante, ambos forman un vínculo más permanente que les permite a ambos continuar con sus respectivas misiones ocultas. Yor es una persona bastante despistada pero de buen corazón. Además, su fuerza y sus habilidades de combate son del más alto nivel.</div>`
    } else if (personaje == "Izuku Midoriya") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.IzukuMidoriya.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Izuku fue una de las pocas personas que en una sociedad de superhumanos no desarrolló ningún superpoder. Sin embargo, el héroe que más admira, el superhéroe #1 "All Might", le otorgará el don "One for All", el único superpoder que puede heredarse y fortalecerse con cada generación. Si bien al principio no logra adaptarse bien al poder acumulado de "One for All", su determinación y su capacidad de análisis le permitirán sacarle todo el provecho a su poder heredado.</div>`
    } else if (personaje == "Ochaco Uraraka") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.OchacoUraraka.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Proveniente de una familia pobre, la motivación inicial de Ochaco para convertirse en heroína profesional era ganar dinero para darle una buena vida a sus padres. Su don "Zero gravity" le permite eliminar los efectos de la gravedad de las cosas al tocarlas con los dedos. Al usar su don, puede hacerse flotar a ella misma y a otras personas y cosas que haya tocado con fines de rescate o de combate.</div>`
    } else if (personaje == "Katsuki Bakugo") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.BakugouKatsuki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Katsuki es un estudiante de la Academia U.A. para convertirse en un héroe profesional. Es una persona competitiva y agresiva, pero destaca tanto en capacidad de combate como en conocimientos teóricos. Su don "Explosión" le permite secretar de sus manos una sustancia similar a la nitroglicerina para crear explosiones a voluntad, que utiliza tanto para atacar como para desplazarse en el aire. Su nombre de héroe es "Dios de la gran explosión asesina Dynamight".</div>`
    } else if (personaje == "Senku Ishigami") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SenkuIshigami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luego de que el mundo fuera petrificado por miles de años, Senku desea reconstruir la civilización a nivel mundial usando su intelecto. Aunque puede llegar a ser un tanto manipulador para lograr lo que busca, Senku nunca dejará a alguien abandonado e intentará siempre mantener a todos a salvo. Su orgullo no le permitiría jamás dejar la ciencia, incluso si eso le costara la vida. Su fortaleza está en su conocimiento del mundo científico y su intelecto para aplicarlo en un mundo de piedra en el que ya no quedan rastros de tecnología moderna.</div>`
    } else if (personaje == "Kohaku") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Kohaku.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Kohaku es una chica de la Aldea Ishigami, una aldea que nace luego de la caida del mundo moderno por un fenómeno de petrificación misterioso. Es valiente ante el peligro, justa a la hora de hacer juicios y muy protectora con sus seres queridos. También tiende a ser muy rebelde ante las reglas. Su fortaleza está en su imponente fuerza bruta y gran capacidad de combate.</div>`
    } else if (personaje == "Chrome") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Chrome.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luego de que un evento misterioso convirtió a la humanidad en piedra por 3700 años, Chrome es el "hechicero" de una tribu sin ciencia. Si bien es orgulloso en cuanto a su conocimiento, su mente desbordante de curiosidad por lo desconocido lo llevará a convertirse en aprendiz de Senku, un científico de la época previa a la petrificación, al que ayudará a restaurar la sociedad moderna con su reino científico. Su fortaleza está en su determinación por descubrir el funcionamiento de las cosas y su conocimiento adquirido por la experiencia, recolectando y probando minerales y plantas.</div>`
    } else if (personaje == "Gon Freecs") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.GonFreecs.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Gon es optimista por naturaleza, y su extroversión e inocencia atraen a muchos hacia él. En búsqueda de su padre, del que lo único que sabe es que es un Cazador profesional, su aventura comienza tomando un examen para convertirse en un Cazador. En la primera ronda del examen de Cazador se hace amigo de tres personas con las que establece una buena relación: Killua, Kurapika y Leorio​. La fortaleza de Gon está en su gran agilidad y sus sentidos sobrehumanos.</div>`
    } else if (personaje == "Killua Zoldyck") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.KilluaZoldyck.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Killua fue educado por su familia para ser un asesino profesional. Sin embargo, él no quiere seguir el camino decidido por su padre y por eso huye de su hogar y llega al Examen de Cazador, solamente para pasar el rato. Killua es capaz de realizar técnicas de camuflaje, y es prácticamente inmune a los venenos y electricidad porque desde pequeño lo entrenaron para ser capaz de resistir fuertes torturas. Además de estas capacidades, Killua posee una gran fuerza física y la capacidad de transmutar su aura en electricidad, para lanzarlo contra oponentes o para imbuir su cuerpo para ser todavía más rápido y fuerte.</div>`
    } else if (personaje == "Kurapika") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Kurapika.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Kurapika es el único sobreviviente de la tribu Kurta, asesinada por la banda de los Gen'ei Ryodan por sus ojos escarlata, considerados una de las maravillas del mundo de Hunter × Hunter. Kurapika desea convertirse en Cazador para vengarse de ellos y así poder recuperar los ojos de su gente. Su técnica especial involucra juramentos que lo vuelven más fuerte cuando respeta las condiciones que se impone, ganando más poder cuando las condiciones son más arriesgadas y complejas: Kurapika juró como primera condición usar sus habilidades especiales para combatir y acabar con el Gen'ei Ryodan, y como segunda condición morir si no respetara la primera condición.</div>`
    } else if (personaje == "Tanjiro Kamada") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.TanjiroKamada.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Tanjiro es un adolescente que se convierte en cazador de demonios luego de que su familia fuera asesinada por uno. Su hermana Nezuko sobrevivió al ataque, pero terminó convertida en demonio, por lo que Tanjiro emprende una búsqueda para restaurar su humanidad. Las habilidades de Tanjiro incluyen su agudizado sentido del olfato, y su capacidad para usar la Respiración de Concentración Total, que lo vuelve mucho más fuerte y rápido, así como la Respiración del Agua y la Danza del dios del Fuego, que niega las habilidades regenerativas de los demonios.</div>`
    } else if (personaje == "Zenitsu Agatsuma") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ZenitsuAgatsuma.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Zenitsu es un Cazador de Demonios y un compañero de viaje de Tanjiro Kamado. Por naturaleza, Zenitsu es cobarde. Siempre afirma que no tiene mucho tiempo de vida debido al peligroso trabajo de ser un Cazador de demonios. El sentido del oído de Zenitsu es lo suficientemente agudo como para escuchar hasta la más lejana vibración sonora en su alrededor. Además, se vuelve más fuerte cuando duerme: cuando su vida está en peligro, el miedo que experimenta excede sus límites y lo hace caer inconsciente, que es cuando alcanza su verdadero potencial y puede realizar su esgrima a un alto nivel basado únicamente en el instinto. La Respiración que utiliza es la del Rayo.</div>`
    } else if (personaje == "Inosuke Hashibira") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.InosukeHashibira.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Inosuke es un Cazador de Demonios, creador y único usuario conocido de la Respiración de la Bestia. A raíz de vivir en las montañas prácticamente toda su vida, Inosuke desarrolló un agudo sentido del tacto, capaz de reconocer hasta la menor vibración en el aire y así poder detectar tanto a enemigos como aliados. Además, Inosuke posee un control completo de su propio cuerpo, pudiendo dislocarse las articulaciones para ejecutar ataques más efectivos y moverse entre espacios reducidos, así como también mover sus órganos vitales a voluntad, para evitar que estos sean dañados por ataques enemigos.</div>`
    } else if (personaje == "Naofumi Iwatani") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NaofumiIwatani.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Naofumi Iwatani fue invocado a otro mundo, en el que se convierte en uno de los 4 héroes legendarios: el Héroe del Escudo. Aunque inicia en este mundo lleno de esperanza e inocencia, pierde su credibilidad como héroe luego de ser culpado de crímenes que no cometió, y se vuelve así desconfiado, cínico y grosero con otros. Preparado para recibir una traición de parte de cualquiera, decide vivir solamente para derrotar a las olas de calamidad y que lo devuelvan finalmente al mundo del que proviene. Es hasta que conoce a Raphtalia que su personalidad vuelve, aunque sea en parte, a ser lo que era; aún desconfiado, pero mostrándose amable con ella y con la gente que necesita su ayuda. Sus habilidades curativas y la forma de su compañera Filo le ganan el nombre del "Santo del Dios Pájaro".</div>`
    } else if (personaje == "Raphtalia") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Raphtalia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Raphtalia es una Semi-Humana tipo mapache y la primera miembro del equipo del Héroe del Escudo, luego de que él la adquiere como esclava para que se convierta en la fuerza de ataque de su equipo, ya que él no podía empuñar ningún arma. Raphtalia era inicialmente muy tímida y temerosa como resultado de su condición de esclavitud y otros eventos traumáticos sufridos en su pasado, pero logra superar su trauma para ayudar a Naofumi a vencer a las Olas de la Calamidad y que nadie más sufra lo que sufrió ella. Raphtalia trata a las demás personas con respeto y, aunque es gentil por naturaleza, también puede enojarse mucho al presenciar injusticias. Además, al viajar a otro mundo, fue escogida por un arma vasalla, convirtiéndose en la Heroína de la Katana.</div>`
    } else if (personaje == "Filo") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Filo.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Filo es una Filolial nacida de un huevo de monstruo que Naofumi le compró a junto a Raphtalia a un comerciante de esclavos. Se convierte en una reina Filolial gracias a su asociación con el Héroe del Escudo y al reconocimiento de la anterior reina Filolial, Fitoria. Filo puede cambiar entre su forma de Filolial, una criatura con forma de lechuza y más grande que un avestruz, y su forma humana, que tiene la apariencia de una niña con alas en la espalda. Su personalidad es la de una pequeña mimada, a veces un tanto caprichosa, pero empática e inocente. Aunque no puede volar, su fuerza le permite correr a grandes velocidades e incluso tirar del carro que llevaba al equipo del Héroe del Escudo y sus mercancías.</div>`
    } else if (personaje == "Itadori Yuji") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.YujiItadori.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Itadori es un estudiante de primer año del Colegio Técnico de Magia Metropolitana de Tokio y recipiente del Rey de las Maldiciones, Sukuna, luego de ingerir uno de sus dedos y convertirse en su recipiente. A partir de entonces, Itadori tiene la misión de encontrar los restos de Sukuna que se encuentran esparcidos por todo Japón e ingerirlos, para destruir para siempre al Rey de las Maldiciones. Aunque poseía una fuerza física increíble, no tenía interés por ningún deporte, y solía pasar gran parte de su tiempo en el Club de Ocultismo. Itadori es una persona honesta, amigable y con la voluntad de sacrificarse por los demás, provocada por las últimas palabras de su abuelo, que le pide que siempre ayude a los demás.</div>`
    } else if (personaje == "Megumi Fushiguro") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MegumiFushiguro.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Megumi es un estudiante de primer año del Colegio Técnico de Magia Metropolitana de Tokio, y compañero de Yuji Itadori y Nobara Kugisaki. Como miembro de sangre de uno de los tres grandes clanes, nació con el talento innato de hacer uso de la Técnica de Sombras de Diez Tipos, que le permiten invocar shikigamis. Megumi suele ser un joven bastante tranquilo, serio y reservado. Aunque aparenta ser estoico y calculador, Megumi desea ayudar a las personas que considera buenas o amables. Cree que el mundo es injusto y que un chamán es una herramienta para garantizar que las personas amables tengan una oportunidad de vivir.</div>`
    } else if (personaje == "Nobara Kugisaki") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NobaraKugisaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Nobara es una estudiante de primer año del Colegio Técnico de Magia Metropolitana de Tokio, y compañera de Yuji Itadori y Megumi Fushiguro. Es una joven apasionada, extremadamente expresiva y honesta sobre sus sentimientos. Ella tiene un alto sentido del deber como hechicera jujutsu, es una luchadora orgullosa y sabe lo que es importante para ella: aunque muestra interés en todo lo relacionado con el mundo del modelaje y las compras, está dispuesta a abandonar todo sí eso ayuda en salvar a otros. Su Técnica de Muñeco de Paja consiste en canalizar su energía maldita a través de un muñeco de paja para compartir el daño entre su muñeco de paja y su objetivo. Para usarla, Nobara utiliza un martillo y clavos de metal, en los que infunde su energía maldita.</div>`
    } else if (personaje == "Eren Jaeger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ErenJaeger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Eren decide entrar en la milicia tras haber presenciado la aniquilación de su pueblo y la muerte de su madre a manos de los titanes, por lo que guarda una venganza personal hacia ellos. Desde niño, Eren siempre ha sido una persona determinada, de fuertes ideales y con un gran sentido de la justicia. Eren admiraba bastante a los reclutas y les consideraba "héroes" por sus grandes hazañas incluso si estos no salían exitosos de sus expediciones. Tras haber encontrado los secretos ocultos en el sótano de su padre, Eren se enteró del origen de los titanes y de la verdadera historia del mundo, descubriendo de esa forma qué es su verdadero enemigo y tomando el objetivo de eliminar a aquella amenaza para finalmente poder hallar la libertad. Eren es el último portador del Titán de Ataque, lo que le permite transformarse en un titán de 15 metros a voluntad, siempre que tenga suficiente energía para hacerlo.</div>`
    } else if (personaje == "Mikasa Ackerman") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MikasaAckerman.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Mikasa es la hermana adoptiva de Eren Jaeger y, junto con Armin, se une al Cuerpo de Exploración para ayudar a Eren a retomar la Muralla María. Mikasa es físicamente fuerte y de personalidad bastante reservada. Sin embargo, lo da todo por las personas que le importan, ya que las ve como si fueran su familia. Tiene un fuerte sentido de la justicia, pero siempre seguirá a Eren e intentará mantenerlo a salvo. Además de su gran fuerza, ella tiene una prodigiosa habilidad con el equipo de Maniobras 3D, pudiendo tomar fácilmente a los titanes con rapidez y eficiencia. Esto ha dado lugar a que se le haya reconocido como una genio militar y que tiene el "valor de cien soldados rasos".</div>`
    } else if (personaje == "Armin Arlert") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ArminArlert.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Armin es un amigo de la infancia de Eren Jaeger y Mikasa Ackerman. Armin era muy tímido cuando era niño, y junto al hecho de que era físicamente débil, a menudo terminaba como un blanco fácil para los matones locales. Era tan tímido que él se negaba a luchar, manteniendo su opinión sin usar la violencia, siempre necesitando la ayuda de Eren y Mikasa para que lo protegieran. Al crecer, aunque físicamente seguía siendo más débil que el resto de sus compañeros, demuestró una gran inteligencia a través de su capacidad estratégica y soluciones rápidas. Además, Armin es una persona leal y está dispuesto a ponerse en peligro para defender a sus amigos.</div>`
    } else if (personaje == "Natsu Dragneel") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NatsuDragneel.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Natsu es hijo adoptivo del Dragón de fuego Igneel y miembro del gremio Fairy Tail. Tiene un carácter temerario, y a pesar de sus constantes peleas con los demás miembros del gremio, los aprecia mucho. Su debilidad son los transportes: cada vez que sube a un transporte se marea, ya sea un barco, tren, carro o incluso una persona. Sólo cuando Happy, su amigo Exceed, lo lleva de un lugar a otro no sufre de estos mareos, porque él considera a Happy un amigo. Sus técnicas utilizan magia Dragon Slayer de fuego.</div>`
    } else if (personaje == "Lucy Heartfilia") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.LucyHeartfilia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Lucy es una maga de Espíritus Celestiales y una nueva miembro del Gremio Fairy Tail. Es una de las magas más cuerdas del gremio, preguntándose la primera vez que entró si habría algún mago serio por allí. A pesar de su actitud cobarde, no tiene problemas con la lucha y con hacer frente felizmente a los peligros, aun si termina herida, por sus compañeros del gremio. Aunque sus poderes no son tan abrumadores como los de sus compañeros de equipo, Lucy ha probado ser una luchadora muy capaz por ella misma, usando su gran inteligencia a su favor.</div>`
    } else if (personaje == "Gray Fullbuster") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.GrayFullbuster.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Gray es un miembro del gremio Fairy Tail, dentro del cual generalmente hace equipo con Natsu Dragneel, Lucy Heartfilia, Erza Scarlet y Happy. Tiene una personalidad relajada, pero a menudo puede ser serio cuando el momento lo requiere. Él y Natsu tienen una rivalidad amistosa, y a menudo se los puede ver luchando entre sí verbal o físicamente. Su poder radica en su uso de magia de Hielo.</div>`
    } else if (personaje == "Asta") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Asta.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Asta nunca desarrolló ningún tipo de poder mágico, pero no dejó que esto socavara su determinación por convertirse en Rey Mago y se esforzó diariamente por entrenar su cuerpo físico. Aunque inicialmente no recibe un grimorio, en un misterios episodio un grimorio de 5 hojas aparece ante él y le permite retirar de él una espada que puede "cortar" la magia. En el examen de caballeros mágicos, ningún escuadrón confía en su poder desconocido y en su nula capacidad mágica, pero su fuerza física, el poder de la antimagia y su valentía impresionan a Yami Sukehiro, el capitán de los Toros Negros, la orden para marginados donde comienza su carrera como caballero mágico.</div>`
    } else if (personaje == "Yuno") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Yuno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Con talento con la magia desde su nacimiento, Yuno comienza su carrera como caballero mágico en la casa más prestigiosa: "Amanecer Dorado". Si bien es discriminado por su origen plebeyo, su determinación por convertirse en el Rey Mago lo llevan a pulir aún más sus habilidades mágicas, incluso a niveles superiores a los de la realeza. Además de sus propias capacidades, Yuno fue elegido por el espíritu de viento, Sylph, que le otogará su poder en batalla.</div>`
    } else if (personaje == "Noelle Silva") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NoelleSilva.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Noelle es miembro de la nobleza pero se unió al escuadrón de los "Toros Negros", la casa más marginada de caballeros mágicos, debido a su falta de control mágico. Como podría esperarse de la nobleza, su personalidad es naturalmente engreída, pero su tiempo con los Toros Negros va a ablandar su carácter, y también mejorar su técnica de control de mana. Su elemento mágico es el agua, lo que también refleja su flexibilidad y dinamismo.</div>`
    };

    document.getElementById('nombreDePersonaje').innerHTML = `Sos ${porcentaje} ${personaje}`;
    document.getElementById('contenedorPersonaje').innerHTML = `${fotoYDescripcionPersonaje}`
    overlay.classList.add('active');
    popup.classList.add('active');
};

function cerrarPopup() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
};

function completarCuestionario() {
    overlay.classList.remove('active');
    popup.classList.remove('active');

    p1opcionelegida = 0;
    p2opcionelegida = 0;
    p3opcionelegida = 0;
    p4opcionelegida = 0;
    p5opcionelegida = 0;
    const opciones = document.querySelectorAll(".opcion");
    opciones.forEach(n => n.classList.remove('active'));
};

function giveMeMyCharacter() {
    restricciones()
}

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