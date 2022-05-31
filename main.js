
if (!('BarcodeDetector' in window)) { 
    alert('Barcode Error Browser not Compatible')
}

var videofeed = document.getElementById('video')

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

  navigator.mediaDevices.getUserMedia({video:{facingMode:{
    exact: 'environment'
  }}, audio:false})
  .then(function(stream){ 
    console.log(navigator.mediaDevices)
      videofeed.srcObject = stream});
}

var barcodeDetector = new BarcodeDetector({formats:['upc_a']})
var list = []

function render() {
    barcodeDetector.detect(video).then((barcodes) => {
        barcodes.forEach((barcode) => {
        
            list.push(barcode.rawValue)
            console.log(list)
            console.log(barcode.rawValue);
            playBeep()

        });
      })
  }

  setInterval(function() {
  render();
}, 2000);

var audioSorce = document.getElementById("barcodeBeep")
function playBeep(){
audioSorce.play()
}