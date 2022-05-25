const express = require("express");
const fs = require("fs"),
  filename = process.argv[2];
var bodyParser = require("body-parser");
const delay = require("delay");
const download = require("download");
const serialport = require("serialport");
const cors = require("cors");
const http = require("http");
var wifi = require("node-wifi");
// var Wifi = require('rpi-wifi-connection');
const async = require("asyncawait/async");
const await = require("asyncawait/await");
const { checkNetworkStatus } = require('check-network-status');
const axios = require('axios');
const request = require('request');
var app = express();
const {callSyncAllApi, callKegApi, callTransactionApi, callSaveKegDetailsApi} = require('./Request')
var sha1 = require('sha1');
const { connect } = require("http2");
// const { Gpio } = require('onoff');
// const { createCanvas, loadImage } = require("canvas");
// const shell = require('shelljs');

var productDataList = [];
var printerStatus = 0;
var previousPrinterStatus = 1;
var statusCount = 0;
var globalSocket;
var serialDataReceived = "";
var serialDataSend;
var coun222t = 1;
var vol = "0";
var dateTime = null;
var machine_id = "";
var token = "";
var barcodeValue = "";
var id_batch = "";

eval(fs.readFileSync("printer.js") + "");
app.use(cors());
app.set("port", 3001);

function convertToArbNumber(numericText) {
  const digitMap = {
      '1': '١',
      '2': '٢',
      '3': '٣',
      '4': '٤',
      '5': '٥',
      '6': '٦',
      '7': '٧',
      '8': '٨',
      '9': '٩',
      '0': '٠',
  };

 return String(numericText).replace(/\d/g, function(key) {
      return digitMap[key];
  });
}

// var portName = "/dev/ttyS0"; //'/dev/ttyS0'; //This is the standard Raspberry Pi Serial port '/dev/tnt1'; //
// const parsers = serialport.parsers;
// const parser = new parsers.Readline({
//   delimiter: "\n",
// });

// var sp = new serialport(portName, {
//   baudRate: 9600,
//   dataBits: 8,
//   parity: "none",
//   stopBits: 1,
//   flowControl: false,
// });

// sp.pipe(parser);

// sp.on("close", function (err) {
//   console.log("+++++port closed");
// });

// sp.on("error", function (err) {
//   console.error("++++++++++++error", err);
// });

// sp.on("open", function () {
//   console.log("++++++++port opened...");
// });

// parser.on("data", function (reply) {
//   if (reply != null || reply != undefined) {
//     serialDataReceived = reply.toString();
//   }
//   console.log("receive " + serialDataReceived);
//   sp.write(serialDataSend + "\n");
//   console.log("send " + serialDataSend);
// });

// var server = http.createServer(app).listen(app.get("port"), function () {
//   console.log("Express server listening on port " + app.get("port"));
// });

///////////////////////////////////////////////////////////////

// const Readline = serialport.parsers.Readline;
// const parser1 = new Readline();

// const gpio18 = new Gpio('18', 'out');
// const gpio21 = new Gpio('21', 'out');
// gpio18.writeSync(0);
// gpio21.writeSync(0);

// var port1 = new serialport('/dev/ttyAMA0', {
// 	baudRate: 9600,
// 	dataBits: 8,
// 	parity: 'none',
// 	stopBits: 1,
// 	flowControl: false
// });

// port1.pipe(parser1);
// port1.on('open', onPort1Open);
// parser1.on('data', onData1);
// port1.on('error', onError1);
// port1.on('close', onClose1);

// // var main_function = setInterval(main, 299);

// function onPort1Open() {
// 	console.log("port 1 open");
// }

// function chk_junk(val){
//   // console.log("Incoming data :", val);
//   let isnum = /^\d+$/.test(val);
//   console.log(isnum);

//   if (isnum == true){
//     serialDataReceived = "#"+val;
//     console.log("port 1 Recived : " + serialDataReceived);
//     main();
//   }
//   else {
//     console.log('Junk data');
//   }

// }

// function onData1(data) {
//   console.log("------------------ Data from machine ------------------ :", data);
//   if(data.includes("#")){
//     var data2 = data.split("#");
//     // serialDataReceived = data2[1];
//     // serialDataReceived = (data2[1].match(/.{1,11}/g))[0];

//     var val = (data2[1].match(/.{1,11}/g))[0];
//     chk_junk(val);
//     // console.log("port 1 Recived : " + serialDataReceived);
//   }
// }

// function onClose1() {
// 	console.log("port 1 closed");
// }

// function onError1() {
// 	console.log("somethings wrong in port 1");
// }

// // async function main() {
// //   gpio18.writeSync(1);
// // 	await sleep(11); //10
// // 	sendSerial1(serialDataSend);
// // 	console.log("serial data send :"+serialDataSend);
// // 	await sleep(119); // 100
// //
// //   gpio18.writeSync(0);
// // 	await sleep(11); //20
// // }

// async function main() {
//   gpio18.writeSync(1);
// 	await sleep(20);
// 	sendSerial1(serialDataSend);
// 	console.log("serial data send :"+serialDataSend);
//   await sleep(20);
//   gpio18.writeSync(0);
// 	await sleep(20); //20
// }

// function sleep(ms) {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, ms)
// 	})
// }

// function sendSerial1(datax) {
// 	port1.write(datax+"\n");
// }

///////////////////////////////////////////////////////////////

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

// node
wifi.init({
  iface: null, // network interface, choose a random wifi interface if set to null
});

// pi
// var wifi = new Wifi();

//socket stuff
var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {
  console.log("connected");
  getPrinterStatus();
  io.sockets.emit("CONNECTED", "nice");
  io.sockets.emit("SERIAL_DATA", serialDataReceived);
  setMachineIDandToken();
  socket.emit("FILE_DETAILS", readAll());
  socket.on("TAP", function (data) {
    console.log("data received");
  });

  // ///////////////// send eng /////////////////
  let data_eng = fs.readFileSync('eng.json');
  let lang_eng = JSON.parse(data_eng);
  socket.emit("LANG_ENG", lang_eng);

  ///////////////// send ban /////////////////
  let data_arb = fs.readFileSync('arb.json');
  // let lang_ban = JSON.parse(data_ban);
  socket.emit("LANG_ARB", data_arb);

  socket.on("READ_ALL", function (data) {
    socket.emit("FILE_DETAILS", readAll());
    console.log("data received");
  });

  socket.on("READ_ALL", function (data) {
    socket.emit("FILE_DETAILS", readAll());
    console.log("data received");
  });

  socket.on("DOWNLOAD", function (urlObject) {
    //socket.emit("FILE_DETAILS", readAll());
    var imageCount = 0;
    var urls = urlObject.split(",");
    urls.forEach((url) => {
      console.log(url);
      async(function () {
        await(
          download(url, "dist").then(() => {
            imageCount++;
            console.log("downloaded");
            if (urls.length == imageCount) socket.emit("DOWNLOADED", 1);
          })
        );
      })();
      console.log("loop +" + url);
    });
  });

  socket.on("IS_WIFI_ON", function (data) {
    // node
    checkNetworkStatus({
      timeout: 3000,
      url: 'https://google.com'
    }).then(value => {
      socket.emit("IS_WIFI_ON", {value, data})
    });

    // // pi
    // wifi.getState().then((connected) => {
    //   if(connected) {
    //     console.log("CONNECTION");
    //     console.log(connected);
    //     var object = {value: true, data: data};
    //     socket.emit("IS_WIFI_ON", object);
    //   } else {
    //     console.log("NOT CONNECTION");
    //     var object = {value: false, data: data};
    //     socket.emit("IS_WIFI_ON", object);
    //   }
     
    // })
    // .catch((error) => {
    //   console.log(error);
    //   var object = {value: false, data: data};
    //   socket.emit("IS_WIFI_ON", object);
    // });
  });

  function setMachineIDandToken() {
    try {
      var constData = readTextFile("", "machine_id.txt");
      machine_id = constData.split(',')[0];
      var tokenKey = constData.split(',')[1];
      token = sha1(tokenKey + machine_id).toLocaleUpperCase();
    } catch (error) {}
  }

 function addSlashes(data) {
   var returnValue = '';
   data.forEach((value, index) => {
     if(index == 0) {
      returnValue = value;
     } else if(index > 0){
      returnValue = returnValue + "/" + value;
     }
   });
   return returnValue;
 }

 function getProductVolumes(listOfVolumes) {
   var volumes = [];
   var prices = [];
   var discounts = [];
  listOfVolumes.forEach((volumeDetails) => {
    volumes.push(volumeDetails.volume);
    prices.push(volumeDetails.price);
    discounts.push(volumeDetails.discount);
  });
  return {volumes, prices, discounts};
 }

 function getProductDetailsFromResponse(callingFrom, productDetails) {
  var product_volumes = null;
  var product = null;
  var kegVol = null;
   if(callingFrom == "fromKeg") {
    product_volumes = getProductVolumes(productDetails.productVolumes);
    product = productDetails.product;
    kegVol = product.volume;
   } else {
    product_volumes = getProductVolumes(productDetails.listOfProductVolume);
    product = productDetails;
    kegVol = product.available_volume;
   }
   console.log("AAAAAAAAAAAAAAAAAAAAAAA   "+ kegVol);
    var fileData =
          product.id_product +
          "," +
          product.product_name +
          "," +
          kegVol +
          "," +
          product.last_refill_date +
          "," +
          product.manufacture_date +
          "," +
          product.expire_date +
          "," +
          addSlashes(product_volumes.volumes) +
          "," +
          addSlashes(product_volumes.prices) +
          "," +
          addSlashes(product_volumes.discounts) +
          "," +
          product.batch_code +
          "," +
          product.nozzle_id;
  
      var obj = {
        fileName: product.nozzle_id,
        fileData: fileData,
      };
    return obj;
  
 }

  socket.on("SYNC_ALL_DETAILS", function (param) {
    callSyncAllApi(machine_id, token, function(response){

      console.log("RESPONSE");
      console.log(response);

      if (response.listOfNozzleConfig != null) {
        response.listOfNozzleConfig.forEach((product) => {
          var obj = getProductDetailsFromResponse("fromAll",product);
          deleteAllFiles();
          writeFile(obj);
        })
        io.sockets.emit("SYNC_ALL_DETAILS", true);
      } else {
        io.sockets.emit("SYNC_ALL_DETAILS", false);
      }
    });
    
  });

  socket.on("SYNC_KEG_DETAILS", function (barcodeID) {
    barcodeValue = barcodeID;
    callKegApi(machine_id, barcodeID, token, function(response){
      if(response.product != null){
        id_batch = response.product.id_batch;
        if(response.isSuccess) {
          var obj = getProductDetailsFromResponse("fromKeg", response);
          io.sockets.emit("SYNC_KEG_DETAILS", obj);
        } else {
          io.sockets.emit("SYNC_KEG_DETAILS", null);
        }
      }
      else{
        io.sockets.emit("SYNC_KEG_DETAILS", null);
      }
    });
  });

  socket.on("SAVE_KEG_DETAILS", function (nozzelID) {
    console.log(id_batch, barcodeValue);
	  // callSaveKegDetailsApi(machine_id, nozzelID, barcodeValue, token, function(response){
    callSaveKegDetailsApi(machine_id, nozzelID, id_batch, token, function(response){
      io.sockets.emit("SAVE_KEG_DETAILS", response);
    });
  });

  socket.on("FROM_WEB_TO_BARCODE", function (data) {
	  io.sockets.emit("TO_BARCODE", data);
  });
  
   socket.on("FROM_BARCODE", function (data) {
    //  console.log("BARCODE DATAAAAAAAAAAAAAAAAAAAA")
     console.log(data);
	  io.sockets.emit("BARCODE_VALUE", data);
  });

  socket.on("WIFI_CONNECT", function (data) {
    var isSuccess = false;
    var ssid = data.split(" ")[0];
    var pass = data.split(" ")[1];
    console.log("connecting.....");

    // node
    wifi.connect({ ssid: ssid, password: pass }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected");
        isSuccess = true;
      }
      console.log("okkkkkkkk" + isSuccess);
      socket.emit("WIFI_CONNECT", isSuccess);
    });

    // // pi
    // wifi.connect({ssid:ssid, psk:pass}).then(() => {
    //   isSuccess = true
    //   console.log("okkkkkkkk" + isSuccess);
    //   socket.emit("WIFI_CONNECT", isSuccess);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     socket.emit("WIFI_CONNECT", false);
    //   });
      console.log("data received" + data);
    });

  socket.on("PRINTER_STATUS", function (data) {
    socket.emit("PRINTER_STATUS", printerStatus);
    console.log("printer status is = " + printerStatus);
  });

  socket.on("PRINT_TICKET", function (data) {

    var date = data["date"].split(" ")[0];
    var time = data["date"].split(" ")[1];
    var productName = data["productName"];
    var productPrice = data["price"];
    var productQuantity = data["quantity"];
    var barcode = data["barcode"];
    var plastic = data["plastic"];
    var belowCode = data["belowCode"];
    var batchCode = data["batchCode"];
    // console.log(data);

    ///////////////////////////////////////////

    const canvasTxt = require('canvas-txt').default;

    const width = 450;
    const height = 380;

    // Add post object with the content to render
    const engTxt = {
      title1: "Refill Date: ",
    	title2: "Best Before: ",
      title3: "Time: ",
      title4: "Variant: ",
      title5: "Volume: ",
      title6: "Price: ",
      title7: "Batch No: ",
    }

    const arbTxt = {
      title1: "إعادة التعبئة تاريخ:",
    	title2: "يفضل استخدامه خلال:",
      title3: "وقت: ",
      title4: "المنتج: ",
      title5: "مقدار: ",
      title6: "السعر: ",
      title7: "رقم الحزمة: ",
      sub1: "تاريخ الشراء",
      sub2: "٤ شهور من",
      sar: "ر.س",
      li: "إل",
      productName: "زيت الذرة",
      ins1: "يُنصح المستخدمون بالحفاظ على نظافة",
      ins2: "هذه العبوّة القابلة لإعادة التعبئة",
      ins3: ".لضمان الصلاحية الأمثل للمنتج",
      ins4: "تعليمات الغسيل: اغسل العبوّة والغطاء تحت الماء",
      ins5: "الجاري النظيف ٣ مرات على الأقل وجففه جيدًا",
      ins6: ".مع ضمان عدم ترك أي بقايا من الماء في العبوّة",

    }

    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // // Set the style of the test and render it to the canvas

    // 600 is the x value (the center of the image)
    // 170 is the y (the top of the line of text)

    if(slang == "english"){
      context.font = "14pt 'PT Sans'";
      context.textAlign = "right";
      context.fillStyle = "black";

      context.fillText(engTxt.title1, 210, 30);
      context.fillText(engTxt.title2, 210, 60);
      context.fillText(engTxt.title3, 210, 90);
      context.fillText(engTxt.title4, 210, 120);
      context.fillText(engTxt.title5, 210, 150);
      context.fillText(engTxt.title6, 210, 180);
      context.fillText(engTxt.title7, 210, 210);

      context.fillText(date, 400, 30);
      context.fillText("4 months from refill", 400, 60);
      // context.fillText("from refill date", 400, 90);
      context.fillText(time, 400, 90);
      context.fillText(productName, 400, 120);
      context.fillText(productQuantity/1000 + " L", 400, 150);
      context.fillText(productPrice + " SAR", 400, 180);
      context.fillText(batchCode, 400, 210);

      context.font = "9pt 'PT Sans'";
      context.fillText("USERS ARE ADVICED TO MAINTAIN HYGIENE OF THIS", 400, 250);
      context.fillText("REFILLABLE CONTAINER, TO ENSURE OPTIMUM SHELF", 400, 265);
      context.fillText("LIFE OF THE PRODUCT.", 320, 280);

      context.fillText("WASHING INSTRUCTIONS: WASH THE BOTTLE", 380, 300);
      context.fillText("AND LID UNDER CLEAN RUNNING WATER AT ", 380, 315);
      context.fillText("LEAST 3 TIMES AND DRY THOROUGHLY ENSURING ", 400, 330);
      context.fillText("NO RESIDUE OF WATER IS LEFT IN THE BOTTLE. ", 400, 345);

    }
    if(slang == "arabic"){
      context.font = "16pt 'PT Sans'";
      context.textAlign = "left";
      context.fillStyle = "black";

      context.fillText(arbTxt.title1, 240, 30);
      context.fillText(arbTxt.title2, 240, 60);
      context.fillText(arbTxt.title3, 240, 100);
      context.fillText(arbTxt.title4, 240, 130);
      context.fillText(arbTxt.title5, 240, 160);
      context.fillText(arbTxt.title6, 240, 190);
      context.fillText(arbTxt.title7, 240, 220);

      let arb_date = new Intl.DateTimeFormat('ar-EG', {day: 'numeric', month: 'numeric',year : 'numeric'}).format((new Date(date)).getTime());
      context.fillText(arb_date, 80, 30);
      context.fillText(arbTxt.sub1, 80, 60);
      context.fillText(arbTxt.sub2, 80, 80);
      context.fillText(convertToArbNumber(time), 80, 100);
      context.fillText(arbTxt.productName, 80, 130);
      context.fillText(convertToArbNumber(productQuantity/1000) + arbTxt.li, 80, 160);
      context.fillText(convertToArbNumber(productPrice) + arbTxt.sar, 80, 190);
      context.fillText(convertToArbNumber(batchCode), 80, 220);

      context.font = "13pt 'PT Sans'";
      context.fillText(arbTxt.ins1, 100, 260);
      context.fillText(arbTxt.ins2, 120, 275);
      context.fillText(arbTxt.ins3, 130, 290);

      context.fillText(arbTxt.ins4, 70, 320);
      context.fillText(arbTxt.ins5, 80, 335);
      context.fillText(arbTxt.ins6, 75, 350);
    }

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("/home/pi/Documents/shampoo/Demo/image.png", buffer);
    shell.exec("convert /home/pi/Documents/shampoo/Demo/image.png -depth 1 -type bilevel BMP3:/home/pi/Documents/shampoo/Demo/out.bmp");

    ///////////////////////////////////////////



    printTicket(
      "PRINTER,print," +
        date +
        "," +
        time +
        "," +
        productName.replace(/\s/g, '_') +
        "," +
        productPrice +
        "," +
        productQuantity +
        "," +
        barcode +
        "," +
        plastic +
        "," +
        belowCode +
        "," +
        batchCode
    );
    // testPrint();
  });

  function deleteAllFiles() {
    try {
      const fileFolder = "./files/";
      fs.readdirSync(fileFolder).forEach((file) => {
        fs.unlinkSync("files/"+ file);
        console.log("DONEEEEEEEEEEEE");
      });
    } catch (error) {
      console.log(error);
    }
  }

  function writeFile(data) {
    setTimeout(function() {
      fs.writeFile(
        "files/" + data["fileName"] + ".txt",
        data["fileData"],
        function (err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    }, 100);
  }

  socket.on("WRITE_FILE", function (data) {
    console.log("data received " + data["fileName"] + " " + data["fileData"]);
    writeFile(data);
    setTimeout(() => {
      socket.emit("FILE_DETAILS", readAll());
    }, 1000);
  });


  socket.on("WRITE_LOG_FILE", function (data) {
    writeLogFile(data);
  });

  socket.on("SERIAL_DATA", function (data) {
    serialDataSend = data;
    socket.emit("SERIAL_DATA", serialDataReceived);
  });
});

function writeLogFile(data) {
  console.log(data);
  var logData =
        data.time +
        "," +
        data.nozzleId +
        "," +
        data.productId +
        "," +
        data.productVolume +
        "," +
        data.netPrice;

  const replacer = new RegExp(":", 'g')
  var fileName = data.time.replace(replacer, '-')
  console.log("FILE NAME: "+ fileName);
    setTimeout(function() {
      fs.writeFile(
        "log/" + fileName + ".txt",
        logData,
        function (err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    }, 100);
}

function printerStatusReturn(data) {
  data = 0
  console.log("printer status returend" + data);
  console.log("previous " + previousPrinterStatus);
  console.log("latest " + printerStatus);
  if (data != printerStatus) {
    console.log("count" + statusCount);
    if (statusCount > 1) {
      previousPrinterStatus = printerStatus;
      printerStatus = data;
      io.sockets.emit("PRINTER_STATUS", printerStatus);
      console.log("status sent");
      if (printerStatus == 0) {
        console.log("test print done");
        testPrint();
      }
      statusCount = 0;
    }
    statusCount = statusCount + 1;
  } else {
    statusCount = 0;
  }
}
function sendAll() {
  var fileDataList = readLogFile();
  fileDataList.forEach((fileObj) => {
    console.log(fileObj);
    callTransactionApi(machine_id, fileObj, token, function(response){
      console.log(response);
      if(response.isSuccess) {
        try {
          fs.unlinkSync("log/"+ fileObj.fileName);
          console.log("DONEEEEEEEEEEEE");
        } catch (error) {
          console.log(error);
        }
      }
    });
  });
}

function readAll() {
  sendAll();
  try {
    productDataList = [];
    const fileFolder = "./files/";
    fs.readdirSync(fileFolder).forEach((file) => {
      console.log(file);
      var fileData = readTextFile("files/", file);
      obj = {
        fileName: file.split(".")[0],
        productId: fileData.split(",")[0],
        productName: fileData.split(",")[1],
        productRemaining: fileData.split(",")[2],
        productRFD: fileData.split(",")[3],
        productMFD: fileData.split(",")[4],
        productEXD: fileData.split(",")[5],
        productVolumes: fileData.split(",")[6],
        productPrices: fileData.split(",")[7],
        productDiscounts: fileData.split(",")[8],
        batchNo: fileData.split(",")[9],
        nozzleNumber: fileData.split(",")[10],
      };
      productDataList.push(obj);
    });
    
  } catch (err) {
    console.log("File error");
  }

  productDataList.forEach(function (item, index, array) {
    console.log(item, index);
  });
  return productDataList;
}

function readTextFile(path, file) {
  try {
    var data = fs.readFileSync(path + file, "utf8");
    console.log(data.toString());
    return data.toString();
  } catch (err) {
    console.log("File error");
  }
}

function readLogFile() {
  var logDataList = [];
  try {
    const fileFolder = "./log/";
    fs.readdirSync(fileFolder).forEach((file) => {
      console.log("eeeeeeeeeeeeeeeeee");
      var fileData = readTextFile("log/",file);
      obj = {
        fileName: file,
        time: fileData.split(",")[0],
        nozzleId: fileData.split(",")[1],
        productId: fileData.split(",")[2],
        productVolume: fileData.split(",")[3],
        netPrice: fileData.split(",")[4],
      };
      logDataList.push(obj);
    });
  } catch (err) {
    console.log("File error");
  }
  return logDataList;
}
