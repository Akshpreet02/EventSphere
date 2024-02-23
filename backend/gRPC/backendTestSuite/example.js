

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