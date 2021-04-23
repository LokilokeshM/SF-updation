package com.java.srm.SocietyFinancialManagement.ApiController.User;

import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;
import com.java.srm.SocietyFinancialManagement.Services.Interface.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user/customer")
public class CustomerControllerUser {

    @Autowired
    private CustomerService service;

    // @PostMapping(value="/save")
    // public ResponseEntity<Customer> UpdateCustomer(@RequestBody Customer o) {
    //     Customer cust = service.save(o);
    //     return new ResponseEntity<Customer>(cust,HttpStatus.OK);
    // }

    @GetMapping(value="/{id}")
    public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id) {
        
        Optional<Customer> cust = service.findById(id);
        return new ResponseEntity<Optional<Customer>>(cust,HttpStatus.OK);
    }
}
