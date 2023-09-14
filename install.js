let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
  
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS promp', choice);
    } else {
      console.log('User dismissed the A2HS prompt', choice);
    }
    deferredInstallPrompt = null;
  })
}

window.addEventListener('appinstalled', logAppInstalled);
  
function logAppInstalled(evt) {
  console.log('SG Produits Eco-Logiques installed', evt);
}