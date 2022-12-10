import React from "react";

import {
  SizeChartModalStyled,
  SizeChartModalStyledCloseButton,
  SizeChartModalStyledContent,
  SizeChartModalStyledTitle,
  SizeChartModalStyledTable,
  SizeChartStyledPagination,
  SizeChartStyledPaginationItem,
} from "./SizeChartModal.styled";

import { TfiClose } from "react-icons/tfi";

const SizeChartModal: React.FC<{ openSizeChart: () => void }> = ({
  openSizeChart,
}) => {
  return (
    <SizeChartModalStyled onClick={openSizeChart}>
      <SizeChartModalStyledContent onClick={(e) => e.stopPropagation()}>
        <SizeChartModalStyledCloseButton
          id="close-login"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            openSizeChart();
          }}
        >
          <TfiClose />
        </SizeChartModalStyledCloseButton>
        <SizeChartModalStyledTitle>SizeChart</SizeChartModalStyledTitle>
        <SizeChartStyledPagination>
          <SizeChartStyledPaginationItem active={true}>
            Women
          </SizeChartStyledPaginationItem>
          <SizeChartStyledPaginationItem>Men</SizeChartStyledPaginationItem>
          <SizeChartStyledPaginationItem>Kids</SizeChartStyledPaginationItem>
        </SizeChartStyledPagination>
        <SizeChartModalStyledTable>
          <h2>Footware</h2>
          <table>
            <tbody>
              <tr>
                <td>Europe</td>
                <td>35</td>
                <td>36</td>
                <td>37</td>
                <td>38</td>
                <td>39</td>
                <td>40</td>
                <td>41</td>
                <td>42</td>
              </tr>
              <tr>
                <td>USA</td>
                <td>5</td>
                <td>6</td>
                <td>6.5</td>
                <td>7.5</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>United Kingdom</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>China</td>
                <td>230/83</td>
                <td>235/84</td>
                <td>240/85</td>
                <td>245/86</td>
                <td>255/87</td>
                <td>260/88</td>
                <td>265/89</td>
                <td>275/90</td>
              </tr>
              <tr>
                <td>Italy</td>
                <td>35</td>
                <td>36</td>
                <td>37</td>
                <td>38</td>
                <td> 39</td>
                <td>40</td>
                <td>41</td>
                <td>42</td>
              </tr>
              <tr>
                <td>South Korea</td>
                <td> 230 </td>
                <td>235</td>
                <td>240</td>
                <td>245</td>
                <td>255</td>
                <td>260</td>
                <td>265</td>
                <td>275</td>
              </tr>
            </tbody>
          </table>
        </SizeChartModalStyledTable>
        <p>
          I want to see size equivalence in:{" "}
          <SizeChartStyledPagination>
            <SizeChartStyledPaginationItem active>
              cm
            </SizeChartStyledPaginationItem>
            <SizeChartStyledPaginationItem>
              Inches
            </SizeChartStyledPaginationItem>
          </SizeChartStyledPagination>
        </p>
        <SizeChartModalStyledTable>
          <h2>Equivalence in centimetres</h2>
          <table>
            <tbody>
              <tr>
                <td>Foot length</td>
                <td>22.4 cm</td>
                <td>23 cm</td>
                <td>23.6 cm</td>
                <td>24.3 cm</td>
                <td>24.9 cm</td>
                <td>25.5 cm</td>
                <td>26.2 cm</td>
                <td>26.8 cm</td>
              </tr>
            </tbody>
          </table>
        </SizeChartModalStyledTable>
      </SizeChartModalStyledContent>
    </SizeChartModalStyled>
  );
};

export default SizeChartModal;
