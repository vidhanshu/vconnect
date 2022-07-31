import CreatePost from "../create post modal/CreatePost";
import ModalContainer from "../modal container/ModalContainer";
import React from "react";
import { getRandomNumber } from "../../utils/utils";

function PostEditorModal({ setModal, isEditing = false, post = {} }) {

    return (
        <ModalContainer>
            {<CreatePost desc={post.text} img={post.image} isEditing={isEditing} cancel={() => setModal(false)} avatar={`https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`} />}
        </ModalContainer>
    )
}

export default PostEditorModal