package com.java.srm.SocietyFinancialManagement.ApiController.User;

import com.java.srm.SocietyFinancialManagement.Entity.Complaint;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user/complaint")
public class ComplaintControllerUser {
    
    @Autowired
    private ComplaintService service;

    @PostMapping(value = "/save")
    private ResponseEntity<Complaint> saveComplaint(@RequestBody Complaint c)
    {
        return new ResponseEntity<Complaint>(service.save(c),HttpStatus.OK);
    }
}
