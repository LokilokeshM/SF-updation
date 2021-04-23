package com.java.srm.SocietyFinancialManagement.ApiController.Admin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.HouseDetails;
import com.java.srm.SocietyFinancialManagement.Services.Interface.HouseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/admin/houseDetails")
public class HouseDetailController {
    
    @Autowired
    private HouseService service;

    @PostMapping(value="/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<HouseDetails>> postMethodName(@PathVariable Long id) { 
        Optional<HouseDetails> houseDetails = service.findById(id);
        return new ResponseEntity<Optional<HouseDetails>>(houseDetails,HttpStatus.OK) ;
    }
    
    @GetMapping(value="/all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<HouseDetails>> getMethodName() {
        List<HouseDetails> houseDetails = service.findAll();
        return new ResponseEntity<List<HouseDetails>>(houseDetails,HttpStatus.OK);
    }
    
}
