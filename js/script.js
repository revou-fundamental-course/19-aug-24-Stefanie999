// Ini Javascript
// Mengganti nama di bagian welcome sesuai dengan input user di prompt
function replaceName() {
    let nama = prompt("Silahkan input nama Anda","");
    document.getElementById("nama").innerHTML = nama;
}

replaceName();

// Membuat banner autoslide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList =document.getElementsByClassName("banner-img");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000) // interval 3 detik (per gambar)

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Validasi form
function validateForm() {
    const nama = document.forms["message-form"]["nama"].value;
    const tanggalLahir = document.forms["message-form"]["tanggal-lahir"].value;
    const jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "" || nama.includes("@")==true) {
        alert("Tidak boleh ada input field yang kosong");
        return false;
    }

    viewReceivedResponse(nama, tanggalLahir, jenisKelamin, pesan);
    return false;
}

// Menampilkan respon yang diterima sesuai dengan input user
function viewReceivedResponse(nama, tanggalLahir, jenisKelamin, pesan) {
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("nama-user").innerHTML = nama;
    document.getElementById("tanggal-lahir-user").innerHTML = tanggalLahir;
    document.getElementById("jenis-kelamin-user").innerHTML = jenisKelamin;
    document.getElementById("pesan-user").innerHTML = pesan;
    document.getElementById("user-submission-time").innerHTML = new Date();
}

//
document.querySelector('.hamburger-menu').onclick = function() {
    const items = document.querySelector('.nav-container');
    if (items.style.display === 'flex') {
        items.style.display = 'none';
    } else {
        items.style.display = 'flex';
    }
};