const options = document.getElementById('options');
const fontNameIn = document.getElementById('font-name-in');
const progressReport = document.getElementById('progressReport');


const fonts = ["Roboto", "Manrope", "Open Sans", "Baloo Bhaina 2", "Noto Sans JP", "Lato", "Roboto Condensed", "Montserrat", "Baloo Paaji 2", "Source Sans Pro", "Oswald", "Comic Neue", "Raleway", "Roboto Mono", "Poppins", "Noto Sans", "Roboto Slab", "Baloo Tamma 2", "Merriweather", "PT Sans", "Playfair Display", "Ubuntu", "Muli", "Open Sans Condensed", "PT Serif", "Girassol", "Lora", "Slabo 27px", "Nunito", "Work Sans", "Rubik", "Noto Serif", "Bangers", "Fira Sans", "Quicksand", "Titillium Web", "Mukta", "Nanum Gothic", "Noto Sans KR", "Heebo", "Noto Sans TC", "Nunito Sans", "Lexend Giga", "PT Sans Narrow", "Arimo", "Oxygen", "Yanone Kaffeesatz", "Dosis", "Barlow", "Anton", "Karla", "Baloo Tammudu 2", "Libre Baskerville", "Crimson Text", "Libre Franklin", "Inconsolata", "Josefin Sans", "Bitter", "Cabin", "Bebas Neue", "Hind", "Abel", "Amiri", "Fjalla One", "Lobster", "Dancing Script", "Hind Siliguri", "Source Code Pro", "Pacifico", "Exo 2", "Indie Flower", "Source Serif Pro", "Merriweather Sans", "Cairo", "Baloo Bhai 2", "Varela Round", "Arvo", "Teko", "Questrial", "Barlow Condensed", "IBM Plex Sans", "Shadows Into Light", "Asap", "Comfortaa", "Prompt", "Hind Madurai", "Kanit", "Abril Fatface", "Inter", "Overpass", "Amatic SC", "Archivo Narrow", "Acme", "EB Garamond", "Martel", "Zilla Slab", "Catamaran", "Fira Sans Condensed", "Righteous", "Bree Serif", "Exo", "Noto Sans SC", "Play", "Cormorant Garamond", "Spartan", "Signika", "Domine", "Assistant", "Rajdhani", "IBM Plex Serif", "PT Sans Caption", "Maven Pro", "Cinzel", "Ubuntu Condensed", "Patua One", "Caveat", "Permanent Marker", "Fredoka One", "Noto Serif JP", "Bahianita", "Crete Round", "Rokkitt", "Vollkorn", "Tajawal", "ABeeZee", "Francois One", "Special Elite", "Cuprum", "Satisfy", "Courgette", "Alegreya Sans", "Tinos", "Alfa Slab One", "Barlow Semi Condensed", "Alegreya", "Passion One", "Single Day", "Monda", "Viga", "Noticia Text", "Volkhov", "Lobster Two", "Cardo", "Nanum Myeongjo", "Gochi Hand", "Concert One", "Great Vibes", "Kalam", "Pathway Gothic One", "Archivo", "Frank Ruhl Libre", "Patrick Hand", "Kaushan Script", "Gotu", "Changa", "Archivo Black", "Quattrocento Sans", "Sacramento", "Ropa Sans", "News Cycle", "DM Sans", "Taviraj", "Yantramanav", "Old Standard TT", "Cantarell", "Gloria Hallelujah", "Didact Gothic", "Montserrat Alternates", "Hind Vadodara", "Fira Sans Extra Condensed", "Chivo", "Long Cang", "M PLUS 1p", "Russo One", "Orbitron", "Prata", "Cookie", "Asap Condensed", "Sarabun", "Sawarabi Mincho", "Istok Web", "Squada One", "Parisienne", "Luckiest Guy", "Poiret One", "Philosopher", "Josefin Slab", "Quattrocento", "Lalezar", "Inria Sans", "Ruda", "Sanchez", "Neucha", "Pragati Narrow", "Merienda", "Advent Pro", "Sigmar One", "BenchNine", "Handlee", "Neuton", "Ultra", "Economica", "Hind Guntur", "Playfair Display SC", "M PLUS Rounded 1c", "Gudea", "Arapey", "PT Mono", "Caladea", "Kreon", "Press Start 2P", "Vidaloka", "Hammersmith One", "Markazi Text", "Gentium Basic", "Monoton", "Marck Script", "Adamina", "Alice", "Alef", "Aclonica", "Spectral", "Basic", "Saira Semi Condensed", "Architects Daughter", "Glegoo", "Amaranth", "Noto Sans HK", "Unica One", "Actor", "Pontano Sans", "Audiowide", "Electrolize", "Quantico", "Tangerine", "Playball", "Yellowtail", "Karma", "Oleo Script", "Rock Salt", "Oxanium", "Bowlby One SC", "Cabin Condensed", "Khand", "Cormorant", "Nanum Gothic Coding", "El Messiri", "Coda", "Sarala", "Bad Script", "Staatliches", "Yeseva One", "Paytone One", "Mitr", "Gothic A1", "Pridi", "Julius Sans One", "Fugaz One", "Carter One", "Enriqueta", "Saira", "Unna", "Lusitana", "Homemade Apple", "Armata", "Khula", "Sawarabi Gothic", "Gentium Book Basic", "Do Hyeon", "Ramabhadra", "Allura", "Average", "Bellota", "Bellota Text", "Sorts Mill Goudy", "Covered By Your Grace", "Abhaya Libre", "Fauna One", "Allan", "Bevan", "Signika Negative", "Sriracha", "Damion", "Shadows Into Light Two", "ZCOOL XiaoWei", "Lilita One", "Rambla", "Baloo Chettan 2", "Yrsa", "Palanquin", "Cantata One", "Varela", "Black Ops One", "PT Serif Caption", "Spinnaker", "Scada", "Jura", "Alex Brush", "Lemonada", "Black Han Sans", "Krub", "Nanum Pen Script", "Sen", "Marcellus", "Arsenal", "Jaldi", "Pinyon Script", "Noto Serif SC", "Ubuntu Mono", "Lateef", "Saira Extra Condensed", "Sintony", "Reenie Beanie", "Boogaloo", "Rubik Mono One", "Encode Sans Condensed", "Forum", "Chewy", "Martel Sans", "Arima Madurai", "IBM Plex Mono", "Scheherazade", "Encode Sans", "Caveat Brush", "Cinzel Decorative", "Annie Use Your Telescope", "Share Tech Mono", "Chakra Petch", "Share", "Michroma", "Pangolin", "Gelasio", "DM Serif Display", "Nothing You Could Do", "Rufina", "Reem Kufi", "Mr Dafoe", "Antic", "Marmelad", "Rancho", "Mali", "DM Serif Text", "Tenor Sans", "Antic Slab", "Leckerli One", "Shrikhand", "Anonymous Pro", "Kelly Slab", "Alegreya Sans SC", "Biryani", "Berkshire Swash", "Cabin Sketch", "Eczar", "Antic Didone", "Noto Serif TC", "Overlock", "Candal", "Rasa", "Fredericka the Great", "Mukta Malar", "Saira Condensed", "VT323", "Aleo", "Mada", "Days One", "Six Caps", "Gruppo", "Capriola", "Bungee", "Itim", "Niconne", "Bai Jamjuree", "Bentham", "Arbutus Slab", "Suez One", "Viaoda Libre", "Marcellus SC", "Syncopate", "Overpass Mono", "Coustard", "Just Another Hand", "Italianno", "Mallanna", "Allerta", "Contrail One", "IM Fell Double Pica", "Aldrich", "Space Mono", "Allerta Stencil", "Fira Mono", "Trirong", "Cambay", "Racing Sans One", "Kosugi Maru", "Yesteryear", "Cousine", "Notable", "Nobile", "Caudex", "Oranienbaum", "Miriam Libre", "Pattaya"];
const baseUrl = "https://fonts.googleapis.com/css2";

// let fontSheet = document.createElement('link');
// fontSheet.href = baseUrl + "?family=Comic+Neue:wght@400;600&display=swap";
// fontSheet.rel = "stylesheet";
// document.body.appendChild(fontSheet);

// document.getElementById('test').style.fontFamily = "Comic Neue";

function substringMatchInArray(substring, array) {
    //...
    var results = [];
    array.forEach(string => {
        if (string.toLowerCase().indexOf(substring.toLowerCase()) !== -1) {
            results.push(string);
        }
    });
    return results;
}

/**
 * Assumption: every element of an array should contains substring;
 * 
 * @param {String} substring 
 * @param {Array} array 
 */
function rankOptions(substring, array) {
    substring = substring.toLowerCase();

    let inputRatio = [];
    let startPos = [];
    array.forEach(string => {
        string = string.toLowerCase();

        startPos.push(string.indexOf(substring) + 1);

        let stringLength_i = string.length;
        let re = new RegExp(substring, 'g');
        string = string.replace(re, '');
        let stringLength_f = string.length;
        let matchingLength = stringLength_i - stringLength_f;
        inputRatio.push(matchingLength/stringLength_i);
    });

    // rank of each corresponding element in and array
    let rank = inputRatio.map(function (ratio, index) {
        return ratio/startPos[index];
    })

    rankOptionObj = {};
    array.forEach(function (string, index) {
        if (rankOptionObj.hasOwnProperty(rank[index])) {
            rankOptionObj[rank[index]].push(string);
        } else {
            rankOptionObj[rank[index]] = [];
            rankOptionObj[rank[index]].push(string);
        }
    });

    // unique rank will not contain duplicate rank value;
    // since all the element with same rank in encaplsulated in rankOptionObj;
    uniqueRank = [];
    for (const key in rankOptionObj) {
        uniqueRank.push(parseFloat(key));
    }
    uniqueRank.sort((a, b) => b - a); // sort in descending order

    let rankedArray = [];

    uniqueRank.forEach(rank => {
        rankOptionObj[rank].forEach(function (string) {
            rankedArray.push(string);
        })
    });
    return rankedArray;
}

fontNameIn.addEventListener('input', function () {
    options.innerHTML = '';

    let matchingFonts = substringMatchInArray(fontNameIn.value, fonts);
    let rankedOptions = rankOptions(fontNameIn.value, matchingFonts);
    rankedOptions.forEach(function (font) {
        let option = document.createElement('div');
        option.innerText = font;
        option.style.cursor = 'pointer';
        option.addEventListener('click', function (event) {
            let selectedFont = event.target.innerText;
            console.log(selectedFont);

            if (document.getElementById('fs-' + selectedFont.toLowerCase().split(' ').join('-'))) {
                document.getElementById('text').style.fontFamily = "'" + selectedFont + "'";
            } else {
                let fontSheet = document.createElement('link');
                fontSheet.href = baseUrl + "?family=" + selectedFont.split(' ').join('+');
                fontSheet.rel = "stylesheet";
                fontSheet.addEventListener('load', function () {
                    progressReport.innerText = selectedFont + ': loaded';
                });
                fontSheet.id = 'fs-' + selectedFont.toLowerCase().split(' ').join('-');
                document.body.appendChild(fontSheet);
                progressReport.innerText = selectedFont + ': Loading...';
                document.getElementById('text').style.fontFamily = "'" + selectedFont + "'";
            }
        })
        options.appendChild(option);
    })
})

function name() {
    console.log('loaded');
    
}