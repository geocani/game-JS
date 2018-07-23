let tentative = 10;

let decompteTentative = () => {
    tentative--
    console.log('​decompteTentative -> tentative', tentative);
    if (tentative <= 0){
        alert('perdu')
    }
}