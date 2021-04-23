package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;
import com.java.srm.SocietyFinancialManagement.Repository.CustomerRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepo repo;

    @Override
    public Customer save(Customer o) {
        return repo.save(o);
    }

    @Override
    public List<Customer> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return repo.findById(id);
    }
    
}
