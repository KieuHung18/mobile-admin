import React, { useEffect, useState } from "react";
import clsx from "clsx";

import PageSeperator from "../../components/icons/page separator";
import Pagination from "../../components/common/pagination";
import { Report } from "../../services/model.types";
import apis from "../../services/apis";
import { useNavigate } from "react-router-dom";
const Reports = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reports, setReports] = useState<Report[]>([]);
  const ITEMS_PER_PAGE = 6;
  const navigate = useNavigate();

  const handleItemOnclick = (id: string) => {
    navigate("/reports/" + id);
  };
  const reportList = reports
    .slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
    .map((report, i) => {
      return (
        <tr
          key={i}
          className="border-b hover:bg-primary-0"
          onClick={() => {
            handleItemOnclick(report.id);
          }}
        >
          <td className="whitespace-nowrap px-6 py-4 font-medium">{i}</td>
          <td className="whitespace-nowrap px-6 py-4">
            {report.artwork.name ? report.artwork.name : <i>No name</i>}
          </td>
          <td className="whitespace-nowrap px-6 py-4">
            {report.user.firstName + " " + report.user.lastName}
          </td>
          <td className="whitespace-nowrap px-6 py-4">{report.name}</td>
        </tr>
      );
    });
  const getReports = async () => {
    const [fetchData, error] = await apis.reports.list();
    if (error) {
      alert(error.message);
    } else {
      setReports(fetchData);
    }

    // const mockReports: Report[] = [];
    // for (let i = 0; i < 20; i++) {
    //   mockReports.push({
    //     name: "item " + i,
    //     description: "desc " + i,
    //     artworkId: "aid " + i,
    //     userId: "uid " + i,
    //   });
    //   setReports(mockReports);
    // }
  };
  useEffect(() => {
    getReports();
  }, []);

  const handleCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="page-container bg-primary-10 md:pb-16">
      <div className="responsive-container block pt-16 pb-56 md:pb-64">
        <div className="title-section">
          <h2 className="page-sub-title">Reports</h2>
        </div>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Artwork name
              </th>
              <th scope="col" className="px-6 py-4">
                User name
              </th>
              <th scope="col" className="px-6 py-4">
                Reasson
              </th>
            </tr>
          </thead>
          <tbody>{reportList}</tbody>
        </table>
        <Pagination
          handleCurrentPage={handleCurrentPage}
          numberOfPages={Math.ceil(reports.length / ITEMS_PER_PAGE)}
        />
      </div>
      <PageSeperator className="fill-primary-5" />
    </div>
  );
};

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="w-fit">
      <button
        className={clsx(
          "h-12 min-w-fit duration-300 flex items-center justify-center text-neutral-light bg-neutral-light bg-opacity-30 hover:bg-opacity-40 py-2 px-12 font-muli text-[18px]"
        )}
        {...props}
        data-te-toggle="modal"
        data-te-target="#artwork"
      >
        View Artwork
      </button>
      <div className="w-full h-[2px] bg-neutral-light mt-1"></div>
    </div>
  );
};

export default Reports;
