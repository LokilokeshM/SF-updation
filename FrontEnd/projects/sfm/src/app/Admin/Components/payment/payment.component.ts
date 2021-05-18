import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../guard/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rzp1:any;
   options = {
    "key": "rzp_test_7HdkaZ1xFGPomB",
    "amount": "50000",
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function(response:any){
        console.log(response.razorpay_pyment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature)
    },
    "prefill": {
        "name": "Lokesh",
        "email": "Lokesh.summa@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  pay(){
    this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
