package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Vendor;
import com.java.srm.SocietyFinancialManagement.Repository.VendorRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.VendorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VendorServiceImpl implements VendorService{

    @Autowired
    private VendorRepo repo;
    @Override
    public Vendor save(Vendor v) {
        return null;
    }

    @Override
    public List<Vendor> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<Vendor> findById(Long id) {
        return null;
    }
    
}
