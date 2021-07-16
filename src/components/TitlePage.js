import React, {useState} from 'react';


function TitlePage(props) {
    return (
        <div>
            <h4 className={"text-center text-dark"} id={"aboutTitle"}>
                {props.title}
            </h4>
            <div
                className="d-flex align-items-center justify-content-center"
                id={"trait"}
            >
                <div
                    id={"leftTrait"}
                    className={"rounded-pill border border-4 w-50"}
                />
                <div
                    id={"roundCenter"}
                    className={"rounded-circle border p-2 bg-dark mx-auto"}
                />
                <div
                    id={"rightTrait"}
                    className={"rounded-pill border border-4 w-50"}
                />
            </div>
            <br className={"spacing"} />
        </div>
    );
}

export default TitlePage;