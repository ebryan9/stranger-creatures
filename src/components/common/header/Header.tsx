import React from 'react';

function Header() {
    return (
        <>
            <div className="header px-5 py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nav row">
                                <div className="justify-content-start col-md-6">
                                    <input type="button" className="btn-default" value="Whitepaper" />
                                </div>
                                <div className="justify-content-end col-md-6">
                                    <input type="button" className="btn-default" value="Buy $Blood" style={{float: "right"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;