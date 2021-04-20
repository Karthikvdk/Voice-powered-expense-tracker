const formatDate = (date) => {
    const formattedDate = new Date(date);
    let month = `${formattedDate.getMonth() + 1}`;
    const day = `${formattedDate.getDate()}`;
    const year = `${formattedDate.getFullYear()}`;

    if(month.length < 2) {
        month = `0${month}`
    }

    if(day.length < 2) {
        day = `0${day}`
    }

    return [year,month,day].join('-');
}

export default formatDate;