import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
    border: 5px solid black;
    height: 404px;
    margin-right: 50px;
`

const TextBox = () => {
    return(
        <BoxStyle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolor assumenda vel voluptatem temporibus velit et sequi recusandae, aperiam sed in dolorum omnis vero porro ipsam doloribus tempora quisquam saepe nihil nostrum cumque perspiciatis quod asperiores nemo. Dolore, sed similique vitae expedita a obcaecati porro voluptatem iusto nihil perferendis quibusdam.
        </BoxStyle>
    )
}

export default TextBox;