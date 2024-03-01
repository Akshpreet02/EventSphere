
const init = () => {
    
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    const protoPath = "../service.proto";


    const packageDefinition = protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });

    let exampleMessageProto = grpc.loadPackageDefinition(packageDefinition).example;


    const main = () => {
        const client = new exampleMessageProto.Example('X.X.X.X:XXXX', grpc.credentials.createInsecure());
        
        let exampleMessage = "Hello Server";

        client.OneWayMessage({exampleMessage: exampleMessage}, function(err, response) {
            console.log('Data: ', response);
            console.log(err);
        });

    }
    main();
}
exports.init = init;