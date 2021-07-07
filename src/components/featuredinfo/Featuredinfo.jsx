import "./featuredinfo.css"
function featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
            <a href="https://www.facebook.com/ChienHoo20" target="blank"><span className="featuredTitle">Hồ Duy Chiến</span></a>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">18CT3</span>
                </div>
                <span className="featuredSub">chienhoo20@gmail.com</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Bạch Ngọc Pháp</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">18CT3</span>
                </div>
                <span className="featuredSub">bachngocphap@gmail.com</span> 
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Lê Thị Minh Ánh</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">18CT3</span>
                </div>
                <span className="featuredSub">lethiminhanh@gmail.com</span> 
            </div>
        </div>
    )
}

export default featuredinfo
