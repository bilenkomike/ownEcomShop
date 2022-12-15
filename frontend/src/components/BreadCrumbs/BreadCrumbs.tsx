import React from "react";
import Container from "components/Container/Container";
import { BreadCrumbsStyled } from "./BreadCrumbs.styled";
import { HiOutlineHome } from "react-icons/hi";
import { TfiAngleRight } from "react-icons/tfi";

type Param = {
  key: string;
  value: string;
};

const BreadCrumbs: React.FC<{
  params: any;
}> = (props) => {
  return (
    <BreadCrumbsStyled>
      <Container>
        <HiOutlineHome />
        {props.params.map((param: Param, index: number) => (
          <>
            <div key={`${index}_breadcrumbs`}>
              <TfiAngleRight />
            </div>
            <span key={`${index}_breadcrumbs1`}>{param.value}</span>
          </>
        ))}
      </Container>
    </BreadCrumbsStyled>
  );
};

export default BreadCrumbs;
