function challenge1() {
    if (document.getElementById('subscribe').checked == true) {
        console.log('this works');
        document.querySelector('#emailDiv').style.display = 'initial';
    }
    else {
        document.querySelector('#emailDiv').display = 'none';
    }
}

function challenge2() {
    let bill = document.querySelector('#bill')
    let home = document.querySelector('#home')
    console.log('home value is' + home.value)
    console.log('bill value is' + bill.value)
    if (element.checked) {
        home.value = bill.value;
        home.disabled = true;
    }
    else {
        home.value = ''
        home.disable = false;
    }
}