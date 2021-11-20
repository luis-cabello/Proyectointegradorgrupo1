











            //Validar Formularios// 
            let formulario = document.querySelector('form');
            let inputfield = document.querySelector('.search');
            
            
        
            formulario.addEventListener('submit', function (evento) {
                evento.preventDefault();
                console.log("no se envio")
        
                if (inputfield.value =="") {
                    alert("Ingrese al menos 3 terminos")
                } else if (inputfield.value.length < 3) {
                    confirm("no ha ingresado ningun termino, desea continuar?")
                } else {
                    this.submit();
                }
            })