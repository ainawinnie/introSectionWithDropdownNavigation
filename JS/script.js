const feature = document.getElementById('features');
const featureMenu = document.getElementById('feature-menu');
const company = document.getElementById('company');
const companyMenu = document.getElementById('company-menu')


function toggleMenu (button, menu) {
    button.addEventListener('click', function() {
        menu.classList.toggle('hide');
    } )  
    
}

toggleMenu(feature, featureMenu);
toggleMenu (company, companyMenu);
toggleMenu(featureMenu, featureMenu);
toggleMenu (companyMenu, companyMenu);

