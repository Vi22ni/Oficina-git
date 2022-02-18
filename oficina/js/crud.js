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
      <button type="button" onclick= "deleteUser(${userNameIndex})" class="btnNomeOpcao-adm" id="btnDeletar-adm">X</button>
      <button type="button" onclick= "readAndUpdateCRUD(${userNameIndex}, 'read')" class="btnNomeOpcao-adm" id="btnVer-adm">V</button>
      <button type="button" onclick= "readAndUpdateCRUD(${userNameIndex}, 'update')" class="btnNomeOpcao-adm" id="btnEditar-adm">E</button></div>`;

      nameListItem.innerHTML = nameListItemContent;
      nameList.appendChild(nameListItem);


    }

}

listUsers();

function readAndUpdateCRUD(indice, screenType) {
  if(screenType == 'update'){
    var updateDiv = document.getElementById('divUserDataUpdate');
    updateDiv.style.display= 'block';
    var updateDiv = document.getElementById('divUserDataRead');
    updateDiv.style.display= 'none';
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
  }else if(screenType == 'read'){
    var readDiv = document.getElementById('divUserDataRead');
    readDiv.style.display = 'block';
    var updateDiv = document.getElementById('divUserDataUpdate');
    updateDiv.style.display= 'none';

    nameFormAdm = document.getElementById('pNome-adm');
    emailFormAdm = document.getElementById('pEmail-adm');
    telephoneFormAdm = document.getElementById('pTelefone-adm');
    messageFormAdm = document.getElementById('textMensagem-adm');
    contactTimeCourseAdm = document.getElementById('pPeriodo-adm');
    contactEmailCheckAdm = document.getElementById('pCheckEmail-adm');
    contactTypeSelectedAdm =  document.getElementById('pTipoContato-adm');

    nameFormArray = JSON.parse(localStorage.getItem("user_name"));
    emailFormArray = JSON.parse(localStorage.getItem("user_email"));
    telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
    messageFormArray = JSON.parse(localStorage.getItem("user_msg"));
    contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));
    contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
    contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));
  
    nameFormAdm.innerHTML = nameFormArray[indice];
    emailFormAdm.innerHTML = emailFormArray[indice];
    telephoneFormAdm.innerHTML = telephoneFormArray[indice];
    messageFormAdm.innerHTML= messageFormArray[indice];
    contactTimeCourseAdm.innerHTML= contactTimeCourseArray[indice];
  
    if(contactTypeSelectedArray[indice] == 'whatsapp'){
      contactTypeSelectedAdm.innerHTML= 'Whatsapp';
      
    }else if( contactTypeSelectedArray[indice] == 'email'){
      contactTypeSelectedAdm.innerHTML= 'Email';
    }else{
      contactTypeSelectedAdm.innerHTML= 'Celular';
    }
  
  
    if(contactEmailCheckArray[indice] == true){
      contactEmailCheckAdm.innerHTML= 'Sim';
    }else{
      contactEmailCheckAdm.innerHTML= 'Não';
    }
  }else{
    console.log('error');
  }
  
}

function updateUserData(indice) {
  contactEmailCheckAdm = document.querySelector('#checkEmailEdit').checked;
  contactTypeSelectedAdm =  document.querySelector('input[type=radio][name=contatoEdit]:checked').value;
  nameFormAdm = document.getElementById('iptNome-adm');
  emailFormAdm = document.getElementById('iptEmail-adm');
  telephoneFormAdm = document.getElementById('iptTelefone-adm');
  messageFormAdm = document.getElementById('textMensagemEdit-adm');
  contactTimeCourseAdm = document.getElementById('slcEdit-horario');



  nameFormArray = JSON.parse(localStorage.getItem("user_name"));
  emailFormArray = JSON.parse(localStorage.getItem("user_email"));
  telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
  messageFormArray = JSON.parse(localStorage.getItem("user_msg"));
  contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));
  contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
  contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));



  nameFormArray.splice(indice,1, nameFormAdm.value)
  emailFormArray.splice(indice,1, emailFormAdm.value)
  telephoneFormArray.splice(indice,1, telephoneFormAdm.value)
  messageFormArray.splice(indice,1, messageFormAdm.value)
  contactTypeSelectedArray.splice(indice,1, contactTypeSelectedAdm)
  contactTimeCourseArray.splice(indice,1, contactTimeCourseAdm.value)
  contactEmailCheckArray.splice(indice,1, contactEmailCheckAdm)

  localStorage.setItem('user_name', JSON.stringify(nameFormArray));
  localStorage.setItem('user_email', JSON.stringify(emailFormArray));
  localStorage.setItem('user_tel', JSON.stringify(telephoneFormArray));
  localStorage.setItem('user_msg', JSON.stringify(messageFormArray));
  localStorage.setItem('user_contactType', JSON.stringify(contactTypeSelectedArray));
  localStorage.setItem('user_timeCourse', JSON.stringify(contactTimeCourseArray));
  localStorage.setItem('user_emailCheck', JSON.stringify(contactEmailCheckArray));

}

function deleteUser(indice){
  nameFormArray = JSON.parse(localStorage.getItem("user_name"));
  emailFormArray = JSON.parse(localStorage.getItem("user_email"));
  telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
  messageFormArray = JSON.parse(localStorage.getItem("user_msg"));
  contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));
  contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
  contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));

  for(i=0;i<nameFormArray.length; i++){
    nameFormArray.splice(indice,1);
    emailFormArray.splice(indice,1);
    telephoneFormArray.splice(indice,1);
    messageFormArray.splice(indice,1);
    contactTypeSelectedArray.splice(indice,1);
    contactTimeCourseArray.splice(indice,1);
    contactEmailCheckArray.splice(indice,1);
  }


  alert("Usuário excluído!")
  localStorage.setItem('user_name', JSON.stringify(nameFormArray));
  localStorage.setItem('user_email', JSON.stringify(emailFormArray));
  localStorage.setItem('user_tel', JSON.stringify(telephoneFormArray));
  localStorage.setItem('user_msg', JSON.stringify(messageFormArray));
  localStorage.setItem('user_contactType', JSON.stringify(contactTypeSelectedArray));
  localStorage.setItem('user_timeCourse', JSON.stringify(contactTimeCourseArray));
  localStorage.setItem('user_emailCheck', JSON.stringify(contactEmailCheckArray));
  window.location.reload();

}

function searchCrud(buttonType) {

    nameFormArray = JSON.parse(localStorage.getItem("user_name"));
    emailFormArray = JSON.parse(localStorage.getItem("user_email"));
    telephoneFormArray = JSON.parse(localStorage.getItem("user_tel"));
    messageFormArray = JSON.parse(localStorage.getItem("user_msg"));
    contactTypeSelectedArray = JSON.parse(localStorage.getItem("user_contactType"));
    contactTimeCourseArray = JSON.parse(localStorage.getItem("user_timeCourse"));
    contactEmailCheckArray = JSON.parse(localStorage.getItem("user_emailCheck"));
    searchName = document.getElementById('iptPesquisar-adm');
    if(buttonType == 2){
      window.location.reload();
      var searchDiv = document.getElementById('dadosUsuariosSearch-adm');
      searchDiv.style.display= 'block';
      var normalDiv = document.getElementById('procurarUsuarios-adm');
      normalDiv.style.display= 'none';  
      document.getElementById('iptPesquisar-adm') = formerUserName;  
      let didYouFindIt = 0;
      let searchPosition = 0;

    
      for(i=0; i < nameFormArray.length; i++){

        if(searchName.value == nameFormArray[i]){

          didYouFindIt = 1
          searchPosition = i;
        
        }
      
      }


      if (didYouFindIt == 1){
        var searchDiv = document.getElementById('dadosUsuariosSearch-adm');
        searchDiv.style.display= 'block';
        var normalDiv = document.getElementById('procurarUsuarios-adm');
        normalDiv.style.display= 'none';
        const nameListSearch = document.querySelector('[data-list-search]');
        userName = nameFormArray[searchPosition];
        const nameListSearchItem= document.createElement('li');
        nameListSearchItem.classList.add('task');
        const nameListItemSearchContent = `<div class='btnDrop-adm' id='btnDrop-adm'><p id="btnNome-adm">${userName}</p>
        <button type="button" onclick= "deleteUser(${searchPosition})" class="btnNomeOpcao-adm" id="btnDeletar-adm">X</button>
        <button type="button" onclick= "readAndUpdateCRUD(${searchPosition}, 'read')" class="btnNomeOpcao-adm" id="btnVer-adm">V</button>
        <button type="button" onclick= "readAndUpdateCRUD(${searchPosition}, 'update')" class="btnNomeOpcao-adm" id="btnEditar-adm">E</button></div>`;

        nameListSearchItem.innerHTML = nameListItemSearchContent;
        nameListSearch.appendChild(nameListSearchItem);

      
      }else{

          alert("Usuário não encontrado!")


      }  
      let formerUserName= nameFormArray[searchPosition];
    }else{
      let didYouFindIt = 0;
      let searchPosition = 0;

      
      for(i=0; i < nameFormArray.length; i++){

        if(searchName.value == nameFormArray[i]){

          didYouFindIt = 1
          searchPosition = i;
        
        }
      
      }


      if (didYouFindIt == 1){
        var searchDiv = document.getElementById('dadosUsuariosSearch-adm');
        searchDiv.style.display= 'block';
        var normalDiv = document.getElementById('procurarUsuarios-adm');
        normalDiv.style.display= 'none';
        const nameListSearch = document.querySelector('[data-list-search]');
        userName = nameFormArray[searchPosition];
        const nameListSearchItem= document.createElement('li');
        nameListSearchItem.classList.add('task');
        const nameListItemSearchContent = `<div class='btnDrop-adm' id='btnDrop-adm'><p id="btnNome-adm">${userName}</p>
        <button type="button" onclick= "deleteUser(${searchPosition})" class="btnNomeOpcao-adm" id="btnDeletar-adm">X</button>
        <button type="button" onclick= "readAndUpdateCRUD(${searchPosition}, 'read')" class="btnNomeOpcao-adm" id="btnVer-adm">V</button>
        <button type="button" onclick= "readAndUpdateCRUD(${searchPosition}, 'update')" class="btnNomeOpcao-adm" id="btnEditar-adm">E</button></div>`;

        nameListSearchItem.innerHTML = nameListItemSearchContent;
        nameListSearch.appendChild(nameListSearchItem);

      // Senão
      }else{

          alert("Usuário não encontrado!")


      }  
      let formerUserName= nameFormArray[searchPosition];  
      }

     
}