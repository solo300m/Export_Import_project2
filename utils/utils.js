export class Utils{
    
    isLocalStorage(key){
        if(!localStorage.getItem(key)){
            return false;
        }
        else{
            return true;
        }
    }

    initLocalStorage(key,value){
        localStorage.setItem(key,value);
    }
    getLocalStorage(key){
    return localStorage.getItem(key);
    }
}



