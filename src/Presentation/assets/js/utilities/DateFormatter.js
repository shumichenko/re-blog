
export const DateFormatter = function(props) {
    let dateInstance = new Date(props.date);
    let dateString = '';
    let dayInSeconds = 60 * 60 * 24;
    let dateDifference = Date.now() - dateInstance.getTime();
    
    let monthDictionary = {
        0: 'января',  1:  'февраля', 2:  'марта', 
        3: 'апреля',  4:  'мая',     5:  'июня',
        6: 'июля',    7:  'августа', 8:  'сентября',
        9: 'октября', 10: 'ноября',  11: 'декабря'
    };
    let textPart = dateInstance.getDate() + ' ' + 
        monthDictionary[dateInstance.getMonth()] + ' ' + dateInstance.getFullYear();

    if (dayInSeconds > dateDifference)
        textPart = 'сегодня';
    else if ((dayInSeconds * 2) > dateDifference)
        textPart = 'вчера';
    
    dateString = textPart + ' в ' + dateInstance.getUTCHours() + ':' + dateInstance.getUTCMinutes();
    return (dateString);    
};