package com.java.srm.SocietyFinancialManagement.ApiController.Admin;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.ComplainReport;
import com.java.srm.SocietyFinancialManagement.Entity.Complaint;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintReportService;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/admin/complaint")
public class ComplaintController {
    
    @Autowired
    private ComplaintService service;

    // @Autowired
    // private ComplaintReportService cservice;

    @GetMapping(value = "/{id}")
    private ResponseEntity<Optional<Complaint>> getComplaintId(@PathVariable Long id) throws Exception
    {
        Optional<Complaint> compl = service.findById(id);
        return new ResponseEntity<Optional<Complaint>>(compl,HttpStatus.OK);     
    }

    // @GetMapping(value = "/all")
    // private ResponseEntity<List<ComplainReport>> getcomplaintReport()
    // {
    //     return new ResponseEntity<List<ComplainReport>>(cservice.findAll(),HttpStatus.OK);
    // }
    @GetMapping(value = "/all")
    private ResponseEntity<List<Complaint>> getcomplaintReport()
    {
        return new ResponseEntity<List<Complaint>>(service.findAll(),HttpStatus.OK);
    }

}
// {
//     "complaintId": 1,
//     "message": "fdsadfdf",
//     "complaintStatus": "asdfasdf",
//     "custid": {
//       "customerId": 1,
//       "firstname": "lokesh",
//       "lastname": "m",
//       "email": "loki@gmail.com",
//       "phonenumber": 9952017622,
//       "nationality": "indian",
//       "dob": "2021-04-15",
//       "religion": "hindhu",
//       "bloodGroup": "b+",
//       "oldAddress": [
//         {
//           "id": 3,
//           "doorno": "30/2",
//           "streetName": "sdfsdafsdf",
//           "city": "chennai",
//           "state": "chennai",
//           "country": "india",
//           "pincode": 600099
//         }
//       ],
//       "houseid": [
//         {
//           "houseId": 2,
//           "blockNo": "B",
//           "houseNo": "1",
//           "city": "chennai",
//           "state": "tamilnadu",
//           "country": "india",
//           "pincode": 600099
//         }
//       ]
//     }
//   }