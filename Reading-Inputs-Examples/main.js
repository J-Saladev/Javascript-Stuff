let submitFirstForm = (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value; 
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    console.log(fullname, email, phone, password);
}

let submitSecondForm = (e) => {
    e.preventDefault();
    const html = document.querySelector('input[id="html"]:checked') ? 'HTML' : '';
    const css = document.querySelector('input[id="css"]:checked') ? 'CSS' : '';
    const js = document.querySelector('input[id="js"]:checked') ? 'JavaScript' : '';
    console.log(html, css, js);
    document.querySelector('#display-langs').innerHTML = `${html} ${css} ${js}`;
}

let submitThirdForm = (e) => {
    e.preventDefault();
    const genre = document.querySelector('input[name="genre"]:checked').value;
    console.log(genre);
    document.querySelector('#display-genres').innerHTML = genre;
}