const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { User, Event } = require('./db');

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
const exampleProto = grpc.loadPackageDefinition(packageDefinition).EventSphere;

// Implement the service methods
const fetchUsers = async (call, callback) => {
    try {
        const users = await User.find({});
        
        const responseUsers = users.map(user => ({
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            full_name: user.full_name,
            role: user.role,
        }));
        
        callback(null, { users: responseUsers });
    } catch (error) {
        callback(error);
    }
};

const registerCustomer = async (call, callback) => {
    try {
        const user = new User(call.request);
        const savedUser = await user.save();
        callback(null, { message: `Customer registered successfully with ID: ${savedUser.id}` });
    } catch (error) {
        callback(error);
    }
};

const registerEventPoster = async (call, callback) => {
    try {
        // Ensure role is set to organizer or similar
        call.request.role = 'organizer'; // Forcing role to ensure correct type
        const user = new User(call.request);
        const savedUser = await user.save();
        callback(null, { message: `Event poster registered successfully with ID: ${savedUser.id}` });
    } catch (error) {
        callback(error);
    }
};

const postEvent = async (call, callback) => {
    try {
        const event = new Event(call.request);
        const savedEvent = await event.save();
        callback(null, { message: `Event posted successfully with ID: ${savedEvent.id}` });
    } catch (error) {
        callback(error);
    }
};

const fetchEvents = async (call) => {
    try {
        const events = await Event.find({});
        events.forEach(event => {
            call.write(event);
        });
        call.end();
    } catch (error) {
        call.end(error);
    }
};

const editEvent = async (call, callback) => {
    try {
        const { event_id, ...updateData } = call.request;
        const updatedEvent = await Event.findByIdAndUpdate(event_id, updateData, { new: true });
        callback(null, { message: `Event with ID: ${updatedEvent.id} updated successfully` });
    } catch (error) {
        callback(error);
    }
};

const deleteEvent = async (call, callback) => {
    try {
        const { event_id } = call.request;
        await Event.findByIdAndDelete(event_id);
        callback(null, { message: `Event with ID: ${event_id} deleted successfully` });
    } catch (error) {
        callback(error);
    }
};

// Define the gRPC server
const server = new grpc.Server();
server.addService(exampleProto.EventService.service, {
    RegisterCustomer: registerCustomer,
    RegisterEventPoster: registerEventPoster,
    PostEvent: postEvent,
    FetchEvents: fetchEvents,
    EditEvent: editEvent,
    DeleteEvent: deleteEvent,
    FetchUsers: fetchUsers
});

// Specify the server port
const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});