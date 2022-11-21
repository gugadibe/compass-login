export default function setDayName(dateNum) {
    let dayName = '';

    switch (dateNum) {
        case 0:
            dayName = "Domingo"
            break;
        case 1:
            dayName = "Segunda-Feira";
            break;
        case 2:
            dayName = "Terça-Feira";
            break;
        case 3:
            dayName = "Quarta-Feira";
            break;
        case 4:
            dayName = "Quinta-Feira";
            break;
        case 5:
            dayName = "Sexta-Feira";
            break;
        case 6:
            dayName = "Sábado";
            break;
        default:
            dayName = 'Error';
            break;
    }
    return dayName;
}