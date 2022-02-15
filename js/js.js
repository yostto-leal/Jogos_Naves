

function start() { // Inicio da funcão start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais vari�veis do jogo

    var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }

        jogo.pressionou = [];

        //Verifica se o usu�rio pressionou alguma tecla	
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });
    
	
	var jogo = {}
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
 	 movefundo();
     movejogador();
	
	} // Fim da fun��o loop()

    //Fun��o que movimenta o fundo do jogo
	
	function movefundo() {
	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
        } // fim da fun��o movefundo()


        function movejogador() {
	
            if (jogo.pressionou[TECLA.W]) {
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo-10);
            
            }
            
            if (jogo.pressionou[TECLA.S]) {
                
                var topo = parseInt($("#jogador").css("top"));
                $("#jogador").css("top",topo+10);	
            }
            
            if (jogo.pressionou[TECLA.D]) {
                
                //Chama fun��o Disparo	
            }
        
            } // fim da fun��o movejogador()
    


} // Fim da funcão start
