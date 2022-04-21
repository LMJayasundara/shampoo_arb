const request = require("request");

const getKegDetailsFromBatchID = (machineID, batchID, token, callback) => {
  const options = {
    url: "http://52.26.184.112:10000/ProductController.asmx/GetBatchDetails",
    method: "POST",
    form: { machineUniqueId: machineID, batchId: batchID, token: token },
  };

  request(options, function (err, res, body) {
    if (err) {
      return callback(err);
    }
    return callback(JSON.parse(body));
  });
};

const addKegIntoSystem = (machineID, nozzelID, batchID, token, callback) => {
  const options = {
    url: "http://52.26.184.112:10000/ProductController.asmx/AddNewKegToMachine",
    method: "POST",
    form: {
      machineUniqueId: machineID,
      NozzleId: nozzelID,
      batchId: batchID,
      token: token,
    },
  };

  request(options, function (err, res, body) {
    if (err) {
      return callback(err);
    }
    return callback(JSON.parse(body));
  });
};

const callExternalApiUsingRequest = (machineID, token, callback) => {
  const options = {
    url: "http://52.26.184.112:10000/ProductController.asmx/GetAllConfigurationsOfMachine",
    method: "POST",
    form: { machineUniqueId: machineID, token: token },
  };

  request(options, function (err, res, body) {
    if (err) {
      return callback(err);
    }
    return callback(JSON.parse(body));
  });
};

const postTransactionDetails = (
  machineID,
  params,
  token,
  callback
) => {
  const options = {
    url: "http://52.26.184.112:10000/ProductController.asmx/TransactionLog",
    method: "POST",
    form: {
        machineUniqueId: machineID,
        NozzleId: params.nozzleId,
        productId: params.productId,
        volume: params.productVolume,
        netPrice: params.netPrice,
        token: token,
      },
  };

  request(options, function (err, res, body) {
    if (err) {
      return callback(err);
    }
    return callback(JSON.parse(body));
  });
};

exports.callSaveKegDetailsApi = addKegIntoSystem;
exports.callSyncAllApi = callExternalApiUsingRequest;
exports.callKegApi = getKegDetailsFromBatchID;
exports.callTransactionApi = postTransactionDetails;
