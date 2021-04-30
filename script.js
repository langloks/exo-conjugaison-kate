const randomQuestion = document.getElementById('random-question');
const answer = document.getElementById('answer');

let check = document.getElementById('check');

const pronoms = ["'je'", "'tu'", "'il'", "'elle'", "'nous'", "'vous'", "'ils'", "'elles'"];
const terminaisonEr = ["e", "es", "e", "e", "ons", "ez", "ent","ent"];
const terminaisonIr = ["is", "is", "it", "it", "issons", "issez", "issent","issent"];
const terminaisonRe = ["s", "s", "", "", "ons", "ez", "ent","ent"];
const groupes = ["'first group'", "'second group'", "'third group'"];

function randomIndex (list) {
   const index = Math.floor(Math.random() * list.length)
 return  index;
}

    const randomPronom = randomIndex(pronoms);
    const choosenPronom = pronoms[randomPronom];
    const choosenGroupe = groupes[randomIndex(groupes)];
    randomQuestion.innerHTML = "conjugate " + "<span>"+choosenPronom +"</span>" +" with " + "<span>"+choosenGroupe+"</span>";
    const termEr = terminaisonEr[randomPronom];
    const termIr = terminaisonIr[randomPronom];
    const termRe = terminaisonRe[randomPronom];


function checkAnswer (){
    if (choosenGroupe == "'first group'" && answer.value == termEr) {
        check.innerText = "Bravoooooo";
            }
            else if (choosenGroupe == "'second group'" && answer.value == termIr) {
                check.innerText = "Bravoooooo";
                    }
                    else if (choosenGroupe == "'third group'" && answer.value == termRe ) {
                        check.innerText = "Bravoooooo";
                            }
                            else {
                                check.innerText = "Nope";
                            }
}

answer.style.out