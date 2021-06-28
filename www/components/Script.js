var input;
$(document).on('click','#start', function(){
  $('#resposta').html('<input type="text" class="form-control" id="cidade" readonly>');
  teste1();
  $('#apagar').html('<buttom class="btn col-4 botao" id="delete">APAGAR</buttom><buttom class="btn col-4 offset-4 botao" id="letra">_</buttom>');
});
$(document).on('click', '#letra', function(){ 
  var letra = $(this).html();
  var antes = $('#cidade').val();
  input = antes + letra;
  $('#cidade').val(input);
  navigator.notification.beep(1); 
});
$(document).on('click', '#delete', function limpar(){
  $('#cidade').val('');
});
function teste1(){
  $('#verifica').html('<buttom class="btn form-control botao" id="verificar1">RESPONDER</buttom>');
  $('#imagem').html('<img src="https://pedron.profrodolfo.com.br/licoes/Imagens/NovaIorque.png" class="img">');

  $('#botoes').html('<center><buttom class="btn botao" id="letra" value="N">N</buttom> <buttom class="btn botao" id="letra" value="W">W</buttom> <buttom class="btn botao" id="letra" value="H">H</buttom> <buttom class="btn botao" id="letra" value="V">V</buttom> <buttom class="btn botao" id="letra" value="T">T</buttom> <buttom class="btn botao" id="letra" value="A">A</buttom> <buttom class="btn botao" id="letra" value="Y">Y</buttom></center><br> <center><buttom class="btn botao" id="letra" value="I">I</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="R">R</buttom> <buttom class="btn botao" id="letra" value="Q">Q</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="E">E</buttom></center>');

  $(document).on('click','#verificar1', function(){
    if($('#cidade').val() == 'NOVA_IORQUE'){
      $('#cidade').val('');
      navigator.notification.alert("Você acertou!", null, "Parabéns", "Próximo");
      teste2();
    }
    else{
      $('#cidade').val('');
      navigator.vibrate(500);
    }
  });
}
function teste2(){
  $('#verifica').html('<buttom class="btn form-control botao" id="verificar2">RESPONDER</buttom>');
  $('#imagem').html('<img src="https://pedron.profrodolfo.com.br/licoes/Imagens/Paris.png" class="img">');

  $('#botoes').html('<center><buttom class="btn botao" id="letra" value="S">S</buttom> <buttom class="btn botao" id="letra" value="W">W</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="P">P</buttom> <buttom class="btn botao" id="letra" value="T">T</buttom> <buttom class="btn botao" id="letra" value="A">A</buttom> <buttom class="btn botao" id="letra" value="Y">Y</buttom></center><br> <center><buttom class="btn botao" id="letra" value="I">I</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="R">R</buttom> <buttom class="btn botao" id="letra" value="Q">Q</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="E">E</buttom></center>');

  $(document).on('click','#verificar2', function(){
    if($('#cidade').val() == 'PARIS'){
      $('#cidade').val('');
      navigator.notification.alert("Você acertou!", null, "Parabéns", "Próximo");
      teste3();
    }
    else{
      $('#cidade').val('');
      navigator.vibrate(500);
    }
  });
}
function teste3(){
  $('#verifica').html('<buttom class="btn form-control botao" id="verificar3">RESPONDER</buttom>');
  $('#imagem').html('<img src="https://pedron.profrodolfo.com.br/licoes/Imagens/Sydney.png" class="img">');

  $('#botoes').html('<center><buttom class="btn botao" id="letra" value="N">N</buttom> <buttom class="btn botao" id="letra" value="W">W</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="V">V</buttom> <buttom class="btn botao" id="letra"value="T">T</buttom> <buttom class="btn botao" id="letra" value="A">A</buttom> <buttom class="btn botao" id="letra" value="Y">Y</buttom></center><br> <center><buttom class="btn botao" id="letra" value="I">I</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="D">D</buttom> <buttom class="btn botao" id="letra" value="R">R</buttom> <buttom class="btn botao" id="letra" value="Q">Q</buttom> <buttom class="btn botao" id="letra" value="S">S</buttom> <buttom class="btn botao" id="letra" value="E">E</buttom></center>');

  $(document).on('click','#verificar3', function(){
    if($('#cidade').val() == 'SYDNEY'){
      $('#cidade').val('');
      navigator.notification.alert("Você acertou!", null, "Parabéns", "Próximo");
      teste4();
    }
    else{
      $('#cidade').val('');
      navigator.vibrate(500);
    }
  });
}
function teste4(){
  $('#verifica').html('<buttom class="btn form-control botao" id="verificar4">RESPONDER</buttom>');
  $('#imagem').html('<img src="https://pedron.profrodolfo.com.br/licoes/Imagens/Londres.png" class="img">');

  $('#botoes').html('<center><buttom class="btn botao" id="letra" value="N">N</buttom> <buttom class="btn botao" id="letra" value="W">W</buttom> <buttom class="btn botao" id="letra" value="S">S</buttom> <buttom class="btn botao" id="letra" value="V">V</buttom> <buttom class="btn botao" id="letra" value="N">N</buttom> <buttom class="btn botao" id="letra" value="A">A</buttom> <buttom class="btn botao" id="letra" value="L">L</buttom></center><br> <center><buttom class="btn botao" id="letra" value="I">I</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="R">R</buttom> <buttom class="btn botao" id="letra" value="D">D</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="E">E</buttom></center>');

  $(document).on('click','#verificar4', function(){
    if($('#cidade').val() == 'LONDRES'){
      $('#cidade').val('');
      navigator.notification.alert("Você acertou!", null, "Parabéns", "Próximo");
      teste5();
    }
    else{
      $('#cidade').val('');
      navigator.vibrate(500);
    }
  });
}
function teste5(){
  $('#verifica').html('<buttom class="btn form-control botao" id="verificar5">RESPONDER</buttom>');
  $('#imagem').html('<img src="https://pedron.profrodolfo.com.br/licoes/Imagens/Tokyo.png" class="img">');

  $('#botoes').html('<center><buttom class="btn botao" id="letra" value="N">N</buttom> <buttom class="btn botao" id="letra" value="W">W</buttom> <buttom class="btn botao" id="letra" value="O">O</buttom> <buttom class="btn botao" id="letra" value="V">V</buttom> <buttom class="btn botao" id="letra" value="T">T</buttom> <buttom class="btn botao" id="letra" value="A">A</buttom> <buttom class="btn botao" id="letra" value="Y">Y</buttom></center><br> <center><buttom class="btn botao" id="letra" value="I">I</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="K">K</buttom> <buttom class="btn botao" id="letra" value="R">R</buttom> <buttom class="btn botao" id="letra" value="Q">Q</buttom> <buttom class="btn botao" id="letra" value="U">U</buttom> <buttom class="btn botao" id="letra" value="E">E</buttom></center>');

  $(document).on('click','#verificar5', function(){
    if($('#cidade').val() == 'TOQUIO'){
      $('#cidade').val('');
      navigator.notification.alert("Você acertou!", null, "Parabéns", "Próximo");
      final();
    }
    else{
      $('#cidade').val('');
      navigator.vibrate(500);
    }
  });
}
function final(){
  $('#imagem').html('<h3>Você conseguiu!</h3>');
  $('#verifica').html('<buttom class="btn form-control botao" id="start">RECOMEÇAR</buttom>');
  $('#botoes').html('');
  $('#resposta').html('<p>Você conseguiu finalizar sua jornada! Mas não fique desanimado. Se desejar, pode recomeçar o jogo.</p>');
  $('#apagar').html('');
}