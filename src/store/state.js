let defaultiCity = '上海'
try {
    if(localStorage.city){
        defaultiCity = localStorage.city
    }
}catch(e){}

export default {
    city:defaultiCity
}