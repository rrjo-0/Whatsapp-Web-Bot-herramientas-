/*
    estas funciones no estan para chats 'privados'
    -- obtener nombre del usuario
    -- obtener nickname
*/
   
setChat('Fotos',ChatGroup);
    if(init_WhatsAppWeb() == 0){
        _bot(()=>{
            var chatName = rrjo.getChatName();
            if(chatName == 'Fotos'){
            }else{
                setChat('Fotos',ChatGroup);
            }

                var msg = rrjo.getMessage();
                    if(msg == 'ping!'){
                        
                        if(rrjo.getNickName() == false){
                             rrjo.send(" pong!, hola " + chatName + "!");
                        }else{
                            rrjo.send(" pong!, hola " + rrjo.NickName() + "!");
                        }
                    }

        });

    }else{  
        console.error(" error en el codigo :/");
    }
