var dsST = [
    {
        "id":"1",
        "name":"Mỹ Diệu",
        "image":"cat.png",
        "energy": 80
    },
    {
        "id":"2",
        "name":"Gà Chíp",
        "image":"chick.png",
        "energy": 9
    },
    {
        "id":"3",
        "name":"Milu",
        "image":"dog.png",
        "energy": 61
    },
    {
        "id":"4",
        "name":"Cáo Lửa",
        "image":"fox.png",
        "energy": 75
    },
    {
        "id":"5",
        "name":"Cao Cổ",
        "image":"giraffe.png",
        "energy": 32
    },
    {
        "id":"6",
        "name":"Nhím Nhỏ",
        "image":"hedgehog.png",
        "energy": 12
    },
    {
        "id":"7",
        "name":"Gấu Túi",
        "image":"koala.png",
        "energy": 42
    },
    {
        "id":"8",
        "name":"Sư Tử",
        "image":"lion.png",
        "energy": 74
    },
    {
        "id":"9",
        "name":"Khỉ Khô",
        "image":"monkey.png",
        "energy": 78
    },
    {
        "id":"10",
        "name":"Cú Vọ",
        "image":"owl.png",
        "energy": 84
    },
    {
        "id":"11",
        "name":"Gấu Trúc",
        "image":"panda.png",
        "energy": 63
    },
    {
        "id":"12",
        "name":"Bé Heo",
        "image":"pig.png",
        "energy": 6
    },
    {
        "id":"13",
        "name":"Hổ Báo",
        "image":"tiger.png",
        "energy": 73
    },
    {
        "id":"14",
        "name":"Ngựa Vằn",
        "image":"zebra.png",
        "energy": 39
    },
    {
        "id":"15",
        "name":"Bọ rùa",
        "image":"ladybug.png",
        "energy": 72
    },
    {
        "id":"16",
        "name":"Ong Nâu",
        "image":"bee.png",
        "energy": 34
    },
    {
        "id":"17",
        "name":"Cự Giải",
        "image":"crab.png",
        "energy": 69
    },
    {
        "id":"18",
        "name":"Cá Voi",
        "image":"whale.png",
        "energy": 100
    }
];


function slthu(){
    document.getElementById('slthu').innerHTML = document.getElementsByClassName('thu').length;
};

var tien = 5000;


document.getElementById('tien').innerHTML = tien.toLocaleString();

function thang(){
    if(tien>15000){
        alert('Bạn đã thắng game!')
            let amthanh = new Audio('win.mp3')
            amthanh.play();
            dsST=[];
            localStorage.setItem('dsST',JSON.stringify(dsST));
            hienthu();
            document.getElementById('anh').style.display = 'block';
            document.getElementById('anh').setAttribute('src','khai.JPG')
            
           
        }
        else if(tien<50){
          alert('bạn đã thua')
          let amthanh = new Audio('lose.mp3')
          amthanh.play();
          dsST=[];
          hienthu();
        }
}

hienthu();

slthu()='';


function hienthu(){
    document.getElementById('thus').innerHTML = '';
    for (var item of dsST){
        var tv = `<div class="thu">
            <span>${item.id}</span>
            <br>
            <strong>${item.energy}</strong>
            <img src=${item.image}>
            <br>
            <label>${item.name}</label>
            <br>
            <button id="nuoi" onclick="nuoi(this)" >Nuôi</button>
            <button onclick="xiec(this)">Xiếc</button>
            </div>`;
            document.getElementById('thus').innerHTML += tv;
            
    }
    localStorage.setItem('dsST',JSON.stringify(dsST));
}

function nuoi(btn){
    var codethu = btn.parentElement;
    var mau = codethu.getElementsByTagName('strong')[0].innerHTML;
    
    console.log(codethu)
 
    
    if(tien<500){
        alert("bạn k đủ tiền!")
    }
    else{
        tien = tien - 500;
        document.getElementById('tien').innerHTML = tien.toLocaleString();
        mau  = Number(mau)+Number(48);
    console.log(mau);
    codethu.getElementsByTagName('strong')[0].innerHTML= mau;
    thang();
    }
}

function xiec(btn){
    var codethu = btn.parentElement;
    var mau = codethu.getElementsByTagName('strong')[0].innerHTML;
    var ten = codethu.getElementsByTagName('label')[0].innerHTML;
    if(mau < 99){
        alert(ten+ ' đã thăng thiên')
      for(var i=0;i<dsST.length;i++){
        if(dsST[i].name == ten ){
            dsST.splice([i],1);
            localStorage.setItem('dsST',JSON.stringify(dsST));
            hienthu();
            slthu();
            break; 
            
        }
      }  
    }
   
    else{
    mau = Number(mau) - Number(99);
    codethu.getElementsByTagName('strong')[0].innerHTML = mau;
    tien = tien+1400;
    document.getElementById('tien').innerHTML= tien.toLocaleString();
    thang();
    }

}
 
        
    
        



