const mon_hoc = [];
const thu_ = [{thu:2,time:[]},{thu:3,time:[]},{thu:4,time:[]},{thu:5,time:[]},{thu:6,time:[]},{thu:7,time:[]}];
var tinchi = 0;
var cmon = (ctime = ctc = false);
function check(kt, id) {
  var input = document.getElementById(id);
  var item = document.getElementById(kt);
  var sub = document.getElementById("sub");
  var mamon = item.childNodes[1].innerText;
  var tc = parseInt(item.childNodes[5].innerText);
  var time = item.childNodes[9].innerText;
  var thu = parseInt(item.childNodes[7].innerText);
  var starttime = time.split("-")[0].toString();
  var endtime = time.split("-")[1].toString();
  mamon = mamon.replace(/[^a-z]/gi, "");
  // console.log(thu_.indexOf(thu));
  if (input.checked) {
    // ktra mon
    if (mon_hoc.includes(mamon)) {
      alert("Trùng môn");
      cmon = false;
    } else {
      cmon = true;
    }
    // them, ktra time
    for(i = 0; i < thu_.length; i++){
      if(thu_[i].thu == thu){
        if(thu_[i].time.includes(starttime) || thu_[i].time.includes(endtime)){
          alert("Trùng giờ");
          ctime  = false;
        }else{
          ctime = true;
        }
        thu_[i].time.push(starttime);
        thu_[i].time.push(endtime);
      }
    }
    // them mon
    mon_hoc.push(mamon);
    // them tin chi
    tinchi += tc;
  } else {
    // xoa thoi gian
    for(i = 0; i < thu_.length; i++){
      if(thu_[i].thu == thu){
        var idx = thu_[i].time.indexOf(starttime);
        thu_[i].time.splice(idx,1);
        idx = thu_[i].time.indexOf(endtime);
        thu_[i].time.splice(idx,1);
        ctime = true;
      }
    }
    // xoa mon
    var idx = mon_hoc.indexOf(mamon);
    mon_hoc.splice(idx, 1);
    cmon = true;
    // xoa tin chi
    tinchi -= tc;
  }
  // ktra tin chi
  if (tinchi >= 12) {
    ctc = true;
  } else {
    ctc = false;
  }
  // an/hien nut
  if (cmon == true && ctime == true && ctc == true) {
    sub.disabled = false;
  } else {
    sub.disabled = true;
  }
  // console.log(cmon);
  // console.log(ctime);
  // console.log(ctc);
}
