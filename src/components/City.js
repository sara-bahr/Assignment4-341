import React, { useState } from 'react';

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityCodePattern = /^[a-zA-Z]+$/;
        const valid = cityCodePattern.test(event.target.value);
        if (!valid) {
            setValidationError('* should only contain letters');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onZipChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input
                        type="text/html" src="Map.html" width="100%" height="1000"
                        className="form-control"
                        id="usr"
                        placeholder="NZ city name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> {validationError}</div>
            </div>
        </div>
    );
}
export default City
