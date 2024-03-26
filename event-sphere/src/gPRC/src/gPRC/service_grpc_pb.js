// // GENERATED CODE -- DO NOT EDIT!

// 'use strict';
// var grpc = require('grpc');
// var src_gPRC_service_pb = require('../../src/gPRC/service_pb.js');
// var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

// function serialize_EventSphere_CustomerRegistrationRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.CustomerRegistrationRequest)) {
//     throw new Error('Expected argument of type EventSphere.CustomerRegistrationRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_CustomerRegistrationRequest(buffer_arg) {
//   return src_gPRC_service_pb.CustomerRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_CustomerRegistrationResponse(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.CustomerRegistrationResponse)) {
//     throw new Error('Expected argument of type EventSphere.CustomerRegistrationResponse');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_CustomerRegistrationResponse(buffer_arg) {
//   return src_gPRC_service_pb.CustomerRegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_DeleteEventRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.DeleteEventRequest)) {
//     throw new Error('Expected argument of type EventSphere.DeleteEventRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_DeleteEventRequest(buffer_arg) {
//   return src_gPRC_service_pb.DeleteEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_DeleteEventResponse(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.DeleteEventResponse)) {
//     throw new Error('Expected argument of type EventSphere.DeleteEventResponse');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_DeleteEventResponse(buffer_arg) {
//   return src_gPRC_service_pb.DeleteEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_EditEventRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.EditEventRequest)) {
//     throw new Error('Expected argument of type EventSphere.EditEventRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_EditEventRequest(buffer_arg) {
//   return src_gPRC_service_pb.EditEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_EditEventResponse(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.EditEventResponse)) {
//     throw new Error('Expected argument of type EventSphere.EditEventResponse');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_EditEventResponse(buffer_arg) {
//   return src_gPRC_service_pb.EditEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_Event(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.Event)) {
//     throw new Error('Expected argument of type EventSphere.Event');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_Event(buffer_arg) {
//   return src_gPRC_service_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_EventPosterRegistrationRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.EventPosterRegistrationRequest)) {
//     throw new Error('Expected argument of type EventSphere.EventPosterRegistrationRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_EventPosterRegistrationRequest(buffer_arg) {
//   return src_gPRC_service_pb.EventPosterRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_EventPosterRegistrationResponse(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.EventPosterRegistrationResponse)) {
//     throw new Error('Expected argument of type EventSphere.EventPosterRegistrationResponse');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_EventPosterRegistrationResponse(buffer_arg) {
//   return src_gPRC_service_pb.EventPosterRegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_FetchEventsRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.FetchEventsRequest)) {
//     throw new Error('Expected argument of type EventSphere.FetchEventsRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_FetchEventsRequest(buffer_arg) {
//   return src_gPRC_service_pb.FetchEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_PostEventRequest(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.PostEventRequest)) {
//     throw new Error('Expected argument of type EventSphere.PostEventRequest');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_PostEventRequest(buffer_arg) {
//   return src_gPRC_service_pb.PostEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
// }

// function serialize_EventSphere_PostEventResponse(arg) {
//   if (!(arg instanceof src_gPRC_service_pb.PostEventResponse)) {
//     throw new Error('Expected argument of type EventSphere.PostEventResponse');
//   }
//   return Buffer.from(arg.serializeBinary());
// }

// function deserialize_EventSphere_PostEventResponse(buffer_arg) {
//   return src_gPRC_service_pb.PostEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
// }

// // The service definition
// var EventServiceService = exports.EventServiceService = {
//   // Registration of a new customer
// registerCustomer: {
//     path: '/EventSphere.EventService/RegisterCustomer',
//     requestStream: false,
//     responseStream: false,
//     requestType: src_gPRC_service_pb.CustomerRegistrationRequest,
//     responseType: src_gPRC_service_pb.CustomerRegistrationResponse,
//     requestSerialize: serialize_EventSphere_CustomerRegistrationRequest,
//     requestDeserialize: deserialize_EventSphere_CustomerRegistrationRequest,
//     responseSerialize: serialize_EventSphere_CustomerRegistrationResponse,
//     responseDeserialize: deserialize_EventSphere_CustomerRegistrationResponse,
//   },
//   // Registration of a new event poster
// registerEventPoster: {
//     path: '/EventSphere.EventService/RegisterEventPoster',
//     requestStream: false,
//     responseStream: false,
//     requestType: src_gPRC_service_pb.EventPosterRegistrationRequest,
//     responseType: src_gPRC_service_pb.EventPosterRegistrationResponse,
//     requestSerialize: serialize_EventSphere_EventPosterRegistrationRequest,
//     requestDeserialize: deserialize_EventSphere_EventPosterRegistrationRequest,
//     responseSerialize: serialize_EventSphere_EventPosterRegistrationResponse,
//     responseDeserialize: deserialize_EventSphere_EventPosterRegistrationResponse,
//   },
//   // Posting a new event
// postEvent: {
//     path: '/EventSphere.EventService/PostEvent',
//     requestStream: false,
//     responseStream: false,
//     requestType: src_gPRC_service_pb.PostEventRequest,
//     responseType: src_gPRC_service_pb.PostEventResponse,
//     requestSerialize: serialize_EventSphere_PostEventRequest,
//     requestDeserialize: deserialize_EventSphere_PostEventRequest,
//     responseSerialize: serialize_EventSphere_PostEventResponse,
//     responseDeserialize: deserialize_EventSphere_PostEventResponse,
//   },
//   // Fetching events
// fetchEvents: {
//     path: '/EventSphere.EventService/FetchEvents',
//     requestStream: false,
//     responseStream: true,
//     requestType: src_gPRC_service_pb.FetchEventsRequest,
//     responseType: src_gPRC_service_pb.Event,
//     requestSerialize: serialize_EventSphere_FetchEventsRequest,
//     requestDeserialize: deserialize_EventSphere_FetchEventsRequest,
//     responseSerialize: serialize_EventSphere_Event,
//     responseDeserialize: deserialize_EventSphere_Event,
//   },
//   // Editing an event
// editEvent: {
//     path: '/EventSphere.EventService/EditEvent',
//     requestStream: false,
//     responseStream: false,
//     requestType: src_gPRC_service_pb.EditEventRequest,
//     responseType: src_gPRC_service_pb.EditEventResponse,
//     requestSerialize: serialize_EventSphere_EditEventRequest,
//     requestDeserialize: deserialize_EventSphere_EditEventRequest,
//     responseSerialize: serialize_EventSphere_EditEventResponse,
//     responseDeserialize: deserialize_EventSphere_EditEventResponse,
//   },
//   // Deleting an event
// deleteEvent: {
//     path: '/EventSphere.EventService/DeleteEvent',
//     requestStream: false,
//     responseStream: false,
//     requestType: src_gPRC_service_pb.DeleteEventRequest,
//     responseType: src_gPRC_service_pb.DeleteEventResponse,
//     requestSerialize: serialize_EventSphere_DeleteEventRequest,
//     requestDeserialize: deserialize_EventSphere_DeleteEventRequest,
//     responseSerialize: serialize_EventSphere_DeleteEventResponse,
//     responseDeserialize: deserialize_EventSphere_DeleteEventResponse,
//   },
// };

// exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
