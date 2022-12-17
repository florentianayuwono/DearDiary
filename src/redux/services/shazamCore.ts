import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// try {
//   const response = await fetch(
//     "https://shazam-core.p.rapidapi.com/v1/charts/world",
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "33942eac13msh68d96b2b89c5a43p1ac047jsn63fdc989ffa5",
//         "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//       },
//     }
//   );

//   if (response.ok) {
//     const result = await response.json();
//     console.log(result);
//   }
// } catch (err) {
//   console.error(err);
// }

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "33942eac13msh68d96b2b89c5a43p1ac047jsn63fdc989ffa5"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
