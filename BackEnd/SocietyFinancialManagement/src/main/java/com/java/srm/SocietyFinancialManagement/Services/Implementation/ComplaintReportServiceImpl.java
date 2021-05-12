package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Optional<ComplainReport> findById(Long id) {		
        return repo.findById(id);
	}

	@Override
	public ComplainReport save(ComplainReport cr) {
		return repo.save(cr);
	}

	@Override
	public List<ComplainReport> findByComplaintId(Long id) {
        // List<ComplainReport> cust = repo.findAll();
        // ComplainReport cr;
        // if(cr.getComplaintId() == id){}

		// return cust;
        return null;
    }

    
}
