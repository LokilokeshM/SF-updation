package com.java.srm.SocietyFinancialManagement.ApiController.Admin;

import com.java.srm.SocietyFinancialManagement.Services.Interface.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;
import com.java.srm.SocietyFinancialManagement.Model.Status;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/admin/customer")
public class CustomerController {
    
    @Autowired
    private CustomerService service;

    
    @GetMapping(value = "/all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Customer>> getAllCustomer()
    {
        List<Customer> cust = service.findAll();
		return new ResponseEntity<List<Customer>>(cust,HttpStatus.OK);
    }

    @PostMapping(value="/save")
    public ResponseEntity<Customer> SaveCustomer(@RequestBody Customer o) {
        Customer cust = service.save(o);
        return new ResponseEntity<Customer>(cust,HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id) {       
        Optional<Customer> cust = service.findById(id);
        return new ResponseEntity<Optional<Customer>>(cust,HttpStatus.OK);
    }

    @PostMapping(value = "/status")
    public ResponseEntity<Status> updateStatus(@RequestBody Status s) 
    {   
        return null;
    }

    //[ {
    //     "firstname": "lokesh",
    //     "lastname": "m",
    //     "email": "loki@gmail.com",
    //     "phonenumber": 9952017622,
    //     "nationality": "indian",
    //     "dob": "2021-04-15",
    //     "religion": "hindhu",
    //     "bloodGroup": "b+",
    //     "oldAddress": [
    //       {
    //         "doorno": "30/2",
    //         "streetName": "sdfsdafsdf",
    //         "city": "chennai",
    //         "state": "chennai",
    //         "country": "india",
    //         "pincode": 600099
    //       }
    //     ],
    //     "houseid": {
    //       "blockNo": "B",
    //       "houseNo": "1",
    //       "city": "chennai",
    //       "state": "tamilnadu",
    //       "country": "india",
    //       "pincode": 600099
    //     }
    //   }]
    
}
