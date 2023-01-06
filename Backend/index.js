
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
    // var fname = document.getElementById('fname').value
    // var lname = document.getElementById('lname').value
    // var email = document.getElementById('email').value
    // var phone = document.getElementById('phone').value

    // check if the form has a null value
    // if (chkin == '' || chkout == '' || adult == '' || children == '' || fname == '' || lname == '' || email == '' || phone == '') {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Please Fill Out All Form',
    //     })
    if (chkin == '' || chkout == '' || adult == '' || children == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill Out All Form',
        })
    } else {
        sessionStorage.setItem('chkin', chkin)
        sessionStorage.setItem('chkout', chkout)
        sessionStorage.setItem('adult', adult)
        sessionStorage.setItem('children', children)
        window.open("test.html");
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

                    // console.log(html);
                    //  

                })

        })
}

function sessionData() {
    var chkin = sessionStorage.getItem('chkin')
    var chkout = sessionStorage.getItem('chkout')
    var adult = sessionStorage.getItem('adult')
    var children = sessionStorage.getItem('children')

    console.log('Check in : ', chkin);
    console.log('Check out : ', chkout);
    console.log('Adult : ', adult);
    console.log('Children : ', children);
}


function selectOption(location_name, site_price, tent_price) {
    var html = ''
    var chkin = sessionStorage.getItem('chkin')
    var chkout = sessionStorage.getItem('chkout')
    var adult = sessionStorage.getItem('adult')
    var children = sessionStorage.getItem('children')

    function totalPrice(location_name, fname, lname, email, phone) {
        var tentsite = parseInt(document.getElementById('tentsite').value)

        // var fname = document.getElementById('fname').value
        // var lname = document.getElementById('lname').value
        // var email = document.getElementById('email').value
        // var phone = document.getElementById('phone').value

        site_price = parseInt(site_price)
        tent_price = parseInt(tent_price)

        var totalPrice = 0

        switch (location_name) {
            case 'Camping is life':
                var fishing = parseInt(document.getElementById('fishing').value)
                totalPrice = site_price + fishing
                Swal.fire({
                    title: 'Confirmation Your Booking',
                    html:
                        `<div class="mb-3">
                    <span class="form-label">Location</span>
                    <input class="form-control" type="text" value="${location_name}" disabled>
                    <label class="form-label">Check in Date:</label>
                    <input class="form-control" type="text" value="${chkin}" disabled>
                    <label class="form-label">Check out Date:</label>
                    <input class="form-control" type="text" value="${chkout}" disabled>
                    <label class="form-label">Adult (person)</label>
                    <input class="form-control" type="text" value="${adult}" disabled>
                    <label class="form-label">Children (person)</label>
                    <input class="form-control" type="text" value="${children}" disabled>
                    <label class="form-label">Firstname</label>
                    <input class="form-control" type="text" value="${fname}" disabled>
                    <label class="form-label">Lastname</label>
                    <input class="form-control" type="text" value="${lname}" disabled>
                    <label class="form-label">Email</label>
                    <input class="form-control" type="text" value="${email}" disabled>
                    <label class="form-label">Phone</label>
                    <input class="form-control" type="text" value="${phone}" disabled>
                    <label class="form-label">Total Price</label>
                    <input class="form-control" type="text" value="${totalPrice}" disabled>
                    </div>`,
                    // '<label class="form-label"><b>Booking Detail</b></label><hr class="hr">'+
                    // `
                    // <input id="swal-input1" class="swal2-input" value="${chkin}" disable>` +
                    // `<input id="swal-input2" class="swal2-input" value="${chkout}"disable>` +
                    // `<input id="swal-input3" class="swal2-input" value="${adult}"disable>` +
                    // `<input id="swal-input4" class="swal2-input" value="${children}"disable>`+
                    // `<input id="swal-input5" class="swal2-input" value="${totalPrice}"disable>`,
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            fetch(url + '/booking', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "id": null,
                                    "location": location_name,
                                    "check in": chkin,
                                    "check out": chkout,
                                    "adult": adult,
                                    "children": children,
                                    "firstname": fname,
                                    "lastname": lname,
                                    "email": email,
                                    "phone": phone,
                                    "total price": totalPrice

                                })

                            }).then(response => response.json())
                                .then(data => console.log(data))
                                .catch(error => console.log(error))
                        ]
                    }
                })
                // if (fname == '') {
                //     Swal.fire(JSON.stringify(formValues))
                //     console.log("nullllllll");
                // }
                break;
            case 'Pha hee':
                var moo_gata = parseInt(document.getElementById('moo-gata').value)
                totalPrice = ((site_price * adult) + (site_price * children)) + moo_gata
                Swal.fire({
                    title: 'Confirmation Your Booking',
                    html:
                        `<div class="mb-3">
                    <label class="form-label">Location</label>
                    <input class="form-control" type="text" value="${location_name}" disabled>
                    <label class="form-label">Check in Date:</label>
                    <input class="form-control" type="text" value="${chkin}" disabled>
                    <label class="form-label">Check out Date:</label>
                    <input class="form-control" type="text" value="${chkout}" disabled>
                    <label class="form-label">Adult (person)</label>
                    <input class="form-control" type="text" value="${adult}" disabled>
                    <label class="form-label">Children (person)</label>
                    <input class="form-control" type="text" value="${children}" disabled>
                    <label class="form-label">Firstname</label>
                    <input class="form-control" type="text" value="${fname}" disabled>
                    <label class="form-label">Lastname</label>
                    <input class="form-control" type="text" value="${lname}" disabled>
                    <label class="form-label">Email</label>
                    <input class="form-control" type="text" value="${email}" disabled>
                    <label class="form-label">Phone</label>
                    <input class="form-control" type="text" value="${phone}" disabled>
                    <label class="form-label">Total Price</label>
                    <input class="form-control" type="text" value="${totalPrice}" disabled>
                    </div>`,
                    // '<label class="form-label"><b>Booking Detail</b></label><hr class="hr">'+
                    // `
                    // <input id="swal-input1" class="swal2-input" value="${chkin}" disable>` +
                    // `<input id="swal-input2" class="swal2-input" value="${chkout}"disable>` +
                    // `<input id="swal-input3" class="swal2-input" value="${adult}"disable>` +
                    // `<input id="swal-input4" class="swal2-input" value="${children}"disable>`+
                    // `<input id="swal-input5" class="swal2-input" value="${totalPrice}"disable>`,
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            fetch(url + '/booking', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "id": null,
                                    "location": location_name,
                                    "check in": chkin,
                                    "check out": chkout,
                                    "adult": adult,
                                    "children": children,
                                    "firstname": fname,
                                    "lastname": lname,
                                    "email": email,
                                    "phone": phone,
                                    "total price": totalPrice

                                })

                            }).then(response => response.json())
                                .then(data => console.log(data))
                                .catch(error => console.log(error))
                        ]
                    }
                })
                // if (fname == '') {
                //     Swal.fire(JSON.stringify(formValues))
                //     console.log("nullllllll");
                // }
                break;
            case 'Phu chee dao':
                var tent = parseInt(document.getElementById('tent').value)
                var moo_gata_size = parseInt(document.getElementById('moo-gata-size').value)
                var tent_amount = document.getElementById('tent-amount').value
                if (tent_amount == '') {
                    totalPrice = site_price + moo_gata_size
                } else {
                    tent_amount = parseInt(tent_amount)
                    totalPrice = site_price + moo_gata_size + (tent * tent_amount)
                }

                Swal.fire({
                    title: 'Confirmation Your Booking',
                    html:
                        `<div class="mb-3">
                    <label class="form-label">Location</label>
                    <input class="form-control" type="text" value="${location_name}" disabled>
                    <label class="form-label">Check in Date:</label>
                    <input class="form-control" type="text" value="${chkin}" disabled>
                    <label class="form-label">Check out Date:</label>
                    <input class="form-control" type="text" value="${chkout}" disabled>
                    <label class="form-label">Adult (person)</label>
                    <input class="form-control" type="text" value="${adult}" disabled>
                    <label class="form-label">Children (person)</label>
                    <input class="form-control" type="text" value="${children}" disabled>
                    <label class="form-label">Firstname</label>
                    <input class="form-control" type="text" value="${fname}" disabled>
                    <label class="form-label">Lastname</label>
                    <input class="form-control" type="text" value="${lname}" disabled>
                    <label class="form-label">Email</label>
                    <input class="form-control" type="text" value="${email}" disabled>
                    <label class="form-label">Phone</label>
                    <input class="form-control" type="text" value="${phone}" disabled>
                    <label class="form-label">Total Price</label>
                    <input class="form-control" type="text" value="${totalPrice}" disabled>
                    </div>`,
                    // '<label class="form-label"><b>Booking Detail</b></label><hr class="hr">'+
                    // `
                    // <input id="swal-input1" class="swal2-input" value="${chkin}" disable>` +
                    // `<input id="swal-input2" class="swal2-input" value="${chkout}"disable>` +
                    // `<input id="swal-input3" class="swal2-input" value="${adult}"disable>` +
                    // `<input id="swal-input4" class="swal2-input" value="${children}"disable>`+
                    // `<input id="swal-input5" class="swal2-input" value="${totalPrice}"disable>`,
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            fetch(url + '/booking', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "id": null,
                                    "location": location_name,
                                    "check in": chkin,
                                    "check out": chkout,
                                    "adult": adult,
                                    "children": children,
                                    "firstname": fname,
                                    "lastname": lname,
                                    "email": email,
                                    "phone": phone,
                                    "total price": totalPrice

                                })

                            }).then(response => response.json())
                                .then(data => console.log(data))
                                .catch(error => console.log(error))
                        ]
                    }
                })
                // if (fname == '') {
                //     Swal.fire(JSON.stringify(formValues))
                //     console.log("nullllllll");
                // }
                break;
            default:
                break;
        }

    }

    // Select Option
    switch (location_name) {
        case 'Camping is life': // selectOption('Camping is life','200')
            html +=
                `<div class="mb-3">
            <label class="form-label">Rent a tent site</label>
            <br>
                <label class="form-label">You Entered : Adult <font color="#198754"><b> ${adult} </b></font> and Childred <font color="#198754"><b> ${children} </b></font> <font color="#198754"></font></label>
            <input class="form-control" type="text" value="${site_price} THB" disabled id="tentsite">
            <br>
            <label class="form-label">Fishing</label>
            <select class="form-control" id="fishing">
                <option value="0" selected>Select Your Option...</option>
                <option value="200">Yes (200 THB)</option>
            </select>
            <br>
                <br>
                <h3><b>Contact Info</b>&nbsp;<font color="#F27474">(Required)</font></h3>
                <br>
            <label class="form-label">Firstname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your firstname" id="fname">
            <br>
            <label class="form-label">Lastname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your lastname" id="lname">
            <br>
            <label class="form-label">Email&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="example@gmail.com" id="email">
            <br>
            <label class="form-label">Phone Number&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="tel" placeholder="eg.0987654321" id="phone">
            </div>`
            break;
        case 'Pha hee': // selectOption('Pha hee','900')
            html +=
                `<div class="mb-3">
                <label class="form-label">Rent a tent site (Free Tent) + Shelter</label>
                <br>
                <label class="form-label">You Entered : Adult <font color="#198754"><b> ${adult} </b></font> and Childred <font color="#198754"><b> ${children} </b></font> <font color="#198754"><b>(${(parseInt(adult) + parseInt(children)) * site_price} THB)</b></font></label>
                <input class="form-control" type="text" value="${site_price} THB / person" disabled id="tentsite">
                
                <br>
                <label class="form-label">Thai barbecue (Moo-gata)</label>
                <select class="form-control" id="moo-gata">
                    <option value="0" selected>Select Your Option...</option>
                    <option value="300">Yes (300 THB)</option>
                </select>
                <br>
                <br>
                <h3><b>Contact Info</b>&nbsp;<font color="#F27474">(Required)</font></h3>
                <br>
            <label class="form-label">Firstname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your firstname" id="fname">
            <br>
            <label class="form-label">Lastname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your lastname" id="lname">
            <br>
            <label class="form-label">Email&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="example@gmail.com" id="email">
            <br>
            <label class="form-label">Phone Number&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="tel" placeholder="eg.0987654321" id="phone">
                </div>`
            break;

        case 'Phu chee dao': // selectOption('Phu chee dao','250','500')
            html +=
                `<div class="mb-3">
                <label class="form-label">Rent a tent site</label>
                <br>
                <label class="form-label">You Entered : Adult <font color="#198754"><b> ${adult} </b></font> and Childred <font color="#198754"><b> ${children} </b></font></label>
                <input class="form-control" type="text" value="${site_price} THB" disabled id="tentsite">
                <br>
                <div class="mb-3">
                <label class="form-label">Rent a tent</label>
                <select class="form-control" id="tent">
                    <option value="0" selected>Select Your Option...</option>
                    <option value="${tent_price}">Yes (${tent_price} THB)</option>
                </select>

                <label class="form-label">Amount</label>
                <input class="form-control" type="number" max="10" min="0" id="tent-amount">
                <br>
                <label class="form-label">Thai barbecue (Moo-gata)</label>
                <select class="form-control" id="moo-gata-size">
                    <option value="0" selected>Select Your Option...</option>
                    <option value="300">Size : Small (300 THB)</option>
                    <option value="500">Size : Large (500 THB)</option>
                </select>
                <br>
                <br>
                <h3><b>Contact Info</b>&nbsp;<font color="#F27474">(Required)</font></h3>
                <br>
            <label class="form-label">Firstname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your firstname" id="fname">
            <br>
            <label class="form-label">Lastname&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="Enter your lastname" id="lname">
            <br>
            <label class="form-label">Email&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="text" placeholder="example@gmail.com" id="email">
            <br>
            <label class="form-label">Phone Number&nbsp;<font color="#F27474">*</font></label>
            <input class="form-control" type="tel" placeholder="eg.0987654321" id="phone">
                </div>`
            break;
        default:
            break;
    }

    Swal.fire({
        title: 'Select your additional',
        html: html,
        focusConfirm: false,
        preConfirm: () => { //!fill all condition and change class name

            if (document.getElementById('fname').value != '' && document.getElementById('lname').value != '' && document.getElementById('email').value != '' && document.getElementById('phone').value != '') {
                var fname = document.getElementById('fname').value
                var lname = document.getElementById('lname').value
                var email = document.getElementById('email').value
                var phone = document.getElementById('phone').value
                if (phone.length != 10) {
                    Swal.showValidationMessage('Phone Number is Incorrect')
                } else {
                    totalPrice(location_name, fname, lname, email, phone)
                    // totalPrice(location_name,fname,lname,email,phone)
                }
            } else {
                Swal.showValidationMessage('Plese Fill Out All Form')
                // Swal.resetValidationMessage()
            }

        }
    });
}
