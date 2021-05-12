package com.java.srm.SocietyFinancialManagement.Services.Interface;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Complaint;

public interface ComplaintService {
    
    
    public Optional<Complaint> findById(Long id);

    public List<Complaint> findAll();

    public Complaint save(Complaint c);
}
