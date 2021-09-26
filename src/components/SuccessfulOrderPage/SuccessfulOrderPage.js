import React, {Component} from 'react';
import './successfulOrderPage.css';

export default class SuccessfulOrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [false, false, false, false, false] 
    } 
  }

  changeRating = (index) => {
    const newRating = [...this.state.rating].map((star, i)=> {
      if(i <= index) return star = true; 
    })
    this.setState({rating: newRating})
  }

  render() {
  return (
    <div className='successful-order-page'>
      <section className='successful-order-page_header'>
                <span>№Заказа 285АА</span>
                <div className='ticket-price'>
                  <span>сумма</span>
                  <div className='summary-value'>{this.props.price}</div>
                  <div className='value-image'>
                    <img src="/images/icon-value.png" alt="icon value"/>
                  </div>
                </div>
      </section>
      <section className='successful-order-page_action'>
        <div className='action-plan_item'>
          <div className='action-plan_item-image email'></div>
          <span>билеты будут отправлены на ваш <b>e-mail</b></span>
        </div>
        <div className='action-plan_item'>
          <div className='action-plan_item-image print'></div>
          <span><b>распечатайте</b> и сохраняйте билеты до даты поездки</span>
        </div>
        <div className='action-plan_item'>
          <div className='action-plan_item-image control'></div>
          <span><b>предьявите</b> распечатанные билеты при посадке</span>
        </div>
      </section>
      <section className='successful-order-page_text'>
        <span className='appeal'>{`${this.props.user.first_name} ${this.props.user.patronymic}!`}</span>
        <span>Ваш заказ успешно оформлен.</span>
        <span>В ближайшее время с вами свяжется наш оператор для подтверждения.</span>
        <span>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</span>
      </section>
      <section className='successful-order-page_rating'>
        <div className='rating-wrapper'>
          <span>Оценить сервис</span>
          <div className='rating-star-list'>
          {this.state.rating.map((star, index) => 
            <div key={index} 
                className={`rating-star-item ${star && 'active'}`} 
                aria-hidden='true'
                onClick={()=> this.changeRating(index)}
            ></div>
          )}
          </div>
        </div>
        <div>
          <button type='button' className='redirect-mainPage-btn' 
                  onClick={() => this.props.redirectMainFirstPage(this.props.history)}
                  >Вернуться на главную</button>
        </div>
      </section>
    </div>
  )
  }
}