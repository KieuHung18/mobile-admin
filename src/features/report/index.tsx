import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../../services/apis";
import Button from "../../components/common/button";
import { Artwork, Report } from "../../services/model.types";
import PageSeperator from "../../components/icons/page separator";
import { useNavigate } from "react-router-dom";

const ReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState<Report>();
  const getReport = async (id: string) => {
    const [fetchData, error] = await apis.reports.retrieve(id);
    if (error) {
      navigate("/reports");
      // alert(error.message);
    }
    {
      setReport(fetchData);
    }
  };
  useEffect(() => {
    if (id) {
      getReport(id);
    }
  }, []);
  const handleResolve = async (artwork?: Artwork) => {
    if (id) {
      const [fetchData, error] = await apis.reports.delete(id, artwork);
      if (error) {
        alert(error.message);
      } else {
        alert("Report solved");
      }
    }
  };
  return (
    <div className="page-container bg-primary-5">
      <div className="responsive-container">
        <div className="grid lg:grid-flow-col">
          <div className="mb-10 px-4">
            <img className="max-h-[75vh]" src={report?.artwork.url}></img>
          </div>
          <div className="pl-16 pb-16">
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light leading-[60px] my-4">
              Report
            </h2>
            <table>
              <tr>
                <td>
                  <b>Resson: </b>
                </td>
                <td>{report?.name}</td>
              </tr>
              <tr>
                <td>
                  <b className="mr-2">Description: </b>
                </td>
                <td>{report?.description}</td>
              </tr>
            </table>
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light leading-[60px] my-4">
              User
            </h2>
            <table>
              <tr>
                <td>
                  <b>User name: </b>
                </td>
                {report?.user?.firstName} {report?.user?.lastName}
              </tr>
              <tr>
                <td>
                  <b className="mr-2">User email: </b>
                </td>
                <td>{report?.user.email}</td>
              </tr>
            </table>
            <h2 className="text-[35px] xl:text[40px] 2xl:text-[50px] font-light leading-[60px] my-4">
              Artwork
            </h2>
            <table>
              <tr>
                <td>
                  <b>Artwork name: </b>
                </td>
                {report?.artwork?.name ? report.artwork?.name : <i>No name</i>}
              </tr>
              <tr>
                <td>
                  <b className="mr-2">Artwork description: </b>
                </td>
                {report?.artwork?.description ? (
                  report.artwork?.description
                ) : (
                  <i>No description</i>
                )}
              </tr>
            </table>
            <div className="w-52">
              <Button
                className="w-full text-danger-600 my-4"
                onClick={() => {
                  handleResolve(report?.artwork);
                }}
              >
                Delete artwork
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  handleResolve();
                }}
              >
                Denied
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PageSeperator className="fill-primary-10" />
    </div>
  );
};
export default ReportDetail;
