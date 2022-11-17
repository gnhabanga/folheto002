import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function FolhetoShow() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="grid grid-cols-3 grid-flow-col auto-cols-auto">
      <div className="bg-green-400 w-11/12 h-screen items-center">Ads</div>
      <div className="flex items-center flex-col">
        <Document
          file={require("./Office_24Oct_To_6Nov_2022.pdf")}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page scale="0.8" pageNumber={pageNumber} />
        </Document>

        <div className="flex items-center flex-col">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className="flex items-center flex-row">
            {pageNumber > 1 && (
              <button className="w-12 h-12 border" onClick={changePageBack}>
                <HiChevronLeft />
              </button>
            )}
            {pageNumber < numPages && (
              <button onClick={changePageNext}>
                <HiChevronRight />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-green-400 w-3/12 absolute right-0 h-screen items-center">
        Ads
      </div>
    </div>
  );
}

export default FolhetoShow;
