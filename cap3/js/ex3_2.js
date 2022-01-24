function calcWeight() {
    // cria referência aos elementos manipulados pela function
    var inName = document.getElementById("inName");
    var rdSexMasc = document.getElementById("rdSexMasc");
    var rdSexFem= document.getElementById("rdSexFem");
    var inHeight = document.getElementById("inHeight");
    var outIdealHeight = document.getElementById("outIdealHeight");
  
    // obtém o conteúdo dos campos de edição da página
    var name = inName.value;
    var sexMasc = rdSexMasc.checked;
    var sexFem = rdSexFem.checked;
    var height = Number(inHeight.value);
  
    // verifica se nome foi preenchido e sexo selecionado
    if (name == "" || (sexMasc == false && sexFem == false)) {
      alert("Please, inform the name and select a sex...");
      inName.focus();        // posiciona (joga o foco) no campo de edição inNome
      return;
    }
  
    // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if (height == 0 || isNaN(height)) {
      alert("Please, inform a correct height...");
      inHeight.focus();
      return;
    }
  
    // se masculino (significa se masculino == true)
    if (sexMasc) {
      var weight = 22 * Math.pow(height, 2);     // Math.pow eleva ao quadrado
    } else {
      var weight = 21 * Math.pow(height, 2);
    }
  
    // apresenta a resposta (altera o conteúdo da linha outResposta) 
    outIdealHeight.textContent = name + ": Your ideal weight " + weight.toFixed(3) + " kg";
  }
  // cria referência ao elemento btCalcular e registra evento associado a calcularPeso
  var btCalc= document.getElementById("btCalc");
  btCalc.addEventListener("click", calcWeight);


  function clearPage(){

    // reload page
    location.reload();

    // put focus in name field

      document.getElementById("inName").focus;

  }

  // create a reference to the button and logs an event associate to the function

  var btClear = document.getElementById("btClear");
    btClear.addEventListener("click", clearPage);
