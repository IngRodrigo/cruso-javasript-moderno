/**Agregar funciones a los objetos */
const reproductor={
    play:function(id){
        console.log(`Reproduciendo la cancion ${id}`)
    },
    pause:(id)=>{
        console.log(`Pausando la cancion ${id}`);
    }
}

reproductor.play(1);
reproductor.pause(2);