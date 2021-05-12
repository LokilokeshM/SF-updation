package com.java.srm.SocietyFinancialManagement.Services.Interface;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.ComplainReport;

public interface ComplaintReportService {
    
    public List<ComplainReport> findAll() ;

    public Optional<ComplainReport> findById(Long id);

    public ComplainReport save(ComplainReport cr);

    public List<ComplainReport> findByComplaintId(Long id);
}
