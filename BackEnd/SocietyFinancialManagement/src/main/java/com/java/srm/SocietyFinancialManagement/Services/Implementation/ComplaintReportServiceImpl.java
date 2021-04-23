package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;

import com.java.srm.SocietyFinancialManagement.Entity.ComplainReport;
import com.java.srm.SocietyFinancialManagement.Repository.ComplainReportRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintReportService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplaintReportServiceImpl implements ComplaintReportService{

    @Autowired
    private ComplainReportRepo repo;

    @Override
    public List<ComplainReport> findAll() {
        return repo.findAll();
    }
    
}
