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
