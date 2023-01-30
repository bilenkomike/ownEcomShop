import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import ContactStores from "./ContactStores";
import axios from "axios";

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
// import axios, { AxiosStatic } from "axios";

// interface AxiosMock extends AxiosStatic {
//   mockResolvedValue: Function;
//   mockRejectedValue: Function;
// }
// // Mock jest and set the type
// jest.mock("axios");
// const mockAxios = axios as AxiosMock;

describe("App", () => {
  const renderComponent = () => render(<ContactStores />);

  it("renders stores", async () => {
    renderComponent();

    // Provide the data object to be returned
    mockedAxios.get.mockResolvedValue({
      data: [
        [
          {
            id: 1,
            email: "some@createx.com",
            phone: "555-555-5555",
            address: "45 Drivewood circle",
            city: "Norwood",
            country: "USA",
            postalcode: "10000",
            work_from: "09:00:00",
            work_till: "19:00:00",
            image:
              "http://localhost:8000/static/photos/stores/2023/01/11/macbook.jpg",
          },
          {
            id: 4,
            email: "riga@createx.com",
            phone: "34-34-3434",
            address: "sme j;fv",
            city: "Riga",
            country: "Latvia",
            postalcode: "10000",
            work_from: "12:39:16",
            work_till: "12:39:16",
            image:
              "http://localhost:8000/static/photos/stores/2023/01/22/macbook.jpg",
          },
        ],
      ],
    });

    await waitFor(() => {
      const storesList = screen.getAllByRole("ContactStoreItem");
      expect(storesList).toHaveLength(2);
      //   expect(mockAxios.get).toHaveBeenCalledWith(
      //     "http://localhost:8000/api/stores/"
      //   );
      //   expect(userList[0]).toHaveTextContent("Joe Doe");
    });
  });
});

// jest.mock('axios')

// it("make api call to get data", () => {
//   // call this first
//   mockAxios.mockResolvedValue(yourValue);
// });

export const test = "";
