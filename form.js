const validateForm = () => {

  const name = document.getElementById('name');
  const lastname = document.getElementById('lastname');
  const gender = document.getElementById('gender');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');

  const nameValue = name.value.trim();
  const lastnameValue = lastname.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();

  let noError = true;

  //Validation du prenom
  if(nameValue === '') {
      setError(name, 'Le prénom ne peut pas être vide');
      noError = false;
  } else {
      setSuccess(name);
  }

  //Validation du nom
  if(lastnameValue === '') {
    setError(lastname, 'Le nom ne peut pas être vide');
    noError = false;
  } else {
      setSuccess(lastname);
  }
  
  //Validation du telephone
  if(phoneValue === '') {
    setError(phone, 'Le numéro de téléphone ne peut pas être vide');
    noError = false;
  } else {
      setSuccess(lastname);
  }

  //Validation du email
  if(emailValue === ''){
      setError(email,'Email ne peut être vide');
      noError = false;
  }
  else if(!validateEmail(emailValue)){
      setError(email,'Entrez une adresse courriel valide');
      noError = false;
  }
  else{
      setSuccess(email);
  }

  //Validation de la date de naissance
  if(birthdateValue === '') {
    setError(birthdate, 'La date de naissance ne peut pas être vide');
    noError = false;
  } else {
      setSuccess(birthdate);
  }

  console.log(noError);
  return noError;
}

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email).toLowerCase());
}

const setError = (element,message) => { 
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMessage');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMessage');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
}

