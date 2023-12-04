export function getFormattedDateTime() {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const currentDate = new Date();

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${dayOfWeek}, ${hours}:${minutes}`;

    return formattedDateTime;
}