import './index.css';
import { Utils } from './utils/utils';
const utils = new Utils();
//utils.initLocalStorage('coocky','false');

const coockyBlock = document.querySelector('.cookie-consent');
const btnCookie = document.querySelector('.cookie-consent__button');

if(utils.getLocalStorage('coocky') === 'true'){
    coockyBlock.classList.add('hide');
}
btnCookie.addEventListener('click',()=>{
    utils.initLocalStorage('coocky','true');
    console.log(utils.getLocalStorage('coocky'));
    coockyBlock.classList.add('hide');        
});

