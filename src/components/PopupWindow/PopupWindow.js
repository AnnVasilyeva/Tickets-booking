import './popupWindow.css';

export default function PopupWindow () {
  return (
    <div className='popup popup-info'>
      <header className='popup-header'></header>
      <main className='popup-text'>По выбранному направлению билетов нет. Попробуйте выбрать другое направление.</main>
      <footer className='popup-footer'>
        <button type='button' className='popup-btn'>Понятно</button>
      </footer>

    </div>
  )
  

}