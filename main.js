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
            <a href="./Pokedex.html" class="menu-link">
                <i class="uil uil-books"></i>
                <p>Pokedex</p>
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
    <p>?? 2022 Aninews.com - Todos los derechos reservados.</p><br>
    <p>Respeta el trabajo de nuestros redactores. Si quieres copiar o compartir nuestro contenido, puedes
        hacerlo siempre que reconozcas la autor??a del contenido.</p>
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

//CARTAS DE NOTICIAS
const listaNoticias =[{
    'tag':'Noticias',
    'title':'Rese??a | Komi-san Cant Communicate',
    'date':'13 Septiembre 2022',
    'image':'img/animecon argentina.jpg'
},{
    'tag':'Noticias',
    'title':'Explot?? la Animecon Argentina 2022 con la presentaci??n de Burnout Syndromes',
    'date':'5 Septiembre 2022',
    'image':'img/background.jpeg'
},{
    'tag':'Noticias',
    'title':'Ai Yazawa espera poder retomar la serializaci??n de Nana',
    'date':'13 Septiembre 2022',
    'image':'img/ejemplo-noticia.jpeg'
},{
    'tag':'Noticias',
    'title':'Chainsaw Man ya tiene fecha de estreno para su adaptaci??n al anime',
    'date':'13 Septiembre 2022',
    'image':'img/chainsaw man.jpg'
},{
    'tag':'Noticias',
    'title':'La segunda entrega de Sword Art Online: Progressive retrasa su estreno hasta octubre',
    'date':'13 Septiembre 2022',
    'image':'img/imagen.pregunta2.opcionA.jpg'
},{
    'tag':'Noticias',
    'title':'La segunda temporada de In/Spectre revela nuevo visual',
    'date':'13 Septiembre 2022',
    'image':'img/imagen.pregunta4.opcionD.jpg'
},{
    'tag':'Noticias',
    'title':'Rese??a | SPY x FAMILY',
    'date':'13 Septiembre 2022',
    'image':'img/personaje.AnyaForger.jpg'
},{
    'tag':'Noticias',
    'title':'La franquicia de Higehiro supera los 2.5 millones de copias en circulaci??n',
    'date':'13 Septiembre 2022',
    'image':'img/personaje.BakugouKatsuki.jpg'
},{
    'tag':'Noticias',
    'title':'El manga Sono Bisque Doll wa Koi wo Suru entra en una pausa de un mes',
    'date':'13 Septiembre 2022',
    'image':'img/imagen.pregunta5.opcionC.jpg'
},{
    'tag':'Noticias',
    'title':'El manga Blend S est?? por finalizar su serializaci??n',
    'date':'13 Septiembre 2022',
    'image':'img/imagen.pregunta4.opcionB.jpg'
}]

cardContainer=document.getElementById('main-card-container');

if (cardContainer!=null){
    for (noticia in listaNoticias) {
        cardContainer.innerHTML=cardContainer.innerHTML + `
        <div class="main-card" style="background-image: url('${listaNoticias[noticia].image}');">
                <div class="main-card-background">
                    <a href="./Noticias.html">
                        <div class="main-card-text-container">
                            <div class="main-card-tag">
                                <p>${listaNoticias[noticia].tag}</p>
                            </div>
                            <div class="main-card-title">
                                <h3>${listaNoticias[noticia].title}</h3>
                            </div>
                            <div class="main-card-text">
                                <p>${listaNoticias[noticia].date}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            `
    }
}

//CUESTIONARIO

//SELECCI??N DE OPCIONES

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
    //Verificaci??n del personaje para el resultado

    if (personaje == 'Naruto Uzumaki') {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NarutoUzumaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Naruto es un ninja de la Aldea Oculta de la Hoja. Fue marginado en un principio por tener sellado en su interior a una bestia legendaria, el Zorro de Nueve Colas. Sin embargo, su determinaci??n por convertirse en el Hokage lo llevar?? a desarrollar sus capacidades para aprovechar el chakra natural y el de la bestia legendaria en su interior.</div>`;
    } else if (personaje == "Sakura Haruno") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SakuraHaruno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sakura es una kunoichi de la Aldea Oculta de la Hoja. Aunque suele tener mal car??cter, se preocupa mucho por las personas que quiere. Esta personalidad la llev?? a desarrollar sus habilidades de ninja m??dico pero tambi??n a refinar su t??cnica para poder concentrar el chakra en sus pu??os y ganar fuerza adicional.</div>`
    } else if (personaje == "Sasuke Uchiha") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SasukeUchiha.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Sasuke es casi el ??ltimo miembro vivo del clan Uchiha, uno de los clanes ninja m??s respetados de la Aldea Oculta de la Hoja. Su tr??gica historia familiar forma su ??nica meta: volverse lo suficientemente poderoso, cueste lo que cueste, como para vengarse de su hermano mayor por haber asesinado al resto de su clan.</div>`
    } else if (personaje == "Monkey D. Luffy") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MonkeyD.Luffy.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luffy zarpa al mar con el ??nico objetivo de convertirse en el rey de los piratas. Aunque zarp?? en solitario, en el transcurso de su viaje conocer?? personas que lo seguir??n y se convertir??n en miembros de su banda pirata: los "Sombrero de Paja". Luffy no es una persona muy inteligente ni con mucho tacto, pero tiene un fuerte sentido de la justicia. Adem??s, es usuario de la fruta Gomu Gomu: una fruta legendaria que le permite estirarse como una goma, pero que a cambio le quita su capacidad para nadar.</div>`
    } else if (personaje == "Zoro Roronoa") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ZoroRoronoa.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">El Cazador de Piratas Roronoa Zoro, ex cazarrecompensas, se vuelve un combatiente de la banda pirata "Sombrero de Paja" luego de ser rescatado por Luffy de las manos de la Marina. Zoro acepta unirse a la tripulaci??n con la ??nica condici??n de que ello no obstaculice su objetivo principal: el de convertirse en el mejor espadach??n del mundo. Su t??cnica especial se llama Santoryu, porque literalmente se basa en un estilo que utiliza tres espadas: una espada en cada mano y una tercera en la boca.</div>`
    } else if (personaje == "Nami") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Nami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Apodada "Gata Ladrona", Nami es la navegante de la banda pirata "Sombrero de Paja". Si bien es un tanto cobarde, ella es capaz de arriesgarse por las personas que m??s valora. Su poder reside en su conocimiento sobre los fen??menos clim??ticos y en su capacidad de manipular ciertas condiciones clim??ticas con su arma personalizada, el "Clima-Tact".</div>`
    } else if (personaje == "Anya Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.AnyaForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Anya es una ni??a peque??a muy curiosa y con una afici??n por la aventura. Amante de los animes de esp??as y el man??, Anya es adoptada por Loid Forger, el mejor esp??a de Westalis, con el objetivo de cumplir una misi??n para conservar la paz mundial. Lo que su nuevo padre no sabe es que ella posee el incre??ble poder de leer mentes, y es la ??nica que sabr?? los secretos que guardan todos a su alrededor...</div>`
    } else if (personaje == "Loid Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.LoidForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Loid Forger es la nueva identidad del mejor esp??a de Westalis, alias "Twilight". Con el objetivo de de conservar la paz mundial, Loid debe secretamente llevar a cabo la "operaci??n Strix": formar una familia falsa, inscribir a su hijo en una instituci??n educativa de ??lite y lograr que acumule m??ritos llamados "Stella", para acceder a las reuniones de padres de estudiantes de honor y contactar as?? a su cauto objetivo. Capaz de cumplir innumerables y complejas misiones, esta misi??n ser?? el mayor desaf??o que haya enfrentado hasta el momento.</div>`
    } else if (personaje == "Yor Forger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.YorForger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Yor Briar conoce a Loid en una situaci??n muy oportuna: ella necesitaba una pareja falsa para no preocupar a su hermano, y ??l una madre falsa para poder ingresar a su hija en un colegio de ??lite. En un instante, ambos forman un v??nculo m??s permanente que les permite a ambos continuar con sus respectivas misiones ocultas. Yor es una persona bastante despistada pero de buen coraz??n. Adem??s, su fuerza y sus habilidades de combate son del m??s alto nivel.</div>`
    } else if (personaje == "Izuku Midoriya") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.IzukuMidoriya.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Izuku fue una de las pocas personas que en una sociedad de superhumanos no desarroll?? ning??n superpoder. Sin embargo, el h??roe que m??s admira, el superh??roe #1 "All Might", le otorgar?? el don "One for All", el ??nico superpoder que puede heredarse y fortalecerse con cada generaci??n. Si bien al principio no logra adaptarse bien al poder acumulado de "One for All", su determinaci??n y su capacidad de an??lisis le permitir??n sacarle todo el provecho a su poder heredado.</div>`
    } else if (personaje == "Ochaco Uraraka") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.OchacoUraraka.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Proveniente de una familia pobre, la motivaci??n inicial de Ochaco para convertirse en hero??na profesional era ganar dinero para darle una buena vida a sus padres. Su don "Zero gravity" le permite eliminar los efectos de la gravedad de las cosas al tocarlas con los dedos. Al usar su don, puede hacerse flotar a ella misma y a otras personas y cosas que haya tocado con fines de rescate o de combate.</div>`
    } else if (personaje == "Katsuki Bakugo") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.BakugouKatsuki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Katsuki es un estudiante de la Academia U.A. para convertirse en un h??roe profesional. Es una persona competitiva y agresiva, pero destaca tanto en capacidad de combate como en conocimientos te??ricos. Su don "Explosi??n" le permite secretar de sus manos una sustancia similar a la nitroglicerina para crear explosiones a voluntad, que utiliza tanto para atacar como para desplazarse en el aire. Su nombre de h??roe es "Dios de la gran explosi??n asesina Dynamight".</div>`
    } else if (personaje == "Senku Ishigami") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.SenkuIshigami.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luego de que el mundo fuera petrificado por miles de a??os, Senku desea reconstruir la civilizaci??n a nivel mundial usando su intelecto. Aunque puede llegar a ser un tanto manipulador para lograr lo que busca, Senku nunca dejar?? a alguien abandonado e intentar?? siempre mantener a todos a salvo. Su orgullo no le permitir??a jam??s dejar la ciencia, incluso si eso le costara la vida. Su fortaleza est?? en su conocimiento del mundo cient??fico y su intelecto para aplicarlo en un mundo de piedra en el que ya no quedan rastros de tecnolog??a moderna.</div>`
    } else if (personaje == "Kohaku") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Kohaku.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Kohaku es una chica de la Aldea Ishigami, una aldea que nace luego de la caida del mundo moderno por un fen??meno de petrificaci??n misterioso. Es valiente ante el peligro, justa a la hora de hacer juicios y muy protectora con sus seres queridos. Tambi??n tiende a ser muy rebelde ante las reglas. Su fortaleza est?? en su imponente fuerza bruta y gran capacidad de combate.</div>`
    } else if (personaje == "Chrome") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Chrome.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Luego de que un evento misterioso convirti?? a la humanidad en piedra por 3700 a??os, Chrome es el "hechicero" de una tribu sin ciencia. Si bien es orgulloso en cuanto a su conocimiento, su mente desbordante de curiosidad por lo desconocido lo llevar?? a convertirse en aprendiz de Senku, un cient??fico de la ??poca previa a la petrificaci??n, al que ayudar?? a restaurar la sociedad moderna con su reino cient??fico. Su fortaleza est?? en su determinaci??n por descubrir el funcionamiento de las cosas y su conocimiento adquirido por la experiencia, recolectando y probando minerales y plantas.</div>`
    } else if (personaje == "Gon Freecs") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.GonFreecs.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Gon es optimista por naturaleza, y su extroversi??n e inocencia atraen a muchos hacia ??l. En b??squeda de su padre, del que lo ??nico que sabe es que es un Cazador profesional, su aventura comienza tomando un examen para convertirse en un Cazador. En la primera ronda del examen de Cazador se hace amigo de tres personas con las que establece una buena relaci??n: Killua, Kurapika y Leorio???. La fortaleza de Gon est?? en su gran agilidad y sus sentidos sobrehumanos.</div>`
    } else if (personaje == "Killua Zoldyck") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.KilluaZoldyck.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Killua fue educado por su familia para ser un asesino profesional. Sin embargo, ??l no quiere seguir el camino decidido por su padre y por eso huye de su hogar y llega al Examen de Cazador, solamente para pasar el rato. Killua es capaz de realizar t??cnicas de camuflaje, y es pr??cticamente inmune a los venenos y electricidad porque desde peque??o lo entrenaron para ser capaz de resistir fuertes torturas. Adem??s de estas capacidades, Killua posee una gran fuerza f??sica y la capacidad de transmutar su aura en electricidad, para lanzarlo contra oponentes o para imbuir su cuerpo para ser todav??a m??s r??pido y fuerte.</div>`
    } else if (personaje == "Kurapika") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Kurapika.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Kurapika es el ??nico sobreviviente de la tribu Kurta, asesinada por la banda de los Gen'ei Ryodan por sus ojos escarlata, considerados una de las maravillas del mundo de Hunter ?? Hunter. Kurapika desea convertirse en Cazador para vengarse de ellos y as?? poder recuperar los ojos de su gente. Su t??cnica especial involucra juramentos que lo vuelven m??s fuerte cuando respeta las condiciones que se impone, ganando m??s poder cuando las condiciones son m??s arriesgadas y complejas: Kurapika jur?? como primera condici??n usar sus habilidades especiales para combatir y acabar con el Gen'ei Ryodan, y como segunda condici??n morir si no respetara la primera condici??n.</div>`
    } else if (personaje == "Tanjiro Kamada") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.TanjiroKamada.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Tanjiro es un adolescente que se convierte en cazador de demonios luego de que su familia fuera asesinada por uno. Su hermana Nezuko sobrevivi?? al ataque, pero termin?? convertida en demonio, por lo que Tanjiro emprende una b??squeda para restaurar su humanidad. Las habilidades de Tanjiro incluyen su agudizado sentido del olfato, y su capacidad para usar la Respiraci??n de Concentraci??n Total, que lo vuelve mucho m??s fuerte y r??pido, as?? como la Respiraci??n del Agua y la Danza del dios del Fuego, que niega las habilidades regenerativas de los demonios.</div>`
    } else if (personaje == "Zenitsu Agatsuma") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ZenitsuAgatsuma.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Zenitsu es un Cazador de Demonios y un compa??ero de viaje de Tanjiro Kamado. Por naturaleza, Zenitsu es cobarde. Siempre afirma que no tiene mucho tiempo de vida debido al peligroso trabajo de ser un Cazador de demonios. El sentido del o??do de Zenitsu es lo suficientemente agudo como para escuchar hasta la m??s lejana vibraci??n sonora en su alrededor. Adem??s, se vuelve m??s fuerte cuando duerme: cuando su vida est?? en peligro, el miedo que experimenta excede sus l??mites y lo hace caer inconsciente, que es cuando alcanza su verdadero potencial y puede realizar su esgrima a un alto nivel basado ??nicamente en el instinto. La Respiraci??n que utiliza es la del Rayo.</div>`
    } else if (personaje == "Inosuke Hashibira") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.InosukeHashibira.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Inosuke es un Cazador de Demonios, creador y ??nico usuario conocido de la Respiraci??n de la Bestia. A ra??z de vivir en las monta??as pr??cticamente toda su vida, Inosuke desarroll?? un agudo sentido del tacto, capaz de reconocer hasta la menor vibraci??n en el aire y as?? poder detectar tanto a enemigos como aliados. Adem??s, Inosuke posee un control completo de su propio cuerpo, pudiendo dislocarse las articulaciones para ejecutar ataques m??s efectivos y moverse entre espacios reducidos, as?? como tambi??n mover sus ??rganos vitales a voluntad, para evitar que estos sean da??ados por ataques enemigos.</div>`
    } else if (personaje == "Naofumi Iwatani") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NaofumiIwatani.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Naofumi Iwatani fue invocado a otro mundo, en el que se convierte en uno de los 4 h??roes legendarios: el H??roe del Escudo. Aunque inicia en este mundo lleno de esperanza e inocencia, pierde su credibilidad como h??roe luego de ser culpado de cr??menes que no cometi??, y se vuelve as?? desconfiado, c??nico y grosero con otros. Preparado para recibir una traici??n de parte de cualquiera, decide vivir solamente para derrotar a las olas de calamidad y que lo devuelvan finalmente al mundo del que proviene. Es hasta que conoce a Raphtalia que su personalidad vuelve, aunque sea en parte, a ser lo que era; a??n desconfiado, pero mostr??ndose amable con ella y con la gente que necesita su ayuda. Sus habilidades curativas y la forma de su compa??era Filo le ganan el nombre del "Santo del Dios P??jaro".</div>`
    } else if (personaje == "Raphtalia") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Raphtalia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Raphtalia es una Semi-Humana tipo mapache y la primera miembro del equipo del H??roe del Escudo, luego de que ??l la adquiere como esclava para que se convierta en la fuerza de ataque de su equipo, ya que ??l no pod??a empu??ar ning??n arma. Raphtalia era inicialmente muy t??mida y temerosa como resultado de su condici??n de esclavitud y otros eventos traum??ticos sufridos en su pasado, pero logra superar su trauma para ayudar a Naofumi a vencer a las Olas de la Calamidad y que nadie m??s sufra lo que sufri?? ella. Raphtalia trata a las dem??s personas con respeto y, aunque es gentil por naturaleza, tambi??n puede enojarse mucho al presenciar injusticias. Adem??s, al viajar a otro mundo, fue escogida por un arma vasalla, convirti??ndose en la Hero??na de la Katana.</div>`
    } else if (personaje == "Filo") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Filo.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Filo es una Filolial nacida de un huevo de monstruo que Naofumi le compr?? a junto a Raphtalia a un comerciante de esclavos. Se convierte en una reina Filolial gracias a su asociaci??n con el H??roe del Escudo y al reconocimiento de la anterior reina Filolial, Fitoria. Filo puede cambiar entre su forma de Filolial, una criatura con forma de lechuza y m??s grande que un avestruz, y su forma humana, que tiene la apariencia de una ni??a con alas en la espalda. Su personalidad es la de una peque??a mimada, a veces un tanto caprichosa, pero emp??tica e inocente. Aunque no puede volar, su fuerza le permite correr a grandes velocidades e incluso tirar del carro que llevaba al equipo del H??roe del Escudo y sus mercanc??as.</div>`
    } else if (personaje == "Itadori Yuji") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.YujiItadori.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Itadori es un estudiante de primer a??o del Colegio T??cnico de Magia Metropolitana de Tokio y recipiente del Rey de las Maldiciones, Sukuna, luego de ingerir uno de sus dedos y convertirse en su recipiente. A partir de entonces, Itadori tiene la misi??n de encontrar los restos de Sukuna que se encuentran esparcidos por todo Jap??n e ingerirlos, para destruir para siempre al Rey de las Maldiciones. Aunque pose??a una fuerza f??sica incre??ble, no ten??a inter??s por ning??n deporte, y sol??a pasar gran parte de su tiempo en el Club de Ocultismo. Itadori es una persona honesta, amigable y con la voluntad de sacrificarse por los dem??s, provocada por las ??ltimas palabras de su abuelo, que le pide que siempre ayude a los dem??s.</div>`
    } else if (personaje == "Megumi Fushiguro") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MegumiFushiguro.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Megumi es un estudiante de primer a??o del Colegio T??cnico de Magia Metropolitana de Tokio, y compa??ero de Yuji Itadori y Nobara Kugisaki. Como miembro de sangre de uno de los tres grandes clanes, naci?? con el talento innato de hacer uso de la T??cnica de Sombras de Diez Tipos, que le permiten invocar shikigamis. Megumi suele ser un joven bastante tranquilo, serio y reservado. Aunque aparenta ser estoico y calculador, Megumi desea ayudar a las personas que considera buenas o amables. Cree que el mundo es injusto y que un cham??n es una herramienta para garantizar que las personas amables tengan una oportunidad de vivir.</div>`
    } else if (personaje == "Nobara Kugisaki") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NobaraKugisaki.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Nobara es una estudiante de primer a??o del Colegio T??cnico de Magia Metropolitana de Tokio, y compa??era de Yuji Itadori y Megumi Fushiguro. Es una joven apasionada, extremadamente expresiva y honesta sobre sus sentimientos. Ella tiene un alto sentido del deber como hechicera jujutsu, es una luchadora orgullosa y sabe lo que es importante para ella: aunque muestra inter??s en todo lo relacionado con el mundo del modelaje y las compras, est?? dispuesta a abandonar todo s?? eso ayuda en salvar a otros. Su T??cnica de Mu??eco de Paja consiste en canalizar su energ??a maldita a trav??s de un mu??eco de paja para compartir el da??o entre su mu??eco de paja y su objetivo. Para usarla, Nobara utiliza un martillo y clavos de metal, en los que infunde su energ??a maldita.</div>`
    } else if (personaje == "Eren Jaeger") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ErenJaeger.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Eren decide entrar en la milicia tras haber presenciado la aniquilaci??n de su pueblo y la muerte de su madre a manos de los titanes, por lo que guarda una venganza personal hacia ellos. Desde ni??o, Eren siempre ha sido una persona determinada, de fuertes ideales y con un gran sentido de la justicia. Eren admiraba bastante a los reclutas y les consideraba "h??roes" por sus grandes haza??as incluso si estos no sal??an exitosos de sus expediciones. Tras haber encontrado los secretos ocultos en el s??tano de su padre, Eren se enter?? del origen de los titanes y de la verdadera historia del mundo, descubriendo de esa forma qu?? es su verdadero enemigo y tomando el objetivo de eliminar a aquella amenaza para finalmente poder hallar la libertad. Eren es el ??ltimo portador del Tit??n de Ataque, lo que le permite transformarse en un tit??n de 15 metros a voluntad, siempre que tenga suficiente energ??a para hacerlo.</div>`
    } else if (personaje == "Mikasa Ackerman") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.MikasaAckerman.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Mikasa es la hermana adoptiva de Eren Jaeger y, junto con Armin, se une al Cuerpo de Exploraci??n para ayudar a Eren a retomar la Muralla Mar??a. Mikasa es f??sicamente fuerte y de personalidad bastante reservada. Sin embargo, lo da todo por las personas que le importan, ya que las ve como si fueran su familia. Tiene un fuerte sentido de la justicia, pero siempre seguir?? a Eren e intentar?? mantenerlo a salvo. Adem??s de su gran fuerza, ella tiene una prodigiosa habilidad con el equipo de Maniobras 3D, pudiendo tomar f??cilmente a los titanes con rapidez y eficiencia. Esto ha dado lugar a que se le haya reconocido como una genio militar y que tiene el "valor de cien soldados rasos".</div>`
    } else if (personaje == "Armin Arlert") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.ArminArlert.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Armin es un amigo de la infancia de Eren Jaeger y Mikasa Ackerman. Armin era muy t??mido cuando era ni??o, y junto al hecho de que era f??sicamente d??bil, a menudo terminaba como un blanco f??cil para los matones locales. Era tan t??mido que ??l se negaba a luchar, manteniendo su opini??n sin usar la violencia y necesitando la ayuda de Eren y Mikasa para que lo protegieran. Al crecer, aunque f??sicamente segu??a siendo m??s d??bil que el resto de sus compa??eros, demostr?? una gran inteligencia a trav??s de su capacidad estrat??gica y soluciones r??pidas. Adem??s, Armin es una persona leal y est?? dispuesto a ponerse en peligro para defender a sus amigos.</div>`
    } else if (personaje == "Natsu Dragneel") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NatsuDragneel.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Natsu es hijo adoptivo del Drag??n de fuego Igneel y miembro del gremio Fairy Tail. Tiene un car??cter temerario, y a pesar de sus constantes peleas con los dem??s miembros del gremio, los aprecia mucho. Su debilidad son los transportes: cada vez que sube a un transporte se marea, ya sea un barco, tren, carro o incluso una persona. S??lo cuando Happy, su amigo Exceed, lo lleva de un lugar a otro no sufre de estos mareos, porque ??l considera a Happy un amigo. Sus t??cnicas utilizan magia Dragon Slayer de fuego.</div>`
    } else if (personaje == "Lucy Heartfilia") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.LucyHeartfilia.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Lucy es una maga de Esp??ritus Celestiales y una nueva miembro del Gremio Fairy Tail. Es una de las magas m??s cuerdas del gremio, pregunt??ndose la primera vez que entr?? si habr??a alg??n mago serio por all??. A pesar de su actitud cobarde, no tiene problemas con la lucha y con hacer frente felizmente a los peligros, aun si termina herida, por sus compa??eros del gremio. Aunque sus poderes no son tan abrumadores como los de sus compa??eros de equipo, Lucy ha probado ser una luchadora muy capaz por ella misma, usando su gran inteligencia a su favor.</div>`
    } else if (personaje == "Gray Fullbuster") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.GrayFullbuster.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Gray es un miembro del gremio Fairy Tail, dentro del cual generalmente hace equipo con Natsu Dragneel, Lucy Heartfilia, Erza Scarlet y Happy. Tiene una personalidad relajada, pero a menudo puede ser serio cuando el momento lo requiere. ??l y Natsu tienen una rivalidad amistosa, y a menudo se los puede ver luchando entre s?? verbal o f??sicamente. Su poder radica en su uso de magia de Hielo.</div>`
    } else if (personaje == "Asta") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Asta.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Asta nunca desarroll?? ning??n tipo de poder m??gico, pero no dej?? que esto socavara su determinaci??n por convertirse en Rey Mago y se esforz?? diariamente por entrenar su cuerpo f??sico. Aunque inicialmente no recibe un grimorio, en un misterios episodio un grimorio de 5 hojas aparece ante ??l y le permite retirar de ??l una espada que puede "cortar" la magia. En el examen de caballeros m??gicos, ning??n escuadr??n conf??a en su poder desconocido y en su nula capacidad m??gica, pero su fuerza f??sica, el poder de la antimagia y su valent??a impresionan a Yami Sukehiro, el capit??n de los Toros Negros, la orden para marginados donde comienza su carrera como caballero m??gico.</div>`
    } else if (personaje == "Yuno") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.Yuno.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Con talento con la magia desde su nacimiento, Yuno comienza su carrera como caballero m??gico en la casa m??s prestigiosa: "Amanecer Dorado". Si bien es discriminado por su origen plebeyo, su determinaci??n por convertirse en el Rey Mago lo llevan a pulir a??n m??s sus habilidades m??gicas, incluso a niveles superiores a los de la realeza. Adem??s de sus propias capacidades, Yuno fue elegido por el esp??ritu de viento, Sylph, que le otogar?? su poder en batalla.</div>`
    } else if (personaje == "Noelle Silva") {
        fotoYDescripcionPersonaje = `<img id="imagen.personaje" src='img\\personaje.NoelleSilva.jpg' alt="imagen.personaje.resultado">
        <div id="descripcion.personaje">Noelle es miembro de la nobleza pero se uni?? al escuadr??n de los "Toros Negros", la casa m??s marginada de caballeros m??gicos, debido a su falta de control m??gico. Como podr??a esperarse de la nobleza, su personalidad es naturalmente engre??da, pero su tiempo con los Toros Negros va a ablandar su car??cter, y tambi??n mejorar su t??cnica de control de mana. Su elemento m??gico es el agua, lo que tambi??n refleja su flexibilidad y dinamismo.</div>`
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
        alert(`Saludos ${nombreCompleto}: ??Muchas gracias por enviar su mensaje! Es muy valioso para nosotros.`);
    }
};

//LOGIN & SIGNUP
/*
const d = document

export default function loginContainerValidations(){

    const $form = d.querySelector(".login-container");
    $inputs = d.querySelectorAll(".login-container [required]");

    console.log($inputs);

    $inputs.forEach((input)=>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add(".login-container", "none");
        input.insertAdjacentElement("afterend",$span);

    });

    d.addEventListener("keyup", (e) =>{
        if(e.target.matches(".login-container [required]")){
            let $input = e.target;
                pattern = $input.pattern || $input.dataset.pattern;
            
            //console.log($input, pattern);

            if(pattern && $input.value !==""){
                //console.log("El input tiene patr??n");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementsByClassName($input.name).classList.add("is-active")
                : d.getElementsByClassName($input.name).classList.remove("is-active");
            }

            if(!pattern){
                //console.log("El input no tiene patr??n");
                return $input.value ===""
                ? d.getElementsByClassName($input.name).classList.add("is-active")
                : d.getElementsByClassName($input.name).classList.remove("is-active");
            }
        }
    })

}*/

// POKEDEX

const pokedexContainer=document.getElementById('pokedex-main-container');

if (pokedexContainer!=null){
    for (let i=1;i<=20;i++){
        crearPokedex(i)
    }
    
    async function crearPokedex(id){
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json());
    
        pokedexContainer.innerHTML=pokedexContainer.innerHTML+`
        <div class="pokedex-card">
            <div class="pokedex-img">
                <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
            <div class="pokedex-text">
                <h3>${data.name}</h3>
                <p>Tipo: ${data.types[0].type.name}</p>
            </div>
        </div>
        `;
    }
}