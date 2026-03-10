// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika Barang-menu di Klik 
document.querySelector('#Barang-menu').onclick =()=> {
    navbarNav.classList.toggle('active');
}
//Klik di Luar sidebar untuk menghilangkan nav 
const Barang = document.querySelector ('#Barang-menu');

document.addEventListener('click',function(e){
    if (!Barang.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})