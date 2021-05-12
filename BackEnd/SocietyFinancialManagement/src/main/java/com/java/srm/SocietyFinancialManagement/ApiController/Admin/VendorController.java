package com.java.srm.SocietyFinancialManagement.ApiController.Admin;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Vendor;
import com.java.srm.SocietyFinancialManagement.Services.Interface.VendorService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/admin/vendor")
public class VendorController {
    
    @Autowired
    private VendorService service;

    @GetMapping(value = "/all")
    private ResponseEntity<List<Vendor>> getAllVendorDetials()
    {
        List<Vendor> ven = service.findAll();
        return new ResponseEntity<List<Vendor>>(ven,HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    private ResponseEntity<Vendor> saveNewVendor(@RequestBody Vendor v)
    {   
        Vendor ven = service.save(v);
        return new ResponseEntity<Vendor>(ven,HttpStatus.OK);
    }

    @PostMapping(value ="/{id}")
    private Optional<Vendor> getDetailsById(@PathVariable Long id)
    {
     return service.findById(id);   
    }
}
