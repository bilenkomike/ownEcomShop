import React from "react";
import Container from "components/Container/Container";
import { BreadCrumbsStyled } from "./BreadCrumbs.styled";
import { HiOutlineHome } from "react-icons/hi";
import { TfiAngleRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

type Param = {
  key: string;
  value: string;
};

const BreadCrumbs: React.FC<{
  params: any;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <BreadCrumbsStyled>
      <Container>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <HiOutlineHome />
        </span>
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
