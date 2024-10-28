import { Button, Modal } from "antd";
import React from "react";

const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo">
                <h2 className="text-4xl font-bold text-slate-700 my-6">LOGO</h2>
              </div>
              <div className="bill-details flex gap-8 text-sm text-slate-500 mb-8">
                <div className="flex flex-col flex-1">
                  <b className="grow-1">Invoice</b>
                  <p className="text-xs">
                    123 Elm Street, Springfield, IL, USA
                  </p>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-col">
                    <b>Billed To:</b>
                    <span className="text-xs">John Doe</span>
                    <span className="text-xs">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex flex-col">
                    <b>Terms</b>
                    <span className="text-xs">November 27, 2024</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-col">
                    <b>Date of Issue</b>
                    <span className="text-xs">October 27, 2024</span>
                  </div>
                  <div className="flex flex-col">
                    <b>Due</b>
                    <span className="text-xs">November 27, 2024</span>
                  </div>
                </div>
              </div>
              <div className="bill-table-area mt-8 text-slate-700">
                <table className="min-w-full divide-y divide-slate-400 mb-4 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 text-left text-sm font-normal pl-4 md:table-cell hidden"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-start md:text-center text-sm font-normal sm:flex-1"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-start md:text-center text-sm font-normal sm:flex-1 md:table-cell hidden"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-start md:text-center text-sm font-normal sm:flex-1 md:table-cell hidden"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-right text-sm font-normal pr-4 sm:table-cell"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="text-center">
                      <td className="py-4 pl-4 md:table-cell hidden">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/10/17/09/25/vines-1747224_1280.jpg"
                          alt="test"
                          className="h-12 w-12 object-cover"
                        />
                      </td>
                      <td className="sm:flex-1 text-start md:text-center py-2 md:py-0">
                        Sample Product
                        <div className="md:hidden">
                          <span className="text-[0.7rem]">
                            Unit Price: 12.00 HUF x 2
                          </span>
                        </div>
                      </td>
                      <td className="sm:flex-1 md:table-cell hidden">12.00</td>
                      <td className="sm:flex-1 md:table-cell hidden">2</td>
                      <td className="text-right pr-4">24.00 HUF</td>
                    </tr>
                    <tr className="text-center">
                      <td className="py-4 pl-4 md:table-cell hidden">
                        <img
                          src="https://cdn.pixabay.com/photo/2022/09/10/17/27/loaf-7445434_1280.jpg"
                          alt="test"
                          className="h-12 w-12 object-cover"
                        />
                      </td>
                      <td className="sm:flex-1 text-start md:text-center py-2 md:py-0">
                        Sample Product
                        <div className="md:hidden">
                          <span className="text-[0.7rem]">
                            Unit Price: 12.00 HUF x 2
                          </span>
                        </div>
                      </td>
                      <td className="sm:flex-1 md:table-cell hidden">12.00</td>
                      <td className="sm:flex-1 md:table-cell hidden">2</td>
                      <td className="text-right pr-4">24.00 HUF</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        className="text-right font-normal pt-6 pr-4 md:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        Subtotal
                      </th>
                      <th
                        colSpan="4"
                        className="text-right font-normal pt-6 pr-4"
                      >
                        64 HUF
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-right font-normal pt-2 pr-4 md:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        VAT
                      </th>
                      <th
                        colSpan="4"
                        className="text-right font-normal text-red pt-2 pr-4"
                      >
                        +12.8 HUF
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-right font-normal pt-2 pr-4 md:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        Total
                      </th>
                      <th colSpan="4" className="text-right pt-2 pr-4">
                        76.8 HUF
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div>
                  <p className="text-[0.6rem] pt-10 pb-4">
                    <b>Note: </b>This invoice is generated for the
                    services/products provided as per the terms agreed upon.
                    Please ensure payment is made by the due date mentioned
                    above to avoid any late fees. For any inquiries or
                    discrepancies regarding this invoice, feel free to contact
                    our billing department at{" "}
                    <span className="underline">
                      support@samplebusiness.com
                    </span>{" "}
                    or <span>+1 (555) 123-4567</span>. We appreciate your prompt
                    attention to this matter and look forward to serving you
                    again. Thank you for your business!
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="my-4 text-right">
          <Button onClick={() => window.print()}>Print Invoice</Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintInvoice;