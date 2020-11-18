let num = 0;


function neuesBild() {

    // Neue Zufallszahl bestimmen

    num = Math.floor(Math.random() * 6 + 1);

    
        switch (num) {
            case 1: document.getElementById('erg').src = "img/unnamed.jpg";
                break;

            case 2: document.getElementById('erg').src = "img/battle-1846807_1920.jpg";
                break;

            case 3: document.getElementById('erg').src = "img/schoko.jpg";
                break;

            case 4: document.getElementById('erg').src = "img/pexels-rene-asmussen-25755.jpg";
                break;

            case 5: document.getElementById('erg').src = "img/puffi.jpg";
                break;

            /*case 6: document.getElementById('erg').src = "https://www.youtube.com/embed/?v=8kQ5V6L4ou4"
                break;*/
        }
    }
