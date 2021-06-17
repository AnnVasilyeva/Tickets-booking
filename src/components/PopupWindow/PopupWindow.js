import './popupWindow.css';

export default function PopupWindow ({text, isError}) {
  return (
    <div className={isError ? 'popup popup-error' : 'popup popup-info'}>
      <header className='popup-header'></header>
      <main className='popup-text'>{text}</main>
      <footer className='popup-footer'>
        <button type='button' className='popup-btn'>Понятно</button>
      </footer>

    </div>
  )
  

}