
const fs = require("fs");

const getMostRecentFile = (req, res) => {
    const directoryPath = __basedir + "/MyUploads2/";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
    //
    let mostRecentFile={'name':""};
    for(i=0;i<files.length;i++){
        mostRecentFile['name']=files[i];
    }
      //res.status(200).send(mostRecentFile);
      res.download(directoryPath + mostRecentFile['name'], mostRecentFile['name'], (err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });
        }
      });
      
      
    });
  };



module.exports = {
getMostRecentFile
};