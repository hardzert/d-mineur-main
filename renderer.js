
const demineur = document.getElementById('demineur');
var grille = [];
var libre =0 ;
function create_grille(longueur,largeur,proba){
    
    console.log(document.getElementById('demineur').style);
    //  grid-template-columns: repeat(25, 1fr);
    // grid-template-rows: repeat(25, 1fr);


    document.getElementById('win').innerHTML = ""
    libre = 0;

    for(var x=0; x<grille.length; x++) {
        for (var y=0; y<grille[x].length; y++){
  
            let id = new Array(x,y);
            document.getElementById(id).remove();
               
        }
    }



  grille = new Array(longueur);
for (var x=0;x< grille.length ; x++){
    grille[x] = new Array(largeur);
    for (var y=0; y< grille[x].length; y++) {


if ( Math.random() < proba/100){
   
grille[x][y] = 0;
}

else {
    grille[x][y] = 1;
    libre++;
}

    }
}



for( x=0; x< grille.length; x++ ) {

    for (y=0; y < grille[x].length; y++) {
        if (grille[x][y] !=0) {
        if(x !=0) {
        if(grille[x-1][y] == 0){
            grille[x][y] = grille[x][y]+1
        } }

        if(x <grille.length-1) {
        if(grille[x+1][y] == 0){
            grille[x][y] = grille[x][y]+1
        } }

        if(y !=0) {
        if(grille[x][y-1] == 0){
            grille[x][y] = grille[x][y]+1
        }}

        if(y <grille[x].length-1) {
        if(grille[x][y+1] == 0){
            grille[x][y] = grille[x][y]+1
            
        } }
    }
    var id = [x,y];
    
    var carre = document.createElement('div');
    if (grille[x][y] > 0) {
    var statut = document.createTextNode( grille[x][y]-1);
    }
    else {

    }
    carre.style.gridColumn = x+1;
    carre.style.gridRow = y+1;
    carre.setAttribute('id', id);

    carre.style.gridRow = x+1;
    carre.style.gridColumn = y+1;

    carre.setAttribute('oncontextmenu','drapeau('+id+')')
    carre.setAttribute('onclick','reveal('+id+')');



    var statut = document.createTextNode("xxx");
    carre.appendChild(statut);

    demineur.appendChild(carre);
    }
}
}

function drapeau(x,y) {
   
    var statut = document.createTextNode("!");
    var drapeau = document.createElement('button');
    drapeau.appendChild(statut);
    drapeau.style.gridColumn = y+1;
    drapeau.style.gridRow = x+1;
    drapeau.setAttribute('name', x+'.'+y);
    drapeau.setAttribute('class', 'drapeau');

    drapeau.setAttribute('onclick', "document.getElementsByName("+x+'.'+y+")[0].remove()");
    demineur.appendChild(drapeau);

    

}


function reveal(x,y) {
  


    carre = document.getElementById(x+','+y)
    
    switch (grille[x][y]-1) {

        case -1:
            carre.innerHTML= "boom";
            console.log(document.getElementById(x+','+y))
            document.getElementById('win').innerHTML = "Tu as perdu"
            reveal_all()
            
                
        break;
    
        case 0:
            
            carre.style.backgroundColor="green";
            carre.innerHTML = 0;
            libre--;


            break
            case 1:
                carre.style.backgroundColor="yellow";
                carre.innerHTML = 1;
                libre--;

                break
            case 2:
                carre.style.backgroundColor="orange";
                carre.innerHTML = 2;
                libre--;

                break
            case 3:
                carre.style.backgroundColor="red";
                carre.innerHTML = 3;
                libre--;

                break
                case 4:
                    carre.style.backgroundColor="maroon";
                    carre.innerHTML = 4;
                    libre--;

                    break
    }
    if (libre ==0) {
        document.getElementById('win').innerHTML = "Tu as gagné"
        reveal_all()
    }
}

function reveal_all(){
    for(var x=0; x<grille.length; x++) {
        for (var y=0; y<grille[x].length; y++){
  
            carre = document.getElementById(x+","+y)
            
            // console.log(x,y,grille[x][y]-1)
            switch (grille[x][y]-1) {
        
                case -1:
                    carre.innerHTML= "boom";
                    carre.style.backgroundColor="white";

                break;
            
                case 0:
                    carre.style.backgroundColor="green";
                    carre.innerHTML = 0;
        
                    break
                    case 1:
                        carre.style.backgroundColor="yellow";
                        carre.innerHTML = 1;
        
                        break
                    case 2:
                        carre.style.backgroundColor="orange";
                        carre.innerHTML = 2;
        
                        break
                    case 3:
                        carre.style.backgroundColor="red";
                        carre.innerHTML = 3;
        
                        break
                        case 4:
                            carre.style.backgroundColor="maroon";
                            carre.innerHTML = 4;
        
                         break
            }
            if (typeof(document.getElementsByName(x+'.'+y)[0]) != "undefined") {
            document.getElementsByName(x+'.'+y)[0].remove()
            }
        }
    }
}

function customstart(){
    var x =  document.forms.custom.elements.longueur;
    x = parseInt(x.value);

    var y = document.forms.custom.elements.largeur;
    y = parseInt(y.value);

    var proba = document.forms.custom.elements.proba;
    proba = parseFloat(proba.value);

    console.log( x,y,proba)
    create_grille(x,y,proba)
}


window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);