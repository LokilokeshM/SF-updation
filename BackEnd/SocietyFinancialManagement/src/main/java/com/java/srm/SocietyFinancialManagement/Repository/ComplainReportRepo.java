package com.java.srm.SocietyFinancialManagement.Repository;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.ComplainReport;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplainReportRepo extends JpaRepository<ComplainReport,Long>{
  
    public List<ComplainReport> findAll() ;

    public Optional<ComplainReport> findById(Long id);

    public ComplainReport save(ComplainReport cr);

    @Query("Select c from ComplainReport as c where complaintId=:id")
    public ComplainReport findByComplaintId(Long id);
}
