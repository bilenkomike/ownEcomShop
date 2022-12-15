import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Container from "components/Container/Container";
import SearchOrder from "components/TrackOrderComponents/SearchOrder/SearchOrder";
import StatusOrder from "components/TrackOrderComponents/StatusOrder/StatusOrder";
import React from "react";

const TrackOrderPage = () => {
  return (
    <section>
      <BreadCrumbs params={[{ value: "Track Order", key: "track-order" }]} />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <SearchOrder />
          <StatusOrder />
        </div>
      </Container>
    </section>
  );
};

export default TrackOrderPage;
