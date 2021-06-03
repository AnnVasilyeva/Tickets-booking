export default function Progressbar () {
    return (
        <div className="bx-pager bx-default-pager">

            <div className="bx-pager-item active">
                <div className="bx-pager-link"> 
                    <span className="progressbar-item-number">1</span>
                    <span className="progressbar-item-name">Билеты</span>
                </div>
                <div className="arrow"></div>
            </div>

            <div className="bx-pager-item">
                <div className="bx-pager-link"> 
                    <span className="progressbar-item-number">2</span>
                    <span className="progressbar-item-name">Пассажиры</span>
                </div>
                <div className="arrow"></div>
            </div>

            <div className="bx-pager-item">
                <div className="bx-pager-link"> 
                    <span className="progressbar-item-number">3</span>
                    <span className="progressbar-item-name">Оплата</span>
                </div>
                <div className="arrow"></div>
            </div>

            <div className="bx-pager-item">
                <div className="bx-pager-link"> 
                    <span className="progressbar-item-number">4</span>
                    <span className="progressbar-item-name">Проверка</span>
                </div>       
                <div className="arrow"></div>
            </div>
        </div>
    )
}