

document.querySelector('#menu').addEventListener('click', () => {
    console.log("Clicked")
    document.querySelectorAll('.link-labels').forEach(el => el.style.display = 'none')
    document.querySelector('.logo-wrap').style.display = 'none'
    document.querySelector('#sidebarMenu').style.width = 'auto'
} )



document.querySelector('#userDropBtn').addEventListener('click', () => {
    let dropdown = document.querySelector('#userDropdown')   
    dropdown.classList.toggle('show')
})