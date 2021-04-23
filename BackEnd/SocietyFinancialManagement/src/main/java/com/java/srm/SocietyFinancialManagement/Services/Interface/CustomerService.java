package com.java.srm.SocietyFinancialManagement.Services.Interface;

import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;

public interface CustomerService {
    
    public Customer save(Customer o);

    public List<Customer> findAll();

    public Optional<Customer> findById(Long id);
}
