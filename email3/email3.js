function sendEmail() {

    // Obter valores das caixas de texto
    const name = document.querySelector("#txtName").value
    const message = document.querySelector("#txtMessage").value

    // Inicializar o componente EmailJS
      emailjs.init("user_BgIBYozEXLINzAzefptTc")
      
    const template_params = {
        "reply_to": "reply_to_value",
        "from_name": name,
        "to_name": "to_name_value",
        "message_html": message
     }
     
     const service_id = "default_service"
     const template_id = "template_7KG4vtMA"
     emailjs.send(service_id,template_id,template_params)

    console.log("Olá " + name)

    
}