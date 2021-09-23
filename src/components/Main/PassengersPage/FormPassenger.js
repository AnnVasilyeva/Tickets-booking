import React, {Component} from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


export default class FormPassenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person_type: "is_adult",
      include_children_seat: false,
      first_name: "",
      last_name: "",
      patronymic: "",
      gender: true,
      birthday: "",
      document_type: "паспорт",
      document_series: "",
      document_number: "",
      // document_data: `${this.state.document_series} ${this.state.document_number}`,
      isInvalid: false,
      seat: this.props.seat,
      isValid: false,
    }

    this.changeFormPassengersList = this.props.changeFormPassengersList;

    
  }



  onChangeState = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  

  onSubmitFormInList = (e) => {
    e.preventDefault();
    this.setState({isValid: true});
    this.changeFormPassengersList(this.state); 
    
  }


  render() {
    const {person_type, first_name, last_name, patronymic, gender, birthday, document_type, isInvalid, document_series, document_number, isValid} = this.state;

    return(
      <div className='passenger-form-wrapper'>
        <form className='passenger-form' onSubmit={this.onSubmitFormInList}>
          <div className='passenger-form-section passenger-type-section'>
            <label htmlFor='person_type' className='hidden'>Тип пассажира</label>
            <select id='person_type' name='person_type' value={person_type} onChange={this.onChangeState} onBlur={this.onChangeState}>
              <option name='person_type' value='is_adult'>Взрослый</option>
              <option name='person_type' value='is_child' >Детский</option>
            </select>
          </div>

          <div className='passenger-form-section passenger-name-section'>
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

          <div className='passenger-form-section passenger-gender-section'>
            <div>
            <span className='gender-lable'>Пол</span>
            <div className='gender-button-wrapper'>
              <button type='button' 
                      className={`gender-btn gender-btn-left ${gender && 'selected'}`}
                      onClick={() => this.setState({gender: true})}
                      >М</button>
              <button type='button'
                      className={`gender-btn gender-btn-right ${!gender && 'selected'}`}
                      onClick={() => this.setState({gender: false})}
                      >Ж</button>
            </div>
              
            </div>
            
            <div className='gender-section-datepicker'>
              <label htmlFor='birthday'>Дата рождения</label>
              <input id='birthday' name='birthday' type='date' placeholder='ДД/ММ/ГГ' required value={birthday} onChange={this.onChangeState}/>
              
          
            </div>
             
          </div>

          <div className='passenger-form-section passenger-invalid-section'>
            <input id='isInvalid' name='isInvalid' type='checkbox' checked={isInvalid} onChange={this.onChangeState}/>
            <label htmlFor='isInvalid' className='isInvalid'>ограниченная подвижность</label>          
          </div>

          <div className='passenger-form-section passenger-document_type-section'>
            <div>
              <label htmlFor='document_type'>Тип документа</label>
              <select id='document_type' required name='document_type' value={document_type} onChange={this.onChangeState}
              onBlur={this.onChangeState}>
                <option name='document_type' value='паспорт'>Паспорт РФ</option>
                <option name='document_type' value='свидетельство'>Свидетельство о рождении</option>
              </select>
            </div>

            {document_type === "паспорт" && 
              <div>
                <label htmlFor='document_series'>Серия</label>
                <input id='document_series' 
                      name='document_series'
                      type='text'
                      placeholder='_ _ _ _'
                      required 
                      value={document_series} 
                      onChange={this.onChangeState}
                      pattern='[0-9]+'
                      minLength='4'
                      maxLength='4'
                      />
              </div>
           }
            
            <div>
              <label htmlFor='document_number'>Номер</label>
              <input id='document_number' 
                      name='document_number' 
                      type='text' 
                      placeholder={document_type === "паспорт" ? '_ _ _ _ _ _' : 'VII-АП-123456'} 
                      required 
                      value={document_number} 
                      onChange={this.onChangeState}
                      pattern={document_type === "паспорт" ? '[0-9]+' : '^[IVX]{1,4}[- ]*[а-яёА-ЯЁ]{2}[- ]*[0-9]{6}$'}
                      minLength={document_type === "паспорт" ? '6' : ''}
                      maxLength={document_type === "паспорт" ? '6' : ''}/>
            </div>

          </div>

          <div className={`next-passenger-form-btn ${isValid && 'done'}`}>
            {isValid && 
            <div className='done-icon'>
              <img src='/images/icon-done.png' alt='icon done'/>
              <span>Готово</span>
            </div>}
            <input type='submit' value='Следующий пассажир'/>
          </div>
        </form>     
      </div>

    )
  }

}