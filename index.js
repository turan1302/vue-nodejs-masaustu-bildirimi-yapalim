const app = require('express')();
const http = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const open = require('open');

const notifier = require('node-notifier')

const PORT = 3000;

app.use(cors({origin : true, credentials : true}));

app.get('/gonder',function (req,res,next) {
    notifier.notify(
        {
            title: 'MFSoftware Blog',
            message: 'Yeni Yazı Eklendi',
            icon: path.join(__dirname, 'mfsoftware-blog.png'), // Absolute path (doesn't work on balloons)
            sound: true, // Only Notification Center or Windows Toasters
            wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
            actions : ["İlerle","Vazgeç"],
            reply : true
        },
        function (err, response, metadata) {
            // Response is response from notification
            // Metadata contains activationType, activationAt, deliveredAt

            if (metadata.activationType=="İlerle"){
                open("https://mfsoftware.net");
            }
        }
    );

    notifier.on('click', function (notifierObject, options, event) {
        // Triggers if `wait: true` and user clicks notification
    });

    notifier.on('timeout', function (notifierObject, options) {
        // Triggers if `wait: true` and notification closes
    });
});

http.listen(PORT,function () {
    console.log("Port Dinleniyor");
})
