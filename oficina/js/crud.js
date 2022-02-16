//inputs tela contato

let nameForm = document.getElementById('ipt-nome');
let emailForm = document.getElementById('ipt-email');
let telephoneForm = document.getElementById('ipt-telefone');
let messageForm = document.getElementById('mensagem');
let contactTimeCourse = document.getElementById('slc-horario');

//inputs tela adm
let contactNameSearch = document.getElementById('iptPesquisar-adm');
let searchIndex = '';
let nameFormAdm = document.getElementById('pNome-adm');
let emailFormAdm = document.getElementById('pEmail-adm');
let telephoneFormAdm = document.getElementById('pTelefone-adm');
let messageFormAdm = document.getElementById('textMensagem-adm');
let contactTimeCourseAdm = document.getElementById('pPeriodo-adm');
let contactEmailCheckAdm = document.getElementById('pEmailCheck-adm');
let contactTypeSelectedAdm =  document.getElementById('pTipoContato-adm');


//dados do navegador
let nameFormArray = [];
let emailFormArray = [];
let telephoneFormArray = [];
let messageFormArray = [];

let contactTypeSelectedArray = [];

let contactTimeCourseArray = [];
let contactEmailCheckArray = [];

//funçao que guarda os dados do usuário

function storeUserData(){
        let contactEmailCheck = document.querySelector('#checkEmail').checked;
        let contactTypeSelected =  document.querySelector('input[type=radio][name=contato]:checked').value;

        // Pega LocalStorage  e armazena
        nameFormArray = JSON.parse(localStorage.getItem("user_name"));
        emailFormArray = JSON.parse(localStorage.getItem("user_email"));
        telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
        messageFormArray = JSON.parse(localStorage.getItem("user_msg"));

        contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));

        contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
        contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));
    
      // Compara se o  LocalStorage é vazio  
      if (nameFormArray == null) {
    
        // recria os vetores 
        nameFormArray = [];
        emailFormArray = [];
        telephoneFormArray = [];
        messageFormArray = [];

        contactTypeSelectedArray = [];

        contactTimeCourseArray = [];
        contactEmailCheckArray = [];
    
        // Adiciona os valores dos inputs 
        nameFormArray.push(nameForm.value);
        emailFormArray.push(emailForm.value);
        telephoneFormArray.push(telephoneForm.value);
        messageFormArray.push(messageForm.value);
        contactTypeSelectedArray.push(contactTypeSelected);
        contactTimeCourseArray.push(contactTimeCourse.value);
        contactEmailCheckArray.push(contactEmailCheck);
    
        // Joga para o LocalStorage 
        localStorage.setItem('user_name', JSON.stringify(nameFormArray));
        localStorage.setItem('user_email', JSON.stringify(emailFormArray));
        localStorage.setItem('user_tel', JSON.stringify(telephoneFormArray));
        localStorage.setItem('user_msg', JSON.stringify(messageFormArray));
        localStorage.setItem('user_contactType', JSON.stringify(contactTypeSelectedArray));
        localStorage.setItem('user_timeCourse', JSON.stringify(contactTimeCourseArray));
        localStorage.setItem('user_emailCheck', JSON.stringify(contactEmailCheckArray));
      
      } else {
    
        // adiciona os valores dos inputs 
        nameFormArray.push(nameForm.value);
        emailFormArray.push(emailForm.value);
        telephoneFormArray.push(telephoneForm.value);
        messageFormArray.push(messageForm.value);
        contactTypeSelectedArray.push(contactTypeSelected);
        contactTimeCourseArray.push(contactTimeCourse.value);
        contactEmailCheckArray.push(contactEmailCheck);
    
        // Joga para o LocalStorage 
        localStorage.setItem('user_name', JSON.stringify(nameFormArray));
        localStorage.setItem('user_email', JSON.stringify(emailFormArray));
        localStorage.setItem('user_tel', JSON.stringify(telephoneFormArray));
        localStorage.setItem('user_msg', JSON.stringify(messageFormArray));
        localStorage.setItem('user_contactType', JSON.stringify(contactTypeSelectedArray));
        localStorage.setItem('user_timeCourse', JSON.stringify(contactTimeCourseArray));
        localStorage.setItem('user_emailCheck', JSON.stringify(contactEmailCheckArray));
    
      }
    
        alert("Seu contato foi cadastrado com sucesso!");
        window.location.href="index.html"
    
}

var el_down = document.getElementById("GFG_DOWN");
var inputF = document.getElementById("id1");
  
function addValueToHTML() {
    nameForm.value = "textValue";
    emailForm.value = "textValue";
    telephoneForm.value = "textValue";
    messageForm.value = "textValue";
    contactTimeCourse.value = "textValue";
    contactEmailCheck.value = "textValue";
    contactTypeSelected.value =  "textValue";
    nameFormAdm.innerHTML = 
            "'" + nameForm.value + "'";
}





//apresenta os usuarios na adm

function Listar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nameFormArray = JSON.parse(localStorage.getItem("user_name"));
    emailFormArray = JSON.parse(localStorage.getItem("user_email"));
    telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
    messageFormArray = JSON.parse(localStorage.getItem("user_msg"));

    contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));

    contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
    contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));

    // Cria uma variável de string vazia para armazenar os dados da lista
    let listData = '';

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nameFormArray.length; i++){

      // Armazena na variável lista, os dados dos vetores 
      listData = listData + nameFormArray[i] + " - " + senhas[i] + "<br>"

    }

    // Mostra a lista na div centro
    document.getElementById("baixo").innerHTML = lista

}

function Excluir(){

     // Pega valores do LocalStorage (se tiver) e armazena
     nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
     senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

    // Cria uma variável para armazenar a posição dos dados a serem excluídos 
    let posicaoExcluir

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

      // Compara o valor do input de exclusão com o valor da posição atual do vetor
      if(nomeExcluir.value == nomes[i]){

        // Se existir um valor igual, armazena a posição
        posicaoExcluir = i

        // Utiliza a posição armazenada para excluir os dados
        nomes.splice(posicaoExcluir, 1)
        senhas.splice(posicaoExcluir, 1)

        // Mostra mensagem de dados excluídos
        alert("Usuário excluído!")

        // Joga para o LocalStorage novamente
        localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
        localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

      }

    }

    // Limpa dados do input excluir
    document.getElementById("excluir").value = ''

}

function Pesquisar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

    // Cria uma variável ou flag para indicar que encontrou
    let encontrou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

      // Compara o valor do input de exclusão com o valor da posição atual do vetor
      if(nomePesquisar.value == nomes[i]){

        // Se encontroum altera a variável flag para 1
        encontrou = 1
        // Armazena na variável posicaoPesquisar, a posição encontrada
        posicaoPesquisar = i
      
      }
    
    }

    // Se encontrou  
    if (encontrou == 1){

        // Pega os valores da posição onde foi encontrado e joga pra os inputs
        document.getElementById("userPesquisa").value = nomes[posicaoPesquisar]
        document.getElementById("passPesquisa").value = senhas[posicaoPesquisar] 

    // Senão
    }else{

        // Mostra mensagem de usuário inexistente
        alert("Usuário não encontrado!")
        // Limpa dados do input excluir
        document.getElementById("userPequisa").value = ''

    }  
    
}

function Atualizar(){

    // Remove os dados da posição encontrada e joga os novos dados
    nomes.splice(posicaoPesquisar, 1, nomePesquisar.value)
    senhas.splice(posicaoPesquisar, 1, senhaPesquisar.value)
        
    // Joga para o LocalStorage o vetor atualizado
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

    // Mensagem de dados atualizados
    alert("Dados atualizados!")

}