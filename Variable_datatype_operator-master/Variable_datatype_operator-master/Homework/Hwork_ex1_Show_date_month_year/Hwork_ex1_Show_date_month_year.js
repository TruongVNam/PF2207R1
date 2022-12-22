p {
    font: "bold";
}
function showybirthday() {
    let year_ybt = document.getElementById("yearborn").value;
    let month_ybth = document.getElementById("monthborn").value;
    let date_ybth = document.getElementById("dateborn").value;
    //let showall = date_ybth+"-"+month_ybth+"-"+year_ybt
        
    console.log (date_ybth);
    console.log(month_ybth);
    console.log(year_ybt);
    //document.getElementById("table1").innerHTML = showall
    document.getElementById("table1").innerHTML = date_ybth+"-"+month_ybth+"-"+year_ybt
}