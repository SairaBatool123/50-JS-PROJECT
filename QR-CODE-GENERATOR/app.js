let qrinput = document.querySelector('#qr-input');
let qrbtn = document.querySelector('#qr-btn');
let qrimg = document.querySelector('#qr-img');

// console.log(qrbtn , qrinput , qrimg);

qrbtn.addEventListener('click', function () {
    let input = qrinput.value
    if (input == '') {           //(!input)
        Swal.fire({
            title: "Oops...",
            text: "Paste your URL here or type something else",
            icon: "question"
          });
    } else {
        //link of api https://goqr.me/api/
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        qrimg.alt = `QR Code for ${input}`
    }
})
