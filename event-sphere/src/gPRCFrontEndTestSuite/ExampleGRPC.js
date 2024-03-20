// import React, { useState } from "react";
// import { EventServiceClient } from "../gPRC/src/gPRC/service_grpc_pb";
// import {
// 	CustomerRegistrationRequest,
// 	PostEventRequest,
// 	FetchEventsRequest,
// } from "../gPRC/src/gPRC/service_pb";
// import "@grpc/grpc-js";
// //

// const ExampleGRPC = () => {
// 	const [responseMessage, setResponseMessage] = useState("");

// 	const registerCustomer = async () => {
// 		const client = new EventServiceClient("http://localhost:8080");
// 		const request = new CustomerRegistrationRequest();
// 		// Set request parameters
// 		request.setUsername("username");
// 		request.setPassword("password");
// 		//do nothing
// 		// Send RPC call
// 		try {
// 			const response = await client.registerCustomer(request, {});
// 			setResponseMessage(response.getMessage());
// 		} catch (error) {
// 			console.error("Error:", error.message);
// 		}
// 	};

// 	const postEvent = async () => {
// 		const client = new EventServiceClient("http://localhost:8080");
// 		const request = new PostEventRequest();
// 		// Set request parameters
// 		request.setEventName("Event Name");
// 		request.setDescription("Event Description");
// 		// Send RPC call
// 		try {
// 			const response = await client.postEvent(request, {});
// 			setResponseMessage(response.getMessage());
// 		} catch (error) {
// 			console.error("Error:", error.message);
// 		}
// 	};

// 	const fetchEvents = async () => {
// 		const client = new EventServiceClient("http://localhost:8080");
// 		const request = new FetchEventsRequest();
// 		// Set request parameters
// 		request.setFilter("filter");
// 		request.setValue("value");
// 		// Send RPC call
// 		try {
// 			const stream = client.fetchEvents(request, {});
// 			stream.on("data", (event) => {
// 				console.log("Received event:", event.toObject());
// 				// Handle received event
// 			});
// 		} catch (error) {
// 			console.error("Error:", error.message);
// 		}
// 	};

// 	return (
// 		<div>
// 			<button onClick={registerCustomer}>Register Customer</button>
// 			<button onClick={postEvent}>Post Event</button>
// 			<button onClick={fetchEvents}>Fetch Events</button>
// 			<p>{responseMessage}</p>
// 		</div>
// 	);
// };

// export default ExampleGRPC;
