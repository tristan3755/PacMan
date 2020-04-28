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
  
   y:1, 
   x:1,
  //direction de départ de pacman (haut :4 , bas : 2, gauche : 3, droite : 1)
   direction:1

 }


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
        blocPacman.style.gridColumn=pacman.x+1;
        blocPacman.style.gridRow=pacman.y+1;


document.getElementById('grillePacman').appendChild(blocPacman)



}



function deplacePacman(){

if(pacman.direction==1){
  pacman.x++
}

else if(pacman.direction==2){
pacman.y--
}

else if(pacman.direction==3){
pacman.x--
}

  else if(pacman.direction==4){
  pacman.y++
  }

   
  if(maGrille[pacman.y][pacman.x]==0){
    if(pacman.direction==1){
      pacman.x--
    }

    else if(pacman.direction==2){
      pacman.y++
      }


      else if(pacman.direction==3){
        pacman.x++
        }

        else if(pacman.direction==4){
          pacman.y--
          }
  }


  if(maGrille[pacman.y][pacman.x]==2){
 
    

  }





}






function refresh()
{
  
  deplacePacman()
  affichageGrille()
  affichePacman()
  setTimeout(refresh, 500)

}


refresh()

