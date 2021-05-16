package com.java.srm.SocietyFinancialManagement.ApiController.Admin;

import com.java.srm.SocietyFinancialManagement.Entity.ComplainReport;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintReportService;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class ComplaintReportController {

    @Autowired
    private ComplaintReportService service;

   @GetMapping(value = "/all",produces = MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity<?> getAllComplaint()
   {
       return new ResponseEntity<>(service.findAll(),HttpStatus.OK);
   }   
   @PostMapping(value = "complaint/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity<?> getComplaintById(@PathVariable Long id)
   {
       return new ResponseEntity<>(service.findByComplaintId(id),HttpStatus.OK);
   }

   @PostMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity<?> getComplaintReportById(@PathVariable Long id)
   {
       return new ResponseEntity<>(service.findById(id),HttpStatus.OK);
   }

   @PostMapping(value = "/save",produces = MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity<?> getComplaint(@RequestBody ComplainReport cr)
   {
       return new ResponseEntity<>(service.save(cr),HttpStatus.OK);
   }
}
