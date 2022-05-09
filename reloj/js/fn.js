    	/*
	window.onload = function(){
	    	let reloj = document.querySelector('#reloj')
	    	let hora = document.querySelector('#reloj #hora')
	    	let minuto = document.querySelector('#reloj #minuto')
	    	let segundo = document.querySelector('#reloj #segundo')
	    	
	    	for(let i=0;i<=60;i++){
	    		let s = document.createElement('div')
	    		s.classList.add('punto_indicacion_minuto')
	    		s.classList.add('_'+i)
	    		s.style.transform = 'rotate('+(i*6-90)+'deg)'	    		
	    		reloj.appendChild(s)
	    	}
	    	
	    	let punto = document.querySelectorAll('.punto_indicacion_minuto')
	    	for(let i=0;i<=60;i+=5){
	    		punto[i].classList.add('min')
	    		punto[5].classList.add('min5')
	    		punto[10].classList.add('min10')
	    		punto[15].classList.add('min15')
	    		punto[45].classList.add('min45')
			punto[55].classList.add('min55')
			punto[50].classList.add('min50')		
	    		punto[i].setAttribute('data-hora', i==60?'0':i)
	    	}
	    	
	    	var activarSonido = false
	    	function sonido(e){
	    		if(!activarSonido && e%5 == 0){
	    			let s = new Audio('glass-water-1.wav')
	    			s.play()
	    			activarSonido = true
	    		}
	    		if(activarSonido && e%5 != 0){
	    			activarSonido = false
	    		}
	    	}

    		setInterval(()=>{
	    		let Reloj = new Date();
	    		
	    		let sethora = Reloj.getHours();
	    		hora.style.cssText = 'transform: rotate('+(sethora*30)+'deg) !important'
	    		
	    		let setminuto = Reloj.getMinutes();
	    		minuto.style.cssText = 'transform: rotate('+(setminuto*6)+'deg) !important;'
	    		
	    		let setsegudo = Reloj.getSeconds();
	    		segundo.style.cssText = 'transform: rotate('+(setsegudo*6)+'deg) !important'  
	    		
	    		sonido(sethora)		
    		}, 1000)
	}
	*/