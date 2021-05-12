package com.java.srm.SocietyFinancialManagement.Services.Implementation;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.java.srm.SocietyFinancialManagement.Entity.Customer;
import com.java.srm.SocietyFinancialManagement.Repository.CustomerRepo;
import com.java.srm.SocietyFinancialManagement.Services.Interface.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepo repo;
    
    private JavaMailSender javaMailSender;

    @Autowired
	public void MailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}

    @Override
    public Customer save(Customer o) {
        return repo.save(o);
    }

    @Override
    public List<Customer> findAll() {
        Date d=new Date(); 
        if(d.getDay() >=5 && d.getDate() >=10)
        {
            sendEmail(repo.findAll());
        }   
        return repo.findAll();
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return repo.findById(id);
    }
    
	public void sendEmail(List<Customer> cust) throws MailException {
		SimpleMailMessage mail = new SimpleMailMessage();
        Date d = new Date();
		mail.setTo(((Customer) cust).getEmail());
		mail.setSubject("Payment Reminder");
		mail.setText("Your Payment Pending , If You paid please ingnore this mail" +d);
		javaMailSender.send(mail);
	}
}
