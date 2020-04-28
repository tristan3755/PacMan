let maGrille = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

let pacman = {
  
   y:2, 
   x:1,
  //direction de départ de pacman (haut :4 , bas : 2, gauche : 3, droite : 1)
   direction:1

 }

 let fantôme = {
  
  y:11, 
  x:9,
 //direction de départ de pacman (haut :4 , bas : 2, gauche : 3, droite : 1)
  direction:1

}


 let score = 0 


function affichageGrille(){

  document.getElementById('grillePacman').innerHTML= " "



for(let i in maGrille){

  for(let j in maGrille[i]){

    
    
    var monElem=document.createElement('div')
  

    if(maGrille[i][j]==0){
    
    monElem.classList.add("mur")
    
    }

    else if(maGrille[i][j]==1){
    
    monElem.classList.add("sol")
    
    }


   else if(maGrille[i][j]==2){
    
    monElem.classList.add("bonbon")
    
    }


        monElem.style.gridColumn=parseInt(j)+1;
        monElem.style.gridRow=parseInt(i)+1;
        document.getElementById('grillePacman').appendChild(monElem)

  }

 

}

}
function affichePacman(){


  let blocPacman = document.createElement('div');
        blocPacman.id='pacman';
        blocPacman.style.gridColumn=pacman.x;
        blocPacman.style.gridRow=pacman.y;


document.getElementById('grillePacman').appendChild(blocPacman)



}

function afficheScore(){

  document.getElementById('score').innerHTML= score

}



function deplacePacman(){

if(pacman.direction==1){
  pacman.x++
}

else if(pacman.direction==2){
pacman.y++
}

else if(pacman.direction==3){
pacman.x--
}

  else if(pacman.direction==4){
  pacman.y--
  }


  if(pacman.x>maGrille[0].length){

    pacman.x=1
  
  }

  if(pacman.x<1){

    pacman.x=maGrille[0].length
  
  }

   
  if(maGrille[pacman.y-1][pacman.x-1]==0){
    if(pacman.direction==1){
      pacman.x--
    }

    else if(pacman.direction==2){
      pacman.y--
      }


      else if(pacman.direction==3){
        pacman.x++
        }

        else if(pacman.direction==4){
          pacman.y++
          }
  }


 




  if(maGrille[pacman.y-1][pacman.x-1]==2){

    maGrille[pacman.y-1][pacman.x-1]=1
    score=score+1
 }


 



}

function appuieTouche(e){
console.log(e.key)

if(e.key=="z"){
pacman.direction=4
}

else if(e.key=="s"){
pacman.direction=2
}

else if(e.key=="q"){
  pacman.direction=3
  }
  

  else if(e.key=="d"){
    pacman.direction=1
    }

  }


function refresh()
{
  
  deplacePacman()
  affichageGrille()
  affichePacman()
  afficheScore()
  setTimeout(refresh, 500)

}


refresh()


document.body.addEventListener("keydown",appuieTouche)

