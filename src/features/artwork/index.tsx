import React, { ReactNode, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import clsx from "clsx";
import PageSeperator from "../../components/icons/page separator";
import Pagination from "../../components/common/pagination";
const Artwork = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const artworks = [];
  const ITEMS_PER_PAGE = 6;
  for (let i = 0; i < 56; i++) {
    artworks.push({
      url: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/241879402_1556993284642194_1076452796526398001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c5zmgPHRwUUAX8Ux_c3&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCm1-ib1IgayH3GzgFVX9yIp-3u5fddYUgPZ_0WEfwi7A&oe=6441D9B4",
    });
  }
  const arts = artworks
    .slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      // Math.min(ITEMS_PER_PAGE, Math.floor(artworks.length / ITEMS_PER_PAGE))
    )
    .map((artwork, i) => {
      return (
        <div className="p-4" key={i}>
          <ArtworkCard url={artwork.url} />
        </div>
      );
    });
  const handleCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  return (
    <div className="page-container bg-primary-10 md:pb-16">
      <div className="responsive-container block pt-16 pb-56 md:pb-64">
        <div className="title-section">
          <span className="page-title">Artwork</span>
          <h2 className="page-sub-title">Latest Art</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row h-full">
          {arts}
        </div>
        <DetailArt />
        <Pagination
          handleCurrentPage={handleCurrentPage}
          numberOfPages={Math.ceil(artworks.length / ITEMS_PER_PAGE)}
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
          "h-12 min-w-fit duration-300 flex items-center justify-center text-neutral-light bg-neutral-light bg-opacity-30 hover:bg-opacity-40 py-2 px-12 font-muli text-[18px] "
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
const ArtworkCard = (props: { url: string }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/241879402_1556993284642194_1076452796526398001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c5zmgPHRwUUAX8Ux_c3&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCm1-ib1IgayH3GzgFVX9yIp-3u5fddYUgPZ_0WEfwi7A&oe=6441D9B4')",
      }}
      className="bg-cover flex h-full group"
    >
      <div className="p-10 self-end  duration-300 -translate-x-8 opacity-0  group-hover:-translate-x-0 group-hover:visible group-hover:opacity-100">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Abstract Art
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Illustration . Art Direction
        </p>
        <Button />
      </div>
    </div>
  );
};
const DetailArt = () => {
  return (
    <>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm"
        id="artwork"
      >
        <div
          data-te-modal-dialog-ref
          className="translate-y-[-50px] duration-300 h-full flex max-w-fit mx-auto"
        >
          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none absolute right-8"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className=" my-auto align-middle">
            <TransformWrapper>
              <TransformComponent>
                <img
                  className="max-h-screen"
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/241879402_1556993284642194_1076452796526398001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=c5zmgPHRwUUAX8Ux_c3&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCm1-ib1IgayH3GzgFVX9yIp-3u5fddYUgPZ_0WEfwi7A&oe=6441D9B4"
                  alt="test"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artwork;
