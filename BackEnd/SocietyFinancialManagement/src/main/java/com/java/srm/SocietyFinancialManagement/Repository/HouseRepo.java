package com.java.srm.SocietyFinancialManagement.Repository;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.HouseDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HouseRepo extends JpaRepository<HouseDetails,Long>{
    
    public HouseDetails save(HouseDetails hd);
    
    public List<HouseDetails> findAll();

    public Optional<HouseDetails> findById(Long id);
    
    //SELECT * FROM complaint AS c LEFT JOIN complain_report AS cr ON c.id = cr.complaint_id LEFT JOIN complaint_working_vendor AS cwr ON cr.id = cwr.complain_report_id WHERE c.id = 1
   // SELECT * FROM complaint AS c LEFT JOIN complain_report AS cr ON c.id = cr.complainid LEFT JOIN complaint_working_vendor AS cwr ON cr.id = cwr.complainid
}
