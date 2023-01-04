
// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById('myImg1');
// var img2 = document.getElementById('myImg2');
// var img3 = document.getElementById('myImg3');
// var img4 = document.getElementById('myImg4');
// var img5 = document.getElementById('myImg5');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

// img1.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// img2.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// img3.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// img4.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// img5.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }



































var url = 'http://localhost:4596'

// window.addEventListener("beforeunload", function(event) {
//     event.returnValue = "Write something clever here..";
//   });


// function Date() {
//     const today = new Date().toISOString().split("T")[0];
//     const chkin = document.getElementById('checkin').value
//     if (chkin < today) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Wrong Check-in Date!',
//         })
//         document.getElementById('checkin').value = '';
//     }
// }

// function checkoutDate() {
//     const today = new Date().toISOString().split("T")[0];
//     const chkout = document.getElementById('checkout').value
//     if (chkout < today) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Wrong Check-out Date!',
//         })
//         document.getElementById('checkout').value = '';
//     }
// }
function checkinDate() {

    const today = new Date().toISOString().split("T")[0];
    const chkin = document.getElementById('checkin').value
    if (chkin < today) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Check-in Date!',
        })
        document.getElementById('checkin').value = '';
    }
}

function checkoutDate() {
    const today = new Date().toISOString().split("T")[0];
    const chkin = document.getElementById('checkin').value
    const chkout = document.getElementById('checkout').value
    if (chkout < today || chkout < chkin) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Check-out Date!',
        })
        document.getElementById('checkout').value = '';
    }
}

// function createData(){
//     console.log("function createData() is called");
//     var name = document.getElementById('name').value
//     var sname = document.getElementById('lname').value

//     var xhttp = new XMLHttpRequest()

//     xhttp.open('POST',url+'/user')
//     xhttp.setRequestHeader('Content-Type', 
//     'application/json')

//     xhttp.send(JSON.stringify({
//         id:'',"Firstname":name,"Lastname": sname
//     }))
// }

function createData() {
    console.log("function createData() is called");
    var chkin = document.getElementById('checkin').value
    var chkout = document.getElementById('checkout').value
    var adult = document.getElementById('adult').value
    var children = document.getElementById('children').value
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value

    // check if the form has a null value
    if (chkin == '' || chkout == '' || adult == '' || children == '' || fname == '' || lname == '' || email == '' || phone == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill Out All Form',
        })
    } else {
    fetch(url + '/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": null,
            "check in": chkin,
            "check out": chkout,
            "adult": adult,
            "children": children,
            "Firstname": fname,
            "Lastname": lname,
            "email": email,
            "phone": phone
        })
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    window.open("tentsite.html");
    }

}

// old
// function readData() {
//     console.log("function createData() is called");
//     var html = ''

//     fetch(url + '/user')
//         .then(response => response.json())
//         .then(data => {
//             for (const x of data) {
//                 console.log(x.id);
//                 html += `<h1>${x.user} ${x.sname}</h1><br>`
//             }
//             document.getElementById("showdata").innerHTML = html
//         })
// }

function readData() {
    console.log("function createData() is called");
    var html = '<div class="row">'

    fetch(url + '/user')
        .then(response => response.json())
        .then(data => {
            for (const x of data) {
                console.log(x.id);
                html += `<div class="card" style="width: 18rem;">
                <img src="${x.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${x.id}</h5>
                    <p class="card-text">รายการจองของ ${x.user} ${x.sname}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
            }
            html += '</div>'
            document.getElementById("showdata").innerHTML = html
        })
}

function deleteData() {
    var deletetb = document.getElementById('deletetb').value
    console.log(deletetb);

    fetch(url + `/user/${deletetb}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "_id": deletetb
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


function checkAvailable() {
    console.log("function called");
    var chkin = document.getElementById('checkin').value
    var chkout = document.getElementById('checkout').value
    var adult = document.getElementById('adult').value
    var children = document.getElementById('children').value
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value

    // console.log(chkin);
    // var count = 0
    // fetch(url + '/location')
    //     .then(response => response.json())
    //     .then(data => {
    //         for (const x of data) {
    //             if (x['bookdate'] == "2023-1-6") {
    //                 console.log("Test");
    //             }
    //         }
    //     })
    fetch(url + '/booking')
        .then(response => response.json())
        .then(data => {
            for (const x of data) {
                console.log(x['check in']);
                // if (x['check in'] == "2023-01-05") {
                //     // Swal.fire({
                //     //     icon: 'error',
                //     //     title: 'Oops...',
                //     //     text: 'Something went wrong!',
                //     // })

                // }
            }
        })
}

function loadBooking() {

    var html = ``

    fetch(url + "/location")
        .then(response => response.json())
        .then(locationData => {
            fetch(url + "/booking")
                .then(response => response.json())
                .then(bookingData => {

                    for (const x of bookingData) {
                        for (const y of locationData) {
                            if (y['name'] == x['location']) {
                                html += `<div class="card col-lg-6 ">
                                <div class="row">
                                    <div class="col-md-4">
                                <img src=${y["img"]} class="img-fluid rounded-start">
                                </div>
                                <div class="col-md-8" >
                                    <div class="card-body">
                                        <h5 class="card-title">${x['location']}</h5>
                                        <p class="card-text">Check in date : ${x['check in']}</p>
                                        <p class="card-text">Check out date : ${x['check out']}</p>
                                        <button class="btn btn-primary">View Booking</button>
                                        <button class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                                        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                </div>
                                </div>

                                </div>
                            </div>`
                            }
                        }
                    }

                    // for (const x of bookingData) {
                    //     for (const y of locationData) {
                    //         if (y['name'] == x['location']) {
                    //             html += `<div class="card w-25">
                    //             <div class="bg-image" data-mdb-ripple-color="light">
                    //                 <img src="${y["img"]}" class="img-fluid"/>
                    //             </div>
                    //             <div class="card-body">
                    //                 <h5 class="card-title">${x['location']}</h5>
                    //                 <p class="card-text">Check in date : ${x['check in']}</p>
                    //                 <p class="card-text">Check out date : ${x['check out']}</p>

                    //             </div>
                    //             </div>`
                    //         }
                    //     }
                    // }

                    console.log(html);
                    document.getElementById('booking1').innerHTML = html

                })

        })



}
