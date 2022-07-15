function goToBooking() {
    window.location.assign(`booking.html`);
}

function proceedPayment(){
    let price = document.getElementById(`packages`).value;
    let howManyPeeps = document.getElementById(`number-of-peeps`).value;
    let total = price * howManyPeeps;

    let tString = new Intl.NumberFormat().format(total);

    document.getElementById(`total`).innerHTML = tString;

    setTimeout(() => {
        alert(`Thank you for joining NARSIS TOURS!`);
        window.location.assign(`about.html`);
    }, 1500);
}