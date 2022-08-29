// import React from 'react';

// function Header(props){
//     return(
//         <div>
//             <header>
//                 <h1>헤더입니다.</h1>
//             </header>
//         </div>
//     );
// }

// export default Header;

import React, { Component} from "react";

class Header extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>헤더입니다.</h1>
                </header>
            </div>
        );
    }
}

export default Header;