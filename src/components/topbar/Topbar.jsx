import React from 'react';
import "./Topbar.css"
import {NotificationsNone ,Language, Settings} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';


const Topbar = () => {
    return (
        <div className ="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Logo</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                    </div>
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge"></span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBadge"></span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img src="https://lh3.googleusercontent.com/-hJtsVUfcBf8/YCv0VNw-NVI/AAAAAAAAAVI/q_8h5cm3r_UoOpUDJgvqhz5oNZLGs_0XwCEwYBhgLKtQDABHVOhwGsQeM4yhrexz7fdFBKUb20VUiBYPYXFP2JwLT5AqDahjspWSuHBaWkh1lnk8Aqt4IiVt3AN4EdDK8BfONHJb-rsSZzUqIxcCH6z5aXEuXOua7GO66PejHxHg3I0FblGWSSEbZqigz01CChd95elPzyHAU7Tc-EdyL3uI8Lnpsket8Nv_yibjTpShoN8WE2sHNYDVzTy7fJNitE9Y5h6mJXjqYgDn6gYDdn4j1sO74UumU6lKs6hFgPraN85qegrTKmsdHsrfKglDDkarAWB1CQAYf_vhTVN9xPmR07Lv9fcjeUnH396-3tAUknHNDQJi-Le1pBlP_OY_5Z9uovrTrAbUVYzUW9U2GxPnHWUn0OcPJ2s732lB8TMK1Z00bkIclz9cjJ3xmji6WaCvr0KR0ANX52PC51zXWYe5I3mxKK-1KBpc6DpQIeHCV6t6BORLfOEnUlQBK_4BZnIMFIzC-cZ-4-3Xca7l5e1j5oj_wvrBZ-62bA4WmyKvuidVHJKAq2tVDzummgDodZHZ82cdgym514uPX9bUfur0GSXnvAxVq0Dk19wejKKBe8o-duS25tldDwZgb83EVkldSZA26v8sZzQ_YOBnot7cZqXdGMO3v5oYG/w140-h136-p/2021-02-16.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
