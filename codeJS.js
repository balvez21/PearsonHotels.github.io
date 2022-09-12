const galeriaHabitaciones = [

    {
    imagen: 'https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg',
    nombre: "Habitacion 100",
    camas: '2 Camas Dobles',
    baños: '2 Naños',
    tamaño: '42m2',
    precio: '$2800'
    },
    {
    imagen: 'https://media.timeout.com/images/105859033/image.jpg',
    nombre: "Habitacion 101",
    camas: '1 Cama Doble',
    baños: '1 baño',
    tamaño: '42m2',
    precio: '$1800'
    },
    
    {
    imagen: 'https://media.cntraveler.com/photos/56799015c2ebbef23e7d927b/16:9/w_1280,c_limit/Hotelroom-Alamy.jpg',
    nombre: "Habitacion 102",
    camas: '2 Camas Dobles',
    baños: '2 Baños',
    tamaño: '50m2',
    precio: '$1800'
    },

    {
    imagen: 'https://static.vecteezy.com/system/resources/previews/001/978/953/non_2x/twin-bed-hotel-room-in-a-hotel-resort-free-photo.jpg',
    nombre: "Habitacion 103",
    camas: '2 Camas Simples',
    baños: '2 Baños',
    tamaño: '50m2',
    precio: '$2800'
    },

    {
    imagen: 'https://afar.brightspotcdn.com/dims4/default/a3055a8/2147483647/strip/false/crop/1500x1001+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F9c%2Faf%2Fcf220f8fd93b8b503de9810d17c3%2Foriginal-nvc-160.jpg',
    nombre: "Habitacion 104",
    camas: '1 Cama Simple',
    baños: '2 Baños',
    tamaño: '42m2',
    precio: '$2800'
    },

    {
    imagen: 'https://st.depositphotos.com/1571889/4023/i/450/depositphotos_40237321-stock-photo-beds-in-hotel-room.jpg',
    nombre: "Habitacion 104",
    camas: '2 Camas Simples',
    baños: '1 Baño',
    tamaño: '42m2',
    precio: '$1500'
    },

    {
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg',
    nombre: "Habitacion 104",
    camas: '2 Camas Dobles',
    baños: '2 Baños',
    tamaño: '50m2',
    precio: '$2800'
    },

    {
    imagen: 'https://cdn.designrulz.com/wp-content/uploads/2015/09/dr.jpg',
    nombre: "Habitacion 104",
    camas: '1 Cama Simple',
    baños: '1 Baño',
    tamaño: '42m2',
    precio: '$1800'
    },

    {
    imagen: 'https://images.mirai.com/INFOROOMS/100024314/JaZ7G2S2stEp8BvyN5ZL/JaZ7G2S2stEp8BvyN5ZL_large.jpg',
    nombre: "Habitacion 104",
    camas: '2 Cama Dobles',
    baños: '2 Baños',
    tamaño: '50m2',
    precio: '$2800'
    },
    
    
    ];
    
        for(var i=0; i<galeriaHabitaciones.length; i++){
            $('#galeria').append('<div>' + 
            '<img src='+ galeriaHabitaciones[i].imagen + ' />' +
            '<h2>'+galeriaHabitaciones[i].nombre+'</h2>' +
            '<p>'+galeriaHabitaciones[i].camas+'</p>'+
            '<p>'+galeriaHabitaciones[i].baños+' </p>'+
            '<p>'+galeriaHabitaciones[i].tamaño+' </p>'+
            '<p>'+galeriaHabitaciones[i].precio+' </p>'+
            '<div/>');
      }

   

    
    /*
    var mostrarInfo = galeriaHabitaciones.map(function(info){
        return  '<div>'
                    +'<img src='+info.imagen+' />' 
                    +'<h2>'+info.nombre+'</h2>'
                    +'<p>'+info.camas+'</p>'
                    +'<p>'+info.baños+' </p>'
                    +'<p>'+info.tamaño+' </p>'
                    +'<p>'+info.precio+' </p>'
                +'</div>';
    }).join('')
    
    $('#galeria').html(mostrarInfo);
    */