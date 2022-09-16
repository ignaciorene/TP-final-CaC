// MENU ANIMATIONS
const hamburger = document.querySelector(".hamburger");
const navMenu=document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.menu-link').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//SEARCHBAR ANIMATIONS

const searchInput=document.querySelector('.searchbar-input');
const searchButton=document.querySelector('.searchbar-box');
const searchCancel=document.querySelector('.searchbar-cancel-box');
const logoContainer=document.querySelector('.logo-container');
const searchbarContainer=document.querySelector('.menu-search-container');

searchButton.addEventListener('click', ()=>{
  searchInput.classList.toggle('active');
  searchButton.classList.toggle('active');
  searchCancel.classList.toggle('active');
  logoContainer.classList.toggle('active');  
  searchbarContainer.classList.toggle('active');  
})

searchCancel.addEventListener('click', ()=>{
    searchInput.classList.remove('active');
    searchButton.classList.remove('active');
    searchCancel.classList.remove('active');
    logoContainer.classList.remove('active');
    searchbarContainer.classList.remove('active');

    searchInput.querySelector('input').value='';
})

const logoButton=document.querySelector('.logo-container img');

logoButton.addEventListener('click',()=>{
    window.location='./index.html';
})