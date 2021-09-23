import React, {Component} from 'react';
import './paymentForm.css';

 export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      patronymic: "",
      phone: "",
      email: "",
      payment_method: ""
    }
  }



  onChangeState = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  changePaymentMethod = (name) => {
    this.setState({payment_method: name});
  }

  onSubmitPaymentForm = (e) => {
    e.preventDefault();
    this.props.getVerification(this.state);
    
  }

  render() {
    // console.log(this.state);
    const {first_name, last_name, patronymic, phone, email, payment_method} = this.state;

    return (
      <div className='payment-form-wrapper'>
        <form className='payment-form'>
          <div className='payment-user-section'>
            <div className='payment-form-title'>Персональные данные</div>
            <div className='payment-section payment-user'>
              <div>
                <label htmlFor='last_name'>Фамилия</label>
                <input id='last_name' name='last_name' type='text' value={last_name} onChange={this.onChangeState} required
                pattern='[a-zA-Zёа-яЁА-Я]+'/> 
              </div>
              
              <div>
                <label htmlFor='first_name'>Имя</label>
                <input id='first_name' name='first_name' type='text' required value={first_name} onChange={this.onChangeState}
                pattern='[a-zA-Zёа-яЁА-Я]+'/>
              </div>
              
              <div>
                <label htmlFor='patronymic'>Отчество</label>
                <input id='patronymic' name='patronymic' type='text' required value={patronymic} onChange={this.onChangeState}
                pattern='[a-zA-Zёа-яЁА-Я]+'/> 
              </div>       
            </div>
            <div className='payment-contact-section'>
              <div className='payment-section payment-phone'>
                <label htmlFor='phone'>Контактный телефон</label>
                <input id='phone' name='phone' type='phone' required value={phone} onChange={this.onChangeState}
                pattern='^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$' placeholder='+7_ _ _ _ _ _ _ _ _ _'/>
              </div>

              <div className='payment-section payment-email'>
                <label htmlFor='email'>E-mail</label>
                <input id='email' name='email' type='email' required value={email} onChange={this.onChangeState}
                pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' placeholder='inbox@gmail.ru'/>
              </div>
            </div>
          </div>
          <div className='payment-section payment-method'>
            <div className='payment-form-title'>Способы оплаты</div>
            <section>
              <div className='payment-info_online'>
                <div className={`method ${payment_method === 'online' && 'active'}`}>
                  <div aria-hidden='true' onClick={()=>this.setState({payment_method: 'online'})}></div>
                  <span>Онлайн</span>
                </div>
                <div className='online-payment-list'>
                  <span>Банковской картой</span>
                  <span>PayPal</span>
                  <span>Visa QIWI Wallet</span>
                </div>
              
              </div>
              <div className={`method cash ${payment_method === 'cash' && 'active'}`}>
                <div aria-hidden='true' onClick={()=>this.setState({payment_method: 'cash'})}></div>
                <span>Наличными</span>
              </div>
            </section>
          </div>
        </form>

        <div className='payment-form-btn'>
            <button type ='button' onClick={this.onSubmitPaymentForm}>Купить билеты</button>
        </div>

      </div>
    )
  }
 }