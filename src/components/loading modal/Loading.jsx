import ModalContainer from "../modal container/ModalContainer";
import React from "react";

function Loading({ loading }) {
    return (
        <>
            {loading
                ? <ModalContainer>
                    <div>
                        <img width={110} src='/images/loading.gif' alt="" />
                    </div>
                </ModalContainer >
                : null
            }
        </>
    )
}

export default Loading