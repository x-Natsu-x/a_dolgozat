const szoveg = document.getElementById("szoveg")
const email = document.getElementById("email")
const nev = document.getElementById("Nev")
form = document.getElementById("form")
const szam = document.getElementById("szam")
const ertek = document.getElementById("ertek")
const kocka = document.getElementById("kt")
const kerulet = document.getElementById("kerulet")
const terulet = document.getElementById("terulet")
const kepecske = document.getElementById("kepecske")
const vege = document.getElementById("vege")
const haha = document.getElementById("szin")


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    szoveg.innerHTML = `${nev.value}, ${email.value}`
})


szam.addEventListener("input", ()=>{
    console.log(Number(szam.value));
    let ja = Number(szam.value)
    ertek.innerHTML = `${ja}`
})


kocka.addEventListener("change", ()=>{
    let k_ertek = Number(kocka.value)*4
    let t_ertek = (Number(kocka.value)*Number(kocka.value))
    kerulet.innerHTML = `${k_ertek} cm`
    terulet.innerHTML = `${t_ertek} cm2`
})

document.querySelectorAll('button[name="kep"]').forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if (Number(btn.value) === 1) {
            kepecske.src = "letöltés.jfif"
        } 
        if (Number(btn.value) === 2) {
            kepecske.src = "tel.jfif"
        }
    })
})

vege.addEventListener("click", ()=>{
    document.querySelectorAll('input[type="radio"][name="szinek"]').forEach(rad =>{
        if (rad.checked) {
            console.log(rad.value);
            
            szin.innerHTML = rad.value
        }
    })
})
