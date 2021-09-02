
/*
           _____    
          / ___ \  
         / /__/ | ____  
        / __  _/'/    \+ +
       / /  \ \ | |||. |+  +
   + +/_/ + /_/+'\____/' + +
    + +++  +   ++  +  + ++  +
      creado por: rrjo
    
         ++ github: rrjo-0 ++

    Gracias por verme o usarme!!!!


me pase de pedo, parte en ingles y otras en español con mala ortografia xd
 (soy nuevo en esta plataforma)
*/

console.log("           _____    \n          / ___ \  \n         / /__/ | ____  \n        / __  _/'/    \+ +\n       / /  \ \ | |||. |+  +\n   + +/_/ + /_/+'\____/' + +\n    + +++  +   ++  +  + ++  +\n      creado por: rrjo\n         ++ github: rrjo-0 ++\n\n    Gracias por usarme!!!!\n\n");

var ChatUser = "ChatUser";
var ChatGroup = "ChatGroup";
// codigo:
function simulateMouseEvents(element, eventName)
{
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}

var eventFire = (MyElement, ElementType) => {
    var MyEvent = document.createEvent("MouseEvents");
    MyEvent.initMouseEvent
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    MyElement.dispatchEvent(MyEvent);
};
  
function UrlWhatsApp(){
    return "https://web.whatsapp.com/";
}

function GoWhatsAppWeb(){
    window.location.href = UrlWhatsApp();
}

function init_WhatsAppWeb(){
    var url = window.location.href;
    if(url == UrlWhatsApp()){
    var QR = document.querySelectorAll('canvas[aria-label="Scan me!"]')["length"];
    if(QR == 1){
        return 1;
    }else{
        return 0;
    }
    }else{
        return 2;
    }
    return 3;
}



    var TypeChat;


    if(init_WhatsAppWeb() == 0){

    function setChat(chat,tpct){
        if(tpct == 'ChatUser'){
            TypeChat = tpct;
            return simulateMouseEvents(document.querySelector('[title="' + chat + '"]'), 'mousedown');
        }else if(tpct == 'ChatGroup'){
            TypeChat = tpct;
            return simulateMouseEvents(document.querySelector('[title="' + chat + '"]'), 'mousedown');
        }else{
            return "";
        }
    }
    var rrjo = {
        'setChat': function(chat,tpct){ // abre un chat, tpct es el tipo del chat
            try {
                if(tpct == 'ChatUser'){
                    TypeChat = tpct;
                    return simulateMouseEvents(document.querySelector('[title="' + chat + '"]'), 'mousedown');
                }else if(tpct == 'ChatGroup'){
                    TypeChat = tpct;
                    return simulateMouseEvents(document.querySelector('[title="' + chat + '"]'), 'mousedown');
                }else{
                    console.log("  no se reconoze '" + tpct + "' como una opcion de chat ':|");
                    return false;
                }   
            } catch (error) {
                console.log("  el chat no existe :( o esta en mala ubicacion :)");
                return false
            }
        },
        'getMessage': function(){ // obtiene los mensajes
            try {
                var div = document.querySelectorAll("div[class='_1Gy50']")["length"]-1;
                var span = document.querySelectorAll("span[class='i0jNr selectable-text copyable-text']")[div];
                return span.innerText;   
            } catch (error) {
                console.log("error en la localidad en que esta :(");
                return false;
            }
        },
        'getNickName': function(){ // obtiene el nickname de usuario en el grupo
            if(TypeChat == 'ChatGroup'){
                try {
                    var div = document.querySelectorAll("div[class='hooVq color-3 _1B9Rc']")["length"]-1;
                    var span = document.querySelectorAll("span[class='_1u3M2 _ccCW _3xSVM i0jNr']")[div];
                    return span.innerText;   
                } catch (error) {
                    console.error("  error del codigo :/");
                    return false
                }
            }else{
                console.error(" no puedes obtener el nickname en un usuario directo");
                return null;
            }
        },
        'getChatName': function(){ // ontiene el titulo del chat
            try {
                var name = document.querySelector("div[class='_21nHd']")
                name.querySelector("span[class='_ccCW FqYAR i0jNr']") 
                return name.innerText;   
            } catch (error) {
                console.error("  se esta produciendo un error por la localidad en que esta");
                return false;
            }
        },
        'getNumNotifyMessage': function(){ // obtiene la cantidad de mensajes nuevos recibidos en algun otro chat
            return document.querySelector("span[class='_23LrM']")["length"];
        },
        'send': function(text){ // manda mensaje al chat
            try {
                var input = document.querySelectorAll("[contenteditable='true']")[1];
                event = document.createEvent("UIEvents");
                input.innerHTML = text;
                event.initUIEvent("input", true, true, window, 1);
                input.dispatchEvent(event);
                eventFire(document.querySelector("span[data-icon='send']"), "click");
                return true;   
            } catch (error) {
                return false
            }
        },
        'getNameUser': function(){ // obtiene el nombre del usuario con quien esta hablando 
            try {
                if(TypeChat == 'ChatGroup'){
                    var div = document.querySelectorAll("div[class='hooVq color-3 _1B9Rc']")["length"]-1;
                    var span = document.querySelectorAll("span[class='_1BUvv']")[div];
                    return span.innerText;
                }else{
                        console.error(" no puedes obtener el nombre en un usuario directo");
                        return null;
                }    
            } catch (error) {
                console.error("  esta en mala localidad");
            }
        }
    };
}else{
    console.error(" esta en otra pagina web,\n no a puesto el qr,\n o se produjo un error de codigo.\n  para redirecionar a la pagina web de whatsapp ejecute 'reload()'\n");
    function reload(){ // reincia la pagina web
        GoWhatsAppWeb();
    }
}

// un toque
var sleep = 1000;
    function _bot(code){ // un repitidor
      setInterval(code,sleep);
    }

    // y listo!!!

