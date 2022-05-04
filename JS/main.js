var socket;
var productCount = 0;
var actualVolumeCount = 0;
var validVolumeCount = 0;

var productName;
var productVolumes;
var productPrices;
var productEXD;
var productMFD;
var productRFD;
var batchNo;
var productId;
var fileName;
var productDiscounts;
var productRemaining;

//product view DIV
var divNumOfProducts4;
var divNumOfProducts6;
var divNumOfProducts8;
var divNumOfProducts12;

var divBtnProduct4Row1;
var divBtnProduct4Row2;
var divBtnProduct4Row3;
var divBtnProduct4Row4;

var divBtnProduct6Row1;
var divBtnProduct6Row2;
var divBtnProduct6Row3;

var divDebugProductVol1;
var divDebugProductVol2;
var divDebugProductVol3;
var divDebugProductVol4;
var divDebugProductVol5;
var divDebugProductVol6;

var vol1Price;
var vol2Price;
var vol3Price;
var vol4Price;
var vol5Price;
var vol6Price;

var vol1Discount;
var vol2Discount;
var vol3Discount;
var vol4Discount;
var vol5Discount;
var vol6Discount;

var divBtnProduct4Row1Col1;
var divBtnProduct4Row1Col2;
var divBtnProduct4Row2Col1;
var divBtnProduct4Row2Col2;
var divBtnProduct4Row3Col1;
var divBtnProduct4Row3Col2;
var divBtnProduct4Row4Col1;
var divBtnProduct4Row4Col2;

var no4imgProduct1Image1;
var no4product1Detail1;
var no4product1Detail2;

var no4imgProduct2Image1;
var no4product2Detail1;
var no4product2Detail2;

var no4imgProduct3Image1;
var no4product3Detail1;
var no4product3Detail2;

var no4imgProduct3Image1;
var no4product4Detail1;
var no4product4Detail2;

var divBtnProduct6Row1;
var divBtnProduct6Row2;
var divBtnProduct6Row3;

var divBtnProduct6Row1Col1;
var divBtnProduct6Row1Col1No;
var divBtnProduct6Row1Col2;
var divBtnProduct6Row1Col2No;
var divBtnProduct6Row2Col1;
var divBtnProduct6Row2Col1No;
var divBtnProduct6Row2Col2;
var divBtnProduct6Row2Col2No;
var divBtnProduct6Row3Col1;
var divBtnProduct6Row3Col1No;
var divBtnProduct6Row3Col2;
var divBtnProduct6Row3Col2No;

var no6imgProduct1Image1;
var no6product1Detail1;

var no6imgProduct2Image1;
var no6product2Detail1;

var no6imgProduct3Image1;
var no6product3Detail1;

var no6imgProduct4Image1;
var no6product4Detail1;

var no6imgProduct5Image1;
var no6product5Detail1;

var no6imgProduct6Image1;
var no6product6Detail1;

var divBtnProduct8Row1;
var divBtnProduct8Row2;
var divBtnProduct8Row3;
var divBtnProduct8Row4;

var divBtnProduct8Row1Col1;
var divBtnProduct8Row1Col1No;
var divBtnProduct8Row1Col2;
var divBtnProduct8Row1Col2No;
var divBtnProduct8Row2Col1;
var divBtnProduct8Row2Col1No;
var divBtnProduct8Row2Col2;
var divBtnProduct8Row2Col2No;
var divBtnProduct8Row3Col1;
var divBtnProduct8Row3Col1No;
var divBtnProduct8Row3Col2;
var divBtnProduct8Row3Col2No;
var divBtnProduct8Row4Col1;
var divBtnProduct8Row4Col1No;
var divBtnProduct8Row4Col2;
var divBtnProduct8Row4Col2No;

var no8imgProduct1Image1;
var no8product1Detail1;

var no8imgProduct2Image1;
var no8product2Detail1;

var no8imgProduct3Image1;
var no8product3Detail1;

var no8imgProduct4Image1;
var no8product4Detail1;

var no8imgProduct5Image1;
var no8product5Detail1;

var no8imgProduct6Image1;
var no8product6Detail1;

var no8imgProduct7Image1;
var no8product7Detail1;

var no8imgProduct8Image1;
var no8product8Detail1;

var divBtnProduct12Row1;
var divBtnProduct12Row2;
var divBtnProduct12Row3;
var divBtnProduct12Row4;

var divBtnProduct12Row1Col1;
var divBtnProduct12Row1Col1No;
var divBtnProduct12Row1Col2;
var divBtnProduct12Row1Col2No;
var divBtnProduct12Row1Col3;
var divBtnProduct12Row1Col3No;
var divBtnProduct12Row2Col1;
var divBtnProduct12Row2Col1No;
var divBtnProduct12Row2Col2;
var divBtnProduct12Row2Col2No;
var divBtnProduct12Row2Col3;
var divBtnProduct12Row2Col3No;
var divBtnProduct12Row3Col1;
var divBtnProduct12Row3Col1No;
var divBtnProduct12Row3Col2;
var divBtnProduct12Row3Col2No;
var divBtnProduct12Row3Col3;
var divBtnProduct12Row3Col3No;
var divBtnProduct12Row4Col1;
var divBtnProduct12Row4Col1No;
var divBtnProduct12Row4Col2;
var divBtnProduct12Row4Col2No;
var divBtnProduct12Row4Col3;
var divBtnProduct12Row4Col3No;

var no12imgProduct1Image1;
var no12Product1Detail1;

var no12imgProduct2Image1;
var no12product2Detail1;

var no12imgProduct3Image1;
var no12product3Detail1;

var no12imgProduct4Image1;
var no12product4Detail1;

var no12imgProduct5Image1;
var no12product5Detail1;

var no12imgProduct6Image1;
var no12product6Detail1;

var no12imgProduct7Image1;
var no12product7Detail1;

var no12imgProduct8Image1;
var no12product8Detail1;

var no12imgProduct9Image1;
var no12product9Detail1;

var no12imgProduct10Image1;
var no12product10Detail1;

var no12imgProduct11Image1;
var no12product11Detail1;

var no12imgProduct12Image1;
var no12product12Detail1;

//Volume DIVs

var divNoOfVolumes2;
var divNoOfVolumes3;
var divNoOfVolumes6;
var vol2Row1;
var vol2Row2;

var vol2Row1Image1;
var vol2Row2Image1;

var vol3Row1;
var vol3Row2;
var vol3Row3;
var vol3Row1Image1;
var vol3Row2Image1;
var vol3Row3Image1;

var vol6Row3;
var vol6Row1Col1;
var vol6Row1Col2;
var vol6Row2Col1;
var vol6Row2Col2;
var vol6Row3Col1;
var vol6Row3Col2;

var vol6Row1Col1Image1;
var vol6Row1Col2Image1;
var vol6Row2Col1Image1;
var vol6Row2Col2Image1;
var vol6Row3Col1Image1;
var vol6Row3Col2Image1;

var vol2product1Detail1;
var vol2product1Detail2;
var vol2product1Detail3;
var vol2product2Detail1;
var vol2product2Detail2;
var vol2product2Detail3;

var vol3product1Detail1;
var vol3product1Detail2;
var vol3product1Detail3;
var vol3product2Detail1;
var vol3product2Detail2;
var vol3product2Detail3;
var vol3product3Detail1;
var vol3product3Detail2;
var vol3product3Detail3;

var vol6product1Detail1;
var vol6product1Detail2;
var vol6product1Detail3;
var vol6product2Detail1;
var vol6product2Detail2;
var vol6product2Detail3;
var vol6product3Detail1;
var vol6product3Detail2;
var vol6product3Detail3;
var vol6product4Detail1;
var vol6product4Detail2;
var vol6product4Detail3;
var vol6product5Detail1;
var vol6product5Detail2;
var vol6product5Detail3;
var vol6product6Detail1;
var vol6product6Detail2;
var vol6product6Detail3;

var btnDeclineImage;
var btnConfirmImage;
var btnNextImage;
var btnEngImage;
var btnBenImage;
var tapToStartcontainerbackground;
var btnStopImage;
var btnBckImage;
var btnBckImage1;
var btnBckImage2;

const STATE_IDLE = "00";
const STATE_PORDUCT_SELECTION = "01";
const STATE_VOLUME_SELECTION = "02";
const STATE_VOLUME_CONFIRMATION = "03";
const STATE_FILL = "04";
const STATE_FILL_STOP = "05";
const STATE_EMERGENCY = "06";
const STATE_SERVICE = "07";
const STATE_CIP = "08";
const BUTTON_STOP = "09";
const STATE_START_AUTO_FEED = "10";
const STATE_START_MANUAL_FEED = "11";
const STATE_START_CIP = "12";
const STATE_CIP_PAUSE = "13";
const STATE_CIP_STOP = "14";

var returnStatusUpdate;

var selected_nozzel_number = "0";
var ipc_state = "0";
var selectedVolume = "0";

var serialReturnState = "1";
var serialReturnEmergency = "0";
var serialReturnNozzleNumber = "0";
var serialReturnVolume = "0";
var serialReturnMMCUError = "0";

var plastic500 = "55";
var plastic1000 = "70";
var plasticVim = "40";

var productList = [];
var volumeList = [];
var selectedProduct;
var selectedProductName;
var selectedBatchCode;
var selectedProductID;
var selectedProductPrice;

var imgProductScreenLogo;
var imgProductScreenBottle;
var idProductVolumeSave1;
var idProductVolumeSave2;
var idVolumePrice500;
var idVolumePrice1L;

var divSelectedVolume;
var divSelectedVolumePrice;
var prodName1;
var prodName2;
var divSelectedProductLogo;
var divSelectedProductBottle;
var divImgWarning1;
var divImgWarning2;
var divImgWarning3;
var divProduct1;
var divProduct2;
//var divProduct3;
var divConfirmedPrice;
var divConfirmedVolume;
var divRefilGuideImg;

//Debug page variables
var divCurrentVolume;
var divRefillVolume;
var divLastRefillDate;
var divManufactureDate;
var divExpireDate;
var divBatchNoValue;
var divPrice500;
var divPrice1000;
var divDiscountPrice;
var divAlertText;
var divAlertTextSettings;
var divFillingText;
var divFillingAmount;
var divFillingAmountArb;
var selectDropdown;

var idPrice1;
var idPrice2;
var idPrice3;
var idPrice4;
var idPrice5;
var idPrice6;

var idDiscount1;
var idDiscount2;
var idDiscount3;
var idDiscount4;
var idDiscount5;
var idDiscount6;

var debugProduct;
var passcode = "";
var printerErrorCount = 0;

var printerStatus;
var isProductSelected = false;

var g_timer = null;
var r_timer = null;

var idNozzel1;
var idNozzel2;
var idNozzel3;
var idNozzel4;
var idNozzel5;
var idNozzel6;
var idNozzel7;
var idNozzel8;
var idNozzel9;
var idNozzel10;
var idNozzel11;
var idNozzel12;

var idCipName1;
var idCipName2;
var idCipName3;
var idCipName4;
var idCipName5;
var idCipName6;
var idCipName7;
var idCipName8;
var idCipName9;
var idCipName10;
var idCipName11;
var idCipName12;

var idCipImage1;
var idCipImage2;
var idCipImage3;
var idCipImage4;
var idCipImage5;
var idCipImage6;
var idCipImage7;
var idCipImage8;
var idCipImage9;
var idCipImage10;
var idCipImage11;
var idCipImage12;

var btnCipPause;
var divCipPause;
var isCipPaused = false;
var enabledCIPNozzles = [];

var divAlertLayerCIP;
var idCipVolumeAmount;
var idDivAlertContainer1;
var idDivAlertContainer2;
var idDivAlertContainer3;

//api result view
var divVolume1Layer;
var divVolume2Layer;
var divVolume3Layer;
var divVolume4Layer;
var divVolume5Layer;
var divVolume6Layer;

var idProductNameAPI;
var idRefillVolumeAPI;
var idLastRefillDateAPI;
var idManufactureDateAPI;
var idExpireDateAPI;
var idbatchNoAPI;

var idVolume1API;
var idVolume2API;
var idVolume3API;
var idVolume4API;
var idVolume5API;
var idVolume6API;

var idVolume1PriceAPI;
var idVolume2PriceAPI;
var idVolume3PriceAPI;
var idVolume4PriceAPI;
var idVolume5PriceAPI;
var idVolume6PriceAPI;

var selectedCipNozzel = 0;
var isSyncButtonClicked = false;
var barcodeReaderValue = "";
var kegResponse = null;
var barcodeInputHidden;
var barcodeTimer = null;
var selectedLanguage = null;

var eng_json = null;
var arb_json = null;

var eng_li = null;
var arb_li = null;

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

var enc = new TextDecoder("utf-8");
function fetchJson(){
  try {
    eng_li = eng_json.eng;
    arb_li = JSON.parse(enc.decode(arb_json)).arb;
  }
  catch (error) {
    console.log(error);
  }
};

$(document).ready(function () {
  try {
    function connect() {
      socket = io.connect("http://localhost:3001");
      socket.on("CONNECTED", function (data) {
        if (data == "nice") {
          ipc_state = STATE_IDLE;
          selected_nozzel_number = "0";
          selectedVolume = "0";
          hideAll();
          // $("div#tapToStart-container").show();
          $("div#debug-container").show();
          // $("div#barcode-data-container").show();
          // $("div#barcode-data-view-container").show();
          socket.emit("PRINTER_STATUS", 0);
          document.getElementById("txtBarcodeIDHidden").focus();
        }
        console.log(data);
      });

      socket.on("LANG_ENG", function (data) {
        eng_json = data;
      });

      socket.on("LANG_ARB", function (data) {
        arb_json = data;
      });

      socket.on("FILE_DETAILS", function (obj) {
        console.log(obj);
        if (obj != null) {
          console.log("read file details : " + obj);
          initData(obj);
        }
      });

      socket.on("SAVE_KEG_DETAILS", function (obj) {
        console.log(obj);
        if (obj.isSuccess) {
          socket.emit("WRITE_FILE", kegResponse);
          hideAll();
          $("div#settings-container").show();
          $("div#divAlertLayerSettings").show();
          $("#divAlertLayerSettings").css({ backgroundColor: "forestgreen" });
          divAlertTextSettings.innerHTML = "DATA SYNC SUCCESSFULL .. !!";
        } else {
          hideLoading();
        }
      });

      socket.on("BARCODE_VALUE", function (obj) {
        console.log("BARCODE_VALUE");
        console.log(obj);
        barcodeReaderValue = obj;
        document.getElementById("txtBarcodeID").value = barcodeReaderValue;
        setTimeout(function () {
          showLoading();
          socket.emit("SYNC_KEG_DETAILS", barcodeReaderValue);
        }, 1000);
      });

      socket.on("DOWNLOADED", function (obj) {
        console.log(obj);
        console.log("download completed");
        hideLoading();
      });

      socket.on("IS_WIFI_ON", function (obj) {
        console.log(obj);
        if (obj && obj.value) {
          if (obj && obj.data == "fromSync") {
            isSyncButtonClicked = false;
            socket.emit("SYNC_ALL_DETAILS", "");
          } else {
            hideAll();
            // socket.emit("FROM_WEB_TO_BARCODE", "13");
            $("div#barcode-data-container").show();
            // document.getElementById("txtBarcodeID").focus();
            barcodeInputHidden.focus();
          }
        } else {
          hideAll();
          $("div#updateUI-container").show();
        }
      });

      socket.on("SYNC_ALL_DETAILS", function (obj) {
        console.log(obj);
        $("div#divAlertLayerSettings").show();
        if (obj) {
          socket.emit("READ_ALL", 0);
          $("#divAlertLayerSettings").css({ backgroundColor: "forestgreen" });
          divAlertTextSettings.innerHTML = "DATA SYNC SUCCESSFULL !";
        } else {
          $("#divAlertLayerSettings").css({ backgroundColor: "red" });
          divAlertTextSettings.innerHTML = "Something went wrong... !";
        }
        hideLoading();
      });

      socket.on("PRINTER_STATUS", function (data) {
        console.log(data);
        if (data != null) {
          console.log("read data from socket printer");
          console.log("is selectd " + isProductSelected);
          printerStatus = data;
          if (
            (printerStatus == 8 || printerStatus == 7) &&
            !isProductSelected
          ) {
            console.log("error printer");
            // hideAll();
            $("div#outOfPaper-container").show();
            console.log("error printer out of paper");
          } else if (printerStatus == 1 && !isProductSelected) {
            console.log(ipc_state);
            console.log("error printer");
            // hideAll();
            $("div#outOfPaper-container").show();
            if (printerErrorCount > 1 && ipc_state > 1) {
              console.log("error printer");
              // hideAll();
              $("div#outOfPaper-container").show();
              printerErrorCount = 0;
            } else {
              printerErrorCount += 1;
            }
          } else {
            printerErrorCount = 0;
            $("div#outOfPaper-container").hide();
          }
        }
      });

      socket.on("WIFI_CONNECT", function (data) {
        console.log("wifi data :" + data);
        hideLoading();
        if (data) {
          hideAll();
          if (isSyncButtonClicked) {
            isSyncButtonClicked = false;
            $("div#settings-container").show();
          } else {
            socket.emit("FROM_WEB_TO_BARCODE", 0);
            $("div#barcode-data-container").show();
          }
        } else {
          console.log("Not connected " + data);
          var ssid = document.getElementById("txtSsid");
          ssid.style.background = "pink";
          var pass = document.getElementById("txtPassword");
          pass.style.background = "pink";
        }
      });

      socket.on("disconnect", function (error) {
        console.log("2222222");
        if (g_timer != null) {
          clearTimeout(g_timer);
        }
        if (r_timer != null) {
          clearTimeout(r_timer);
        }
        hideAll();
        $("div#loading-container").show();
      });

      socket.on("error", function (error) {
        console.log("333333333");
        hideAll();
        $("div#loading-container").show();
      });

      socket.on("SERIAL_DATA", function (data) {
        decodeNewData(data);
        socket.emit("SERIAL_DATA", getSerialSendingData());
      });

      socket.on("SYNC_KEG_DETAILS", function (response) {
        hideLoading();
        if (response != null) {
          showKegDetailsFromResponse(response);
        } else {
          hideAll();
          $("div#divAlertLayerSettings").show();
          $("#divAlertLayerSettings").css({ backgroundColor: "red" });
          divAlertTextSettings.innerHTML =
            "Invalid Request.. Please try again !";
          $("div#settings-container").show();
        }
      });

      $(this).bind("contextmenu", function (e) {
        e.preventDefault();
      });

      $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        console.log(selText);
        $(this).parents(".dropdown").find(".dropdown-toggle").val(selText);
      });

      $("#refillGuide-container").on("click", function (evt) {
        setTimeout(function () {
          hideAll();
          $("div#filling-container").show();
        }, 100);
      });

      $("#btnStop").on("click", function (evt) {
        btnStopImage.src = "images/bg-option.png";
        setTimeout(function () {
          console.log("btn stop clicked");
          ipc_state = BUTTON_STOP;
          console.log("ipc state when btn stop " + ipc_state);
          stopFilling();
        }, 1000);
      });

      $("#btnAcceptAutofeed").on("click", function (evt) {
        setTimeout(function () {
          console.log("btn accept clicked");
          ipc_state = STATE_START_AUTO_FEED;
        }, 100);
      });

      $("#btnAcceptManualfeed").on("click", function (evt) {
        setTimeout(function () {
          console.log("btn accept clicked");
          ipc_state = STATE_START_MANUAL_FEED;
        }, 100);
      });

      $("#btnDeclineAutofeed").on("click", function (evt) {
        setTimeout(function () {
          console.log("btn decline clicked");
          ipc_state = STATE_PORDUCT_SELECTION;
          hideAlertAutoFeed();
          hideAll();
          $("div#tapToStart-container").show();
        }, 100);
      });

      $("#btnDoneAutofeed").on("click", function (evt) {
        setTimeout(function () {
          console.log("btn done clicked");
          ipc_state = STATE_IDLE;
          hideAlertAutoFeed();
          hideAll();
          $("div#tapToStart-container").show();
        }, 100);
      });

      $("#btnDebugSave").on("click", function (evt) {
        setTimeout(function () {
          let selectedProductDropDown =
            selectDropdown.options[selectDropdown.selectedIndex].value;
          if (selectedProductDropDown == 0) {
            $("div#divAlertLayer").show();
            divAlertText.innerHTML = "Please select a product";
          } else {
            var dataToBeSaved = saveToFile();
            console.log("data to be saved " + dataToBeSaved);
            if (dataToBeSaved != null) {
              socket.emit("WRITE_FILE", dataToBeSaved);
              hideAllOptions();
              clearAllDebugValues();
              $("div#divAlertLayer").show();
              $("#divAlertLayer").css({ backgroundColor: "green" });
              divAlertText.innerHTML = "Data saved successfully !";
            }
          }
        }, 100);
      });

      $("#btnDebugSaveAPI").on("click", function (evt) {
        setTimeout(function () {
          showLoading();
          socket.emit("SAVE_KEG_DETAILS", kegResponse.fileName);
        }, 100);
      });

      $("#btnSyncBarcode").on("click", function (evt) {
        setTimeout(function () {
          showLoading();
          socket.emit("SYNC_KEG_DETAILS", document.getElementById("txtBarcodeID").value);
        }, 100);
      });

      $("#btnUpdateUI").on("click", function (evt) {
        setTimeout(function () {
          showLoading();
          document.getElementById("txtBarcodeID").value = "";
          socket.emit("IS_WIFI_ON", "fromBarcode");
        }, 100);
      });

      $("#btnViewDetails").on("click", function (evt) {
        setTimeout(function () {
          
          $("div#divAlertLayerSettings").hide();
          hideAllOptions();
          clearAllDebugValues();
          debugProduct = undefined;
          hideAll();
          $("div#debug-container").show();
        }, 100);
      });

      $("#btnSyncAll").on("click", function (evt) {
        setTimeout(function () {
          showLoading();
          $("div#divAlertLayerSettings").hide();
          isSyncButtonClicked = true;
          socket.emit("IS_WIFI_ON", "fromSync");
          // socket.emit("SYNC_ALL_DETAILS", "");
        }, 100);
      });

      $("#btnCIP").on("click", function (evt) {
        setTimeout(function () {
          ipc_state = STATE_CIP;
          hideAll();
          $("div#cip-container").show();
          clearNozzelButtons();
          setCIPData();
          selectedCipNozzel = 0;
        }, 100);
      });

      $("#btnBiginCip").on("click", function (evt) {
        setTimeout(function () {
          ipc_state = STATE_START_CIP;
        }, 100);
      });

      $("#btnStartCip").on("click", function (evt) {
        setTimeout(function () {
          if (selectedCipNozzel != 0) {
            selected_nozzel_number = selectedCipNozzel;
            console.log("selectedCipNozzel " + selectedCipNozzel);
            hideAll();
            $("div#cip-instructions-container").show();
          } else {
            divAlertLayerCIP.style.display = "block";
          }
        }, 100);
      });

      $("#btnStopCIP").on("click", function (evt) {
        setTimeout(function () {
          ipc_state = STATE_CIP_STOP;
        }, 100);
      });

      $("#btnPauseCIP").on("click", function (evt) {
        setTimeout(function () {
          console.log("PAUSE CLICKED " + isCipPaused);
          if (!isCipPaused) {
            isCipPaused = true;
            ipc_state = STATE_CIP_PAUSE;
            btnCipPause.innerHTML = "Resume";
            divCipPause.style.background = "blue";
          } else {
            isCipPaused = false;
            ipc_state = STATE_START_CIP;
            btnCipPause.innerHTML = "Pause";
            divCipPause.style.background = "#1897C1";
          }
        }, 100);
      });

      $("#btnDebug").on("click", function (evt) {
        setTimeout(function () {
          startTimer(60);
          socket.emit("READ_ALL", 0);
          passcode = "";
          passcodeMask = "";
          $("#idPassword").text("");
          hideAll();
          $("div#password-container").show();
        }, 100);
      });

      $("#btnSync").on("click", function (evt) {
        setTimeout(function () {
          var urls =
            "https://hemas-rvm.s3.amazonaws.com/Small_Bottle/MTAvMjMvMjAxOSAzOjQzOjM4IFBNMDc3NzgxMjY1NA==_0.jpg,https://hemas-rvm.s3.amazonaws.com/Small_Bottle/MTAvMjMvMjAxOSAzOjQzOjM4IFBNMDc3NzgxMjY1NA==_1.jpg";
          console.log("sync clicked");
          socket.emit("DOWNLOAD", urls);
          showLoading();
        }, 100);
      });

      $("#imgBtnTapToStart").on("click", function (evt) {
        setTimeout(function () {
          if(selectedLanguage != null){
            console.log("clicked");
            startTimer(60);
            hideAll();
            // $("div#language-container").show();
            $("div#selectProduct-container").show();
            socket.emit("TAP", 1);
          }
        }, 100);
      });

      $("#imgBtnTapToStart2").on("click", function (evt) {
        setTimeout(function () {
          console.log("clicked");
          startTimer(60);
          hideAll();
          // $("div#language-container").show();
          $("div#selectProduct-container").show();
          socket.emit("TAP", 1);
        }, 100);
      });

      $("#btnEnglish").on("click", function (evt) {
        btnEngImage.src = "images/bg-button-red.png";
        btnBenImage.src = "images/bg-button.png";
        imgBtnTapToStart.src = "images/eng.png";
        setTimeout(function () {
          console.log("clicked");
          selectedLanguage = "english";
          startTimer(60);
          ipc_state = STATE_PORDUCT_SELECTION;
          fetchJson();
          setProductDetails();
          // hideAll();
          console.log(eng_li);


          document.getElementById("page1maintitle").textContent = eng_li[0];
          document.getElementById("page1maintitle").style.fontFamily = "bambino_newblack";
          document.getElementById("page2maintitle").textContent = eng_li[1];
          document.getElementById("page2maintitle").style.fontFamily = "bambino_newblack";
          document.getElementById("page3maintitle").textContent = eng_li[2];
          document.getElementById("page3maintitle").style.fontFamily = "bambino_newblack";
          document.getElementById("page4maintitle").textContent = eng_li[3];
          document.getElementById("page4maintitle").style.fontFamily = "bambino_newblack";
          document.getElementById("page5maintitle").textContent = eng_li[4];
          document.getElementById("page5maintitle").style.fontFamily = "bambino_newblack";
          document.getElementById("page6maintitle").textContent = eng_li[5];
          document.getElementById("page6maintitle").style.fontFamily = "bambino_newblack";

          document.getElementById("no4product1Detail1").textContent = eng_li[7];
          document.getElementById("no4product1Detail1").style.fontFamily = "bambino_newbold";

          document.getElementById("bckbtnlangid").textContent = eng_li[10];
          document.getElementById("bckbtnlangid").style.fontFamily = "bambino_newbold";
          document.getElementById("bckbtnlangid1").textContent = eng_li[10];
          document.getElementById("bckbtnlangid1").style.fontFamily = "bambino_newbold";
          document.getElementById("bckbtnlangid2").textContent = eng_li[10];
          document.getElementById("bckbtnlangid2").style.fontFamily = "bambino_newbold";

          document.getElementById("info-text").textContent = eng_li[29];
          document.getElementById("info-text").style.fontFamily = "bambino_newsemibold";
          document.getElementById("info-text-receipt").textContent = eng_li[30];
          document.getElementById("info-text-receipt").style.fontFamily = "bambino_newsemibold";

          document.getElementById("divFillingText").textContent = eng_li[32];
          document.getElementById("divFillingText").style.fontFamily = "bambino_newsemibold";
          document.getElementById("amounttxt").textContent = eng_li[33];
          document.getElementById("amounttxt").style.fontFamily = "bambino_newbold";
          document.getElementById("btnStoptxt").textContent = eng_li[34];
          document.getElementById("btnStoptxt").style.fontFamily = "bambino_newbold";

          // $("div#selectProduct-container").show();
          // $("div#tapToStart-container-eng").show();
          socket.emit("TAP", 1);
        }, 100);
      });

      $("#btnBengali").on("click", function (evt) {
        btnBenImage.src = "images/bg-button-red.png";
        btnEngImage.src = "images/bg-button.png";
        imgBtnTapToStart.src = "images/arb.png";
        setTimeout(function () {
          console.log("clicked");
          selectedLanguage = "arabic";
          startTimer(60);
          ipc_state = STATE_PORDUCT_SELECTION;
          fetchJson();
          setProductDetails();
          // hideAll();
          console.log(arb_li);
          // Page 1
          document.getElementById("page1maintitle").textContent = arb_li[0];
          document.getElementById("page1maintitle").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("page2maintitle").textContent = arb_li[1];
          document.getElementById("page2maintitle").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("page3maintitle").textContent = arb_li[2];
          document.getElementById("page3maintitle").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("page4maintitle").textContent = arb_li[3];
          document.getElementById("page4maintitle").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("page5maintitle").textContent = arb_li[4];
          document.getElementById("page5maintitle").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("page6maintitle").textContent = arb_li[5];
          document.getElementById("page6maintitle").style.fontFamily = "ElMessiri-Bold";

          document.getElementById("no4product1Detail1").textContent = arb_li[7];
          document.getElementById("no4product1Detail1").style.fontFamily = "ElMessiri-SemiBold";

          document.getElementById("bckbtnlangid").textContent = arb_li[10];
          document.getElementById("bckbtnlangid").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("bckbtnlangid1").textContent = arb_li[10];
          document.getElementById("bckbtnlangid1").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("bckbtnlangid2").textContent = arb_li[10];
          document.getElementById("bckbtnlangid2").style.fontFamily = "ElMessiri-Bold";

          document.getElementById("info-text").textContent = arb_li[29];
          document.getElementById("info-text").style.fontFamily = "ElMessiri-SemiBold";
          document.getElementById("info-text-receipt").textContent = arb_li[30];
          document.getElementById("info-text-receipt").style.fontFamily = "ElMessiri-SemiBold";

          document.getElementById("divFillingText").textContent = arb_li[32];
          document.getElementById("divFillingText").style.fontFamily = "ElMessiri-SemiBold";
          document.getElementById("amounttxt").textContent = arb_li[33];
          document.getElementById("amounttxt").style.fontFamily = "ElMessiri-Bold";
          document.getElementById("btnStoptxt").textContent = arb_li[34];
          document.getElementById("btnStoptxt").style.fontFamily = "ElMessiri-Bold";

          // $("div#selectProduct-container").show();
          // $("div#tapToStart-container-arb").show();
          socket.emit("TAP", 1);
        }, 100);
      });

      $("#btnLeftCip").on("click", function (evt) {
        setTimeout(function () {
          console.log("left clicked");
          plusSlides(-1);
        }, 100);
      });

      $("#btnRightCip").on("click", function (evt) {
        setTimeout(function () {
          console.log("right clicked");
          plusSlides(1);
        }, 100);
      });

      $("#btnConnect").on("click", function (evt) {
        setTimeout(function () {
          console.log("clicked");

          var ssid = document.getElementById("txtSsid");
          var pass = document.getElementById("txtPassword");

          console.log("ssid " + ssid.value);
          console.log("pass " + pass.value);
          if (ssid.value == null || $.trim(ssid.value).length == 0) {
            ssid.style.background = "pink";
          } else if (pass.value == null || $.trim(pass.value).length == 0) {
            pass.style.background = "pink";
          } else {
            showLoading();
            ssid.style.background = "white";
            console.log("connect...");
            socket.emit("WIFI_CONNECT", ssid.value + " " + pass.value);
          }
        }, 100);
      });
    }
    console.log("ahdkjahdhiahfhadfhsdfsdfnnsdf");
    connect();
  } catch (e) {}
});

function hideAll() {
  $("div#loading-container").hide();
  $("div#tapToStart-container").hide();
  $("div#language-container").hide();
  $("div#debug-container").hide();
  $("div#settings-container").hide();
  $("div#updateUI-container").hide();
  $("div#cip-container").hide();
  $("div#cip-instructions-container").hide();
  $("div#cip-inprogress-container").hide();
  $("div#selectProduct-container").hide();

  $("div#tapToStart-container-eng").hide();
  $("div#tapToStart-container-arb").hide();

  $("div#password-container").hide();
  $("div#outOfPaper-container").hide();
  $("div#selectVolume-container").hide();
  $("div#printNotification-container").hide();
  $("div#printReceipt-container").hide();
  $("div#refillGuide-container").hide();
  $("div#filling-container").hide();
  $("div#thankYou-container").hide();
  $("div#thankYou-container-arb").hide();
  $("div#barcode-data-container").hide();
  $("div#barcode-data-view-container").hide();
  hideLoading();
}

function changeStateTo(state) {
  switch (state) {
    case "Emergency":
      ipc_state = STATE_EMERGENCY;
      // hideAll();
      // $('div#Emergency-container').show();
      break;
    case "filling":
      ipc_state = STATE_FILL;
      hideAll();
      $("div#filling-container").show();
      break;
    case "thankyou":
      setTimeout(function () {
        stopFilling();
      }, 500);

      break;
  }
}

function numClick(num) {
  console.log(num);
  if (num == "OK") {
    if (passcode.length == 0) {
      $("#idPassword").css({ "font-size": "30px", color: "red" });
      $("#idPassword").text("Please enter passcode");
    } else if (passcode != "8989") {
      passcode = "";
      passcodeMask = "";
      $("#idPassword").css({ "font-size": "30px", color: "red" });
      $("#idPassword").text("Incorrect. Try Again!");
    } else {
      ipc_state = STATE_SERVICE;
      setTimeout(function () {
        startTimer(300);
        clearTimeout(g_timer);
        debugProduct = undefined;
        hideAll();
        $("div#settings-container").show();
        $("div#divAlertLayerSettings").hide();
      }, 100);
    }
  } else if (num == "DELETE") {
    $("#idPassword").css({ "font-size": "70px", color: "black" });
    passcode = passcode.substring(0, passcode.length - 1);
    $("#idPassword").text(setMask(passcode.length));
  } else {
    $("#idPassword").css({ "font-size": "70px", color: "black" });
    passcode = passcode + num;
    $("#idPassword").text(setMask(passcode.length));
  }
}

function onKeyUpBarcodeHidden(){
  clearTimeout(barcodeTimer); 
  document.getElementById('txtBarcodeID').value = barcodeInputHidden.value;
  barcodeTimer = setTimeout(doStuff, 1000)
}

function setFocusTo() {
  barcodeInputHidden.focus()
}

function doStuff() {
  barcodeInputHidden.value = "";
  setTimeout(function () {
      showLoading();
      socket.emit("SYNC_KEG_DETAILS", document.getElementById("txtBarcodeID").value);
  }, 100);
}

function setMask(length) {
  var passcodeMask = "";
  for (i = 0; i < length; i++) {
    passcodeMask = passcodeMask + "*";
  }
  console.log(passcodeMask);
  return passcodeMask;
}

function selectProduct(id) {
  console.log("select product = " + id);
  console.log(printerStatus);
  var fileId = getId(id);
  var productDetail = productList[fileId];
  var imageBackgroundID = getImageID(fileId);
  imageBackgroundID.src = "images/bg-selected.png";

  setTimeout(function () {
    if (printerStatus == 0) {
      productName = productDetail["productName"];
      selectedProductID = productDetail["productId"];
      productRemaining = productDetail["productRemaining"];
      productMFD = productDetail["productMFD"];
      productEXD = productDetail["productEXD"];
      productRFD = productDetail["productRFD"];
      batchNo = productDetail["batchNo"];
      productVolumes = productDetail["productVolumes"];
      productPrices = productDetail["productPrices"];
      productDiscounts = productDetail["productDiscounts"];
      selected_nozzel_number = productDetail["nozzleNumber"];

      console.log("NOZZELLLL " + selected_nozzel_number);

      selectedProduct = productDetail;
      productId = getId(id) + 1;
      selectedProductName = productName;
      selectedBatchCode = batchNo;
      console.log("AAAAAAAA         " + selectedBatchCode);
      // imgProductScreenLogo.src =
      //   "images/product_images/logo" + productId + ".png";
      // imgProductScreenBottle.src =
      //   "images/product_images/bottle" + productId + ".png";
      // var maximumDiscount = getMaximumDiscount(productDiscounts.split("/"));
      // if (maximumDiscount != 0) {
      //   $("#productScreenLogoDiv").css({ top: "5%" });
      //   idProductVolumeSave.style.display = "block";
      //   idProductVolumeSave.innerHTML =
      //     "Save upto" + "<br/>" + "Rs. " + maximumDiscount;
      // } else {
      //   $("#productScreenLogoDiv").css({ top: "25%" });
      //   idProductVolumeSave.style.display = "none";
      // }

      if (selectedLanguage == "english"){
        // idProductVolumeSave.innerHTML = eng_li[7];
        idProductVolumeSave1.innerHTML = "AFIA";
        idProductVolumeSave2.innerHTML = "Corn Oil";
        document.getElementById("idProductVolumeSave1").style.fontFamily = "bambino_newsemibold";
        document.getElementById("idProductVolumeSave2").style.fontFamily = "bambino_newsemibold";
        productScreenLogo.innerHTML = eng_li[12];
        document.getElementById("productScreenLogo").style.fontFamily = "bambino_newsemibold";
      }
      if (selectedLanguage == "arabic"){
        // idProductVolumeSave.innerHTML = arb_li[7];
        idProductVolumeSave1.innerHTML = "عافية";
        idProductVolumeSave2.innerHTML = "بزيت الذرة";
        document.getElementById("idProductVolumeSave1").style.fontFamily = "ElMessiri-SemiBold";
        document.getElementById("idProductVolumeSave2").style.fontFamily = "ElMessiri-SemiBold";
        productScreenLogo.innerHTML = arb_li[12] + " "+ arb_li[13] + " " + arb_li[14];
        document.getElementById("productScreenLogo").style.fontFamily = "ElMessiri-SemiBold";
      }
      

      volumeList = productVolumes.split("/");
      actualVolumeCount = volumeList.length;
      validVolumeCount = getVolumeCount(productRemaining, volumeList);
      //validVolumeCount = 6;

      divNoOfVolumes2.style.display = "none";
      divNoOfVolumes3.style.display = "none";
      divNoOfVolumes6.style.display = "none";
      console.log("VOLUME COUNT " + validVolumeCount);
      if (validVolumeCount < 3) {
        show2Volumes();
        if (validVolumeCount == 1) {
          vol2Row2.style.display = "none";
        }
      } else if (validVolumeCount < 4) {
        show3Volumes();
      } else {
        show6Volumes();
        switch (validVolumeCount) {
          case 4:
            vol6Row3.style.display = "none";
            break;
          case 5:
            vol6Row3Col2.style.display = "none";
            break;
        }
      }

      setVolumeData(
        productVolumes.split("/"),
        productPrices.split("/"),
        productDiscounts.split("/")
      );

      ipc_state = STATE_VOLUME_SELECTION;
      isProductSelected = true;

      startTimer(60);
      hideAll();
      imageBackgroundID.src = "images/bg-option.png";
      $("div#selectVolume-container").show();
    } else {
      // hideAll();
      $("div#outOfPaper-container").show();
      if (printerStatus == 8 || printerStatus == 7) {
      } else {
      }
    }
  }, 100);
}

function showKegDetailsFromResponse(response) {
  kegResponse = response;
  var detailsList = kegResponse.fileData.split(",");
  hideAllVolumes();
  idProductNameAPI.innerHTML = detailsList[1];
  idRefillVolumeAPI.innerHTML = detailsList[2];
  idLastRefillDateAPI.innerHTML = "2020-10-02";
  idManufactureDateAPI.innerHTML = detailsList[4];
  idExpireDateAPI.innerHTML = detailsList[5];
  idbatchNoAPI.innerHTML = detailsList[9];

  hideAll();
  $("div#barcode-data-view-container").show();
}

function onClickNozzel(nozzelID) {
  clearEnabledNozzles();
  selectedCipNozzel = nozzelID;
  console.log("ddddddddd" + nozzelID);
  switch (nozzelID) {
    case 1:
      idNozzel1.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 2:
      idNozzel2.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 3:
      idNozzel3.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 4:
      idNozzel4.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 5:
      idNozzel5.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 6:
      idNozzel6.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 7:
      idNozzel7.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 8:
      idNozzel8.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 9:
      idNozzel9.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 10:
      idNozzel10.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 11:
      idNozzel11.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
    case 12:
      idNozzel12.style.backgroundImage =
        "url('images/bg-cip-button-select.png')";
      break;
  }
}

function clearNozzelButtons() {
  divAlertLayerCIP.style.display = "none";
  idNozzel1.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel2.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel3.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel4.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel5.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel6.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel7.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel8.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel9.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel10.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel11.style.backgroundImage = "url('images/cip-disabled.png')";
  idNozzel12.style.backgroundImage = "url('images/cip-disabled.png')";
}

function clearEnabledNozzles() {
  console.log("CIP  " + enabledCIPNozzles.length);
  enabledCIPNozzles.forEach((element) => {
    element.style.backgroundImage =
      "url('images/bg-cip-button-non-select.png')";
  });
}

function getVolumeCount(remainigProduct, volumes) {
  var count = 0;
  volumes.forEach(function (item, index, array) {
    if (remainigProduct >= parseInt(item)) {
      count++;
    }
  });
  return count;
}

function show2Volumes() {
  divNoOfVolumes2.style.display = "block";
  vol2Row1.style.display = "block";
  vol2Row2.style.display = "block";
}

function show3Volumes() {
  divNoOfVolumes3.style.display = "block";
  vol3Row1.style.display = "block";
  vol3Row2.style.display = "block";
  vol3Row3.style.display = "block";
}

function show6Volumes() {
  divNoOfVolumes6.style.display = "block";
  vol6Row3.style.display = "flex";
  vol6Row3Col1.style.display = "block";
  vol6Row3Col2.style.display = "block";
}

function setVolumeData(productVolumes, productPrices, productDiscounts) {
  if (productVolumes[0] != undefined) {

    if(selectedLanguage == 'english'){
      vol2product1Detail2.innerHTML = productPrices[0] + " SAR";
      document.getElementById("vol2product1Detail2").style.fontFamily = "bambino_newsemibold";
      vol3product1Detail2.innerHTML = productPrices[0] + " SAR";
      document.getElementById("vol3product1Detail2").style.fontFamily = "bambino_newsemibold";
      vol6product1Detail2.innerHTML = productPrices[0] + " SAR";
      document.getElementById("vol6product1Detail2").style.fontFamily = "bambino_newsemibold";

      if (productVolumes[0] >= 1000){
        vol2product1Detail1.innerHTML = productVolumes[0]/1000 + " L";
        document.getElementById("vol2product1Detail1").style.fontFamily = "bambino_newbold";
        vol3product1Detail1.innerHTML = productVolumes[0]/1000 + " L";
        document.getElementById("vol3product1Detail1").style.fontFamily = "bambino_newbold";
        vol6product1Detail1.innerHTML = productVolumes[0]/1000 + " L";
        document.getElementById("vol6product1Detail1").style.fontFamily = "bambino_newbold";
        
      }
      else{
        vol2product1Detail1.innerHTML = productVolumes[0] + " ml";
        document.getElementById("vol2product1Detail1").style.fontFamily = "bambino_newbold";
        vol3product1Detail1.innerHTML = productVolumes[0] + " ml";
        document.getElementById("vol3product1Detail1").style.fontFamily = "bambino_newbold";
        vol6product1Detail1.innerHTML = productVolumes[0] + " ml";
        document.getElementById("vol6product1Detail1").style.fontFamily = "bambino_newbold";
        
      }

      if (productDiscounts[0] == "0") {
        vol2product1Detail3.style.display = "none";
        vol3product1Detail3.style.display = "none";
        vol6product1Detail3.style.display = "none";
      } else {
        vol2product1Detail3.style.display = "block";
        vol3product1Detail3.style.display = "block";
        vol6product1Detail3.style.display = "block";
        vol2product1Detail3.innerHTML = "Save<br>"+ productDiscounts[0] + " SAR";
        document.getElementById("vol2product1Detail3").style.fontFamily = "bambino_newbold";
        vol3product1Detail3.innerHTML = "Save<br>"+ productDiscounts[0] + " SAR";
        document.getElementById("vol3product1Detail3").style.fontFamily = "bambino_newbold";
        vol6product1Detail3.innerHTML = "Save<br>"+ productDiscounts[0] + " SAR";
        document.getElementById("vol6product1Detail3").style.fontFamily = "bambino_newbold";

      }
    }
    if(selectedLanguage == 'arabic'){
      vol2product1Detail2.innerHTML = convertToArbNumber(productPrices[0]) + " " + arb_li[9];
      document.getElementById("vol2product1Detail2").style.fontFamily = "ElMessiri-SemiBold";
      vol3product1Detail2.innerHTML = convertToArbNumber(productPrices[0]) + " " + arb_li[9];
      document.getElementById("vol3product1Detail2").style.fontFamily = "ElMessiri-SemiBold";
      vol6product1Detail2.innerHTML = convertToArbNumber(productPrices[0]) + " " + arb_li[9];
      document.getElementById("vol6product1Detail2").style.fontFamily = "ElMessiri-SemiBold";

      if (productVolumes[0] >= 1000){
        vol2product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]/1000) + " " + arb_li[17];
        document.getElementById("vol2product1Detail1").style.fontFamily = "ElMessiri-Bold";
        vol3product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]/1000) + " " + arb_li[17];
        document.getElementById("vol3product1Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]/1000) + " " + arb_li[17];
        document.getElementById("vol6product1Detail1").style.fontFamily = "ElMessiri-Bold";
      }
      else{
        vol2product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]) + " " + arb_li[18];
        document.getElementById("vol2product1Detail1").style.fontFamily = "ElMessiri-Bold";
        vol3product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]) + " " + arb_li[18];
        document.getElementById("vol3product1Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product1Detail1.innerHTML = convertToArbNumber(productVolumes[0]) + " " + arb_li[18];
        document.getElementById("vol6product1Detail1").style.fontFamily = "ElMessiri-Bold";
      }

      if (productDiscounts[0] == "0") {
        vol2product1Detail3.style.display = "none";
        vol3product1Detail3.style.display = "none";
        vol6product1Detail3.style.display = "none";
      } else {
        vol2product1Detail3.style.display = "block";
        vol3product1Detail3.style.display = "block";
        vol6product1Detail3.style.display = "block";
        vol2product1Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[0]) + " " + arb_li[9];
        document.getElementById("vol2product1Detail3").style.fontFamily = "ElMessiri-Bold";
        vol3product1Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[0]) + " " + arb_li[9];
        document.getElementById("vol3product1Detail3").style.fontFamily = "ElMessiri-Bold";
        vol6product1Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[0]) + " " + arb_li[9];
        document.getElementById("vol6product1Detail3").style.fontFamily = "ElMessiri-Bold";
      }
    }

    
  }

  if (productVolumes[1] != undefined) {

    if(selectedLanguage == 'english'){
      vol2product2Detail2.innerHTML = productPrices[1] + " SAR";
      document.getElementById("vol2product2Detail2").style.fontFamily = "bambino_newsemibold";
      vol3product2Detail2.innerHTML = productPrices[1] + " SAR";
      document.getElementById("vol3product2Detail2").style.fontFamily = "bambino_newsemibold";
      vol6product2Detail2.innerHTML = productPrices[1] + " SAR";
      document.getElementById("vol6product2Detail2").style.fontFamily = "bambino_newsemibold";

      if(productVolumes[1] >= 1000){
        vol2product2Detail1.innerHTML = productVolumes[1]/1000 + " L";
        document.getElementById("vol2product2Detail1").style.fontFamily = "bambino_newbold";
        vol3product2Detail1.innerHTML = productVolumes[1]/1000 + " L";
        document.getElementById("vol3product2Detail1").style.fontFamily = "bambino_newbold";
        vol6product2Detail1.innerHTML = productVolumes[1]/1000 + " L";
        document.getElementById("vol6product2Detail1").style.fontFamily = "bambino_newbold";
      }
      else{
        vol2product2Detail1.innerHTML = productVolumes[1] + " ml";
        document.getElementById("vol2product2Detail1").style.fontFamily = "bambino_newbold";
        vol3product2Detail1.innerHTML = productVolumes[1] + " ml";
        document.getElementById("vol3product2Detail1").style.fontFamily = "bambino_newbold";
        vol6product2Detail1.innerHTML = productVolumes[1] + " ml";
        document.getElementById("vol6product2Detail1").style.fontFamily = "bambino_newbold";
      }
      
      if (productDiscounts[1] == "0") {
        vol2product2Detail3.style.display = "none";
        vol3product2Detail3.style.display = "none";
        vol6product2Detail3.style.display = "none";
      } else {
        vol2product2Detail3.style.display = "block";
        vol3product2Detail3.style.display = "block";
        vol6product2Detail3.style.display = "block";
        vol2product2Detail3.innerHTML = "Save<br>"+ productDiscounts[1] + " SAR";
        document.getElementById("vol2product2Detail3").style.fontFamily = "bambino_newbold";
        vol3product2Detail3.innerHTML = "Save<br>"+ productDiscounts[1] + " SAR";
        document.getElementById("vol3product2Detail3").style.fontFamily = "bambino_newbold";
        vol6product2Detail3.innerHTML = "Save<br>"+ productDiscounts[1] + " SAR";
        document.getElementById("vol6product2Detail3").style.fontFamily = "bambino_newbold";
      }
    }

    if(selectedLanguage == 'arabic'){
      vol2product2Detail2.innerHTML = convertToArbNumber(productPrices[1]) + " " + arb_li[9];
      document.getElementById("vol2product2Detail2").style.fontFamily = "ElMessiri-SemiBold";
      vol3product2Detail2.innerHTML = convertToArbNumber(productPrices[1]) + " " + arb_li[9];
      document.getElementById("vol3product2Detail2").style.fontFamily = "ElMessiri-SemiBold";
      vol6product2Detail2.innerHTML = convertToArbNumber(productPrices[1]) + " " + arb_li[9];
      document.getElementById("vol6product2Detail2").style.fontFamily = "ElMessiri-SemiBold";

      if(productVolumes[1] >= 1000){
        vol2product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]/1000) + " " + arb_li[17];
        document.getElementById("vol2product2Detail1").style.fontFamily = "ElMessiri-Bold";
        vol3product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]/1000) + " " + arb_li[17];
        document.getElementById("vol3product2Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]/1000) + " " + arb_li[17];
        document.getElementById("vol6product2Detail1").style.fontFamily = "ElMessiri-Bold";
      }
      else{
        vol2product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]) + " " + arb_li[18];
        document.getElementById("vol2product2Detail1").style.fontFamily = "ElMessiri-Bold";
        vol3product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]) + " " + arb_li[18];
        document.getElementById("vol3product2Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product2Detail1.innerHTML = convertToArbNumber(productVolumes[1]) + " " + arb_li[18];
        document.getElementById("vol6product2Detail1").style.fontFamily = "ElMessiri-Bold";
      }
      
      if (productDiscounts[1] == "0") {
        vol2product2Detail3.style.display = "none";
        vol3product2Detail3.style.display = "none";
        vol6product2Detail3.style.display = "none";
      } else {
        vol2product2Detail3.style.display = "block";
        vol3product2Detail3.style.display = "block";
        vol6product2Detail3.style.display = "block";
        vol2product2Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[1]) + " " + arb_li[9];
        document.getElementById("vol2product2Detail3").style.fontFamily = "ElMessiri-Bold";
        vol3product2Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[1]) + " " + arb_li[9];
        document.getElementById("vol3product2Detail3").style.fontFamily = "ElMessiri-Bold";
        vol6product2Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[1]) + " " + arb_li[9];
        document.getElementById("vol6product2Detail3").style.fontFamily = "ElMessiri-Bold";
      }
    }
  
  }

  if (productVolumes[2] != undefined) {

    if(selectedLanguage == 'english'){
      vol3product3Detail2.innerHTML = productPrices[2] + " SAR";
      document.getElementById("vol3product3Detail2").style.fontFamily = "bambino_newsemibold";
      vol6product3Detail2.innerHTML = productPrices[2] + " SAR";
      document.getElementById("vol6product3Detail2").style.fontFamily = "bambino_newsemibold";
  
      if (productVolumes[2] >= 1000){
        vol3product3Detail1.innerHTML = productVolumes[2]/1000 + " L";
        document.getElementById("vol3product3Detail1").style.fontFamily = "bambino_newbold";
        vol6product3Detail1.innerHTML = productVolumes[2]/1000 + " L";
        document.getElementById("vol6product3Detail1").style.fontFamily = "bambino_newbold";
        
      }
      else{
        vol3product3Detail1.innerHTML = productVolumes[2] + " ml";
        document.getElementById("vol3product3Detail1").style.fontFamily = "bambino_newbold";
        vol6product3Detail1.innerHTML = productVolumes[2] + " ml";
        document.getElementById("vol6product3Detail1").style.fontFamily = "bambino_newbold";
      }
  
      if (productDiscounts[2] == "0") {
        vol3product3Detail3.style.display = "none";
        vol6product3Detail3.style.display = "none";
      } else {
        vol3product3Detail3.style.display = "block";
        vol6product3Detail3.style.display = "block";
        vol3product3Detail3.innerHTML = "Save<br>"+ productDiscounts[2] + " SAR";
        document.getElementById("vol3product3Detail3").style.fontFamily = "bambino_newbold";
        vol6product3Detail3.innerHTML = "Save<br>"+ productDiscounts[2] + " SAR";
        document.getElementById("vol6product3Detail3").style.fontFamily = "bambino_newbold";
      }
    }
    if(selectedLanguage == 'arabic'){
      vol3product3Detail2.innerHTML = arb_li[9] + " " + convertToArbNumber(productPrices[2]);
      document.getElementById("vol3product3Detail2").style.fontFamily = "ElMessiri-SemiBold";
      vol6product3Detail2.innerHTML = arb_li[9] + " " + convertToArbNumber(productPrices[2]);
      document.getElementById("vol6product3Detail2").style.fontFamily = "ElMessiri-SemiBold";
  
      if (productVolumes[2] >= 1000){
        vol3product3Detail1.innerHTML = arb_li[17] + " " + convertToArbNumber(productVolumes[2]/1000);
        document.getElementById("vol3product3Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product3Detail1.innerHTML = arb_li[17] + " " + convertToArbNumber(productVolumes[2]/1000);
        document.getElementById("vol6product3Detail1").style.fontFamily = "ElMessiri-Bold";
        
      }
      else{
        vol3product3Detail1.innerHTML = arb_li[18] + " " + convertToArbNumber(productVolumes[2]);
        document.getElementById("vol3product3Detail1").style.fontFamily = "ElMessiri-Bold";
        vol6product3Detail1.innerHTML = arb_li[18] + " " + convertToArbNumber(productVolumes[2]);
        document.getElementById("vol6product3Detail1").style.fontFamily = "ElMessiri-Bold";
      }
  
      if (productDiscounts[2] == "0") {
        vol3product3Detail3.style.display = "none";
        vol6product3Detail3.style.display = "none";
      } else {
        vol3product3Detail3.style.display = "block";
        vol6product3Detail3.style.display = "block";
        vol3product3Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[2]) + " " + arb_li[9];
        document.getElementById("vol3product3Detail3").style.fontFamily = "ElMessiri-Bold";
        vol6product3Detail3.innerHTML = arb_li[16] + "<br>" + convertToArbNumber(productDiscounts[2]) + " " + arb_li[9];
        document.getElementById("vol6product3Detail3").style.fontFamily = "ElMessiri-Bold";
      }
    }    
  }

  if (productVolumes[3] != undefined) {
    vol6product4Detail1.innerHTML = productVolumes[3] + " ml";
    vol6product4Detail2.innerHTML = "Rs." + productPrices[3];

    if (productDiscounts[3] == "0") {
      vol6product4Detail3.style.display = "none";
    } else {
      vol6product4Detail3.style.display = "block";
      vol6product4Detail3.innerHTML = "Save Rs." + productDiscounts[3];
    }
  }

  if (productVolumes[4] != undefined) {
    vol6product5Detail1.innerHTML = productVolumes[4] + " ml";
    vol6product5Detail2.innerHTML = "Rs." + productPrices[4];
    vol6product5Detail3.innerHTML = "Save Rs." + productDiscounts[4];

    if (productDiscounts[3] == "0") {
      vol6product5Detail3.style.display = "none";
    } else {
      vol6product5Detail3.style.display = "block";
      vol6product5Detail3.innerHTML = "Save Rs." + productDiscounts[4];
    }
  }

  if (productVolumes[5] != undefined) {
    vol6product6Detail1.innerHTML = productVolumes[5] + " ml";
    vol6product6Detail2.innerHTML = "Rs." + productPrices[5];

    if (productDiscounts[5] == "0") {
      vol6product5Detail3.style.display = "none";
    } else {
      vol6product6Detail3.style.display = "block";
      vol6product6Detail3.innerHTML = "Save Rs." + productDiscounts[5];
    }
  }
}

function selectVolume(id) {
  console.log("IDDDDDDd " + id);
  var volumeBackground = getVolumeBackgroundID(id);
  volumeBackground.src = "images/bg-selected.png";
  setTimeout(function () {
    // divSelectedProductLogo.src =
    //   "images/product_images/logo" + productId + ".png";
    divSelectedProductBottle.src =
      "images/product_images/bottle" + productId + ".png";
    switch (id) {
      case 1:
        selectedVolume = selectedProduct.productVolumes.split("/")[0];
        selectedProductPrice = selectedProduct.productPrices.split("/")[0];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
      case 2:
        selectedVolume = selectedProduct.productVolumes.split("/")[1];
        selectedProductPrice = selectedProduct.productPrices.split("/")[1];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
      case 3:
        selectedVolume = selectedProduct.productVolumes.split("/")[2];
        selectedProductPrice = selectedProduct.productPrices.split("/")[2];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
      case 4:
        selectedVolume = selectedProduct.productVolumes.split("/")[3];
        selectedProductPrice = selectedProduct.productPrices.split("/")[3];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
      case 5:
        selectedVolume = selectedProduct.productVolumes.split("/")[4];
        selectedProductPrice = selectedProduct.productPrices.split("/")[4];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
      case 6:
        selectedVolume = selectedProduct.productVolumes.split("/")[5];
        selectedProductPrice = selectedProduct.productPrices.split("/")[5];
        console.log(selectedVolume);
        console.log(selectedProductPrice);
        break;
    }
    setDataInPrintNotificationUI();
    startTimer(60);
    hideAll();
    volumeBackground.src = "images/prod-bar.png";
    $("div#printNotification-container").show();
  }, 100);
}

function getVolumeBackgroundID(id) {
  console.log("IDDD " + id);
  console.log("VOLUME " + validVolumeCount);
  switch (id) {
    case 1:
      if (validVolumeCount > 3) {
        return vol6Row1Col1Image1;
      } else if (validVolumeCount > 2) {
        return vol3Row1Image1;
      } else {
        return vol2Row1Image1;
      }
    case 2:
      if (validVolumeCount > 3) {
        return vol6Row1Col2Image1;
      } else if (validVolumeCount > 2) {
        return vol3Row2Image1;
      } else {
        return vol2Row2Image1;
      }
    case 3:
      if (validVolumeCount > 3) {
        return vol6Row2Col1Image1;
      } else {
        return vol3Row3Image1;
      }
    case 4:
      return vol6Row2Col2Image1;
    case 5:
      return vol6Row3Col1Image1;
    case 6:
      return vol6Row3Col2Image1;
  }
}

function setDataInPrintNotificationUI() {

  if(selectedLanguage == "english"){
    // prodName.innerHTML = selectedProductName;
    prodName1.innerHTML = "AFIA";
    prodName2.innerHTML = "Corn Oil";
    document.getElementById("prodName1").style.fontFamily = "bambino_newsemibold";
    document.getElementById("prodName2").style.fontFamily = "bambino_newsemibold";

    divSelectedVolumePrice.innerHTML = selectedProductPrice + " SAR";
    divConfirmedPrice.innerHTML = selectedProductPrice + " SAR";

    document.getElementById("volume-text").style.fontFamily = "bambino_newsemibold";
    document.getElementById("txt-volume-price").style.fontFamily = "bambino_newblack";

    document.getElementById("confirmedPrice").style.fontFamily = "bambino_newsemibold";
    document.getElementById("confirmedVolume").style.fontFamily = "bambino_newsemibold";

    document.getElementById("expire-text").textContent = eng_li[20];
    document.getElementById("expire-text").style.fontFamily = "bambino_newsemibold";
    document.getElementById("text-accept").textContent = eng_li[21];
    document.getElementById("text-accept").style.fontFamily = "bambino_newbold";
    document.getElementById("text-decline").textContent = eng_li[22];
    document.getElementById("text-decline").style.fontFamily = "bambino_newbold";

    document.getElementById("total-text").style = "null";
    document.getElementById("quantity-text").style = "null";

    document.getElementById("total-text").textContent = eng_li[24];
    document.getElementById("total-text").style.fontFamily = "bambino_newbold";
    document.getElementById("quantity-text").textContent = eng_li[25];
    document.getElementById("quantity-text").style.fontFamily = "bambino_newbold";
    document.getElementById("receipt-title").textContent = eng_li[26];
    document.getElementById("receipt-title").style.fontFamily = "bambino_newsemibold";
    document.getElementById("text-next").textContent = eng_li[27];
    document.getElementById("text-next").style.fontFamily = "bambino_newbold";


    if(selectedVolume >= 1000){
      divSelectedVolume.innerHTML = selectedVolume/1000 + " L";
      divConfirmedVolume.innerHTML = selectedVolume/1000 + " L";
    }
    else{
      divSelectedVolume.innerHTML = selectedVolume + " ml";
      divConfirmedVolume.innerHTML = selectedVolume + " ml";
    }
  }
  if(selectedLanguage == "arabic"){
    // prodName.innerHTML = arb_li[7];
    prodName1.innerHTML = "عافية";
    prodName2.innerHTML = "بزيت الذرة";

    document.getElementById("prodName1").style.fontFamily = "ElMessiri-SemiBold";
    document.getElementById("prodName2").style.fontFamily = "ElMessiri-SemiBold";

    divSelectedVolumePrice.innerHTML = convertToArbNumber(selectedProductPrice)+ " " + arb_li[9] ;
    divConfirmedPrice.innerHTML = convertToArbNumber(selectedProductPrice)+ " " + arb_li[9];

    document.getElementById("volume-text").style.fontFamily = "ElMessiri-SemiBold";
    document.getElementById("txt-volume-price").style.fontFamily = "ElMessiri-Bold";

    document.getElementById("confirmedPrice").style.fontFamily = "ElMessiri-SemiBold";
    document.getElementById("confirmedVolume").style.fontFamily = "ElMessiri-SemiBold";

    document.getElementById("expire-text").textContent = arb_li[20];
    document.getElementById("expire-text").style.fontFamily = "ElMessiri-SemiBold";
    document.getElementById("text-accept").textContent = arb_li[21];
    document.getElementById("text-accept").style.fontFamily = "ElMessiri-Bold";
    document.getElementById("text-decline").textContent = arb_li[22];
    document.getElementById("text-decline").style.fontFamily = "ElMessiri-Bold";


    document.getElementById("total-text").style.paddingTop = "10px";
    document.getElementById("quantity-text").style.paddingTop = "10px";
    document.getElementById("quantity-text").style.paddingLeft = "50px";


    document.getElementById("total-text").textContent = arb_li[24];
    document.getElementById("total-text").style.fontFamily = "ElMessiri-Bold";
    document.getElementById("quantity-text").textContent = arb_li[25];
    document.getElementById("quantity-text").style.fontFamily = "ElMessiri-Bold";
    document.getElementById("receipt-title").textContent = arb_li[26];
    document.getElementById("receipt-title").style.fontFamily = "ElMessiri-SemiBold";
    document.getElementById("text-next").textContent = arb_li[27];
    document.getElementById("text-next").style.fontFamily = "ElMessiri-Bold";


    if(selectedVolume >= 1000){
      divSelectedVolume.innerHTML = convertToArbNumber(selectedVolume/1000) + " " + arb_li[17];
      divConfirmedVolume.innerHTML = convertToArbNumber(selectedVolume/1000) + " " + arb_li[17];
    }
    else{
      divSelectedVolume.innerHTML = convertToArbNumber(selectedVolume) + " " + arb_li[18];
      divConfirmedVolume.innerHTML = convertToArbNumber(selectedVolume) + " " + arb_li[18];
    }
  }
  
  
  
  
}

function onClickTxtBarcode() {
  // document.getElementById("txtBarcodeID").classList.add("keyboardPopup");
  // document.getElementById("txtBarcodeID").focus();
}

function goBack(id) {
  setTimeout(function () {
    hideAll();
    startTimer(60);
    console.log(id);
    selected_nozzel_number = "0";
    selectedVolume = "0";
    if (id == "btnBackSelectProduct") {
      ipc_state = STATE_IDLE;
      // $("div#language-container").show();
      $("div#tapToStart-container").show();
    }if (id == "btnBacklanguage") {
      ipc_state = STATE_IDLE;
      $("div#tapToStart-container").show();
    } else if (id == "btnBackOutPaper") {
      ipc_state = STATE_IDLE;
      $("div#tapToStart-container").show();
    } 
    else if (id == "btnBackSelectVolume1") {
      isProductSelected = false;
      ipc_state = STATE_PORDUCT_SELECTION;
      $("div#selectProduct-container").show();
    }
    else if (id == "btnBackSelectVolume2") {
      isProductSelected = false;
      ipc_state = STATE_PORDUCT_SELECTION;
      $("div#selectProduct-container").show();
    }
    
    else if (id == "btnBackPrintNotification") {
      $("div#selectVolume-container").show();
    } else if (id == "btnBackSettings") {
      ipc_state = STATE_SERVICE;
      console.log("back");
      $("div#settings-container").show();
    } else if (id == "btnBackBarcodeData") {
      ipc_state = STATE_SERVICE;
      console.log("back");
      $("div#settings-container").show();
    } else if (id == "btnBackDebug") {
      $("#divAlertLayer").css({ backgroundColor: "red" });
      ipc_state = STATE_IDLE;
      socket.emit("READ_ALL", 0);
      console.log("back");
      $("div#tapToStart-container").show();
    } else if (id == "btnBackKegUpdate") {
      $("div#divAlertLayerSettings").hide();
      $("#divAlertLayer").css({ backgroundColor: "red" });
      ipc_state = STATE_SERVICE;
      console.log("back");
      $("div#settings-container").show();
    } else if (id == "btnBackPass") {
      ipc_state = STATE_IDLE;
      $("div#tapToStart-container").show();
    } else if (id == "btnBackUpdateUI") {
      ipc_state = STATE_SERVICE;
      $("div#settings-container").show();
    } else if (id == "btnBackCipBegin") {
      selected_nozzel_number = selectedCipNozzel;
      ipc_state = STATE_CIP;
      $("div#cip-container").show();
    } else if (id == "btnBackCipUI") {
      ipc_state = STATE_SERVICE;
      $("div#debug-container").show();
    }
  }, 100);
}

function confirmation(id) {
  console.log(id);
  if (id == "btnDecline") {
    btnDeclineImage.src = "images/bg-selected.png";
  } 
  else if (id == "btnConfirm") {
    btnConfirmImage.src = "images/bg-selected.png";
  }
  // else if(id == "btnEnglish"){
  //   btnEngImage.src = "images/bg-selected.png";
  // }
  // else if(id == "btnBengali"){
  //   btnBenImage.src = "images/bg-selected.png";
  // }
  else if(id == "btnBckImage"){
    btnBckImage.src = "images/bg-selected.png";
  }
  else if(id == "btnBckImage1"){
    btnBckImage1.src = "images/bg-selected.png";
  }
  else if(id == "btnBckImage2"){
    btnBckImage2.src = "images/bg-selected.png";
  }
  else {
    btnNextImage.src = "images/bg-selected.png";
  }
  setTimeout(function () {
    startTimer(60);
    console.log("printer status : " + printerStatus);
    if (id == "btnDecline") {
      ipc_state = STATE_PORDUCT_SELECTION;
      selected_nozzel_number = "0";
      selectedVolume = "0";
      isProductSelected = false;
      hideAll();
      $("div#selectProduct-container").show();
    } else if (id == "btnConfirm") {
      clearTimeout(g_timer);
      var barcode;
      var plastic;
      var belowCode;
      // if (selectedProductName == "Sunlight_Care" && selectedVolume == "500")
      // {
      //   barcode = "SLC1L";
      //   plastic = plastic500;
      //   belowCode = "H___H___E___0___1___7___6";
      // }
      // else if (selectedProductName == "Sunlight_Care" && selectedVolume == "1000")
      // {
      //   barcode = "SLC1L";
      //   plastic = plastic1000;
      //   belowCode = "H___H___E___0___1___7___6";
      // }
      // else if (selectedProductName == "Vim")
      // {
      //   barcode = "VIM05";
      //   plastic = plasticVim;
      //   belowCode = "H___H___E___0___1___7___4";
      // }
      // else if (selectedProductName == "Vim_Anti_Bacterial")
      // {
      //   barcode = "VIMAB";
      //   plastic = "40";
      //   belowCode = "H___H___E___0___1___7___5";
      // }

      barcode = "VIMAB";
      plastic = "40";
      belowCode = "H___H___E___0___1___7___5";

      var obj = {
        productName: selectedProductName,
        quantity: selectedVolume,
        price: selectedProductPrice,
        date: dateGenerate(),
        barcode: barcode,
        plastic: plastic,
        belowCode: belowCode,
        batchCode: selectedBatchCode,
      };
      console.log(obj);
      socket.emit("PRINT_TICKET", obj);
      hideAll();
      $("div#printReceipt-container").show();
      // $("div#refillGuide-container").show();
      // $('div#selectProduct-container').show();
      // isProductSelected = false;
    } else if (id == "btnNext") {
      ipc_state = STATE_VOLUME_CONFIRMATION;
      ipc_state = STATE_VOLUME_CONFIRMATION;
      switch (parseInt(selected_nozzel_number.toString(), 10)) {
        case 1:
          console.log("1");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
        case 2:
          console.log("2");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
        case 3:
          console.log("3");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
        case 4:
          console.log("4");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
        case 5:
          console.log("5");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
        case 6:
          console.log("6");
          divRefilGuideImg.src = "images/begin-refill-wood.png";
          break;
      }
      startTimer(120);
      hideAll();
      $("div#refillGuide-container").show();
    }
    btnDeclineImage.src = "images/bg-button-red.png";
    btnConfirmImage.src = "images/bg-button.png";
    btnNextImage.src = "images/bg-button.png";
    // btnBenImage.src = "images/bg-button.png";
    // btnEngImage.src = "images/bg-button.png";
    btnStopImage.src = "images/bg-button-red.png";
    btnBckImage.src = "images/bg-button-red.png";
    btnBckImage1.src = "images/bg-button-red.png";
    btnBckImage2.src = "images/bg-button-red.png";
  }, 100);
}

function initData(fileDataList) {
  console.log("init data");

  divNumOfProducts4 = document.getElementById("noOfProducts4");
  divNumOfProducts6 = document.getElementById("noOfProducts6");
  divNumOfProducts8 = document.getElementById("noOfProducts8");
  divNumOfProducts12 = document.getElementById("noOfProducts12");

  divNoOfVolumes2 = document.getElementById("noOfVolumes2");
  divNoOfVolumes3 = document.getElementById("noOfVolumes3");
  divNoOfVolumes6 = document.getElementById("noOfVolumes6");

  divBtnProduct4Row1 = document.getElementById("btnProduct4Row1");
  divBtnProduct4Row2 = document.getElementById("btnProduct4Row2");
  divBtnProduct4Row3 = document.getElementById("btnProduct4Row3");
  divBtnProduct4Row4 = document.getElementById("btnProduct4Row4");

  divBtnProduct4Row1Col1 = document.getElementById("btnProduct1");
  divBtnProduct4Row1Col2 = document.getElementById("btnProduct1No");
  divBtnProduct4Row2Col1 = document.getElementById("btnProduct2");
  divBtnProduct4Row2Col2 = document.getElementById("btnProduct2No");
  divBtnProduct4Row3Col1 = document.getElementById("btnProduct4");
  divBtnProduct4Row3Col2 = document.getElementById("btnProduct3No");
  divBtnProduct4Row4Col1 = document.getElementById("btnProduct4");
  divBtnProduct4Row4Col2 = document.getElementById("btnProduct4No");

  no4imgProduct1Image1 = document.getElementById("no4imgProduct1Image1");
  no4product1Detail1 = document.getElementById("no4product1Detail1");
  no4product1Detail2 = document.getElementById("no4product1Detail2");

  no4imgProduct2Image1 = document.getElementById("no4imgProduct2Image1");
  no4product2Detail1 = document.getElementById("no4product2Detail1");
  no4product2Detail2 = document.getElementById("no4product2Detail2");

  no4imgProduct3Image1 = document.getElementById("no4imgProduct3Image1");
  no4product3Detail1 = document.getElementById("no4product3Detail1");
  no4product3Detail2 = document.getElementById("no4product3Detail2");

  no4imgProduct4Image1 = document.getElementById("no4imgProduct4Image1");
  no4product4Detail1 = document.getElementById("no4product4Detail1");
  no4product4Detail2 = document.getElementById("no4product4Detail2");

  divBtnProduct6Row1 = document.getElementById("btnProduct6Row1");
  divBtnProduct6Row2 = document.getElementById("btnProduct6Row2");
  divBtnProduct6Row3 = document.getElementById("btnProduct6Row3");

  divBtnProduct6Row1Col1 = document.getElementById("btnProduct6Row1Col1");
  divBtnProduct6Row1Col1No = document.getElementById("btnProduct6Row1Col1No");
  divBtnProduct6Row1Col2 = document.getElementById("btnProduct6Row1Col2");
  divBtnProduct6Row1Col2No = document.getElementById("btnProduct6Row1Col2No");
  divBtnProduct6Row2Col1 = document.getElementById("btnProduct6Row2Col1");
  divBtnProduct6Row2Col1No = document.getElementById("btnProduct6Row2Col1No");
  divBtnProduct6Row2Col2 = document.getElementById("btnProduct6Row2Col2");
  divBtnProduct6Row2Col2No = document.getElementById("btnProduct6Row2Col2No");
  divBtnProduct6Row3Col1 = document.getElementById("btnProduct6Row3Col1");
  divBtnProduct6Row3Col1No = document.getElementById("btnProduct6Row3Col1No");
  divBtnProduct6Row3Col2 = document.getElementById("btnProduct6Row3Col2");
  divBtnProduct6Row3Col2No = document.getElementById("btnProduct6Row3Col2No");

  no6imgProduct1Image1 = document.getElementById("no6imgProduct1Image1");
  no6product1Detail1 = document.getElementById("no6product1Detail1");

  no6imgProduct2Image1 = document.getElementById("no6imgProduct2Image1");
  no6product2Detail1 = document.getElementById("no6product2Detail1");

  no6imgProduct3Image1 = document.getElementById("no6imgProduct3Image1");
  no6product3Detail1 = document.getElementById("no6product3Detail1");

  no6imgProduct4Image1 = document.getElementById("no6imgProduct4Image1");
  no6product4Detail1 = document.getElementById("no6product4Detail1");

  no6imgProduct5Image1 = document.getElementById("no6imgProduct5Image1");
  no6product5Detail1 = document.getElementById("no6product5Detail1");

  no6imgProduct6Image1 = document.getElementById("no6imgProduct6Image1");
  no6product6Detail1 = document.getElementById("no6product6Detail1");

  divBtnProduct8Row1 = document.getElementById("btnProduct8Row1");
  divBtnProduct8Row2 = document.getElementById("btnProduct8Row2");
  divBtnProduct8Row3 = document.getElementById("btnProduct8Row3");
  divBtnProduct8Row4 = document.getElementById("btnProduct8Row4");

  divBtnProduct8Row1Col1 = document.getElementById("btnProduct8Row1Col1");
  divBtnProduct8Row1Col1No = document.getElementById("btnProduct8Row1Col1No");
  divBtnProduct8Row1Col2 = document.getElementById("btnProduct8Row1Col2");
  divBtnProduct8Row1Col2No = document.getElementById("btnProduct8Row1Col2No");
  divBtnProduct8Row2Col1 = document.getElementById("btnProduct8Row2Col1");
  divBtnProduct8Row2Col1No = document.getElementById("btnProduct8Row2Col1No");
  divBtnProduct8Row2Col2 = document.getElementById("btnProduct8Row2Col2");
  divBtnProduct8Row2Col2No = document.getElementById("btnProduct8Row2Col2No");
  divBtnProduct8Row3Col1 = document.getElementById("btnProduct8Row3Col1");
  divBtnProduct8Row3Col1No = document.getElementById("btnProduct8Row3Col1No");
  divBtnProduct8Row3Col2 = document.getElementById("btnProduct8Row3Col2");
  divBtnProduct8Row3Col2No = document.getElementById("btnProduct8Row3Col2No");
  divBtnProduct8Row4Col1 = document.getElementById("btnProduct8Row4Col1");
  divBtnProduct8Row4Col1No = document.getElementById("btnProduct8Row4Col1No");
  divBtnProduct8Row4Col2 = document.getElementById("btnProduct8Row4Col2");
  divBtnProduct8Row4Col2No = document.getElementById("btnProduct8Row4Col2No");

  no8imgProduct1Image1 = document.getElementById("no8imgProduct1Image1");
  no8product1Detail1 = document.getElementById("no8product1Detail1");

  no8imgProduct2Image1 = document.getElementById("no8imgProduct2Image1");
  no8product2Detail1 = document.getElementById("no8product2Detail1");

  no8imgProduct3Image1 = document.getElementById("no8imgProduct2Image1");
  no8product3Detail1 = document.getElementById("no8product3Detail1");

  no8imgProduct4Image1 = document.getElementById("no8imgProduct4Image1");
  no8product4Detail1 = document.getElementById("no8product4Detail1");

  no8imgProduct5Image1 = document.getElementById("no8imgProduct5Image1");
  no8product5Detail1 = document.getElementById("no8product5Detail1");

  no8imgProduct6Image1 = document.getElementById("no8imgProduct6Image1");
  no8product6Detail1 = document.getElementById("no8product6Detail1");

  no8imgProduct7Image1 = document.getElementById("no8imgProduct7Image1");
  no8product7Detail1 = document.getElementById("no8product7Detail1");

  no8imgProduct8Image1 = document.getElementById("no8imgProduct8Image1");
  no8product8Detail1 = document.getElementById("no8product8Detail1");

  divBtnProduct12Row1 = document.getElementById("btnProduct12Row1");
  divBtnProduct12Row2 = document.getElementById("btnProduct12Row2");
  divBtnProduct12Row3 = document.getElementById("btnProduct12Row3");
  divBtnProduct12Row4 = document.getElementById("btnProduct12Row4");

  divBtnProduct12Row1Col1 = document.getElementById("btnProduct12Row1Col1");
  divBtnProduct12Row1Col1No = document.getElementById("btnProduct12Row1Col1No");
  divBtnProduct12Row1Col2 = document.getElementById("btnProduct12Row1Col2");
  divBtnProduct12Row1Col2No = document.getElementById("btnProduct12Row1Col2No");
  divBtnProduct12Row1Col3 = document.getElementById("btnProduct12Row1Col3");
  divBtnProduct12Row1Col3No = document.getElementById("btnProduct12Row1Col3No");
  divBtnProduct12Row2Col1 = document.getElementById("btnProduct12Row2Col1");
  divBtnProduct12Row2Col1No = document.getElementById("btnProduct12Row2Col1No");
  divBtnProduct12Row2Col2 = document.getElementById("btnProduct12Row2Col2");
  divBtnProduct12Row2Col2No = document.getElementById("btnProduct12Row2Col2No");
  divBtnProduct12Row2Col3 = document.getElementById("btnProduct12Row2Col3");
  divBtnProduct12Row2Col3No = document.getElementById("btnProduct12Row2Col3No");
  divBtnProduct12Row3Col1 = document.getElementById("btnProduct12Row3Col1");
  divBtnProduct12Row3Col1No = document.getElementById("btnProduct12Row3Col1No");
  divBtnProduct12Row3Col2 = document.getElementById("btnProduct12Row3Col2");
  divBtnProduct12Row3Col2No = document.getElementById("btnProduct12Row3Col2No");
  divBtnProduct12Row3Col3 = document.getElementById("btnProduct12Row3Col3");
  divBtnProduct12Row3Col3No = document.getElementById("btnProduct12Row3Col3No");
  divBtnProduct12Row4Col1 = document.getElementById("btnProduct12Row4Col1");
  divBtnProduct12Row4Col1No = document.getElementById("btnProduct12Row4Col1No");
  divBtnProduct12Row4Col2 = document.getElementById("btnProduct12Row4Col2");
  divBtnProduct12Row4Col2No = document.getElementById("btnProduct12Row4Col5No");
  divBtnProduct12Row4Col3 = document.getElementById("btnProduct12Row4Col3");
  divBtnProduct12Row4Col3No = document.getElementById("btnProduct12Row4Col5No");

  no12imgProduct1Image1 = document.getElementById("no12imgProduct1Image1");
  no12Product1Detail1 = document.getElementById("no12product1Detail1");

  no12imgProduct2Image1 = document.getElementById("no12imgProduct2Image1");
  no12product2Detail1 = document.getElementById("no12product2Detail1");

  no12imgProduct3Image1 = document.getElementById("no12imgProduct2Image1");
  no12product3Detail1 = document.getElementById("no12product3Detail1");

  no12imgProduct4Image1 = document.getElementById("no12imgProduct4Image1");
  no12product4Detail1 = document.getElementById("no12product4Detail1");

  no12imgProduct5Image1 = document.getElementById("no12imgProduct5Image1");
  no12product5Detail1 = document.getElementById("no12product5Detail1");

  no12imgProduct6Image1 = document.getElementById("no12imgProduct6Image1");
  no12product6Detail1 = document.getElementById("no12product6Detail1");

  no12imgProduct7Image1 = document.getElementById("no12imgProduct7Image1");
  no12product7Detail1 = document.getElementById("no12product7Detail1");

  no12imgProduct8Image1 = document.getElementById("no12imgProduct8Image1");
  no12product8Detail1 = document.getElementById("no12product8Detail1");

  no12imgProduct9Image1 = document.getElementById("no12imgProduct9Image1");
  no12product9Detail1 = document.getElementById("no12product9Detail1");

  no12imgProduct10Image1 = document.getElementById("no12imgProduct10Image1");
  no12product10Detail1 = document.getElementById("no12product10Detail1");

  no12imgProduct11Image1 = document.getElementById("no12imgProduct11Image1");
  no12product11Detail1 = document.getElementById("no12product11Detail1");

  no12imgProduct12Image1 = document.getElementById("no12imgProduct12Image1");
  no12product12Detail1 = document.getElementById("no12product12Detail1");
  //End of product data initialization

  //Volume div initialization
  vol2Row1 = document.getElementById("vol2Row1");
  vol2Row2 = document.getElementById("vol2Row2");
  vol2Row1Image1 = document.getElementById("vol2Row1Image1");
  vol2Row2Image1 = document.getElementById("vol2Row2Image1");

  vol3Row1 = document.getElementById("vol3Row1");
  vol3Row2 = document.getElementById("vol3Row2");
  vol3Row3 = document.getElementById("vol3Row3");

  vol3Row1Image1 = document.getElementById("vol3Row1Image1");
  vol3Row2Image1 = document.getElementById("vol3Row2Image1");
  vol3Row3Image1 = document.getElementById("vol3Row3Image1");

  vol6Row3 = document.getElementById("vol6Row3");
  vol6Row1Col1 = document.getElementById("vol6Row1Col1");
  vol6Row1Col2 = document.getElementById("vol6Row1Col2");
  vol6Row2Col1 = document.getElementById("vol6Row2Col1");
  vol6Row2Col2 = document.getElementById("vol6Row2Col2");
  vol6Row3Col1 = document.getElementById("vol6Row3Col1");
  vol6Row3Col2 = document.getElementById("vol6Row3Col2");

  vol6Row1Col1Image1 = document.getElementById("vol6Row1Col1Image1");
  vol6Row1Col2Image1 = document.getElementById("vol6Row1Col2Image1");
  vol6Row2Col1Image1 = document.getElementById("vol6Row2Col1Image1");
  vol6Row2Col2Image1 = document.getElementById("vol6Row2Col2Image1");
  vol6Row3Col1Image1 = document.getElementById("vol6Row3Col1Image1");
  vol6Row3Col2Image1 = document.getElementById("vol6Row3Col2Image1");

  vol2product1Detail1 = document.getElementById("vol2product1Detail1");
  vol2product1Detail2 = document.getElementById("vol2product1Detail2");
  vol2product1Detail3 = document.getElementById("vol2product1Detail3");
  vol2product2Detail1 = document.getElementById("vol2product2Detail1");
  vol2product2Detail2 = document.getElementById("vol2product2Detail2");
  vol2product2Detail3 = document.getElementById("vol2product2Detail3");

  vol3product1Detail1 = document.getElementById("vol3product1Detail1");
  vol3product1Detail2 = document.getElementById("vol3product1Detail2");
  vol3product1Detail3 = document.getElementById("vol3product1Detail3");
  vol3product2Detail1 = document.getElementById("vol3product2Detail1");
  vol3product2Detail2 = document.getElementById("vol3product2Detail2");
  vol3product2Detail3 = document.getElementById("vol3product2Detail3");
  vol3product3Detail1 = document.getElementById("vol3product3Detail1");
  vol3product3Detail2 = document.getElementById("vol3product3Detail2");
  vol3product3Detail3 = document.getElementById("vol3product3Detail3");

  vol6product1Detail1 = document.getElementById("vol6product1Detail1");
  vol6product1Detail2 = document.getElementById("vol6product1Detail2");
  vol6product1Detail3 = document.getElementById("vol6product1Detail3");
  vol6product2Detail1 = document.getElementById("vol6product2Detail1");
  vol6product2Detail2 = document.getElementById("vol6product2Detail2");
  vol6product2Detail3 = document.getElementById("vol6product2Detail3");
  vol6product3Detail1 = document.getElementById("vol6product3Detail1");
  vol6product3Detail2 = document.getElementById("vol6product3Detail2");
  vol6product3Detail3 = document.getElementById("vol6product3Detail3");
  vol6product4Detail1 = document.getElementById("vol6product4Detail1");
  vol6product4Detail2 = document.getElementById("vol6product4Detail2");
  vol6product4Detail3 = document.getElementById("vol6product4Detail3");
  vol6product5Detail1 = document.getElementById("vol6product5Detail1");
  vol6product5Detail2 = document.getElementById("vol6product5Detail2");
  vol6product5Detail3 = document.getElementById("vol6product5Detail3");
  vol6product6Detail1 = document.getElementById("vol6product6Detail1");
  vol6product6Detail2 = document.getElementById("vol6product6Detail2");
  vol6product6Detail3 = document.getElementById("vol6product6Detail3");

  divSelectedVolume = document.getElementById("volume-text");
  divSelectedVolumePrice = document.getElementById("txt-volume-price");
  prodName1 = document.getElementById("prodName1");
  prodName2 = document.getElementById("prodName2");
  // divSelectedProductLogo = document.getElementById("productLogoConfirm");
  divSelectedProductBottle = document.getElementById("productBottleConfirm");
  divConfirmedPrice = document.getElementById("confirmedPrice");
  divConfirmedVolume = document.getElementById("confirmedVolume");
  divRefilGuideImg = document.getElementById("imgSelectNobe");

  // imgProductScreenLogo = document.getElementById("productScreenLogo");
  imgProductScreenBottle = document.getElementById("productScreenBottle");
  idProductVolumeSave1 = document.getElementById("idProductVolumeSave1");
  idProductVolumeSave2 = document.getElementById("idProductVolumeSave2");
  idVolumePrice500 = document.getElementById("idVolumePrice500");
  idVolumePrice1L = document.getElementById("idVolumePrice1L");

  divCurrentVolume = document.getElementById("idCurrentVolume");
  divRefillVolume = document.getElementById("idRefillValue");
  divLastRefillDate = document.getElementById("idLastRefillDate");
  divManufactureDate = document.getElementById("idManufacDate");
  divExpireDate = document.getElementById("idExpireDate");
  divBatchNoValue = document.getElementById("idBatchNoValue");
  divPrice500 = document.getElementById("id500Price");
  divPrice1000 = document.getElementById("id1000Price");
  divDiscountPrice = document.getElementById("idDiscountPrice");
  divAlertText = document.getElementById("divAlertText");
  divAlertTextSettings = document.getElementById("divAlertTextSettings");
  divFillingText = document.getElementById("divFillingText");
  divFillingAmount = document.getElementById("divFillingAmount");
  divFillingAmountArb = document.getElementById("divFillingAmountArb");
  selectDropdown = document.getElementById("idSelectProduct");

  divDebugProductVol1 = document.getElementById("debugVolume1");
  divDebugProductVol2 = document.getElementById("debugVolume2");
  divDebugProductVol3 = document.getElementById("debugVolume3");
  divDebugProductVol4 = document.getElementById("debugVolume4");
  divDebugProductVol5 = document.getElementById("debugVolume5");
  divDebugProductVol6 = document.getElementById("debugVolume6");

  //Discount price lables
  vol1Price = document.getElementById("vol1Price");
  vol2Price = document.getElementById("vol2Price");
  vol3Price = document.getElementById("vol3Price");
  vol4Price = document.getElementById("vol4Price");
  vol5Price = document.getElementById("vol5Price");
  vol6Price = document.getElementById("vol6Price");

  vol1Discount = document.getElementById("vol1Discount");
  vol2Discount = document.getElementById("vol2Discount");
  vol3Discount = document.getElementById("vol3Discount");
  vol4Discount = document.getElementById("vol4Discount");
  vol5Discount = document.getElementById("vol5Discount");
  vol6Discount = document.getElementById("vol6Discount");

  //Discount prices
  idPrice1 = document.getElementById("idPrice1");
  idPrice2 = document.getElementById("idPrice2");
  idPrice3 = document.getElementById("idPrice3");
  idPrice4 = document.getElementById("idPrice4");
  idPrice5 = document.getElementById("idPrice5");
  idPrice6 = document.getElementById("idPrice6");

  idDiscount1 = document.getElementById("idDiscount1");
  idDiscount2 = document.getElementById("idDiscount2");
  idDiscount3 = document.getElementById("idDiscount3");
  idDiscount4 = document.getElementById("idDiscount4");
  idDiscount5 = document.getElementById("idDiscount5");
  idDiscount6 = document.getElementById("idDiscount6");

  //CIP data
  idNozzel1 = document.getElementById("idNozzel1");
  idNozzel2 = document.getElementById("idNozzel2");
  idNozzel3 = document.getElementById("idNozzel3");
  idNozzel4 = document.getElementById("idNozzel4");
  idNozzel5 = document.getElementById("idNozzel5");
  idNozzel6 = document.getElementById("idNozzel6");
  idNozzel7 = document.getElementById("idNozzel7");
  idNozzel8 = document.getElementById("idNozzel8");
  idNozzel9 = document.getElementById("idNozzel9");
  idNozzel10 = document.getElementById("idNozzel10");
  idNozzel11 = document.getElementById("idNozzel11");
  idNozzel12 = document.getElementById("idNozzel12");

  idCipName1 = document.getElementById("idCipName1");
  idCipName2 = document.getElementById("idCipName2");
  idCipName3 = document.getElementById("idCipName3");
  idCipName4 = document.getElementById("idCipName4");
  idCipName5 = document.getElementById("idCipName5");
  idCipName6 = document.getElementById("idCipName6");
  idCipName7 = document.getElementById("idCipName7");
  idCipName8 = document.getElementById("idCipName8");
  idCipName9 = document.getElementById("idCipName9");
  idCipName10 = document.getElementById("idCipName10");
  idCipName11 = document.getElementById("idCipName11");
  idCipName12 = document.getElementById("idCipName12");

  idCipImage1 = document.getElementById("idCipImage1");
  idCipImage2 = document.getElementById("idCipImage2");
  idCipImage3 = document.getElementById("idCipImage3");
  idCipImage4 = document.getElementById("idCipImage4");
  idCipImage5 = document.getElementById("idCipImage5");
  idCipImage6 = document.getElementById("idCipImage6");
  idCipImage7 = document.getElementById("idCipImage7");
  idCipImage8 = document.getElementById("idCipImage8");
  idCipImage9 = document.getElementById("idCipImage9");
  idCipImage10 = document.getElementById("idCipImage10");
  idCipImage11 = document.getElementById("idCipImage11");
  idCipImage12 = document.getElementById("idCipImage12");

  divAlertLayerCIP = document.getElementById("divAlertLayerCIP");
  btnCipPause = document.getElementById("btnPauseCIP");
  divCipPause = document.getElementById("divPauseCIP");
  idCipVolumeAmount = document.getElementById("divCipProcessAmount");

  idDivAlertContainer1 = document.getElementById("alert-container1");
  idDivAlertContainer2 = document.getElementById("alert-container2");
  idDivAlertContainer3 = document.getElementById("alert-container3");

  btnDeclineImage = document.getElementById("btnDeclineImage");
  btnConfirmImage = document.getElementById("btnConfirmImage");
  btnNextImage = document.getElementById("btnNextImage");
  btnBenImage = document.getElementById("btnBenImage");
  btnEngImage = document.getElementById("btnEngImage");
  imgBtnTapToStart = document.getElementById("imgBtnTapToStart");
  btnStopImage = document.getElementById("btnStopImage");
  btnBckImage = document.getElementById("btnBckImage");
  btnBckImage1 = document.getElementById("btnBckImage1");
  btnBckImage2 = document.getElementById("btnBckImage2");
  productList = fileDataList;
  productCount = productList.length;
  // productCount = 2;
  console.log(productList);
  divNumOfProducts4.style.display = "none";
  divNumOfProducts8.style.display = "none";
  divNumOfProducts12.style.display = "none";

  //API response div id
  divVolume1Layer = document.getElementById("idVolume1LayerAPI");
  divVolume2Layer = document.getElementById("idVolume2LayerAPI");
  divVolume3Layer = document.getElementById("idVolume3LayerAPI");
  divVolume4Layer = document.getElementById("idVolume4LayerAPI");
  divVolume5Layer = document.getElementById("idVolume5LayerAPI");
  divVolume6Layer = document.getElementById("idVolume6LayerAPI");

  idProductNameAPI = document.getElementById("idProductNameAPI");
  idRefillVolumeAPI = document.getElementById("idRefillVolumeAPI");
  idLastRefillDateAPI = document.getElementById("idLastRefillDateAPI");
  idManufactureDateAPI = document.getElementById("idManufactureDateAPI");
  idExpireDateAPI = document.getElementById("idExpireDateAPI");
  idbatchNoAPI = document.getElementById("idbatchNoAPI");

  idVolume1API = document.getElementById("idVolume1API");
  idVolume2API = document.getElementById("idVolume2API");
  idVolume3API = document.getElementById("idVolume3API");
  idVolume4API = document.getElementById("idVolume4API");
  idVolume5API = document.getElementById("idVolume5API");
  idVolume6API = document.getElementById("idVolume6API");

  idVolume1PriceAPI = document.getElementById("idVolume1PriceAPI");
  idVolume2PriceAPI = document.getElementById("idVolume2PriceAPI");
  idVolume3PriceAPI = document.getElementById("idVolume3PriceAPI");
  idVolume4PriceAPI = document.getElementById("idVolume4PriceAPI");
  idVolume5PriceAPI = document.getElementById("idVolume5PriceAPI");
  idVolume6PriceAPI = document.getElementById("idVolume6PriceAPI");
  barcodeInputHidden = document.getElementById("txtBarcodeIDHidden");

if(productCount != 0) {
  hideProductDivs();
  if (productCount < 5) {
    show4Products();
    switch (productCount) {
      case 1:
        divBtnProduct4Row2.style.display = "none";
        divBtnProduct4Row3.style.display = "none";
        divBtnProduct4Row4.style.display = "none";
        break;
      case 2:
        divBtnProduct4Row3.style.display = "none";
        divBtnProduct4Row4.style.display = "none";
        break;
      case 3:
        divBtnProduct4Row4.style.display = "none";
        break;
    }
  } else if (productCount < 7) {
    show6Products();
    switch (productCount) {
      case 5:
        divBtnProduct6Row3Col2.style.display = "none";
        break;
    }
  } else if (productCount < 9) {
    show8Products();
    switch (productCount) {
      case 5:
        divBtnProduct8Row4.style.display = "none";
        divBtnProduct8Row3Col2.style.display = "none";
        break;
      case 6:
        divBtnProduct8Row4.style.display = "none";
        break;
      case 7:
        divBtnProduct8Row4Col2.style.display = "none";
        break;
    }
  } else {
    show12Products();
    switch (productCount) {
      case 9:
        divBtnProduct12Row4.style.display = "none";
        break;
      case 10:
        divBtnProduct12Row4Col2.style.display = "none";
        divBtnProduct12Row4Col3.style.display = "none";
        break;
      case 11:
        divBtnProduct12Row4Col3.style.display = "none";
        break;
    }
  }
  // setProductDetails();
  setDebugOptions();
  console.log("read done");
}
  
}

function setDebugOptions() {
  selectDropdown = document.getElementById("idSelectProduct");
  selectDropdown.length = 0;

  let productOptions = [];
  productOptions[0] = document.createElement("option");
  productOptions[0].text = "Select Product";
  productOptions[0].value = 0;
  selectDropdown.add(productOptions[0]);

  for (var i = 1; i < productList.length + 1; i++) {
    productOptions[i] = document.createElement("option");
    var name = productList[i - 1].productName;
    productOptions[i].text = name;
    productOptions[i].value = i;
    console.log("iiiii " + i);
    selectDropdown.add(productOptions[i]);
  }
}

function hideProductDivs() {
  divNumOfProducts4.style.display = "nonde";
  divNumOfProducts6.style.display = "none";
  divNumOfProducts8.style.display = "none";
  divNumOfProducts12.style.display = "none";
}

function show4Products() {
  divNumOfProducts4.style.display = "block";
  divBtnProduct4Row1.style.display = "block";
  divBtnProduct4Row2.style.display = "block";
  divBtnProduct4Row3.style.display = "block";
  divBtnProduct4Row4.style.display = "block";
}

function show6Products() {
  divNumOfProducts6.style.display = "block";
  divBtnProduct6Row3.style.display = "flex";
  divBtnProduct6Row3Col1.style.display = "block";
  divBtnProduct6Row3Col2.style.display = "block";
}

function show8Products() {
  divNumOfProducts8.style.display = "block";
  divBtnProduct8Row3.style.display = "flex";
  divBtnProduct8Row3Col1.style.display = "block";
  divBtnProduct8Row3Col2.style.display = "block";
  divBtnProduct8Row4.style.display = "flex";
  divBtnProduct8Row4Col1.style.display = "block";
  divBtnProduct8Row4Col2.style.display = "block";
}

function show12Products() {
  divNumOfProducts12.style.display = "block";
  divBtnProduct12Row4.style.display = "flex";
  divBtnProduct12Row4Col1.style.display = "block";
  divBtnProduct12Row4Col2.style.display = "block";
  divBtnProduct12Row4Col3.style.display = "block";
}

function setProductDetails() {
  if (productList[0] != undefined) {
    //no4imgProduct1Image1.src = "images/vim.png"
    console.log(productList[0]);
    no4product1Detail1.innerHTML = productList[0].productName;
    

    if (selectedLanguage == "english"){
      no4product1Detail2.innerHTML =
      eng_li[8] + " " + getMaximumDiscount(productList[0].productDiscounts.split("/")) + " " + eng_li[9];
      document.getElementById("no4product1Detail2").style.fontFamily = "bambino_newsemibold";
    }
    if (selectedLanguage == "arabic"){
      no4product1Detail2.innerHTML =
      arb_li[8] + " " + convertToArbNumber(getMaximumDiscount(productList[0].productDiscounts.split("/"))) + " " + arb_li[9];
      document.getElementById("no4product1Detail2").style.fontFamily = "ElMessiri-SemiBold";
    }

    //no8imgProduct1Image1.src = "images/sunlight.png"
    no6product1Detail1.innerHTML = productList[0].productName;
    no8product1Detail1.innerHTML =
      "Save <br/> Rs." +
      getMaximumDiscount(productList[0].productDiscounts.split("/"));

    //no12imgProduct1Image1.src = "images/sunlight.png"
    no12product1Detail1.innerHTML =
      "Save <br/> Rs." +
      getMaximumDiscount(productList[0].productDiscounts.split("/"));
    // console.log("Product 1 "+ productList[0].productRemaining + " " + getMinimumVolume((productList[0].productVolumes).split("/")));

    if (
      parseInt(productList[0].productRemaining) <
      getMinimumVolume(productList[0].productVolumes.split("/"))
    ) {
      divBtnProduct4Row1Col1.style.display = "none";
      divBtnProduct4Row1Col2.style.display = "block";

      divBtnProduct6Row1Col1.style.display = "none";
      divBtnProduct6Row1Col1No.style.display = "block";

      divBtnProduct8Row1Col1.style.display = "none";
      divBtnProduct8Row1Col1No.style.display = "block";

      divBtnProduct12Row1Col1.style.display = "none";
      divBtnProduct12Row1Col1No.style.display = "block";
    } else {
      divBtnProduct4Row1Col1.style.display = "block";
      divBtnProduct4Row1Col2.style.display = "none";

      divBtnProduct6Row1Col1.style.display = "block";
      divBtnProduct6Row1Col1No.style.display = "none";

      divBtnProduct8Row1Col1.style.display = "block";
      divBtnProduct8Row1Col1No.style.display = "none";

      divBtnProduct12Row1Col1.style.display = "block";
      divBtnProduct12Row1Col1No.style.display = "none";
    }
  }

  if (productList[1] != undefined) {
    //no4imgProduct2Image1.src = "images/vim.png"
    no4product2Detail1.innerHTML = productList[1].productName;

    if (selectedLanguage == "english"){
      no4product2Detail2.innerHTML =
      eng_li[8] + " " + getMaximumDiscount(productList[1].productDiscounts.split("/")) + " " + eng_li[9];
    }
    if (selectedLanguage == "arabic"){
      no4product2Detail2.innerHTML =
      arb_li[9] + " " + convertToArbNumber(getMaximumDiscount(productList[1].productDiscounts.split("/"))) + " " + arb_li[8];
    }

    no6product2Detail1.innerHTML = productList[1].productName;

    //no8imgProduct2Image1.src = "images/sunlight.png"
    no8product2Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[1].productDiscounts.split("/"));

    //no8imgProduct2Image1.src = "images/sunlight.png"
    no12product2Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[1].productDiscounts.split("/"));

    if (
      parseInt(productList[1].productRemaining) <
      getMinimumVolume(productList[1].productVolumes.split("/"))
    ) {
      divBtnProduct4Row2Col1.style.display = "none";
      divBtnProduct4Row2Col2.style.display = "block";

      divBtnProduct6Row2Col2.style.display = "none";
      divBtnProduct6Row2Col2No.style.display = "block";

      divBtnProduct8Row2Col2.style.display = "none";
      divBtnProduct8Row2Col2No.style.display = "block";

      divBtnProduct12Row1Col2.style.display = "none";
      divBtnProduct12Row1Col2No.style.display = "block";
    } else {
      divBtnProduct4Row2Col1.style.display = "block";
      divBtnProduct4Row2Col2.style.display = "none";

      divBtnProduct6Row1Col2.style.display = "block";
      divBtnProduct6Row1Col2No.style.display = "none";

      divBtnProduct8Row1Col2.style.display = "block";
      divBtnProduct8Row1Col2No.style.display = "none";

      divBtnProduct12Row1Col2.style.display = "block";
      divBtnProduct12Row1Col2No.style.display = "none";
    }
  }

  if (productList[2] != undefined) {
    //no4imgProduct3Image1.src = "images/vim.png"
    no4product3Detail1.innerHTML = productList[2].productName;
    no4product3Detail2.innerHTML =
      "Save upto<br/>Rs." +
      getMaximumDiscount(productList[2].productDiscounts.split("/"));

    no6product3Detail1.innerHTML = productList[2].productName;

    //no8imgProduct3Image1.src = "images/sunlight.png"
    no8product3Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[2].productDiscounts.split("/"));

    //no12imgProduct3Image1.src = "images/sunlight.png"
    no12product3Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[2].productDiscounts.split("/"));

    if (
      parseInt(productList[2].productRemaining) <
      getMinimumVolume(productList[2].productVolumes.split("/"))
    ) {
      divBtnProduct4Row3Col1.style.display = "none";
      divBtnProduct4Row3Col2.style.display = "block";

      divBtnProduct6Row2Col1.style.display = "none";
      divBtnProduct6Row2Col1No.style.display = "block";

      divBtnProduct8Row2Col1.style.display = "none";
      divBtnProduct8Row2Col1No.style.display = "block";

      divBtnProduct12Row1Col3.style.display = "none";
      divBtnProduct12Row1Col3No.style.display = "block";
    } else {
      divBtnProduct4Row3Col1.style.display = "block";
      divBtnProduct4Row3Col2.style.display = "none";

      divBtnProduct6Row2Col1.style.display = "block";
      divBtnProduct6Row2Col1No.style.display = "none";

      divBtnProduct8Row2Col1.style.display = "block";
      divBtnProduct8Row2Col1No.style.display = "none";

      divBtnProduct12Row1Col3.style.display = "block";
      divBtnProduct12Row1Col3No.style.display = "none";
    }
  }

  if (productList[3] != undefined) {
    //no4imgProduct4Image1.src = "images/vim.png"
    no4product4Detail1.innerHTML = productList[3].productName;
    no4product4Detail2.innerHTML =
      "Save upto Rs." +
      getMaximumDiscount(productList[3].productDiscounts.split("/"));

    no6product4Detail1.innerHTML = productList[3].productName;

    //no8imgProduct1Image1.src = "images/sunlight.png"
    no8product4Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[3].productDiscounts.split("/"));

    //no12imgProduct4Image1.src = "images/sunlight.png"
    no12product4Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[3].productDiscounts.split("/"));

    if (
      parseInt(productList[3].productRemaining) <
      getMinimumVolume(productList[3].productVolumes.split("/"))
    ) {
      divBtnProduct4Row4Col1.style.display = "none";
      divBtnProduct4Row4Col2.style.display = "block";

      divBtnProduct6Row2Col2.style.display = "none";
      divBtnProduct6Row2Col2No.style.display = "block";

      divBtnProduct8Row2Col2.style.display = "none";
      divBtnProduct8Row2Col2No.style.display = "block";

      divBtnProduct12Row2Col1.style.display = "none";
      divBtnProduct12Row2Col1No.style.display = "block";
    } else {
      divBtnProduct4Row4Col1.style.display = "block";
      divBtnProduct4Row4Col2.style.display = "none";

      divBtnProduct6Row2Col2.style.display = "block";
      divBtnProduct6Row2Col2No.style.display = "none";

      divBtnProduct8Row2Col2.style.display = "block";
      divBtnProduct8Row2Col2No.style.display = "none";

      divBtnProduct12Row2Col1.style.display = "block";
      divBtnProduct12Row2Col1No.style.display = "none";
    }
  }

  if (productList[4] != undefined) {
    no6product5Detail1.innerHTML = productList[4].productName;
    //no8imgProduct5Image1.src = "images/sunlight.png"
    no8product5Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[4].productDiscounts.split("/"));

    //no12imgProduct5Image1.src = "images/sunlight.png"
    no12product5Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[4].productDiscounts.split("/"));

    if (
      parseInt(productList[4].productRemaining) <
      getMinimumVolume(productList[4].productVolumes.split("/"))
    ) {
      divBtnProduct6Row3Col1.style.display = "none";
      divBtnProduct6Row3Col1No.style.display = "block";

      divBtnProduct8Row3Col1.style.display = "none";
      divBtnProduct8Row3Col1No.style.display = "block";

      divBtnProduct12Row2Col2.style.display = "none";
      divBtnProduct12Row2Col2No.style.display = "block";
    } else {
      divBtnProduct6Row3Col1.style.display = "block";
      divBtnProduct6Row3Col1No.style.display = "none";

      divBtnProduct8Row3Col1.style.display = "block";
      divBtnProduct8Row3Col1No.style.display = "none";

      divBtnProduct12Row2Col2.style.display = "block";
      divBtnProduct12Row2Col2No.style.display = "none";
    }
  }

  if (productList[5] != undefined) {
    no6product6Detail1.innerHTML = productList[5].productName;
    //no8imgProduct6Image1.src = "images/sunlight.png"
    no8product6Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[5].productDiscounts.split("/"));

    //no12imgProduct6Image1.src = "images/sunlight.png"
    no12product6Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[5].productDiscounts.split("/"));

    if (
      parseInt(productList[5].productRemaining) <
      getMinimumVolume(productList[5].productVolumes.split("/"))
    ) {
      divBtnProduct6Row3Col2.style.display = "none";
      divBtnProduct6Row3Col2No.style.display = "block";

      divBtnProduct8Row3Col2.style.display = "none";
      divBtnProduct8Row3Col2No.style.display = "block";

      divBtnProduct12Row2Col3.style.display = "none";
      divBtnProduct12Row2Col3No.style.display = "block";
    } else {
      divBtnProduct6Row3Col2.style.display = "block";
      divBtnProduct6Row3Col2No.style.display = "none";

      divBtnProduct8Row3Col2.style.display = "block";
      divBtnProduct8Row3Col2No.style.display = "none";

      divBtnProduct12Row2Col3.style.display = "block";
      divBtnProduct12Row2Col3No.style.display = "none";
    }
  }

  if (productList[6] != undefined) {
    //no8imgProduct7Image1.src = "images/sunlight.png"
    no8product7Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[6].productDiscounts.split("/"));

    //no12imgProduct7Image1.src = "images/sunlight.png"
    no12product7Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[6].productDiscounts.split("/"));

    if (
      parseInt(productList[6].productRemaining) <
      getMinimumVolume(productList[6].productVolumes.split("/"))
    ) {
      divBtnProduct8Row4Col1.style.display = "none";
      divBtnProduct8Row4Col1No.style.display = "block";

      divBtnProduct12Row3Col1.style.display = "none";
      divBtnProduct12Row3Col1No.style.display = "block";
    } else {
      divBtnProduct8Row3Col2.style.display = "block";
      divBtnProduct8Row3Col2No.style.display = "none";

      divBtnProduct12Row3Col1.style.display = "block";
      divBtnProduct12Row3Col1No.style.display = "none";
    }
  }

  if (productList[7] != undefined) {
    //no8imgProduct8Image1.src = "images/sunlight.png"
    no8product8Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[7].productDiscounts.split("/"));

    //no12imgProduct8Image1.src = "images/sunlight.png"
    no12product8Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[7].productDiscounts.split("/"));

    if (
      parseInt(productList[7].productRemaining) <
      getMinimumVolume(productList[7].productVolumes.split("/"))
    ) {
      divBtnProduct8Row4Col2.style.display = "none";
      divBtnProduct8Row4Col2No.style.display = "block";

      divBtnProduct12Row3Col2.style.display = "none";
      divBtnProduct12Row3Col2No.style.display = "block";
    } else {
      divBtnProduct8Row4Col2.style.display = "block";
      divBtnProduct8Row4Col2No.style.display = "none";

      divBtnProduct12Row3Col2.style.display = "block";
      divBtnProduct12Row3Col2No.style.display = "none";
    }
  }

  if (productList[8] != undefined) {
    //no12imgProduct9Image1.src = "images/sunlight.png"
    no12product9Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[8].productDiscounts.split("/"));

    if (
      parseInt(productList[7].productRemaining) <
      getMinimumVolume(productList[7].productVolumes.split("/"))
    ) {
      divBtnProduct12Row3Col3.style.display = "none";
      divBtnProduct12Row3Col3No.style.display = "block";
    } else {
      divBtnProduct12Row3Col3.style.display = "block";
      divBtnProduct12Row3Col3No.style.display = "none";
    }
  }

  if (productList[9] != undefined) {
    //no12imgProduct10Image1.src = "images/sunlight.png"
    no12product10Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[9].productDiscounts.split("/"));

    if (
      parseInt(productList[7].productRemaining) <
      getMinimumVolume(productList[7].productVolumes.split("/"))
    ) {
      divBtnProduct12Row4Col1.style.display = "none";
      divBtnProduct12Row4Col1No.style.display = "block";
    } else {
      divBtnProduct12Row4Col1.style.display = "block";
      divBtnProduct12Row4Col1No.style.display = "none";
    }
  }

  if (productList[10] != undefined) {
    //no12imgProduct11Image1.src = "images/sunlight.png"
    no12product11Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[10].productDiscounts.split("/"));

    if (
      parseInt(productList[7].productRemaining) <
      getMinimumVolume(productList[7].productVolumes.split("/"))
    ) {
      divBtnProduct12Row4Col12.style.display = "none";
      divBtnProduct12Row4Col2No.style.display = "block";
    } else {
      divBtnProduct12Row4Col2.style.display = "block";
      divBtnProduct12Row4Col2No.style.display = "none";
    }
  }

  if (productList[11] != undefined) {
    //no12imgProduct12Image1.src = "images/sunlight.png"
    no12product12Detail1.innerHTML =
      "Save <br/>Rs." +
      getMaximumDiscount(productList[11].productDiscounts.split("/"));

    if (
      parseInt(productList[7].productRemaining) <
      getMinimumVolume(productList[7].productVolumes.split("/"))
    ) {
      divBtnProduct12Row4Col13.style.display = "none";
      divBtnProduct12Row4Col3No.style.display = "block";
    } else {
      divBtnProduct12Row4Col3.style.display = "block";
      divBtnProduct12Row4Col3No.style.display = "none";
    }
  }
}

function isOnline(no, yes) {
  var xhr = XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHttp");
  xhr.onload = function () {
    if (yes instanceof Function) {
      yes();
    }
  };
  xhr.onerror = function () {
    if (no instanceof Function) {
      no();
    }
  };
  xhr.open("GET", "anypage.php", true);
  xhr.send();
}

function getMaximumDiscount(discounts) {
  var maximumDiscount = parseInt(discounts[0]);
  discounts.forEach(function (item, index, array) {
    if (parseInt(item) > maximumDiscount) {
      maximumDiscount = parseInt(item);
    }
  });
  console.log(maximumDiscount);
  return maximumDiscount;
}

function getMinimumVolume(volumes) {
  var minVolume = parseInt(volumes[0]);
  volumes.forEach(function (item, index, array) {
    if (parseInt(item) < minVolume) {
      minVolume = parseInt(item);
    }
  });
  console.log(minVolume);
  return minVolume;
}

function startTimer(time) {
  clearTimeout(g_timer);
  console.log("timer stared1");
  g_timer = window.setTimeout(function () {
    console.log("timer executed");
    isProductSelected = false;
    ipc_state = STATE_PORDUCT_SELECTION;
    selected_nozzel_number = "0";
    selectedVolume = "0";
    easy_numpad_close();
    hideAll();
    $("div#tapToStart-container").show();
  }, time * 1000);
}

function redirectTimer(time) {
  clearTimeout(r_timer);
  console.log("timer stared2");
  r_timer = window.setTimeout(function () {
    console.log("timer executedxx");
    hideAll();
    $("div#tapToStart-container").show();
    ipc_state = STATE_IDLE;
  }, time * 1000);
}

function showSelectedProductData() {
  let selectedProductDropDown =
    selectDropdown.options[selectDropdown.selectedIndex].value;

  $("#divAlertLayer").css({ backgroundColor: "red" });
  console.log("dataaaaaaaaaaaaaa   " + selectedProductDropDown);
  $("div#divAlertLayer").hide();
  if (selectedProductDropDown == 0) {
    hideAllOptions();
    clearAllDebugValues();
  } else {
    var productDetail = productList[selectedProductDropDown - 1];
    console.log(productDetail);
    debugProduct = productDetail;
    console.log(debugProduct);
    fileName = productDetail["fileName"];
    productId = productDetail["productId"];
    productRemaining = productDetail["productRemaining"];
    productMFD = productDetail["productMFD"];
    productEXD = productDetail["productEXD"];
    productRFD = productDetail["productRFD"];
    productVolumes = productDetail["productVolumes"];
    productPrices = productDetail["productPrices"];
    batchNo = productDetail["batchNo"];
    productDiscounts = productDetail["productDiscounts"];
    selected_nozzel_number = productDetail["nozzleNumber"];

    hideAllOptions();
    console.log(productVolumes);

    switch (productVolumes.split("/").length) {
      case 6:
        divDebugProductVol6.style.display = "block";
      case 5:
        divDebugProductVol5.style.display = "block";
      case 4:
        divDebugProductVol4.style.display = "block";
      case 3:
        divDebugProductVol3.style.display = "block";
      case 2:
        divDebugProductVol2.style.display = "block";
      case 1:
        divDebugProductVol1.style.display = "block";
    }

    if (productVolumes.split("/")[0] != undefined) {
      vol1Price.textContent = productVolumes.split("/")[0] + " ml Price";
      vol1Discount.textContent = productVolumes.split("/")[0] + "ml Discount";
      idPrice1.value = productPrices.split("/")[0];
      idDiscount1.value = productDiscounts.split("/")[0];
    }
    if (productVolumes.split("/")[1] != undefined) {
      vol2Price.textContent = productVolumes.split("/")[1] + "ml Price";
      vol2Discount.textContent = productVolumes.split("/")[1] + "ml Discount";
      idPrice2.value = productPrices.split("/")[1];
      idDiscount2.value = productDiscounts.split("/")[1];
    }

    if (productVolumes.split("/")[2] != undefined) {
      vol3Price.textContent = productVolumes.split("/")[2] + "ml Price";
      vol3Discount.textContent = productVolumes.split("/")[2] + "ml Discount";
      idPrice3.value = productPrices.split("/")[2];
      idDiscount3.value = productDiscounts.split("/")[2];
    }

    if (productVolumes.split("/")[3] != undefined) {
      vol4Price.textContent = productVolumes.split("/")[3] + "ml Price";
      vol4Discount.textContent = productVolumes.split("/")[3] + "ml Discount";
      idPrice4.value = productPrices.split("/")[3];
      idDiscount4.value = productDiscounts.split("/")[3];
    }

    if (productVolumes.split("/")[4] != undefined) {
      vol5Price.textContent = productVolumes.split("/")[4] + "ml Price";
      vol5Discount.textContent = productVolumes.split("/")[4] + "ml Discount";
      idPrice5.value = productPrices.split("/")[4];
      idDiscount5.value = productDiscounts.split("/")[4];
    }

    if (productVolumes.split("/")[5] != undefined) {
      vol6Price.textContent = productVolumes.split("/")[5] + "ml Price";
      vol6Discount.textContent = productVolumes.split("/")[5] + "ml Discount";
      idPrice6.value = productPrices.split("/")[5];
      idDiscount6.value = productDiscounts.split("/")[5];
    }

    divCurrentVolume.innerHTML = (parseFloat(productRemaining) / 1000).toFixed(
      2
    );
    divLastRefillDate.innerHTML = productRFD.toString().split(" ")[0];
    divRefillVolume.value = "";
    divBatchNoValue.value = batchNo;
    divManufactureDate.value = productMFD;
    divExpireDate.value = productEXD;
  }
}
function clearAllDebugValues() {
  $("div#divAlertLayer").hide();
  divCurrentVolume.innerHTML = "";
  divLastRefillDate.innerHTML = "";
  divRefillVolume.value = "";
  divBatchNoValue.value = "";
  divManufactureDate.value = null;
  divExpireDate.value = null;
}

function hideAllOptions() {
  divDebugProductVol1.style.display = "none";
  divDebugProductVol2.style.display = "none";
  divDebugProductVol3.style.display = "none";
  divDebugProductVol4.style.display = "none";
  divDebugProductVol5.style.display = "none";
  divDebugProductVol6.style.display = "none";
}

function hideAllVolumes() {
  divVolume1Layer.style.display = "none";
  divVolume2Layer.style.display = "none";
  divVolume3Layer.style.display = "none";
  divVolume4Layer.style.display = "none";
  divVolume5Layer.style.display = "none";
  divVolume6Layer.style.display = "none";
}

function getImageID(productID) {
  switch (productCount) {
    case 6:
      switch (productID) {
        case 0:
          return no6imgProduct1Image1;
        case 1:
          return no6imgProduct2Image1;
        case 2:
          return no6imgProduct3Image1;
        case 3:
          return no6imgProduct4Image1;
        case 4:
          return no6imgProduct5Image1;
        case 5:
          return no6imgProduct6Image1;
      }
      break;
    default:
      return no6imgProduct6Image1;
  }
}

function getId(productId) {
  if (
    productId == "btnProduct1" ||
    productId == "btnProduct6Row1Col1" ||
    productId == "btnProduct8Row1Col1" ||
    productId == "btnProduct12Row1Col1"
  ) {
    return 0;
  } else if (
    productId == "btnProduct2" ||
    productId == "btnProduct6Row1Col2" ||
    productId == "btnProduct8Row1Col2" ||
    productId == "btnProduct12Row1Col2"
  ) {
    return 1;
  } else if (
    productId == "btnProduct3" ||
    productId == "btnProduct6Row2Col1" ||
    productId == "btnProduct8Row2Col1" ||
    productId == "btnProduct12Row1Col3"
  ) {
    return 2;
  } else if (
    productId == "btnProduct4" ||
    productId == "btnProduct6Row2Col2" ||
    productId == "btnProduct8Row2Col2" ||
    productId == "btnProduct12Row2Col1"
  ) {
    return 3;
  } else if (
    productId == "btnProduct6Row3Col1" ||
    productId == "btnProduct8Row3Col1" ||
    productId == "btnProduct12Row2Col2"
  ) {
    return 4;
  } else if (
    productId == "btnProduct6Row3Col2" ||
    productId == "btnProduct8Row3Col2" ||
    productId == "btnProduct12Row2Col3"
  ) {
    return 5;
  } else if (
    productId == "btnProduct8Row4Col1" ||
    productId == "btnProduct12Row3Col1"
  ) {
    return 6;
  } else if (
    productId == "btnProduct8Row4Col2" ||
    productId == "btnProduct12Row3Col2"
  ) {
    return 7;
  } else if (productId == "btnProduct12Row3Col3") {
    return 8;
  } else if (productId == "btnProduct12Row4Col1") {
    return 9;
  } else if (productId == "btnProduct12Row4Col2") {
    return 10;
  } else if (productId == "btnProduct12Row4Col3") {
    return 11;
  }
}

function dateGenerate() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + " " + time;
}

function saveToFile() {
  var obj;
  var fileData = "";
  var dateTime = dateGenerate();
  var refillVolume;

  if (divRefillVolume.value.length == 0) {
    refillVolume = debugProduct.productRemaining;
  } else {
    refillVolume = parseInt(divRefillVolume.value) * 1000;
  }
  console.log(divRefillVolume.value + "REFILLVALUE");
  var manufacDate = divManufactureDate.value;
  var expireDate = divExpireDate.value;
  var price1 = idPrice1.value;
  var discount1 = idDiscount1.value;
  var price2 = idPrice2.value;
  var discount2 = idDiscount2.value;
  var price3 = idPrice3.value;
  var discount3 = idDiscount3.value;
  var price4 = idPrice4.value;
  var discount4 = idDiscount4.value;
  var price5 = idPrice5.value;
  var discount5 = idDiscount5.value;
  var price6 = idPrice6.value;
  var discount6 = idDiscount6.value;
  var discount6 = idDiscount6.value;
  var batchCode = divBatchNoValue.value;
  var shouldShowAlert = false;
  var message;
  let volumeLength = debugProduct.productVolumes.split("/").length;

  if (debugProduct == undefined) {
    shouldShowAlert = true;
    message = "Please select product";
  } else if (manufacDate.length == 0) {
    shouldShowAlert = true;
    message = "Please set manufacture date";
  } else if (expireDate.length == 0) {
    shouldShowAlert = true;
    message = "Please set expire date";
  } else if (batchCode.length == 0) {
    shouldShowAlert = true;
    message = "Please enter batch code";
  } else if (!isNaN(refillVolume) && refillVolume > 20000) {
    shouldShowAlert = true;
    message = "Please enter valid refill volume";
  } else if (volumeLength > 0 && price1.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[0] + "ml price";
  } else if (volumeLength > 0 && discount1.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[0] +
      "ml discount price";
  } else if (volumeLength > 1 && price2.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[1] + "ml price";
  } else if (volumeLength > 1 && discount2.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[1] +
      "ml discount price";
  } else if (volumeLength > 2 && price3.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[2] + "ml price";
  } else if (volumeLength > 2 && discount3.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[2] +
      "ml discount price";
  } else if (volumeLength > 3 && price4.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[3] + "ml price";
  } else if (volumeLength > 3 && discount4.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[3] +
      "ml discount price";
  } else if (volumeLength > 4 && price5.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[4] + "ml price";
  } else if (volumeLength > 4 && discount5.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[4] +
      "ml discount price";
  } else if (volumeLength > 5 && price6.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " + debugProduct.productVolumes.split("/")[5] + "ml price";
  } else if (volumeLength > 5 && discount6.length == 0) {
    shouldShowAlert = true;
    message =
      "Please enter " +
      debugProduct.productVolumes.split("/")[5] +
      "ml discount price";
  } else if (
    volumeLength > 0 &&
    price1.includes(".") &&
    price1.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[0] +
      "ml volume price";
  } else if (
    volumeLength > 0 &&
    price1.includes(".") &&
    price1.split(".").length == 2 &&
    price1.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[0] +
      "ml volume price";
  } else if (
    volumeLength > 0 &&
    discount1.includes(".") &&
    discount1.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[0] +
      "ml discount price";
  } else if (
    volumeLength > 0 &&
    discount1.includes(".") &&
    discount1.split(".").length == 2 &&
    discount1.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[0] +
      "ml discount price";
  } else if (
    volumeLength > 1 &&
    price2.includes(".") &&
    price2.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[1] +
      "ml volume price";
  } else if (
    volumeLength > 1 &&
    price2.includes(".") &&
    price2.split(".").length == 2 &&
    price2.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[1] +
      "ml volume price";
  } else if (
    volumeLength > 1 &&
    discount2.includes(".") &&
    discount2.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[1] +
      "ml discount price";
  } else if (
    volumeLength > 1 &&
    discount2.includes(".") &&
    discount2.split(".").length == 2 &&
    discount2.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[1] +
      "ml discount price";
  } else if (
    volumeLength > 2 &&
    price3.includes(".") &&
    price3.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[2] +
      "ml volume price";
  } else if (
    volumeLength > 2 &&
    price3.includes(".") &&
    price3.split(".").length == 2 &&
    price3.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[2] +
      "ml volume price";
  } else if (
    volumeLength > 2 &&
    discount3.includes(".") &&
    discount3.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[2] +
      "ml discount price";
  } else if (
    volumeLength > 2 &&
    discount3.includes(".") &&
    discount3.split(".").length == 2 &&
    discount3.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[2] +
      "ml discount price";
  } else if (
    volumeLength > 3 &&
    price4.includes(".") &&
    price4.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[3] +
      "ml volume price";
  } else if (
    volumeLength > 3 &&
    price4.includes(".") &&
    price4.split(".").length == 2 &&
    price4.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[3] +
      "ml volume price";
  } else if (
    volumeLength > 3 &&
    discount4.includes(".") &&
    discount4.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[3] +
      "ml discount price";
  } else if (
    volumeLength > 3 &&
    discount4.includes(".") &&
    discount4.split(".").length == 2 &&
    discount4.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[3] +
      "ml discount price";
  } else if (
    volumeLength > 4 &&
    price5.includes(".") &&
    price5.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[4] +
      "ml volume price";
  } else if (
    volumeLength > 4 &&
    price5.includes(".") &&
    price5.split(".").length == 2 &&
    price5.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[4] +
      "ml volume price";
  } else if (
    volumeLength > 4 &&
    discount5.includes(".") &&
    discount5.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[4] +
      "ml discount price";
  } else if (
    volumeLength > 4 &&
    discount5.includes(".") &&
    discount5.split(".").length == 2 &&
    discount5.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[4] +
      "ml discount price";
  } else if (
    volumeLength > 5 &&
    price6.includes(".") &&
    price6.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[5] +
      "ml volume price";
  } else if (
    volumeLength > 5 &&
    price6.includes(".") &&
    price6.split(".").length == 2 &&
    price6.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[5] +
      "ml volume price";
  } else if (
    volumeLength > 5 &&
    discount6.includes(".") &&
    discount6.split(".").length > 2
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[5] +
      "ml discount price";
  } else if (
    volumeLength > 5 &&
    discount6.includes(".") &&
    discount6.split(".").length == 2 &&
    discount6.split(".")[1].length == 0
  ) {
    shouldShowAlert = true;
    message =
      "Invalid " +
      debugProduct.productVolumes.split("/")[5] +
      "ml discount price";
  }

  if (shouldShowAlert) {
    $("div#divAlertLayer").show();
    divAlertText.innerHTML = message;
  } else {
    $("div#divAlertLayer").hide();
    shouldShowAlert = false;

    var newPrices = getNewPricesWithDiscounts().split(" ")[0];
    var newDiscounts = getNewPricesWithDiscounts().split(" ")[1];

    fileData =
      productId +
      "," +
      debugProduct.productName +
      "," +
      refillVolume +
      "," +
      dateTime +
      "," +
      productMFD +
      "," +
      productEXD +
      "," +
      debugProduct.productVolumes +
      "," +
      newPrices +
      "," +
      newDiscounts +
      "," +
      batchCode +
      "," +
      debugProduct.nozzleNumber;

    var obj = {
      fileName: debugProduct.fileName,
      fileData: fileData,
    };

    console.log(obj);
    return obj;
  }
  return null;
}

function getNewPricesWithDiscounts() {
  var prices = "";
  var discounts = "";
  switch (debugProduct.productVolumes.split("/").length) {
    case 6:
      prices = idPrice6.value;
      discounts = idDiscount6.value;
    case 5:
      if (prices == "") {
        prices = idPrice5.value;
        discounts = idDiscount5.value;
      } else {
        prices = idPrice5.value + "/" + prices;
        discounts = idDiscount5.value + "/" + discounts;
      }
    case 4:
      if (prices == "") {
        prices = idPrice4.value;
        discounts = idDiscount4.value;
      } else {
        prices = idPrice4.value + "/" + prices;
        discounts = idDiscount4.value + "/" + discounts;
      }
    case 3:
      if (prices == "") {
        prices = idPrice3.value;
        discounts = idDiscount3.value;
      } else {
        prices = idPrice3.value + "/" + prices;
        discounts = idDiscount3.value + "/" + discounts;
      }
    case 2:
      if (prices == "") {
        prices = idPrice2.value;
        discounts = idDiscount2.value;
      } else {
        prices = idPrice2.value + "/" + prices;
        discounts = idDiscount2.value + "/" + discounts;
      }
    case 1:
      if (prices == "") {
        prices = idPrice1.value;
        discounts = idDiscount1.value;
      } else {
        prices = idPrice1.value + "/" + prices;
        discounts = idDiscount1.value + "/" + discounts;
      }
  }
  return prices + " " + discounts;
}

function updateStatus() {
  // console.log("serialReturnStateeeeeeeeeeeeeeeeeeeeeee =",serialReturnState);
  if (serialReturnEmergency == 01) {
    if (ipc_state != STATE_EMERGENCY) {
      console.log("Emergency 1");
      changeStateTo("Emergency");
    }
  } else if (parseInt(serialReturnMMCUError) > 0) {
    changeStateTo("Emergency");
  } else if (
    serialReturnState == 04 &&
    ipc_state != STATE_FILL_STOP &&
    ipc_state != STATE_PORDUCT_SELECTION &&
    ipc_state != BUTTON_STOP
  ) {
    if (ipc_state != STATE_FILL) {
      changeStateTo("filling");
      console.log('test');
    } else {
      // divFillingAmount.innerHTML = parseInt(serialReturnVolume, 10);

      if (selectedLanguage == "english"){
        $("div#divFillingAmount").show();
        $("div#divFillingAmountArb").hide();

        divFillingAmount.innerHTML = parseInt(serialReturnVolume, 10).toString() + " ml";
      }
      if (selectedLanguage == "arabic"){
        $("div#divFillingAmount").hide();
        $("div#divFillingAmountArb").show();

        divFillingAmount.innerHTML = parseInt(serialReturnVolume, 10);
        divFillingAmountArb.innerHTML =  "مل " + convertToArbNumber(parseInt(serialReturnVolume, 10)).toString()
      }

    }
  } else if (
    serialReturnState == 05 &&
    ipc_state != STATE_IDLE &&
    ipc_state != STATE_FILL_STOP
  ) {
    ipc_state = STATE_FILL_STOP;
    // divFillingAmount.innerHTML = parseInt(serialReturnVolume, 10);
    console.log("STOP PROCESSss Status " + ipc_state);
    changeStateTo("thankyou");
  } else if (
    serialReturnState == 10 &&
    returnStatusUpdate != STATE_START_AUTO_FEED
  ) {
    returnStatusUpdate = STATE_START_AUTO_FEED;
    idDivAlertContainer1.style.display = "none";
    idDivAlertContainer2.style.display = "none";
    idDivAlertContainer3.style.display = "block";
  } else if (
    serialReturnState == 11 &&
    returnStatusUpdate != STATE_START_MANUAL_FEED
  ) {
    returnStatusUpdate = STATE_START_MANUAL_FEED;
    idDivAlertContainer1.style.display = "none";
    idDivAlertContainer2.style.display = "block";
    idDivAlertContainer3.style.display = "none";
  } else if (serialReturnState == 12 && returnStatusUpdate != STATE_START_CIP) {
    returnStatusUpdate = STATE_START_CIP;
    hideAll();
    $("div#cip-inprogress-container").show();
    btnCipPause.innerHTML = "PAUSE";
    divCipPause.style.background = "#1897C1";
  } else if (serialReturnState == 12) {
    idCipVolumeAmount.innerHTML = parseInt(serialReturnVolume, 10);
  } else if (serialReturnState == 13 && returnStatusUpdate != STATE_CIP_PAUSE) {
    returnStatusUpdate = STATE_CIP_PAUSE;
    btnCipPause.innerHTML = "RESUME";
    divCipPause.style.background = "blue";
  } else if (serialReturnState == 14 && returnStatusUpdate != STATE_CIP_STOP) {
    returnStatusUpdate = STATE_CIP_STOP;
    ipc_state = STATE_SERVICE;
    hideAll();
    $("div#debug-container").show();
  }
}

function stopFilling() {
  if (ipc_state != STATE_IDLE) {
    stopProcess();
    hideAll();
    if(selectedLanguage == "english"){
      $("div#thankYou-container").show();
    }
    else{
      $("div#thankYou-container-arb").show();
    }
    redirectTimer(3);
    
  }
}

function showLoading() {
  $("div#wait-container").show();
}

function showAlertAutoFeed() {
  $("div#autofeed-container").show();
  idDivAlertContainer1.style.display = "block";
  idDivAlertContainer2.style.display = "none";
  idDivAlertContainer3.style.display = "none";
}

function hideLoading() {
  $("div#wait-container").hide();
}

function hideAlertAutoFeed() {
  $("div#autofeed-container").hide();
}

function stopProcess() {
  var plastic;
  var fileData;

  plastic = selectedVolume == 500 ? plastic500 : plastic1000;
  // remainingProduct = parseInt(selectedProduct.productRemaining) - 500;
  remainingProduct =
    parseInt(selectedProduct.productRemaining) -
    parseInt(divFillingAmount.innerHTML);
  // remainingProduct =
  //   parseInt(selectedProduct.productRemaining) - parseInt(selectedVolume);
  console.log("PRODUCT R " + remainingProduct);
  fileData =
    selectedProductID +
    "," +
    selectedProductName +
    "," +
    remainingProduct +
    "," +
    productRFD +
    "," +
    productMFD +
    "," +
    productEXD +
    "," +
    productVolumes +
    "," +
    productPrices +
    "," +
    productDiscounts +
    "," +
    batchNo +
    "," +
    selectedProduct.nozzleNumber;

  var obj = {
    fileName: productId,
    fileData: fileData,
  };

  var objLog = {
    time: dateGenerate(),
    productId: selectedProductID,
    nozzleId: selectedProduct.nozzleNumber,
    productVolume: parseInt(divFillingAmount.innerHTML),
    netPrice: selectedProductPrice,
  };

  // console.log(obj);
  console.log(objLog);
  socket.emit("WRITE_FILE", obj);
  socket.emit("WRITE_LOG_FILE", objLog);
  isProductSelected = false;
  selected_nozzel_number = "0";
  selectedVolume = "0";
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > 0 && slideIndex < 4) {
    showSlides(slideIndex);
  } else {
    slideIndex += -n;
  }
}

function showSlides(n) {
  console.log("called " + n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log("slides " + slides.length);
  console.log("slides " + slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  idPageNo.innerHTML = slideIndex + "/3";
}

function decodeNewData(data) {
  if (data.length == 12) {
    serialReturnState = data.substring(1, 3);
    serialReturnEmergency = data.substring(3, 4);
    serialReturnNozzleNumber = data.substring(4, 6);
    serialReturnVolume = data.substring(6, 10);
    serialReturnMMCUError = data.substring(10, 12);
    // console.log("data updated serialReturnState="+ serialReturnState);
    // console.log("data updated serialReturnEmergency="+ serialReturnEmergency);
    // console.log("data updated serialReturnNozzleNumber="+ serialReturnNozzleNumber);
    // console.log("data updated serialReturnVolume="+ serialReturnVolume);
    // console.log("data updated serialReturnVolume="+ serialReturnMMCUError);
    updateStatus();
  } else {
    // console.log("no data");
  }
}

function getSerialSendingData() {
  var sendingData = "#";
  var sendingVolume = "";
  // console.log("ipc state   "+ipc_state);
  sendingData += ipc_state; //01
  sendingData += serialReturnEmergency;
  sendingData +=
    parseInt(selected_nozzel_number.toString(), 10) < 10
      ? "0" + selected_nozzel_number
      : selected_nozzel_number;
  switch (selectedVolume.toString().length) {
    case 1:
      sendingVolume = "0";
    case 2:
      sendingVolume += "0";
    case 3:
      sendingVolume += "0";
    case 4:
      sendingVolume += selectedVolume.toString();
  }
  sendingData += sendingVolume;
  sendingData += "00";
  // console.log(sendingData.replace(/(\r\n|\n|\r)/gm, ""));
  return sendingData.replace(/(\r\n|\n|\r)/gm, "");
}

function cipNozzleSet(nozzle, productid, name) {
  switch (nozzle) {
    case "1":
      enabledCIPNozzles.push(idNozzel1);
      idNozzel1.onclick = function () {
        onClickNozzel(1);
      };
      idNozzel1.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage1.src = "images/product_images/bottle" + productid + ".png";
      idCipName1.innerHTML = name;
      break;
    case "2":
      enabledCIPNozzles.push(idNozzel2);
      idNozzel2.onclick = function () {
        onClickNozzel(2);
      };
      idNozzel2.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage2.src = "images/product_images/bottle" + productid + ".png";
      idCipName2.innerHTML = name;
      break;
    case "3":
      enabledCIPNozzles.push(idNozzel3);
      idNozzel3.onclick = function () {
        onClickNozzel(3);
      };
      idNozzel3.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage3.src = "images/product_images/bottle" + productid + ".png";
      idCipName3.innerHTML = name;
      break;
    case "4":
      enabledCIPNozzles.push(idNozzel4);
      idNozzel4.onclick = function () {
        onClickNozzel(4);
      };
      idNozzel4.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage4.src = "images/product_images/bottle" + productid + ".png";
      idCipName4.innerHTML = name;
      break;
    case "5":
      enabledCIPNozzles.push(idNozzel5);
      idNozzel5.onclick = function () {
        onClickNozzel(5);
      };
      idNozzel5.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage5.src = "images/product_images/bottle" + productid + ".png";
      idCipName5.innerHTML = name;
      break;
    case "6":
      enabledCIPNozzles.push(idNozzel6);
      idNozzel6.onclick = function () {
        onClickNozzel(6);
      };
      idNozzel6.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage6.src = "images/product_images/bottle" + productid + ".png";
      idCipName6.innerHTML = name;
      break;
    case "7":
      enabledCIPNozzles.push(idNozzel7);
      idNozzel7.onclick = function () {
        onClickNozzel(7);
      };
      idNozzel7.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage7.src = "images/product_images/bottle" + productid + ".png";
      idCipName7.innerHTML = name;
      break;
    case "8":
      enabledCIPNozzles.push(idNozzel8);
      idNozzel8.onclick = function () {
        onClickNozzel(8);
      };
      idNozzel8.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage8.src = "images/product_images/bottle" + productid + ".png";
      idCipName8.innerHTML = name;
      break;
    case "9":
      enabledCIPNozzles.push(idNozzel9);
      idNozzel9.onclick = function () {
        onClickNozzel(9);
      };
      idNozzel9.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage9.src = "images/product_images/bottle" + productid + ".png";
      idCipName9.innerHTML = name;
      break;
    case "10":
      enabledCIPNozzles.push(idNozzel10);
      idNozzel10.onclick = function () {
        onClickNozzel(10);
      };
      idNozzel10.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage10.src = "images/product_images/bottle" + productid + ".png";
      idCipName10.innerHTML = name;
      break;
    case "11":
      enabledCIPNozzles.push(idNozzel11);
      idNozzel11.onclick = function () {
        onClickNozzel(11);
      };
      idNozzel11.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage11.src = "images/product_images/bottle" + productid + ".png";
      idCipName11.innerHTML = name;
      break;
    case "12":
      enabledCIPNozzles.push(idNozzel12);
      idNozzel12.onclick = function () {
        onClickNozzel(12);
      };
      idNozzel12.style.backgroundImage =
        "url('images/bg-cip-button-non-select.png')";
      idCipImage12.src = "images/product_images/bottle" + productid + ".png";
      idCipName12.innerHTML = name;
      break;
  }
}

function setCIPData() {
  enabledCIPNozzles = [];
  for (var i = 0; i < productList.length; i++) {
    var productid = i + 1;
    var nozzle = productList[i].nozzleNumber;
    var name = productList[i].productName;
    cipNozzleSet(nozzle, productid, name);
  }
}
