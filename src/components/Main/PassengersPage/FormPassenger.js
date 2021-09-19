import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { defaultStyles } from 'react-select/src/styles';


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
      isInvalid: false
    }
  }


  componentDidUpdate(prevProps, prevState) {
    // if (!this.shallowEqual(prevState, this.state)) {
    //   this.props.changeRoutesList(this.state);
    // }
  }

  shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);		
    if (keys1.length !== keys2.length) {
      return false;
    }		
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }		
    return true;
  }


  onChangeState = (event) => {
    // console.log(event.target.name);			
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    console.log(this.state);
    const {person_type, first_name, last_name, patronymic, gender, birthday, document_type, isInvalid, document_series, document_number} = this.state;

    return(
      <div className='passenger-form-wrapper'>
        <form className='passenger-form'>
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
              <input id='last_name' name='last_name' type='text' value={last_name} onChange={this.onChangeState} required/> 
            </div>
            
            <div>
              <label htmlFor='first_name'>Имя</label>
              <input id='first_name' name='first_name' type='text' required value={first_name} onChange={this.onChangeState}/>
            </div>
             
            <div>
              <label htmlFor='patronymic'>Отчество</label>
              <input id='patronymic' name='patronymic' type='text' required value={patronymic} onChange={this.onChangeState}/> 
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
                <input id='document_series' name='document_series' type='text' placeholder='_ _ _ _' required value={document_series} onChange={this.onChangeState}/>
              </div>
           }
            
            <div>
              <label htmlFor='document_number'>Номер</label>
              <input id='document_number' name='document_number' type='text' placeholder={document_type === "паспорт" ? '_ _ _ _ _ _' : '12 символов'} required value={document_number} onChange={this.onChangeState}/>
            </div>

          </div>
        </form>     
      </div>

    )
  }

}