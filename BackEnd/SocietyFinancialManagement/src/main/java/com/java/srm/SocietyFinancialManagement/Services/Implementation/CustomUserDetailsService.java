package com.java.srm.SocietyFinancialManagement.Services.Implementation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import com.java.srm.SocietyFinancialManagement.Entity.DAOUser;
import com.java.srm.SocietyFinancialManagement.Entity.Role;
import com.java.srm.SocietyFinancialManagement.Entity.UserDTO;
import com.java.srm.SocietyFinancialManagement.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<SimpleGrantedAuthority> roles = null;
		
			
		DAOUser user = userDao.findByUsername(username);
		if (user != null) {
			//roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			//roles = Arrays.asList(new SimpleGrantedAuthority(user.getRoles().get(0).getRole()));
			roles = new ArrayList<>();
			for(int i=0;i<user.getRoles().toArray().length;i++){
				roles.add(new SimpleGrantedAuthority(user.getRoles().get(i).getRoleName()));
			}
			return new User(user.getUsername(), user.getPassword(), roles);
		}
		throw new UsernameNotFoundException("User not found with the name " + username);	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		
		List<Role> roles = new ArrayList<>();
		for(int i=0;i<user.getRole().length;i++){
			Role role = new Role();
			role.setRoleName(user.getRole()[i]);
//			role.setUser(newUser);
			roles.add(role);
		}
		
		newUser.setRoles(roles);

		//newUser.setRole(user.getRole());
		return userDao.save(newUser);
	}

}
