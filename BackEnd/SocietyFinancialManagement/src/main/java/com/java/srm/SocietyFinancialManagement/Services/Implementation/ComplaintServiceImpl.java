package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Complaint;
import com.java.srm.SocietyFinancialManagement.Repository.ComplaintRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.ComplaintService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplaintServiceImpl implements ComplaintService{

    @Autowired
    private ComplaintRepo repo;


    // @Override
    // public void getComplain() {

    // }

    @Override
    public List<Complaint> findAll() {
        
        return repo.findAll();
    }


    @Override
    public Optional<Complaint> findById(Long id) {
        return repo.findById(id);
    }
    
}
