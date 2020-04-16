import React from "react";

export default class Alert extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className={`alert ${ this.props.alert_style } alert-dismissible fade show`}

            >
               {this.props.message}
               X
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }

}