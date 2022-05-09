class Reloj {
    constructor({contenedor_reloj, hora, minuto, segundo}){
        this.contenedor_reloj = document.querySelector(contenedor_reloj)
        this.aguja_hora = document.querySelector(hora)
        this.aguja_minuto = document.querySelector(minuto)
        this.aguja_segundo = document.querySelector(segundo)   
        this.sonidoCampana = 'glass-water-1.wav'	
        this.sonidoParaCadaHora = null 		
    }
    init(){
        this.aguja_segundo.addEventListener('animationiteration', ()=>{
            // Opcional - ejecutar cada segundo
            // Ejemplo: sonido para cambio de segundos
        })
        
        setInterval(()=>{
            let Reloj = new Date();
            
            let sethora = Reloj.getHours();
            this.aguja_hora.style.cssText = 'transform: rotate('+(sethora*30)+'deg) !important'
            this.aguja_hora.title = sethora%12

            let setminuto = Reloj.getMinutes();
            this.aguja_minuto.style.cssText = 'transform: rotate('+(setminuto*6)+'deg) !important;'
            this.aguja_minuto.title = setminuto

            let setsegundo = Reloj.getSeconds();
            this.aguja_segundo.style.cssText = 'transform: rotate('+(setsegundo*6)+'deg) !important'  
            this.aguja_segundo.title = setsegundo

            this.ejecutarSonido(sethora)
            if( this.sonidoParaCadaHora == null || this.sonidoParaCadaHora != sethora%12 ){
                this.sonidoParaCadaHora = sethora%12	
            }
        }, 100)					
    }
    crearPuntosDeIndicacion(){
        for(let i=0;i<=60;i++){
            let s = document.createElement('div')
            s.classList.add('punto_indicacion_minuto')
            s.classList.add('_'+i)
            s.style.transform = 'rotate('+(i*6-90)+'deg)'	    		
            this.contenedor_reloj.appendChild(s)
        }    		
    }
    establecerNumerosEnPuntosDeIndicacion(){
        let punto = document.querySelectorAll('.punto_indicacion_minuto')
        for(let i=0;i<=60;i+=5){
            punto[i].classList.add('min')
            punto[5].classList.add('min5')
            punto[10].classList.add('min10')
            punto[15].classList.add('min15')
            punto[45].classList.add('min45')
            punto[50].classList.add('min50')		
            punto[55].classList.add('min55')
            punto[i].setAttribute('data-hora', i==60?'0':i)
        }    		
    }
    ejecutarSonido(e){
        if( this.sonidoParaCadaHora != null && this.sonidoParaCadaHora != e%12 ) {
            // Permitir audio
            let s = new Audio(this.sonidoCampana)
            s.play()
        }  		
    }
}

let reloj = new Reloj({
    contenedor_reloj: "#reloj", 
    hora: "#reloj #hora", 
    minuto: "#reloj #minuto", 
    segundo: "#reloj #segundo"
})

reloj.init()
reloj.crearPuntosDeIndicacion()
reloj.establecerNumerosEnPuntosDeIndicacion()