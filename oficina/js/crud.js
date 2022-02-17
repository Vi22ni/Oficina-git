//inputs tela contato

let nameForm = document.getElementById('ipt-nome');
let emailForm = document.getElementById('ipt-email');
let telephoneForm = document.getElementById('ipt-telefone');
let messageForm = document.getElementById('mensagem');
let contactTimeCourse = document.getElementById('slc-horario');

//inputs tela adm
let contactNameSearch = document.getElementById('iptPesquisar-adm');
let searchIndex = '';
let nameFormAdm = document.getElementById('iptNome-adm');
let emailFormAdm = document.getElementById('iptEmail-adm');
let telephoneFormAdm = document.getElementById('iptTelefone-adm');
let messageFormAdm = document.getElementById('textMensagemEdit-adm');
let contactTimeCourseAdm = document.getElementById('slcEdit-horario');
let contactEmailCheckAdm = document.getElementById('checkEmailEdit-adm');
let contactTypeSelectedAdm =  document.getElementsByName('contato');


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
        var contactEmailCheck = document.querySelector('#checkEmail').checked;
        var contactTypeSelected =  document.querySelector('input[type=radio][name=contato]:checked').value;

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


var userNameIndex= 0;

function listUsers(){
    
    nameFormArray = JSON.parse(localStorage.getItem("user_name"));
  
    for(i=0; i < nameFormArray.length; i++){

      const nameList = document.querySelector('[data-list]');
      let userName = nameFormArray[i];
      userNameIndex = i;
      const nameListItem= document.createElement('li');
      nameListItem.classList.add('task');
      const nameListItemContent = `<div class='btnDrop-adm'><p id="btnNome-adm">${userName}</p>
      <button type="button" class="btnNomeOpcao-adm" id="btnDeletar-adm">X</button>
      <button type="button" class="btnNomeOpcao-adm" id="btnVer-adm">V</button>
      <button type="button" onclick='addAndEditValueToHTML(${userNameIndex})' class="btnNomeOpcao-adm" id="btnEditar-adm">E</button></div>`;

      nameListItem.innerHTML = nameListItemContent;
      nameList.appendChild(nameListItem);


    }

}

listUsers();

function addAndEditValueToHTML(indice) {
  nameFormArray = JSON.parse(localStorage.getItem("user_name"));
  emailFormArray = JSON.parse(localStorage.getItem("user_email"));
  telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
  messageFormArray = JSON.parse(localStorage.getItem("user_msg"));
  contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));
  contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
  contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));

  nameFormAdm.value = nameFormArray[indice];
  emailFormAdm.value = emailFormArray[indice];
  telephoneFormAdm.value = telephoneFormArray[indice];
  messageFormAdm.value= messageFormArray[indice];
  contactTimeCourseAdm.value= contactTimeCourseArray[indice];

  if(contactTypeSelectedArray[indice] == 'whatsapp'){
    let radioContactType =document.getElementById('radioEdit-whatsapp');
    radioContactType.checked = true;
  }else if( contactTypeSelectedArray[indice] == 'email'){
    let radioContactType =document.getElementById('radioEdit-email');
    radioContactType.checked = true;
  }else{
    let radioContactType =document.getElementById('radioEdit-telefone');
    radioContactType.checked = true;
  }


  if(contactEmailCheckArray[indice] === true){
    let checkboxContactEmail = document.getElementById('checkEmailEdit');
    checkboxContactEmail.checked = true;
  }else{
    let checkboxContactEmail = document.getElementById('checkEmailEdit');
    checkboxContactEmail.checked = false;
  }
}
