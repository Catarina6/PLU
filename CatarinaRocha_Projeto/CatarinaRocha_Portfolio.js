let topDialog = 0

function formatDialog() {
    const myDialog = document.getElementById("myDialog")
    const myNavbar = document.getElementById("myNavbar")
    myDialog.style.width = "100%"
    myDialog.style.height = "700px"
    topDialog = (myNavbar.offsetTop - 250) + "px"
}

function openDialog() {
    const myDialog = document.getElementById("myDialog")
    myDialog.style.top = topDialog
    if (!myDialog.open)
        myDialog.show()

}




function showVideo(videoId) {
    switch (videoId) {
        case 1:
            const dialogVideo = document.getElementById("terror empire")
            dialogVideo.showModal()
            break;

        default:
            break;
    }
    switch (videoId) {
        case 2:
            const dialogVideo = document.getElementById("varsovie")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 3:
            const dialogVideo = document.getElementById("aeon sable")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 4:
            const dialogVideo = document.getElementById("the godiva")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 5:
            const dialogVideo = document.getElementById("manes")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 6:
            const dialogVideo = document.getElementById("enblood")
            dialogVideo.showModal()
            break;
        default:
            break;
    }

    switch (videoId) {
        case 7:
            const dialogVideo = document.getElementById("varsovie1")
            dialogVideo.showModal()
            break;
        default:
            break;
    }

    switch (videoId) {
        case 8:
            const dialogVideo = document.getElementById("gaerea")
            dialogVideo.showModal()
            break;
        default:
            break;
    }

    switch (videoId) {
        case 9:
            const dialogVideo = document.getElementById("azziard")
            dialogVideo.showModal()
            break;
        default:
            break;
    }

    switch (videoId) {
        case 10:
            const dialogVideo = document.getElementById("tempo")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 11:
            const dialogVideo = document.getElementById("oak")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 12:
            const dialogVideo = document.getElementById("ominous")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 13:
            const dialogVideo = document.getElementById("fado")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 14:
            const dialogVideo = document.getElementById("demonic")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 15:
            const dialogVideo = document.getElementById("unfathomable")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
    switch (videoId) {
        case 16:
            const dialogVideo = document.getElementById("belphegor")
            dialogVideo.showModal()
            break;
        default:
            break;
    }
}


//definir uma localização
//definir variavel que vai ser constante: myLocation
function myMap() {
    const myLocation = new google.maps.LatLng(41.146066, -8.594868)
    //definir propriedades do mapa
    const mapProp = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    //definir o meu mapa
    //aplicar as propriedades que eu mencionei
    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)

    //criar um marcador
    //temos de dizer a posição que queremos
    //dizemos também o tipo de animação que queremos
    var marker = new google.maps.Marker({
        position: myLocation,
        animation: google.maps.Animation.BOUNCE,
        title: 'Visite-nos!',
    });
    //associa o marcador ao mapa
    marker.setMap(map);
}

function sendEmail() {

    // Obter valores das caixas de texto
    const name = document.querySelector("#txtName").value
    const email = document.querySelector("#txtEmail").value
    const message = document.querySelector("#txtMessage").value

    // Inicializar o componente EmailJS
    emailjs.init("user_BgIBYozEXLINzAzefptTc")

    const template_params = {
        "reply_to": "reply_to_value",
        "from_name": name,
        "to_name": "to_name_value",
        "from_email": "from_email_value",
        "message_html": message
     }
     
     const service_id = "default_service"
     const template_id = "template_7KG4vtMA"
     emailjs.send(service_id,template_id,template_params)

    console.log("Olá " + name)

    
}