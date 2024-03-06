const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the protobuf
const PROTO_PATH = './gRPC/service.proto';
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const exampleProto = grpc.loadPackageDefinition(packageDefinition).example;

// Implement the service methods
const registerCustomer = (call, callback) => {
    // Implement customer registration logic here
    console.log('Registering customer', call.request);
    callback(null, { message: 'Customer registered successfully' });
};

const registerEventPoster = (call, callback) => {
    // Implement event poster registration logic here
    console.log('Registering event poster', call.request);
    callback(null, { message: 'Event poster registered successfully' });
};

const postEvent = (call, callback) => {
    // Implement event posting logic here
    console.log('Posting event', call.request);
    callback(null, { message: 'Event posted successfully' });
};

const fetchEvents = (call) => {
    // Implement event fetching logic here
    // This is a stream response, so you can send multiple messages
    console.log('Fetching events');
    call.write(/* Event object */);
    call.end();
};

const editEvent = (call, callback) => {
    // Implement event editing logic here
    console.log('Editing event', call.request);
    callback(null, { message: 'Event edited successfully' });
};

const deleteEvent = (call, callback) => {
    // Implement event deletion logic here
    console.log('Deleting event', call.request.event_id);
    callback(null, { message: 'Event deleted successfully' });
};

// Define the gRPC server
const server = new grpc.Server();
server.addService(exampleProto.EventService.service, {
    RegisterCustomer: registerCustomer,
    RegisterEventPoster: registerEventPoster,
    PostEvent: postEvent,
    FetchEvents: fetchEvents,
    EditEvent: editEvent,
    DeleteEvent: deleteEvent
});

// Specify the server port
const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
    server.start();
});

