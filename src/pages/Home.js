import React, { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
  const [Data, setData] = useState([]);
  const [Profile, setProfile] = useState(false);
  const [profileData, setprofileData] = useState([]);
  const d = new Date();
  const date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  // davschool
  // Davnarnaul123

  useEffect(() => {
    setprofileData(JSON.parse(localStorage.getItem("user")));

    axios
      .get(
        `https://www.smsgateway.center/library/api/self/SMSDlr/?userId=${profileData.UserName}&password=${profileData.Password}&FromDate=${date}&ToDate=${date}&format=json`
      )
      .then((data) => {
        if ("success" === data.data.status) {
          setData(data.data.DLRReport);
          setProfile(true);
        }
      })
      .catch((e) => console.log(e));
  }, [profileData]);

  return (
    <>
      <div class="relative">
        {" "}
        <div class="relative py-6 px-4 sm:px-6 lg:px-8 shadow">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  />
                </a>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="/home"
                class="font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="/home"
                class="font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </a>
              <a class="font-medium text-gray-500 hover:text-gray-900">
                Profile
              </a>
              <a
                href="/home"
                class="font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>

              <a
                href="/login"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log out
              </a>
            </div>
          </nav>
        </div>
      </div>
      <h1 className="text-black text-2xl my-10">
        Delivery Report of{" "}
        {
          Date(Date.now() + 8 * 86400000)
            .toLocaleString()
            .split(",")[0]
        }
      </h1>
      <div className="mx-10">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        MessageId
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        SenderId
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Message
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        DateTime
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {!Profile ? (
                      <>
                        <h1>Data Not Found </h1>
                      </>
                    ) : (
                      Data.map((d, key) => <TableRow data={d} key={key} />)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Table(data) {
  console.log(data);
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MessageId
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SenderId
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DateTime
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {console.log(data)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow(data, key) {
  return (
    <>
      <tr key={key}>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">
                {data.data.Type}
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">{data.data.MessageId}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">{data.data.SenderId}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {data.data.Phone}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          {data.data.Status === "DELIVERED" ? (
            <>
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Delivered
              </span>
            </>
          ) : (
            <>
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Failed
              </span>
            </>
          )}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.data.Message}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {data.data.ReceivedTime}
        </td>
      </tr>
    </>
  );
}
