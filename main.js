// @ts-check
let colors = ['#360808', '#193608', '#08362c', '#290d2d', 'rgb(8 45 54)'];
document.getElementById('body').style.backgroundImage = `linear-gradient(327deg, ${colors[Math.floor(Math.random() * colors.length)]}, #0e1438)`;

class loremIpsium {    
    constructor() {
        this.words = ['lorem', 'ipsium', 'do', 'tus', 'falke', 'l', 'korne', 'bolognestoni', 'fugal', 'marklor', 'pogno', 'du', 'flot', 'hue', 'plotsi',
                      'opniknipo', 'pukit', 'erli', 'wo', 'knu', 'far', 'go', 'qo', 'lori', 'ipsinem', 'guipsnem', 'tandem', 'poli', 'in', 'mu', 'l', 'l', 'e', 'e', 'e', 
                      'cursonimakatasar', 'polikgromoteksi', 'po', 'sni', 'snikis', 'polwe', 'inho', 'pugta', 'boli', 'mon', 'l', 'kronos', 'papapuya', 'ko', 'klo', 'umrop',
                      'quon', 'si', 'me', 'dorem', 'minrem', 'quem', 'stem', 'gen', 'paluquen', 'flopik', 'jo', 'no', 'yut', 'lup', 'loonye', 'fakoor', 'noni', 'bo', 'lo', 'e',
                      'wek', 'sek', 'mek', 'lek', 'o', 'k', 'po' ,'ander', 'anoi', 'aki', 'ap', 'ao', 'johen', 'manakuristan', 'manakar', 'morenim', 'demin', 'droponihuial',
                      'mukla', 'mw', 'catastronius', 'hen', 'pen', 'jen', 'ho', 'forne', 'gernile', 'porem', 'lorem', 'ipsium', 'squo', 'lo', 'le', 'a', 'o', 'poloquimirlat',
                      'sandrar', 'jonip', 'konip', 'lopip', 'sakenip', 'narenstit', 'falatit', 'dit', 'nit', 'pti', 'ali', 'li', 'pi', 'pu', 'mu', 'e', 'a', 'a', 'u', 'umklo',
                      'wenirak','yaosemi', 'huweyx', 'xenyx', 'qwart', 'kokeniasmov', 'kakolohi', 'waart', 'quoo', 'pars', 'pol', 'nol', 'ul', 'drinkonopix', 'iniuminolium',
                      'suonomix', 'sakoor', 'bashir', 'hez', 'zex', 'saxesexikl', 'po', 'lo', 'e', 'a', 'a', 'quomi', 'pars', 'pars', 'nol', 'waarty', 'oploi', 'opsagomes'];
                    

        this.numOfWords = Number(document.getElementsByTagName('input')[0].value);
        // this.numOfparagraphs = Number(document.getElementsByTagName('input')[1].value);
    }

    generatePhrase() {
        let phrase = '';
        const comma = Math.floor(Math.random() * this.numOfWords) + Math.floor(Math.random() * 10);
        for (let i = 0; i < this.numOfWords; i++) {
            if (i === 0) {
                let word = this.words[Math.floor(Math.random() * this.words.length)];
                phrase += (' ' + word.charAt(0).toUpperCase() + word.slice(1));
                phrase += ' ';
            } else if (i === (this.numOfWords - 1)) {
                phrase += (this.words[Math.floor(Math.random() * this.words.length)] + '.');
            } else {
                phrase += this.words[Math.floor(Math.random() * this.words.length)];
                if (i === comma) {
                    phrase += ', ';
                } else {
                    phrase += ' ';
                }
           }
        }
        return phrase;
    }

    generateParagraph() {
        let paragraph = '';

            for (let i = 0; i < this.numOfWords; i++) {
                paragraph += this.generatePhrase();
            }

        return paragraph;
    }
}

function insertIpsium() {
    let p = new loremIpsium();
    document.getElementById('container').innerHTML = '<p>' + p.generateParagraph() + '</p>';
}

// let copied = false;
// function copy() {
//     /* Get the text field */
//     var copyText = document.getElementById("copy");
//     if (copied){
//         copyText.innerHTML = 'Copy';
//         copied = false;
//     } else {
//         copyText.innerHTML = 'Copied!';
//         copied = true;
//     }
// }
document.getElementsByTagName('button')[0].onclick = insertIpsium;

