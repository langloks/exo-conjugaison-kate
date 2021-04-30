const randomQuestion = document.getElementById('random-question');
const answer = document.getElementById('answer');
const study = document.getElementById('study');

let check = document.getElementById('check');

const pronoms = ["'je'", "'tu'", "'il'", "'elle'", "'nous'", "'vous'", "'ils'", "'elles'"];
const terminaisonEr = ["e", "es", "e", "e", "ons", "ez", "ent","ent"];
const terminaisonIr = ["is", "is", "it", "it", "issons", "issez", "issent","issent"];
const terminaisonRe = ["s", "s", "", "", "ons", "ez", "ent","ent"];
const groupes = ["'first group'", "'second group'", "'third group'"];
const responseBad = ["nononononono", "Mais kate c'est quoi ca ??!", "tu es NUL", "you suck", "no food for you tonight", "aie aie aie"];
const responseGood = ["bravooo", "Tu es trop forte", "you the best!", "you awesome dou!", "so good....", "perfection"];
function randomIndex (list) {
   const index = Math.floor(Math.random() * list.length)
 return  index;
}

study.style.display = "table";

    const randomPronom = randomIndex(pronoms);
    const choosenPronom = pronoms[randomPronom];
    const choosenGroupe = groupes[randomIndex(groupes)];
    randomQuestion.innerHTML = "conjugate " + "<span>"+choosenPronom +"</span>" +" with " + "<span>"+choosenGroupe+"</span>";
    const termEr = terminaisonEr[randomPronom];
    const termIr = terminaisonIr[randomPronom];
    const termRe = terminaisonRe[randomPronom];
const good = responseGood[randomIndex(responseGood)];
const bad = responseBad[randomIndex(responseBad)];
console.log()

function checkAnswer (){
    if (choosenGroupe == "'first group'" && answer.value == termEr) {
        check.innerText = good;
            }
            else if (choosenGroupe == "'second group'" && answer.value == termIr) {
                check.innerText = good;
                    }
                    else if (choosenGroupe == "'third group'" && answer.value == termRe ) {
                        check.innerText = good;
                            }
                            else {
                                check.innerHTML = bad + " you need to study!";
study.style.display = "table";
                            }
}

