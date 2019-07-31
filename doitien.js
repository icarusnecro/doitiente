function hello() {
    let tVao = document.getElementById("tVao").value;
    console.log(tVao);
    let tRa = document.getElementById("tRa").value;
    let nhapTien = parseInt(document.getElementById("nhaptien").value);
    if(nhapTien<0){
        document.write("khong hop le");
    }
    if(tVao === "VND" && tRa ==="USD"){
        document.getElementById("result").innerHTML = nhapTien/22348;

    }
    else if(tVao ==="USD" && tRa ==="VND"){
        document.getElementById("result").innerHTML = nhapTien* 22350;
    }
    else{
        document.getElementById("result").innerHTML = nhapTien;
    }

}
