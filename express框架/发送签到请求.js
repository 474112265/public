var axios = require('axios');

var httpUrl = 'http://47.103.152.134/SpReportData/reportdata/report';

var option = {
    'acaID': "2",
    'address': "江西软件职业技术大学",
    'animalHeat': null,
    'bodystatus': "正常",
    'classNo': "180304",
    'depName': "信息技术学院",
    'departmentCode': "03",
    'eveTem': "",
    'illsymptom': null,
    'isContactHubeiBack': "0",
    'isContactPatient': "0",
    'morTem': "36.5",
    'noonTem': "",
    'othercase': "",
    'outEndTime': null,
    'outStartTime': null,
    'quarantine': null,
    'quarantinePlace': null,
    'reporttime': "2020-06-26",
    'studentCode': "201800002505",
    'trainNumAndseatNum': null,
    'vehicle': null,
}

axios.post(httpUrl,option)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
