const init = function() {
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    const PROTO_PATH = __dirname +'/salary.proto';
  
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      
    });
  
    let employee_proto = grpc.loadPackageDefinition(packageDefinition).employee;
  
    let { paySalary } = require('./pay_salary.js');
  
    function main() {
   
      let server = new grpc.Server();
      server.bindAsync('0.0.0.0:4500', grpc.ServerCredentials.createInsecure(),()=>{
        server();
      });
      server.addService(employee_proto.Employee.service, { paySalary: paySalary });
  
    }
  
    main();
    
  }
  exports.init = init;